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

app.get('/:seed/:size?', async (req, res) => {
  try {
    const [seedParam, seedExtension] = parseExtension(req.params.seed)
    const [sizeParam, sizeExtension] = parseExtension(req.params.size)

    const {type: typeQuery, size: sizeQuery} = req.query
    const [width, height] = parseDimensions(sizeParam || sizeQuery)

    const seedHash = Math.abs(genHash(seedParam))
    const [colorA, colorB] = generateColorsFromHash(seedHash)
    const svgGradient = genSvg([width, height], colorA, colorB, seedHash)
    const outputType = typeQuery || sizeExtension || seedExtension

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
