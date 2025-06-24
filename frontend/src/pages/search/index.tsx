import { useState } from 'react'
import JobCard from '../../components/JobCard'
import { useJobs } from '../../utils/api'

export default function Search() {
  const [keyword, setKeyword] = useState('')
  const { data: jobs = [] } = useJobs(keyword)

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-primary">İş Ara</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Anahtar kelime"
        className="border p-2 mb-4 w-full max-w-md"
      />
      <div>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}
