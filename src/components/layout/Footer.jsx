
import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import logo from '../../assets/images/sparehvac-dark.png'

const FOOTER_LINKS = [
  { label: 'Ana səhifə', path: '/' },
  { label: 'Məhsullar', path: '/products' },
  { label: 'Brendlər', path: '/brands' },
  { label: 'Texniki mərkəz', path: '/technical-center' },
  { label: 'Haqqımızda', path: '/about' },
  { label: 'Əlaqə', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className="site-footer__main">

          <div className="site-footer__brand">
            
            <Link
            to="/"
            className="site-footer__logo"
            aria-label="SpareHVAC ana səhifə"
            >
            <img
                src={logo}
                alt="SpareHVAC by Aeroclima"
            />
            </Link>


            <p className="site-footer__description">
              HVAC sistemləri üçün ehtiyat hissələri,
              texniki uyğunluq və etibarlı təchizat həlləri.
            </p>
          </div>

          <div className="site-footer__column">
            <h3>Keçidlər</h3>

            <nav aria-label="Alt naviqasiya">
              {FOOTER_LINKS.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer__column">
            <h3>Əlaqə</h3>

            <a href="mailto:info@aeroclima.az">
              <Mail size={17} />
              info@aeroclima.az
            </a>

            <p className="site-footer__contact-line">
              <MapPin size={17} />
              Bakı, Azərbaycan
            </p>

            <Link to="/contact" className="site-footer__action">
              Sorğu göndər
              <ArrowUpRight size={17} />
            </Link>
          </div>

        </div>

        <div className="site-footer__bottom">
          <span>
            © {new Date().getFullYear()} SpareHVAC by Aeroclima.
            Bütün hüquqlar qorunur.
          </span>

          <span>
            Engineering-driven HVAC supply
          </span>
        </div>

      </div>
    </footer>
  )
}
