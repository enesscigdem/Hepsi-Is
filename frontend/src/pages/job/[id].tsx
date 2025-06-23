import { useRouter } from 'next/router'
import { useJob } from '../../utils/api'

export default function JobDetail() {
  const router = useRouter()
  const { id } = router.query
  const { data: job } = useJob(id as string)

  if (!job) return <p>Yükleniyor...</p>

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-primary mb-2">{job.title}</h1>
      <p className="text-sm text-neutral-800 mb-4">
        {job.company} - {job.location}
      </p>
      <p>{job.description}</p>
    </div>
  )
}
