import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import {generateColorsFromHash, genHash, genSvg} from './lib/index'

const PORT = process.env.PORT || 1234

const app = express()
app.use(cors())
app.use(morgan('combined'))

app.get('/', (_req, res) => {
  res.send('🚀')
})

app.get('/:seed', (req, res) => {
  const seed = req.params.seed
  const {type} = req.query

  const seedHash = Math.abs(genHash(seed))
  const [colorA, colorB] = generateColorsFromHash(seedHash)

  switch (type) {
    case 'jpg':
      break
    case 'png':
      break
    default:
      res.setHeader('Content-Type', 'image/svg+xml')
      res.send(genSvg(200, colorA, colorB, seedHash))
      break
  }
})

app.listen(PORT, () => {
  console.log(`running on *:${PORT}`)
})
