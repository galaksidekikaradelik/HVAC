
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PagePlaceholder({ title, description }) {
  return (
    <section className="section">
      <div className="container page-placeholder">

        <span className="page-placeholder__eyebrow">
          SPAREHVAC × AEROCLIMA
        </span>

        <h1>{title}</h1>

        <p>
          {description || 'Bu səhifə hazırlanma mərhələsindədir.'}
        </p>

        <Link to="/" className="page-placeholder__link">
          <ArrowLeft size={18} />
          Ana səhifəyə qayıt
        </Link>

      </div>
    </section>
  )
}
