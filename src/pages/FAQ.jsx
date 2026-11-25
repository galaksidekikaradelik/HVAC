
import { useState } from 'react'
import {
  Search,
  ChevronDown,
  Headphones,
  X,
} from 'lucide-react'

import PageHead from '../components/ui/PageHead'
import CtaBanner from '../components/ui/CtaBanner'
import { faqCategories, faqData } from '../data/faqData'

import '../style/pages/page-common.css'
import '../style/pages/faq.css'

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [openQuestion, setOpenQuestion] = useState(null)

  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory =
      activeCategory === 'all' ||
      faq.category === activeCategory

    const query = searchQuery.toLowerCase().trim()

    const matchesSearch =
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setOpenQuestion(null)
  }

  const handleSearch = (value) => {
    setSearchQuery(value)
    setOpenQuestion(null)
  }

  return (
    <main className="sh-page faq-page">

      {/* HERO */}
      <section className="sh-container faq-hero">
        <PageHead
          title="Tez-tez verilən suallar"
          description="SpareHVAC məhsulları, sifariş prosesi və texniki dəstək haqqında ən çox verilən suallara cavab tapın."
          eyebrow="SPAREHVAC × AEROCLIMA"
        />

        <div className="faq-search">
          <Search size={21} />

          <input
            type="text"
            placeholder="Sualınızı axtarın..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            aria-label="FAQ suallarında axtarış"
          />

          {searchQuery && (
            <button
              type="button"
              className="faq-search__clear"
              onClick={() => handleSearch('')}
              aria-label="Axtarışı təmizlə"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="sh-container faq-content">

        {/* CATEGORIES */}
        <div className="faq-categories">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`faq-category ${
                activeCategory === category.id
                  ? 'active'
                  : ''
              }`}
              onClick={() =>
                handleCategoryChange(category.id)
              }
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* QUESTIONS */}
        <div className="faq-list">

          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => {
              const isOpen = openQuestion === faq.id

              return (
                <article
                  className={`faq-item ${
                    isOpen ? 'faq-item--open' : ''
                  }`}
                  key={faq.id}
                >
                  <button
                    type="button"
                    className="faq-item__question"
                    onClick={() =>
                      setOpenQuestion(
                        isOpen ? null : faq.id
                      )
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="faq-item__number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="faq-item__title">
                      {faq.question}
                    </span>

                    <span className="faq-item__icon">
                      <ChevronDown size={21} />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="faq-item__answer"
                      id={`faq-answer-${faq.id}`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </article>
              )
            })
          ) : (
            <div className="faq-empty">
              <Search size={32} />
              <h3>Heç bir nəticə tapılmadı</h3>
              <p>
                Axtarış sözünü dəyişdirin və ya başqa
                kateqoriya seçin.
              </p>

              <button
                type="button"
                className="sh-btn"
                onClick={() => {
                  handleSearch('')
                  handleCategoryChange('all')
                }}
              >
                Bütün sualları göstər
              </button>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <div className="sh-container faq-cta">
        <CtaBanner
          icon={Headphones}
          title="Sualınıza cavab tapa bilmədiniz?"
          text="Komandamızla əlaqə saxlayın. Sizə uyğun ehtiyat hissəsinin tapılmasında kömək etməyə hazırıq."
          label="Bizimlə əlaqə saxlayın"
          to="/contact"
        />
      </div>

    </main>
  )
}
