import express from 'express'

const app = express()

const jobs = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'ExampleCorp',
    location: 'İstanbul',
    description: 'React geliştiricisi aranıyor'
  },
  {
    id: '2',
    title: 'Backend Developer',
    company: 'AnotherCorp',
    location: 'Remote',
    description: 'Node.js tecrübeli geliştirici'
  }
]

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.get('/jobs', (req, res) => {
  const keyword = (req.query.keyword as string)?.toLowerCase() || ''
  const filtered = jobs.filter((j) =>
    j.title.toLowerCase().includes(keyword)
  )
  res.json(filtered)
})

app.get('/jobs/:id', (req, res) => {
  const job = jobs.find((j) => j.id === req.params.id)
  if (!job) return res.status(404).json({ message: 'Not found' })
  res.json(job)
})

app.listen(3002, () => {
  console.log('Job service listening on port 3002')
})
