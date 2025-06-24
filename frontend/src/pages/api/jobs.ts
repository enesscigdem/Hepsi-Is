import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, keyword = '' } = req.query
  const base = process.env.API_GATEWAY_URL || 'http://localhost:3000'
  const url = id ? `${base}/jobs/${id}` : `${base}/jobs?keyword=${keyword}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ message: 'Error fetching jobs' })
  }
}
