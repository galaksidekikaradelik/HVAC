import { useState } from 'react'
import { Phone, Mail, MapPin, ArrowRight, Wrench } from 'lucide-react'
import CtaBanner from '../components/ui/CtaBanner'
import PageHead from '../components/ui/PageHead'
import '../style/pages/page-common.css'
import '../style/pages/contact.css'

const contactInfo = [
  {
    icon: Phone,
    value: '+994 50 201 83 93',
    label: 'Zəng edin',
    href: 'tel:+994502018393',
  },
  {
    icon: Mail,
    value: 'info@aeroclima.az',
    label: 'E-poçt',
    href: 'mailto:info@aeroclima.az',
  },
  {
    icon: MapPin,
    value: 'Bakı, Azərbaycan',
    label: 'Ünvan',
  },
]

const requestTypes = [
  'Qiymət təklifi (RFQ)',
  'Texniki dəstək',
  'Məhsul uyğunluğu',
  'Digər',
]

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  type: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // TODO: src/services altında göndərmə funksiyası yazıb burada çağır
      // await sendInquiry(form)
      await new Promise((resolve) => setTimeout(resolve, 600))
      setForm(initialForm)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="sh-page contact">
      {/* HERO */}
       <section className="contact-hero">
        <div className="sh-container">
          <PageHead
            title="Əlaqə"
            description="Sualınız, qiymət sorğunuz və ya texniki dəstək ehtiyacınız varsa, komandamız sizin üçün buradadır."
          />
        </div>
      </section>

      <div className="sh-container contact-stack">
        <div className="contact-grid">
          {/* INFO */}
          <aside className="contact-card">
            <h2>Bizimlə əlaqə</h2>
            <ul className="contact-info">
              {contactInfo.map(({ icon: Icon, value, label, href }) => (
                <li key={label}>
                  <span className="sh-icon-circle">
                    <Icon size={24} />
                  </span>
                  <div>
                    {href ? (
                      <a href={href}>
                        <strong>{value}</strong>
                      </a>
                    ) : (
                      <strong>{value}</strong>
                    )}
                    <small>{label}</small>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* FORM */}
          <section className="contact-card" id="sorgu-formu">
            <h2>Sorğu göndərin</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label htmlFor="name">
                  Ad və soyad <span>*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="company">
                  Şirkət <span>*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">
                  E-poçt <span>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="phone">
                  Telefon <span>*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field contact-field--full">
                <label htmlFor="type">
                  Sorğu növü <span>*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Seçim edin
                  </option>
                  {requestTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field contact-field--full">
                <label htmlFor="message">
                  Mesaj <span>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Nə axtardığınızı qısa qeyd edin..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                className="sh-btn"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Göndərilir...' : 'Sorğunu göndər'}
                <ArrowRight size={18} />
              </button>

              {status === 'success' && (
                <p className="contact-status contact-status--ok" role="status">
                  Sorğunuz göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.
                </p>
              )}
              {status === 'error' && (
                <p className="contact-status contact-status--err" role="alert">
                  Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.
                </p>
              )}
            </form>
          </section>
        </div>

        {/* MAP */}
        <section className="contact-map">
          <div className="contact-map__text">
            <p>Ünvanımız</p>
            <strong>Bakı, Azərbaycan</strong>
          </div>
          <iframe
            title="Bakı xəritəsi"
            src="https://www.google.com/maps?q=Baku,+Azerbaijan&z=11&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        {/* CTA */}
        <CtaBanner
          icon={Wrench}
          title="Texniki dəstəyə ehtiyacınız var?"
          text="Komandamız uyğunluq yoxlaması, OEM alternativləri və RFQ prosesi üzrə sizə kömək etməyə hazırdır."
          label="Qiymət təklifi al"
          to="#sorgu-formu"
        />
      </div>
    </main>
  )
}