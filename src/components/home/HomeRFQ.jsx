
import { useCallback, useState } from 'react'

import {
  ArrowUpRight,
  FileText,
  Camera,
  ContactRound,
} from 'lucide-react'

import QuoteRequestModal from '../modals/QuoteRequestModal'
import rfqImage from '../../assets/images/hero/hero-bg.png'

const RFQ_STEPS = [
  {
    number: '01',
    title: 'Hissə məlumatları',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Foto və sənədlər',
    icon: Camera,
  },
  {
    number: '03',
    title: 'Əlaqə məlumatları',
    icon: ContactRound,
  },
]

export default function HomeRFQ() {
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
        className="home-rfq section"
        aria-labelledby="home-rfq-title"
      >
        <div className="container">
          <div className="home-rfq__grid">

            {/* LEFT — IMAGE */}

            <div className="home-rfq__visual">
              <img
                src={rfqImage}
                alt="HVAC avadanlıqları və ehtiyat hissələri"
                loading="lazy"
              />

              <div className="home-rfq__visual-overlay" />
            </div>

            {/* RIGHT — CONTENT */}

            <div className="home-rfq__content">

              <span className="home-rfq__eyebrow">
                SADƏ RFQ SORĞUSU
              </span>

              <h2
                id="home-rfq-title"
                className="home-rfq__title"
              >
                Qiymət təklifinizi
                <span> 2 dəqiqəyə başladın.</span>
              </h2>

              <p className="home-rfq__description">
                Axtardığınız ehtiyat hissəsinin məlumatlarını
                bizimlə paylaşın. Texniki komandamız uyğunluğu
                yoxlayaraq sizə təklif hazırlamaqda kömək edəcək.
              </p>

              {/* THREE STEPS */}

              <div className="home-rfq__steps">
                {RFQ_STEPS.map((step) => {
                  const Icon = step.icon

                  return (
                    <div
                      className="home-rfq__step"
                      key={step.number}
                    >
                      <div className="home-rfq__step-icon">
                        <Icon size={21} strokeWidth={1.7} />
                      </div>

                      <span className="home-rfq__step-number">
                        {step.number}
                      </span>

                      <span className="home-rfq__step-title">
                        {step.title}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* CTA — OPEN MODAL */}

              <button
                type="button"
                className="home-rfq__button"
                onClick={openQuoteModal}
              >
                <span>Qiymət təklifi alın</span>
                <ArrowUpRight size={20} />
              </button>

              <p className="home-rfq__note">
                Hissənin kodunu bilmirsiniz?
                Fotoşəkilini göndərməyiniz kifayətdir.
              </p>

            </div>
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
