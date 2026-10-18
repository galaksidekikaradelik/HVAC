import { useState } from 'react'
import '../style/pages/contact.css'

const contactInfo = [
  { label: 'Ünvan', value: 'Bakı, Azərbaycan' },
  { label: 'Telefon', value: '+994 XX XXX XX XX', href: 'tel:+994000000000' },
  { label: 'E-poçt', value: 'info@sparehvac.az', href: 'mailto:info@sparehvac.az' },
  { label: 'İş saatları', value: 'B.e. – Cümə: 09:00 – 18:00' },
]

const initialForm = { name: '', phone: '', email: '', message: '' }

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
      // await sendContactMessage(form)
      await new Promise((resolve) => setTimeout(resolve, 600))
      setForm(initialForm)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="contact">
      <section className="contact__hero">
        <div className="contact__inner">
          <h1 className="contact__title">Əlaqə</h1>
          <p className="contact__lead">
            Sualınız və ya sifarişiniz üçün bizimlə əlaqə saxlayın.
          </p>
        </div>
      </section>

      <section className="contact__body">
        <div className="contact__inner contact__grid">
          <div className="contact__info">
            <h2>Əlaqə məlumatları</h2>
            <ul className="contact__list">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <span className="contact__label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <h2>Mesaj göndərin</h2>

            <label htmlFor="name">Ad, soyad</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Telefon</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">E-poçt</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />

            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Göndərilir...' : 'Göndər'}
            </button>

            {status === 'success' && (
              <p className="contact__msg contact__msg--ok" role="status">
                Mesajınız göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.
              </p>
            )}
            {status === 'error' && (
              <p className="contact__msg contact__msg--err" role="alert">
                Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}