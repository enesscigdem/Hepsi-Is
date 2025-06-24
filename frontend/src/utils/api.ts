import { useQuery } from '@tanstack/react-query'

export function usePing() {
  return useQuery(['ping'], async () => {
    const res = await fetch('/api/ping')
    if (!res.ok) throw new Error('Network response was not ok')
    return res.text()
  })
}

export function useJobs(keyword: string) {
  return useQuery(['jobs', keyword], async () => {
    const res = await fetch(`/api/jobs?keyword=${encodeURIComponent(keyword)}`)
    if (!res.ok) throw new Error('Network response was not ok')
    return res.json()
  })
}

export function useJob(id: string) {
  return useQuery(['job', id], async () => {
    if (!id) return null
    const res = await fetch(`/api/jobs?id=${id}`)
    if (!res.ok) throw new Error('Network response was not ok')
    return res.json()
  })
}
