
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  CheckCircle2,
  RotateCcw,
  ScanSearch,
} from 'lucide-react'

import frontPanel from '../../assets/images/about/hvac-front-panel.png'
import fan from '../../assets/images/about/hvac-fan.png'
import core from '../../assets/images/about/hvac-core.png'
import board from '../../assets/images/about/hvac-board.png'
import shell from '../../assets/images/about/hvac-shell.png'
import hvacNormal from '../../assets/images/about/hvac-normal.png'

const BENEFITS = [
  'Real servis və sahə təcrübəsi',
  'OEM və uyğun alternativlərin müqayisəsi',
  'Korporativ satınalma üçün sənədli təklif',
]

const PIECES = [
  { name: 'front-panel', src: frontPanel },
  { name: 'fan', src: fan },
  { name: 'core', src: core },
  { name: 'board', src: board },
  { name: 'shell', src: shell },
]

export default function HomeExpertise() {
  const [isExploded, setIsExploded] = useState(false)

  return (
    <section
      className="home-expertise section"
      aria-labelledby="home-expertise-title"
    >
      <div className="container">
        <div className="home-expertise__grid">
          <div className="home-expertise__content">
            <span className="home-expertise__eyebrow">
              SPAREHVAC × AEROCLIMA
            </span>

            <h2 id="home-expertise-title">
              Satışdan əvvəl
              <span> mühəndis düşüncəsi.</span>
            </h2>

            <p className="home-expertise__description">
              SpareHVAC, Aeroclima-nın layihələndirmə,
              quraşdırma və servis təcrübəsinə əsaslanır.
              Məqsədimiz sadəcə hissə satmaq deyil —
              sisteminizə uyğun düzgün həlli müəyyən etməkdir.
            </p>

            <ul className="home-expertise__benefits">
              {BENEFITS.map((benefit) => (
                <li key={benefit}>
                  <CheckCircle2
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link to="/about" className="home-expertise__link">
              Aeroclima haqqında
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div
            className={`home-expertise__viewer ${
              isExploded ? 'is-exploded' : ''
            }`}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') {
                setIsExploded(true)
              }
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === 'mouse') {
                setIsExploded(false)
              }
            }}
          >
            
          <div
            className="home-expertise__image-stage"
            role="img"
            aria-label="HVAC avadanlığının bütöv və hissələrə ayrılmış görünüşü"
          >
            {/* NORMAL — BÜTÖV HVAC */}

            <img
              src={hvacNormal}
              alt=""
              className="hvac-normal-image"
              draggable="false"
            />

            {/* HOVER — AYRILAN HİSSƏLƏR */}

            <div className="hvac-exploded-layers">
              {PIECES.map((piece) => (
                <img
                  key={piece.name}
                  src={piece.src}
                  alt=""
                  draggable="false"
                  className={`hvac-piece hvac-piece--${piece.name}`}
                />
              ))}
            </div>
          </div>


            
          </div>
        </div>
      </div>
    </section>
  )
}
