import '../../style/components/page-head.css'

export default function PageHead({
  title,
  description,
  eyebrow = 'SPAREHVAC × AEROCLIMA',
}) {
  return (
    <div className="page-head">
      <span className="page-head__eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  )
}