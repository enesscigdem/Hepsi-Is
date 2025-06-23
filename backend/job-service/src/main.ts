import express from 'express'

const app = express()

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.listen(3002, () => {
  console.log('Job service listening on port 3002')
})
