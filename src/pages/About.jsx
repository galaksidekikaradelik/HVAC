import { Link } from 'react-router-dom'
import {
  Settings,
  ShieldCheck,
  Handshake,
  FileText,
  Search,
  ClipboardList,
  Truck,
  Headphones,
  ArrowRight,
} from 'lucide-react'
import CtaBanner from '../components/ui/CtaBanner'
import '../style/pages/page-common.css'
import '../style/pages/about.css'

const features = [
  {
    icon: Settings,
    title: 'Texniki təcrübə',
    text: 'Peşəkar komandamız HVAC sistemləri üçün düzgün hissənin seçimi və uyğunluğu üzrə dəstək göstərir.',
    image: '/images/about/fan.png',
    to: '/technical-center',
  },
  {
    icon: ShieldCheck,
    title: 'Orijinal və alternativ hissələr',
    text: 'Dünyanın aparıcı istehsalçılarının orijinal (OEM) hissələrini və uyğun alternativləri təqdim edirik.',
    image: '/images/about/compressor.png',
    to: '/products',
  },
  {
    icon: Handshake,
    title: 'B2B satınalma dəstəyi',
    text: 'Texniki yoxlamadan RFQ-ya və çatdırılmaya qədər bütün satınalma prosesini sadə, sürətli və etibarlı şəkildə idarə edirik.',
    image: '/images/about/coil.png',
    to: '/contact',
  },
]

const steps = [
  {
    icon: FileText,
    title: 'Sorğu göndərin',
    text: 'Ehtiyacınız olan hissələrin məlumatlarını bizə göndərin və ya RFQ formamızı doldurun.',
  },
  {
    icon: Search,
    title: 'Texniki yoxlama',
    text: 'Komandamız uyğunluğu təsdiqləyir və ən yaxşı variantları təklif edir.',
  },
  {
    icon: ClipboardList,
    title: 'Qiymət təklifi',
    text: 'Siz OEM və alternativ seçimlər üzrə ətraflı qiymət təklifi alırsınız.',
  },
  {
    icon: Truck,
    title: 'Çatdırılma',
    text: 'Təsdiqdən sonra sürətli və etibarlı çatdırılmanı təmin edirik.',
  },
]

export default function About() {
  return (
    <main className="sh-page about">
      {/* HERO */}
      <section className="sh-container about-hero">
        <div>
          <p className="sh-eyebrow">HAQQIMIZDA</p>
          <h1>
            HVAC sistemləri üçün <span>etibarlı</span> ehtiyat hissələri
          </h1>
          <p className="about-hero__lead">
            SpareHVAC olaraq, Aeroclima təcrübəsi ilə müştərilərimizə HVAC
            sistemləri üçün orijinal və uyğun alternativ ehtiyat hissələrini
            sürətli, etibarlı və peşəkar dəstək ilə təqdim edirik.
          </p>
        </div>

        <div className="about-hero__media">
          <img src="/images/about/hero.jpg" alt="SpareHVAC texniki mütəxəssisi" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="sh-container about-features">
        {features.map(({ icon: Icon, title, text, image, to }) => (
          <article className="about-feature" key={title}>
            <span className="about-feature__icon">
              <Icon size={22} />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
            <img src={image} alt="" loading="lazy" />
            <Link
              to={to}
              className="about-feature__go"
              aria-label={`${title} bölməsinə keç`}
            >
              <ArrowRight size={18} />
            </Link>
          </article>
        ))}
      </section>

      {/* PROCESS */}
      <section className="sh-container about-process">
        <p className="sh-eyebrow">NECƏ İŞLƏYİR?</p>
        <h2>Sadə proses, etibarlı nəticə.</h2>

        <ol className="about-steps">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li className="about-step" key={title}>
              <div className="about-step__top">
                <span className="about-step__num">{i + 1}</span>
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="about-step__arrow" size={18} />
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <div className="sh-container about-cta">
        <CtaBanner
          icon={Headphones}
          title="Düzgün hissəni birlikdə tapaq."
          text="Peşəkar komandamız sizə texniki məsləhət və uyğun qiymət təklifi ilə kömək etməyə hazırdır."
        />
      </div>
    </main>
  )
}