export const PRODUCT_CATEGORIES = [
  {
    id: 1,
    title: 'Kompressorlar',
    slug: 'kompressorlar',
    icon: 'compressor',
    image: 'compressors.png',
    description:
      'HVAC və soyutma sistemləri üçün kompressorlar.',
    subcategories: [],
  },
  {
    id: 2,
    title: 'Soyuducu kontur komponentləri',
    slug: 'soyuducu-kontur-komponentleri',
    icon: 'coil',
    image: 'refrigeration-parts.png',
    description:
      'Soyuducu dövrənin işləməsini təmin edən komponentlər.',
    subcategories: [],
  },
  {
    id: 3,
    title: 'Elektron kartlar və elektrik hissələri',
    slug: 'elektron-kartlar-elektrik-hisseleri',
    icon: 'board',
    image: 'control-boards.png',
    description:
      'İdarəetmə kartları və elektrik komponentləri.',
    subcategories: [],
  },
  {
    id: 4,
    title: 'Fanlar və mühərriklər',
    slug: 'fanlar-ve-muherrikler',
    icon: 'fan',
    image: 'fans-motors.png',
    description:
      'Havalandırma və soyutma sistemləri üçün fan və mühərriklər.',
    subcategories: [],
  },
  {
    id: 5,
    title: 'Sensorlar və avtomatika',
    slug: 'sensorlar-ve-avtomatika',
    icon: 'sensor',
    image: 'sensors.png',
    description:
      'Ölçmə, nəzarət və avtomatik idarəetmə komponentləri.',
    subcategories: [],
  },
  {
    id: 6,
    title: 'İstilik mübadilə aparatları',
    slug: 'istilik-mubadile-aparatlari',
    icon: 'coil',
    image: 'heat-exchangers.png',
    description:
      'İstilik ötürülməsi üçün istifadə olunan avadanlıqlar.',
    subcategories: [],
  },
  {
    id: 7,
    title: 'Filtrlər və hava komponentləri',
    slug: 'filtrler-ve-hava-komponentleri',
    icon: 'filter',
    image: 'air-filters.png',
    description:
      'Hava filtrasiyası və hava sistemləri üçün komponentlər.',
    subcategories: [],
  },
  {
    id: 8,
    title: 'Nasoslar və hidronika',
    slug: 'nasoslar-ve-hidronika',
    icon: 'pipe',
    image: 'pumps-hydronics.png',
    description:
      'Su dövriyyəsi və hidronik sistem komponentləri.',
    subcategories: [],
  },
  {
    id: 9,
    title: 'Qazan və isitmə ehtiyat hissələri',
    slug: 'qazan-ve-isitme-ehtiyat-hisseleri',
    icon: 'parts',
    image: 'pump-boiler-parts.png',
    description:
      'Qazan və isitmə sistemlərinin ehtiyat hissələri.',
    subcategories: [],
  },
  {
    id: 10,
    title: 'Kondensat və drenaj sistemləri',
    slug: 'kondensat-ve-drenaj-sistemleri',
    icon: 'pipe',
    image: 'condensate-drainage.png',
    description:
      'Kondensatın toplanması və kənarlaşdırılması üçün komponentlər.',
    subcategories: [],
  },
  {
    id: 11,
    title: 'Korpus və konstruktiv OEM hissələr',
    slug: 'korpus-ve-konstruktiv-oem-hisseler',
    icon: 'parts',
    image: 'oem-body-parts.png',
    description:
      'Avadanlıqların korpus və konstruktiv ehtiyat hissələri.',
    subcategories: [],
  },
  {
    id: 12,
    title: 'Servis və ölçü avadanlıqları',
    slug: 'servis-ve-olcu-avadanliqlari',
    icon: 'gauge',
    image: 'service-tools.png',
    description:
      'Texniki servis, diaqnostika və ölçmə avadanlıqları.',
    subcategories: [],
  },
]

export function getProductCategory(slug) {
  return PRODUCT_CATEGORIES.find(
    (category) => category.slug === slug
  )
}