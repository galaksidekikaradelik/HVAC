/*
  Real məhsullar əlavə ediləndə bu massiv doldurulacaq.

  Nümunə obyekt strukturu:

  {
    id: 'unique-id',
    title: 'Məhsul adı',
    categorySlug: 'kompressorlar',
    groupSlug: 'scroll-kompressorlar',
    subcategorySlug: 'sabit-suretli',
    brand: 'İstehsalçı',
    model: 'Model kodu',
    oemCode: 'OEM kodu',
    refrigerant: 'R410A',
    powerKw: 5.5,
    voltage: '380-415 V',
    availability: 'Sifarişlə',
    image: '/images/products/example.webp',
  }

  Yalnız təsdiqlənmiş real məhsulları daxil edəcəyik.
*/

export const CATALOG_PRODUCTS = []