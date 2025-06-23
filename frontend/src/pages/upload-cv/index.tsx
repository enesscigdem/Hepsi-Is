import { useState } from 'react'
import { useDropzone } from 'react-dropzone'

export default function UploadCv() {
  const [fileName, setFileName] = useState('')
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles[0]) {
        setFileName(acceptedFiles[0].name)
      }
    }
  })

  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div
        {...getRootProps()}
        className={`border-dashed border-2 p-10 text-center rounded w-full max-w-md ${isDragActive ? 'bg-neutral-100' : 'bg-white'}`}
      >
        <input {...getInputProps()} />
        <p className="mb-2">CV'nizi buraya sürükleyin veya tıklayın</p>
        {fileName && <p className="text-sm text-primary">Seçilen: {fileName}</p>}
      </div>
    </div>
  )
}
