import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import {
  generateColorsFromHash,
  generateFaviconDownloadHtml,
  genHash,
  genJpeg,
  genPng,
  genSvg,
  parseDimensions,
  parseExtension,
} from './lib/index'

export const app = express()
app.use(cors())
app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (_req, res) => {
  res.sendFile('/index.html')
})

app.get('/:seed/:variant?/:size?/:text?', async (req, res) => {
  try {
    const [seedParam, seedExtension] = parseExtension(req.params.seed)
    const [variantParam, variantExtension] = parseExtension(req.params.variant)
    const [sizeParam, sizeExtension] = parseExtension(req.params.size)
    const [textParam, textExtension] = parseExtension(req.params.text)

    const {
      type: typeQuery,
      size: sizeQuery,
      variant: variantQuery,
      text: textQuery,
    } = req.query
    const variant = variantParam || variantQuery
    const [width, height] = parseDimensions(sizeParam || sizeQuery)
    const text = textParam || textQuery || ''

    const seedHash = Math.abs(genHash(seedParam))
    const [colorA, colorB] = generateColorsFromHash(seedHash)
    const svgGradient = genSvg(
      [width, height],
      colorA,
      colorB,
      seedHash,
      variant,
      text,
    )
    const outputType =
      typeQuery ||
      textExtension ||
      sizeExtension ||
      variantExtension ||
      seedExtension

    res.setHeader('Cache-Control', 'public, max-age=8640000') // 100 days

    switch (outputType) {
      case 'jpg':
        res.setHeader('Content-Type', 'image/jpeg')
        res.send(await genJpeg(svgGradient))
        break
      case 'jpeg':
        res.setHeader('Content-Type', 'image/jpeg')
        res.send(await genJpeg(svgGradient))
        break
      case 'png':
        res.setHeader('Content-Type', 'image/png')
        res.send(await genPng(svgGradient))
        break
      case 'ico':
        res.setHeader('Content-Type', 'text/html')
        res.send(
          generateFaviconDownloadHtml(
            `${process.env.BASE_URL}${req._parsedOriginalUrl.pathname}`,
          ),
        )
        break
      default:
        res.setHeader('Content-Type', 'image/svg+xml')
        res.send(svgGradient)
        break
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
})
