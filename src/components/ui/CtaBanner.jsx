import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import '../../style/components/cta-banner.css'

export default function CtaBanner({
  icon: Icon,
  title,
  text,
  label = 'Qiymət təklifi alın',
  to = '/contact',
}) {
  const content = (
    <>
      {label}
      <ArrowRight size={18} />
    </>
  )

  return (
    <section className="cta-banner">
      <span className="cta-banner__icon">
        <Icon size={28} />
      </span>

      <div className="cta-banner__body">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      {to.startsWith('#') ? (
        <a className="sh-btn" href={to}>{content}</a>
      ) : (
        <Link className="sh-btn" to={to}>{content}</Link>
      )}
    </section>
  )
}