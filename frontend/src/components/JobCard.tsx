import Button from './Button'

export interface Job {
  id: string
  title: string
  company: string
  location: string
  description: string
}

interface Props {
  job: Job
  onSave?: (job: Job) => void
}

export default function JobCard({ job, onSave }: Props) {
  return (
    <div className="border p-4 rounded shadow-sm bg-white mb-4">
      <a href={`/job/${job.id}`} className="text-xl font-bold text-primary">
        {job.title}
      </a>
      <p className="text-sm text-neutral-800">
        {job.company} - {job.location}
      </p>
      <p className="mt-2 text-sm">{job.description.substring(0, 100)}...</p>
      {onSave && (
        <div className="mt-2">
          <Button onClick={() => onSave(job)}>Kaydet</Button>
        </div>
      )}
    </div>
  )
}
