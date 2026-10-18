
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SiteLayout from './components/layout/SiteLayout'
import PagePlaceholder from './components/ui/PagePlaceholder'

import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'

const Placeholder = ({ title }) => (
  <PagePlaceholder title={title} />
)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<SiteLayout />}>

          {/* HOME */}
          <Route index element={<Home />} />

          {/* PRODUCTS */}
          <Route
            path="products"
            element={<Products />}
          />

          <Route
            path="products/category/:slug"
            element={<Placeholder title="Məhsul kateqoriyası" />}
          />

          <Route
            path="products/:slug"
            element={<Placeholder title="Məhsul detalları" />}
          />

          {/* BRANDS */}
          <Route
            path="brands"
            element={<Placeholder title="Brendlər" />}
          />

          {/* TECHNICAL CENTER */}
          <Route
            path="technical-center"
            element={<Placeholder title="Texniki bilik mərkəzi" />}
          />

          <Route
            path="technical-center/:slug"
            element={<Placeholder title="Məqalə" />}
          />

          {/* ABOUT */}
          <Route path="about" element={<About />} />

          {/* CONTACT */}
          <Route path="contact" element={<Contact />} />

          {/* 404 */}
          <Route
            path="*"
            element={<Placeholder title="404 — Səhifə tapılmadı" />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}
