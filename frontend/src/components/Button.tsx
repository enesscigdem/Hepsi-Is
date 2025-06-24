import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary"
    >
      {children}
    </button>
  )
}
