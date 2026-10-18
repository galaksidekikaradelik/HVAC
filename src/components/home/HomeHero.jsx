
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import heroBg from '../../assets/images/hero/hero-bg.png'
import {
  Search,
  ArrowRight,
  Camera,
  ListFilter,
  CheckCircle2,
} from 'lucide-react'

export default function HomeHero() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)

  const [search, setSearch] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const handleSearch = (event) => {
    event.preventDefault()

    const query = search.trim()
    if (!query) return

    navigate(`/products?search=${encodeURIComponent(query)}`)
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    setSelectedFile(file)
  }

  return (
        <section
            className="home-hero"
            aria-labelledby="home-hero-title"
            style={{
            backgroundImage: `url(${heroBg})`,
            }}
        >
            <div className="home-hero__overlay" />

      <div className="container home-hero__container">
        <div className="home-hero__glass">

          <div className="home-hero__intro">
            <span className="home-hero__eyebrow">
              SPAREHVAC × AEROCLIMA
            </span>

            <h1
              id="home-hero-title"
              className="home-hero__title"
            >
              HVAC ehtiyat hissələrini
              <span> daha sürətli tapın</span>
            </h1>

            <p className="home-hero__description">
              Məhsul kodu, model və ya marka üzrə axtarın,
              uyğun hissəni asanlıqla tapın.
            </p>
          </div>

          <form
            className="home-hero__search"
            role="search"
            onSubmit={handleSearch}
          >
            <Search
              size={25}
              strokeWidth={1.8}
              className="home-hero__search-icon"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Məhsul kodu, model və ya marka üzrə axtarın..."
              aria-label="Məhsul axtarışı"
            />

            <button
              type="submit"
              className="home-hero__search-button"
              aria-label="Axtar"
              disabled={!search.trim()}
            >
              <ArrowRight size={24} />
            </button>
          </form>

          <div className="home-hero__actions">

            <button
              type="button"
              className="home-hero__action"
              onClick={() => fileInputRef.current?.click()}
            >
              <span className="home-hero__action-icon">
                <Camera size={27} strokeWidth={1.8} />
              </span>

              <span className="home-hero__action-content">
                <strong>Foto ilə axtarış</strong>
                <small>Hissənin şəklini seçin</small>
              </span>

              <ArrowRight
                size={23}
                className="home-hero__action-arrow"
              />
            </button>

            <Link
              to="/products"
              className="home-hero__action"
            >
              <span className="home-hero__action-icon">
                <ListFilter size={27} strokeWidth={1.8} />
              </span>

              <span className="home-hero__action-content">
                <strong>Siyahı ilə axtarış</strong>
                <small>Məhsul kateqoriyalarına baxın</small>
              </span>

              <ArrowRight
                size={23}
                className="home-hero__action-arrow"
              />
            </Link>

          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleFileChange}
            className="home-hero__file-input"
            aria-label="Məhsul şəklini seç"
            tabIndex={-1}
          />

          {selectedFile && (
            <div className="home-hero__file-message" role="status">
              <CheckCircle2 size={18} />
              <span>
                {selectedFile.name} seçildi.
                Foto ilə sorğu göndərilməsi növbəti mərhələdə
                aktivləşdiriləcək.
              </span>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
