import { Link } from 'react-router-dom'

export default function Logo({ textClassName = 'text-primary', className = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 font-heading text-lg font-bold ${textClassName} ${className}`}>
      <img
        src="/nantesservices.png"
        alt="Nantes Services"
        width="48"
        height="48"
        className="h-12 w-12 shrink-0 object-contain"
      />
      <span>Nantes Services</span>
    </Link>
  )
}
