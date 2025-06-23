import express from 'express'

const app = express()

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.listen(3003, () => {
  console.log('Notification service listening on port 3003')
})
