
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FileUp,
  ScanSearch,
  FileCheck2,
  PackageCheck,
} from 'lucide-react'

const PROCESS_STEPS = [
  {
    number: '01',
    icon: FileUp,
    title: 'Sorğu göndərin',
    description:
      'Məhsul kodunu, modelini, fotoşəkilini və ya texniki sənədini göndərin.',
  },
  {
    number: '02',
    icon: ScanSearch,
    title: 'Texniki yoxlama',
    description:
      'Məhsulun uyğunluğu, OEM kodu və mümkün alternativlər yoxlanılır.',
  },
  {
    number: '03',
    icon: FileCheck2,
    title: 'Təklif alın',
    description:
      'Qiymət, mövcudluq və təxmini çatdırılma müddəti təqdim edilir.',
  },
  {
    number: '04',
    icon: PackageCheck,
    title: 'Təhvil alın',
    description:
      'Sifariş təsdiqləndikdən sonra təchizat və çatdırılma təşkil olunur.',
  },
]

export default function HomeProcess() {
  return (
    <section
      className="home-process"
      aria-labelledby="home-process-title"
    >
      <div className="container">

        <div className="home-process__header">

          <div className="home-process__heading">
            <span className="home-process__eyebrow">
              NECƏ İŞLƏYİR?
            </span>

            <h2 id="home-process-title">
              Sorğudan çatdırılmaya
              <span> qədər.</span>
            </h2>
          </div>

          <p className="home-process__intro">
            Texniki ehtiyat hissələrinin satınalmasını
            daha sadə, aydın və izlənilə bilən
            prosesə çeviririk.
          </p>

        </div>

        <div className="home-process__steps">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon

            return (
              <div
                className="home-process__step"
                key={step.number}
              >
                <div className="home-process__step-top">
                  <span className="home-process__icon">
                    <Icon size={27} strokeWidth={1.6} />
                  </span>

                  <span className="home-process__number">
                    {step.number}
                  </span>
                </div>

                <div className="home-process__line">
                  <span />
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className="home-process__bottom">
          <p>
            Doğru hissəyə gedən yol sadə bir
            sorğudan başlayır.
          </p>

          <Link
            to="/contact"
            className="home-process__link"
          >
            Qiymət təklifi alın
            <ArrowUpRight size={19} />
          </Link>
        </div>

      </div>
    </section>
  )
}