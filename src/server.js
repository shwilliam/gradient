import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import {
  generateColorsFromHash,
  genHash,
  genJpeg,
  genPng,
  genSvg,
} from './lib/index'

export const app = express()
app.use(cors())
app.use(morgan('combined'))

app.get('/:seed', async (req, res) => {
  const seed = req.params.seed
  const {type} = req.query

  const seedHash = Math.abs(genHash(seed))
  const [colorA, colorB] = generateColorsFromHash(seedHash)
  const svgGradient = genSvg(200, colorA, colorB, seedHash)

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
})