
import { Link } from 'react-router-dom'

import {
  ArrowRight,
  Fan,
  Cpu,
  Gauge,
  Thermometer,
  Zap,
  Filter,
  Wrench,
  Layers,
  FlaskConical,
  Package,
  Settings,
  Cylinder,
  Waves,
} from 'lucide-react'

import {
  PRODUCT_CATEGORIES,
} from '../../data/productCategories'

const categoryImages = import.meta.glob(
  '../../assets/images/categories/*.{png,webp,jpg,jpeg}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

const ICONS = {
  compressor: Cylinder,
  coil: Waves,
  fan: Fan,
  board: Cpu,
  sensor: Thermometer,
  gauge: Gauge,
  electric: Zap,
  valve: Settings,
  filter: Filter,
  pipe: Wrench,
  layers: Layers,
  tool: Wrench,
  chemical: FlaskConical,
  parts: Package,
}

export default function CategoryBentoGrid() {
  return (
    <div className="category-bento">
      {PRODUCT_CATEGORIES.map((category) => {
        const Icon = ICONS[category.icon] || Package

        const imagePath =
          `../../assets/images/categories/${category.image}`

        const imageSrc = categoryImages[imagePath]

        const isFeatured = category.id === 1

        return (
          <Link
            key={category.id}
            to={`/products/category/${category.slug}`}
            className={[
              'category-bento__card',
              `category-bento__card--${category.id}`,
              isFeatured
                ? 'category-bento__card--featured'
                : '',
            ].filter(Boolean).join(' ')}
            aria-label={`${category.title} kateqoriyasına bax`}
          >
            {/* CARD TEXT */}

            <div className="category-bento__content">
              <span className="category-bento__number">
                {String(category.id).padStart(2, '0')}
              </span>

              <h3 className="category-bento__title">
                {category.title}
              </h3>

              {isFeatured && (
                <p className="category-bento__description">
                  Hermetik, scroll, rotary və digər
                  kompressorlar
                </p>
              )}

              <span
                className="category-bento__arrow"
                aria-hidden="true"
              >
                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                />
              </span>
            </div>

            {/* PRODUCT VISUAL */}

            <div className="category-bento__visual">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt=""
                  loading={isFeatured ? 'eager' : 'lazy'}
                  draggable="false"
                />
              ) : (
                <Icon
                  className="category-bento__fallback"
                  strokeWidth={1.15}
                  aria-hidden="true"
                />
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}
