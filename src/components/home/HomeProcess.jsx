import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import processImage1 from '../../assets/images/process/doc.png'
import processImage2 from '../../assets/images/process/settings.png'
import processImage3 from '../../assets/images/process/price.png'
import processImage4 from '../../assets/images/process/box.png'

const PROCESS_STEPS = [
  {
    number: '01',
    image: processImage1,
    title: 'Məlumatı göndərin',
    description:
      'Parça kodunu, cihaz modelini, şəkil və tələb olunan sənədləri paylaşın.',
  },
  {
    number: '02',
    image: processImage2,
    title: 'Texniki yoxlama',
    description:
      'Uyğunluq, OEM kodu və mümkün alternativlər təsdiqlənir.',
  },
  {
    number: '03',
    image: processImage3,
    title: 'Təklifi alın',
    description:
      'Qiymət, stok və çatdırılma müddəti təqdim edilir.',
  },
  {
    number: '04',
    image: processImage4,
    title: 'Təhvil alın',
    description:
      'Sifarişiniz hazırlanır və izlənilən şəkildə çatdırılır.',
  },
]

export default function HomeProcess() {
  return (
    <section
      className="home-process"
      aria-labelledby="home-process-title"
    >
      <div className="home-process__shell">

        {/* LEFT CONTENT */}

        <div className="home-process__content">
          <span className="home-process__eyebrow">
            SADƏ RFQ PROSESİ
          </span>

          <span
            className="home-process__accent-line"
            aria-hidden="true"
          />

          <h2 id="home-process-title">
            Sorğudan
            <br />
            çatdırılmaya qədər
          </h2>

          <p className="home-process__intro">
            Doğru hissənin seçilməsi, texniki
            yoxlanması və təklifləndirilməsi
            prosesini sadələşdiririk.
          </p>

          <Link
            to="/contact"
            className="home-process__cta"
          >
            Sorğu göndərin
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* RIGHT CONTENT */}

        <div className="home-process__journey">

          {/* CONNECTION LINE */}

          <svg
            className="home-process__connector"
            viewBox="0 0 1000 240"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="home-process__connector-line"
              d="
                M 0 142
                C 85 142, 105 70, 170 110
                S 270 185, 330 125
                S 445 68, 500 125
                S 615 180, 670 115
                S 780 72, 830 130
                S 940 170, 1000 110
              "
            />

            <circle cx="0" cy="142" r="7" />
            <circle cx="330" cy="125" r="7" />
            <circle cx="670" cy="115" r="7" />
            <circle cx="1000" cy="110" r="7" />
          </svg>

          {/* PROCESS CARDS */}

          <div className="home-process__steps">
            {PROCESS_STEPS.map((step) => (
              <article
                key={step.number}
                className="home-process__step"
              >
                <div className="home-process__paper">

                  <div
                    className="home-process__paper-top"
                    aria-hidden="true"
                  />

                  <span className="home-process__number">
                    {step.number}
                  </span>

                  {/* NEW 3D PNG IMAGE */}

                  <div className="home-process__illustration">
                    <img
                      src={step.image}
                      alt=""
                      className="home-process__step-image"
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                  </div>

                  <div className="home-process__step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}