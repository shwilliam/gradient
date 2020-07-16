import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import {
  generateColorsFromHash,
  genHash,
  genJpeg,
  genPng,
  genSvg,
  parseDimensions,
} from './lib/index'

export const app = express()
app.use(cors())
app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (_req, res) => {
  res.sendFile('/index.html')
})

app.get('/:seed', async (req, res) => {
  try {
    const seed = req.params.seed
    const {type, size} = req.query
    const [width, height] = parseDimensions(size)

    const seedHash = Math.abs(genHash(seed))
    const [colorA, colorB] = generateColorsFromHash(seedHash)
    const svgGradient = genSvg([width, height], colorA, colorB, seedHash)

    res.setHeader('Cache-Control', 'public, max-age=8640000') // 100 days

    switch (type) {
      case 'jpeg':
        res.setHeader('Content-Type', 'image/jpeg')
        res.send(await genJpeg(svgGradient))
        break
      case 'png':
        res.setHeader('Content-Type', 'image/png')
        res.send(await genPng(svgGradient))
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
