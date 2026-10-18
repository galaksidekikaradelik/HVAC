
import { Link } from 'react-router-dom'

import {
  ChevronRight,
  Award,
  Package,
  Truck,
} from 'lucide-react'

import CategoryBentoGrid from '../components/products/CategoryBentoGrid'

const ADVANTAGES = [
  {
    icon: Award,
    title: 'Orijinal və',
    subtitle: 'uyğun hissələr',
  },
  {
    icon: Package,
    title: 'Geniş',
    subtitle: 'məhsul çeşidi',
  },
  {
    icon: Truck,
    title: 'Tez və',
    subtitle: 'etibarlı təchizat',
  },
]

export default function Products() {
  return (
    <main className="products-page">

      <div className="container">

        {/* BREADCRUMB */}

        <nav
          className="products-page__breadcrumb"
          aria-label="Səhifə yolu"
        >
          <Link to="/">
            Ana səhifə
          </Link>

          <ChevronRight size={14} />

          <span>
            Məhsul kateqoriyaları
          </span>
        </nav>

        {/* INTRO */}

        <div className="products-page__intro">

          <h1>
            Bütün ehtiyat
            <br />
            hissələri bir yerdə
          </h1>


        </div>

        <CategoryBentoGrid />

      </div>

    </main>
  )
}
