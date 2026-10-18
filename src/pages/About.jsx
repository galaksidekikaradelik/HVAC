import { Link } from 'react-router-dom'
import '../style/pages/about.css'

const stats = [
  { value: '10+', label: 'İllik təcrübə' },
  { value: '5 000+', label: 'Məhsul çeşidi' },
  { value: '30+', label: 'Tərəfdaş brend' },
  { value: '1 000+', label: 'Məmnun müştəri' },
]

const values = [
  {
    title: 'Keyfiyyət',
    text: 'Yalnız orijinal və yoxlanılmış ehtiyat hissələri təklif edirik.',
  },
  {
    title: 'Sürətli çatdırılma',
    text: 'Sifarişlər tez emal olunur və vaxtında təhvil verilir.',
  },
  {
    title: 'Texniki dəstək',
    text: 'Düzgün hissəni seçməkdə mütəxəssislərimiz sizə kömək edir.',
  },
]

export default function About() {
  return (
    <main className="about">
      <section className="about__hero">
        <div className="about__inner">
          <h1 className="about__title">Haqqımızda</h1>
          <p className="about__lead">
            SpareHVAC istilik, ventilyasiya və kondisioner sistemləri üçün
            ehtiyat hissələrinin etibarlı tədarükçüsüdür.
          </p>
        </div>
      </section>

      <section className="about__section">
        <div className="about__inner about__story">
          <h2>Biz kimik</h2>
          <p>
            Şirkətimiz HVAC sahəsində fəaliyyət göstərən mütəxəssislərə və
            şirkətlərə lazım olan komponentləri bir ünvanda təqdim edir.
            Məqsədimiz düzgün hissəni düzgün vaxtda tapmağınızı asanlaşdırmaqdır.
          </p>
          <p>
            Məhsul kataloqumuz, tərəfdaş brendlərimiz və texniki bilik
            mərkəzimiz sizə seçim etməkdə və quraşdırmada dəstək olmaq üçün
            hazırlanıb.
          </p>
        </div>
      </section>

      <section className="about__section about__section--alt">
        <div className="about__inner about__stats">
          {stats.map((item) => (
            <div className="about__stat" key={item.label}>
              <span className="about__stat-value">{item.value}</span>
              <span className="about__stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about__section">
        <div className="about__inner">
          <h2>Dəyərlərimiz</h2>
          <div className="about__values">
            {values.map((item) => (
              <article className="about__card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about__cta">
        <div className="about__inner">
          <h2>Sualınız var?</h2>
          <p>Komandamız sizə uyğun həlli tapmağa hazırdır.</p>
          <Link to="/contact" className="about__button">
            Bizimlə əlaqə saxlayın
          </Link>
        </div>
      </section>
    </main>
  )
}