
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import logo from '../../assets/images/logo.webp'

const NAV_ITEMS = [
  { label: 'Ana səhifə', path: '/' },
  { label: 'Məhsullar', path: '/products' },
  { label: 'Brendlər', path: '/brands' },
  { label: 'Texniki mərkəz', path: '/technical-center' },
  { label: 'Haqqımızda', path: '/about' },
  { label: 'Əlaqə', path: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">

        <Link
        to="/"
        className="site-header__logo"
        onClick={closeMenu}
        aria-label="SpareHVAC ana səhifə"
        >
            <img src={logo} alt="SpareHVAC by Aeroclima" />
        </Link>

        <nav
          className={`site-header__nav ${
            menuOpen ? 'is-open' : ''
          }`}
          aria-label="Əsas naviqasiya"
          id="main-navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname === item.path ||
                  location.pathname.startsWith(item.path + '/')

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`site-header__link ${
                  isActive ? 'is-active' : ''
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            )
          })}
        </nav>

        <Link
          to="/contact"
          className="site-header__cta"
          onClick={closeMenu}
        >
          Qiymət təklifi al
          <ArrowUpRight size={17} />
        </Link>

        <button
          type="button"
          className="site-header__toggle"
          aria-label={menuOpen ? 'Menyunu bağla' : 'Menyunu aç'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </header>
  )
}
