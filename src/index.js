import {app} from './server'

const PORT = process.env.PORT || 1234

app.listen(PORT, () => {
  console.log(`running on *:${PORT}`)
})
