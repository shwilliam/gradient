import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

export const app = express()

app.use(cors())
app.use(morgan('combined'))

app.get('/', (_req, res) => {
  res.send('🚀')
})
