
import { useState } from 'react'

const brandFiles = import.meta.glob(
  '../../assets/images/brands/*.{webp,png,svg,jpg,jpeg}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

const getBrandImage = (filename) => {
  const entry = Object.entries(brandFiles).find(
    ([path]) => path.split('/').pop().split('.')[0] === filename
  )

  return entry?.[1] || null
}

const BRANDS = [
  { name: 'Trane', file: 'trane' },
  { name: 'Systemair', file: 'systemair' },
  { name: 'Gree', file: 'gree' },
  { name: 'Midea', file: 'midea' },
  { name: 'Mitsubishi Electric', file: 'mitsubishi-electric' },
  { name: 'Daikin', file: 'daikin' },
  { name: 'Carrier', file: 'carrier' },
  { name: 'Clint', file: 'clint' },
]

function BrandCard({ brand }) {
  const [imageError, setImageError] = useState(false)
  const image = getBrandImage(brand.file)

  return (
    <div className="home-brands__card">
      {image && !imageError ? (
        <img
          src={image}
          alt={brand.name}
          draggable="false"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="home-brands__fallback">
          {brand.name}
        </span>
      )}
    </div>
  )
}

export default function HomeBrands() {
  return (
    <section
      className="home-brands"
      aria-label="Təchizat brendləri"
    >
      <div className="home-brands__heading container">
        <p>
          Aparıcı istehsalçıların ehtiyat hissələrini
          təchiz edirik
        </p>
      </div>

      <div className="home-brands__slider">
        <div className="home-brands__track">

          <div className="home-brands__group">
            {BRANDS.map((brand) => (
              <BrandCard
                key={brand.file}
                brand={brand}
              />
            ))}
          </div>

          <div
            className="home-brands__group"
            aria-hidden="true"
          >
            {BRANDS.map((brand) => (
              <BrandCard
                key={`duplicate-${brand.file}`}
                brand={brand}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
