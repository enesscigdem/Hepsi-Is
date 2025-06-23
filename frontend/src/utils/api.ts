import { useQuery } from '@tanstack/react-query'

export function usePing() {
  return useQuery(['ping'], async () => {
    const res = await fetch('/api/ping')
    if (!res.ok) throw new Error('Network response was not ok')
    return res.text()
  })
}
