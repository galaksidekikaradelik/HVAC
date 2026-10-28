export const COMPRESSOR_GROUPS = [
  {
    id: '01.01',
    title: 'Scroll kompressorlar',
    slug: 'scroll-kompressorlar',
    icon: 'scroll',
    description:
      'Sabit, dəyişən sürətli və Digital Scroll kompressorlar.',
    children: [
      {
        id: '01.01.01',
        title: 'Sabit sürətli',
        slug: 'sabit-suretli',
      },
      {
        id: '01.01.02',
        title: 'İnverter / dəyişən sürətli',
        slug: 'inverter-deyisen-suretli',
      },
      {
        id: '01.01.03',
        title: 'Digital Scroll',
        slug: 'digital-scroll',
      },
    ],
  },

  {
    id: '01.02',
    title: 'Rotary kompressorlar',
    slug: 'rotary-kompressorlar',
    icon: 'rotary',
    description:
      'Single Rotary, Twin Rotary və Inverter Rotary.',
    children: [
      {
        id: '01.02.01',
        title: 'Single Rotary',
        slug: 'single-rotary',
      },
      {
        id: '01.02.02',
        title: 'Twin Rotary',
        slug: 'twin-rotary',
      },
      {
        id: '01.02.03',
        title: 'Inverter Rotary',
        slug: 'inverter-rotary',
      },
    ],
  },

  {
    id: '01.03',
    title: 'Pistonlu kompressorlar',
    slug: 'pistonlu-kompressorlar',
    icon: 'piston',
    description:
      'Hermetik, yarı hermetik və açıq tip kompressorlar.',
    children: [
      {
        id: '01.03.01',
        title: 'Hermetik',
        slug: 'hermetik',
      },
      {
        id: '01.03.02',
        title: 'Yarı hermetik (Semi-Hermetic)',
        slug: 'yari-hermetik',
      },
      {
        id: '01.03.03',
        title: 'Açıq tip (Open Type)',
        slug: 'aciq-tip',
      },
    ],
  },

  {
    id: '01.04',
    title: 'Vintli kompressorlar (Screw)',
    slug: 'vintli-kompressorlar',
    icon: 'screw',
    description:
      'Single Screw, Twin Screw və sürətə görə seçimlər.',
    children: [
      {
        id: '01.04.01',
        title: 'Single Screw',
        slug: 'single-screw',
      },
      {
        id: '01.04.02',
        title: 'Twin Screw',
        slug: 'twin-screw',
      },
      {
        id: '01.04.03',
        title: 'Sabit / dəyişən sürətli',
        slug: 'sabit-deyisen-suretli',
      },
    ],
  },

  {
    id: '01.05',
    title: 'Mərkəzdənqaçma və Turbo',
    slug: 'merkezdenqacma-ve-turbo',
    icon: 'turbo',
    description:
      'Centrifugal, Oil-Free və Turbo kompressorlar.',
    children: [
      {
        id: '01.05.01',
        title: 'Centrifugal',
        slug: 'centrifugal',
      },
      {
        id: '01.05.02',
        title: 'Oil-Free / Magnetic Bearing',
        slug: 'oil-free-magnetic-bearing',
      },
      {
        id: '01.05.03',
        title: 'Turbo',
        slug: 'turbo',
      },
    ],
  },

  {
    id: '01.06',
    title: 'Kompressor blokları və dəstlər',
    slug: 'kompressor-bloklari-ve-destler',
    icon: 'assembly',
    description:
      'Çoxkompressorlu sistemlər və hazır dəyişdirmə dəstləri.',
    children: [
      {
        id: '01.06.01',
        title: 'Tandem / Multi-Compressor',
        slug: 'tandem-multi-compressor',
      },
      {
        id: '01.06.02',
        title: 'Compressor & Drive Kits',
        slug: 'compressor-drive-kits',
      },
      {
        id: '01.06.03',
        title: 'OEM Replacement Assemblies',
        slug: 'oem-replacement-assemblies',
      },
    ],
  },

  {
    id: '01.07',
    title: 'Kompressor ehtiyat hissələri',
    slug: 'kompressor-ehtiyat-hisseleri',
    icon: 'parts',
    description:
      'Kompressorların servis və təmiri üçün ehtiyat hissələri.',
    children: [
      {
        id: '01.07.01',
        title: 'Yağ nasosları və filtrlər',
        slug: 'yag-nasoslari-ve-filtrler',
      },
      {
        id: '01.07.02',
        title: 'Klapan və conta dəstləri',
        slug: 'klapan-ve-conta-destleri',
      },
      {
        id: '01.07.03',
        title: 'Crankcase Heater',
        slug: 'crankcase-heater',
      },
      {
        id: '01.07.04',
        title: 'Mexaniki təmir dəstləri',
        slug: 'mexaniki-temir-destleri',
      },
    ],
  },
]

export function getCompressorGroup(slug) {
  return COMPRESSOR_GROUPS.find(
    (group) => group.slug === slug
  )
}

export function getCompressorSubcategory(groupSlug, childSlug) {
  const group = getCompressorGroup(groupSlug)

  return group?.children.find(
    (child) => child.slug === childSlug
  )
}