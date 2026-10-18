
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  ArrowRight,
  FileText,
  Settings2,
  Headphones,
} from 'lucide-react'

import QuoteRequestModal from '../modals/QuoteRequestModal'
import hvacImage from '../../assets/images/hero/hero-cta.png'

const CTA_STEPS = [
  {
    icon: FileText,
    title: 'Şəkil və ya',
    subtitle: 'kod göndərin',
  },
  {
    icon: Settings2,
    title: 'Uyğunluğu',
    subtitle: 'biz yoxlayaq',
  },
  {
    icon: FileText,
    title: 'Dəqiq təklif',
    subtitle: 'əldə edin',
  },
]

export default function HomeCTA() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] =
    useState(false)

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true)
  }

  const closeQuoteModal = useCallback(() => {
    setIsQuoteModalOpen(false)
  }, [])

  return (
    <>
      <section
        className="home-cta"
        aria-labelledby="home-cta-title"
      >
        <div
          className="home-cta__background"
          style={{
            backgroundImage: `url(${hvacImage})`,
          }}
          aria-hidden="true"
        />

        <div
          className="home-cta__overlay"
          aria-hidden="true"
        />

        <div className="home-cta__content">

          <div className="home-cta__heading">

            <h2 id="home-cta-title">
              Axtardığınız hissəni
              <br />
              birlikdə tapaq.
            </h2>

            <p>
              Kodu bilmirsinizsə, cihaz etiketinin və ya
              ehtiyat hissəsinin şəklini göndərin,
              uyğun variantı müəyyənləşdirməkdə
              sizə kömək edək.
            </p>

            <div className="home-cta__actions">

              {/* OPEN QUOTE MODAL */}

              <button
                type="button"
                className="home-cta__button home-cta__button--primary"
                onClick={openQuoteModal}
              >
                Qiymət təklifi al
                <ArrowRight
                  size={19}
                  strokeWidth={1.8}
                />
              </button>

              {/* CONTACT PAGE */}

              <Link
                to="/contact"
                className="home-cta__button home-cta__button--secondary"
              >
                <Headphones
                  size={20}
                  strokeWidth={1.7}
                />
                Mütəxəssislə danış
              </Link>

            </div>
          </div>

          <div className="home-cta__steps">
            {CTA_STEPS.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  className="home-cta__step"
                  key={index}
                >
                  <Icon
                    size={30}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />

                  <p>
                    {step.title}
                    <span>{step.subtitle}</span>
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* SHARED QUOTE MODAL */}

      <QuoteRequestModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
      />
    </>
  )
}
