
import { Link } from 'react-router-dom'
import { ArrowRight, Clock3 } from 'lucide-react'

import compressorImage from '../../assets/images/articles/article-compressor.webp'
import oemImage from '../../assets/images/articles/article-oem.webp'
import deviceLabelImage from '../../assets/images/articles/article-device-label.webp'

const ARTICLES = [
  {
    id: 'compressor-code',
    category: 'Seçim bələdçisi',
    minutes: 7,
    title: 'Kompressor kodunu necə düzgün oxumaq olar?',
    description:
      'Model, soyuducu agent və elektrik göstəricilərini səhvsiz müəyyən etməyin əsasları.',
    image: compressorImage,
    imageAlt: 'HVAC kompressoru və üzərindəki texniki etiket',
  },
  {
    id: 'oem-alternatives',
    category: 'Texniki yoxlama',
    minutes: 5,
    title: 'OEM və muadil ehtiyat hissəsi arasında seçim',
    description:
      'Qiymətdən kənar uyğunluq, zəmanət və istismar risklərini necə qiymətləndirməli.',
    image: oemImage,
    imageAlt: 'HVAC istilik dəyişdiricisi və ehtiyat komponentlər',
  },
  {
    id: 'device-label',
    category: 'Servis qeydi',
    minutes: 4,
    title: 'Cihaz etiketindən hansı məlumatlar lazımdır?',
    description:
      'Daha sürətli və dəqiq təklif üçün fotoşəkildə görünməli olan məlumatlar.',
    image: deviceLabelImage,
    imageAlt: 'HVAC avadanlığının texniki yoxlanılması',
  },
]

export default function HomeArticles() {
  return (
    <section
      className="home-articles section"
      aria-labelledby="home-articles-title"
    >
      <div className="container">

        <div className="home-articles__heading">

          <div className="home-articles__heading-content">
           

            <h2 id="home-articles-title">
              Düzgün qərar üçün aydın məlumat
            </h2>

            <p>
              HVAC sistemləri, ehtiyat hissələri və texniki
              xidmətlə bağlı faydalı məqalələrimiz ilə
              daha düzgün seçim edin.
            </p>
          </div>

          <Link
            to="/technical-center"
            className="home-articles__all-link"
          >
            Bütün məqalələr
            <ArrowRight size={20} strokeWidth={1.8} />
          </Link>

        </div>

        <div className="home-articles__grid">
          {ARTICLES.map((article) => (
            <article
              className="home-articles__card"
              key={article.id}
            >
              <Link
                to="/technical-center"
                className="home-articles__image-link"
                aria-label={article.title}
              >
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  loading="lazy"
                />
              </Link>

              <div className="home-articles__card-body">

                <div className="home-articles__meta">
                  <span className="home-articles__category">
                    {article.category}
                  </span>

                  <span className="home-articles__read-time">
                    <Clock3 size={15} strokeWidth={1.7} />
                    {article.minutes} dəq
                  </span>
                </div>

                <h3 className="home-articles__card-title">
                  <Link to="/technical-center">
                    {article.title}
                  </Link>
                </h3>

                <p className="home-articles__card-description">
                  {article.description}
                </p>

                <Link
                  to="/technical-center"
                  className="home-articles__read-link"
                >
                  Oxumağa davam et
                  <ArrowRight
                    size={19}
                    strokeWidth={1.8}
                  />
                </Link>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
