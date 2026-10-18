
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Cog,
  CircuitBoard,
  Fan,
  Thermometer,
  Gauge,
  Zap,
} from 'lucide-react'

import hvacImage from '../../assets/images/products/hvac-catalog.png'

const COMPONENTS = [
  {
    id: 'compressor',
    title: 'Kompressorlar',
    slug: 'kompressorlar',
    icon: Cog,
    position: 'compressor',
  },
  {
    id: 'fan',
    title: 'Fan və mühərriklər',
    slug: 'fan-ve-muherrikler',
    icon: Fan,
    position: 'fan',
  },
  {
    id: 'board',
    title: 'Elektron kartlar',
    slug: 'elektron-kartlar',
    icon: CircuitBoard,
    position: 'board',
  },
  {
    id: 'sensor',
    title: 'Sensorlar',
    slug: 'sensorlar',
    icon: Thermometer,
    position: 'sensor',
  },
  {
    id: 'pressure',
    title: 'Təzyiq releləri',
    slug: 'tezyiq-releleri',
    icon: Gauge,
    position: 'pressure',
  },
  {
    id: 'electric',
    title: 'Elektrik komponentləri',
    slug: 'elektrik-komponentleri',
    icon: Zap,
    position: 'electric',
  },
]

const CONNECTIONS = [
  {
    id: 'compressor',
    path: 'M 438 343 L 310 284 L 214 284',
    x: 438,
    y: 343,
  },
  {
    id: 'fan',
    path: 'M 682 173 L 755 89 L 895 89',
    x: 682,
    y: 173,
  },
  {
    id: 'board',
    path: 'M 705 315 L 923 310 L 1025 310',
    x: 705,
    y: 315,
  },
  {
    id: 'sensor',
    path: 'M 515 443 L 332 473 L 216 473',
    x: 515,
    y: 443,
  },
  {
    id: 'pressure',
    path: 'M 627 465 L 598 569',
    x: 627,
    y: 465,
  },
  {
    id: 'electric',
    path: 'M 790 455 L 919 511 L 1000 511',
    x: 790,
    y: 455,
  },
]

export default function HomeCatalog() {
  const [activeComponent, setActiveComponent] = useState(null)

  return (
    <section
      className="home-catalog section"
      aria-labelledby="home-catalog-title"
    >
      <div className="container">

        <div className="home-catalog__header">
          <div className="home-catalog__heading">
            <span className="home-catalog__eyebrow">
              MƏHSUL KATALOQU
            </span>

            <h2 id="home-catalog-title">
              Sisteminiz üçün doğru komponent
            </h2>

            <p>
              Sənaye və HVAC sistemləriniz üçün etibarlı
              və keyfiyyətli ehtiyat hissələrini kəşf edin.
            </p>
          </div>

          <Link
            to="/products"
            className="home-catalog__all"
          >
            Bütün kateqoriyalar
            <ArrowUpRight size={19} />
          </Link>
        </div>

        <div className="home-catalog__stage">

          <img
            src={hvacImage}
            alt="Kompressor, elektron kart, fan, sensor və elektrik komponentləri görünən HVAC sistemi"
            className="home-catalog__machine"
            loading="lazy"
          />

          <svg
            className="home-catalog__connections"
            viewBox="0 0 1280 650"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {CONNECTIONS.map((item) => {
              const active = activeComponent === item.id

              return (
                <g
                  key={item.id}
                  className={`home-catalog__connection ${
                    active ? 'is-active' : ''
                  }`}
                >
                  <path
                    className="home-catalog__line"
                    d={item.path}
                  />

                  <circle
                    className="home-catalog__point-ring"
                    cx={item.x}
                    cy={item.y}
                    r={active ? 10 : 7}
                  />

                  <circle
                    className="home-catalog__point"
                    cx={item.x}
                    cy={item.y}
                    r={active ? 6 : 4.5}
                  />
                </g>
              )
            })}
          </svg>

          <div className="home-catalog__labels">
            {COMPONENTS.map((item) => {
              const Icon = item.icon
              const active = activeComponent === item.id

              return (
                <Link
                  key={item.id}
                  to={`/products/category/${item.slug}`}
                  className={`home-catalog__label home-catalog__label--${item.position} ${
                    active ? 'is-active' : ''
                  }`}
                  onMouseEnter={() => setActiveComponent(item.id)}
                  onMouseLeave={() => setActiveComponent(null)}
                  onFocus={() => setActiveComponent(item.id)}
                  onBlur={() => setActiveComponent(null)}
                >
                  <span className="home-catalog__label-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </span>

                  <span className="home-catalog__label-content">
                    <span className="home-catalog__label-title">
                      {item.title}
                    </span>
                    <span className="home-catalog__label-underline" />
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="home-catalog__label-arrow"
                  />
                </Link>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
