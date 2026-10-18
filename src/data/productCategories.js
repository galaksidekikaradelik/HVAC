
export const PRODUCT_CATEGORIES = [
  {
    id: 1,
    title: 'Kompressorlar',
    slug: 'kompressorlar',
    description:
      'Split, VRF, paket tipli və chiller sistemləri üçün rotary, scroll, screw və reciprocating kompressorlar.',
    subcategories: [
      'Rotary kompressorlar',
      'Scroll kompressorlar',
      'Screw kompressorlar',
    ],
    image: 'compressors.webp',
    icon: 'compressor',
  },
  {
    id: 2,
    title: 'Elektron kartlar',
    slug: 'elektron-kartlar',
    description:
      'Kondisioner, VRF, chiller və dəqiq kontrollu sistemlər üçün idarəetmə, inverter və güc kartları.',
    subcategories: [
      'Əsas idarəetmə kartları',
      'İnverter kartları',
      'Display kartları',
    ],
    image: 'control-boards.webp',
    icon: 'board',
  },
  {
    id: 3,
    title: 'Fan və mühərriklər',
    slug: 'fan-ve-muherrikler',
    description:
      'Daxili və xarici bloklar, AHU və havalandırma qurğuları üçün AC, DC və EC mühərriklər.',
    subcategories: [
      'EC fanlar',
      'Aksial fanlar',
      'Mərkəzdənqaçma fanları',
    ],
    image: 'fans-motors.webp',
    icon: 'fan',
  },
  {
    id: 4,
    title: 'Sensorlar',
    slug: 'sensorlar',
    description:
      'Temperatur, rütubət, təzyiq, hava keyfiyyəti və axın ölçmələri üçün HVAC sensorları.',
    subcategories: [
      'Temperatur sensorları',
      'Rütubət sensorları',
      'Təzyiq sensorları',
    ],
    image: 'sensors.webp',
    icon: 'sensor',
  },
  {
    id: 5,
    title: 'Təzyiq releləri və transmitterlər',
    slug: 'tezyiq-releleri-ve-transmitterler',
    description:
      'Soyuducu və su dövrələri üçün yüksək/aşağı təzyiq releləri, diferensial sensorlar və transmitterlər.',
    subcategories: [
      'Pressostatlar',
      'Təzyiq transmitterləri',
      'Diferensial təzyiq releləri',
    ],
    image: 'pressure-switches.webp',
    icon: 'gauge',
  },
  {
    id: 6,
    title: 'Elektrik və mühafizə komponentləri',
    slug: 'elektrik-ve-muhafize-komponentleri',
    description:
      'HVAC panoları və qurğuları üçün kontaktor, rele, kondensator, sığorta və mühafizə elementləri.',
    subcategories: [
      'Kontaktorlar',
      'Aralıq releləri',
      'Kondensatorlar',
    ],
    image: 'electrical.webp',
    icon: 'electric',
  },
  {
    id: 7,
    title: 'Genişlənmə klapanları',
    slug: 'genislenme-klapanlari',
    description:
      'Soyuducu agent axınının dəqiq tənzimlənməsi üçün termostatik və elektron genişlənmə klapanları.',
    subcategories: [
      'Elektron genişlənmə klapanları',
      'Termostatik klapanlar',
      'Orifislər',
    ],
    image: 'expansion-valves.webp',
    icon: 'valve',
  },
  {
    id: 8,
    title: 'Solenoid klapanlar',
    slug: 'solenoid-klapanlar',
    description:
      'Soyuducu agent, su və digər HVAC mayeləri üçün gövdə, bobin və servis dəstləri.',
    subcategories: [
      'Soyuducu agent klapanları',
      'Su klapanları',
      'Solenoid bobinləri',
    ],
    image: 'solenoid-valves.webp',
    icon: 'valve',
  },
  {
    id: 9,
    title: 'Dörd yollu klapanlar',
    slug: 'dord-yollu-klapanlar',
    description:
      'İstilik nasosu, split və VRF sistemlərində dövrənin istiqamətini dəyişən reversing klapanlar.',
    subcategories: [
      'Reversing klapanlar',
      'Pilot klapanlar',
      'Bobinlər',
    ],
    image: 'four-way-valves.webp',
    icon: 'valve',
  },
  {
    id: 10,
    title: 'Chiller ehtiyat hissələri',
    slug: 'chiller-ehtiyat-hisseleri',
    description:
      'Hava və su soyutmalı chillerlər üçün kart, sensor, flow switch, fan və soyuducu dövrə hissələri.',
    subcategories: [
      'Flow switchlər',
      'Chiller kartları',
      'Fan və motorlar',
    ],
    image: 'chiller-parts.webp',
    icon: 'parts',
  },
  {
    id: 11,
    title: 'VRF ehtiyat hissələri',
    slug: 'vrf-ehtiyat-hisseleri',
    description:
      'VRF/VRV xarici və daxili blokları üçün kompressor, kart, sensor, EEV və fan komponentləri.',
    subcategories: [
      'VRF kompressorları',
      'İnverter və əsas kartlar',
      'EEV və klapanlar',
    ],
    image: 'vrf-parts.webp',
    icon: 'parts',
  },
  {
    id: 12,
    title: 'Kondisioner ehtiyat hissələri',
    slug: 'kondisioner-ehtiyat-hisseleri',
    description:
      'Split, kaset, kanal və salon tipli kondisionerlər üçün gündəlik servis və təmir hissələri.',
    subcategories: [
      'Daxili blok hissələri',
      'Xarici blok hissələri',
      'Pult və displaylər',
    ],
    image: 'air-conditioner-parts.webp',
    icon: 'parts',
  },
  {
    id: 13,
    title: 'AHU və havalandırma hissələri',
    slug: 'ahu-ve-havalandirma-hisseleri',
    description:
      'Hava emalı qurğuları, ventilyatorlar və kanal sistemləri üçün aktuator, filtr, kəmər və nəzarət hissələri.',
    subcategories: [
      'Damper aktuatorları',
      'Filtr dəstləri',
      'Kəmər və kasnaqlar',
    ],
    image: 'ahu-parts.webp',
    icon: 'fan',
  },
  {
    id: 14,
    title: 'Nasos və qazan hissələri',
    slug: 'nasos-ve-qazan-hisseleri',
    description:
      'İsitmə və soyutma su dövrələri üçün nasos, burner, idarəetmə və hidravlik komponentlər.',
    subcategories: [
      'Nasos servis dəstləri',
      'Burner hissələri',
      'Qazan kontrollerləri',
    ],
    image: 'pump-boiler-parts.webp',
    icon: 'parts',
  },
  {
    id: 15,
    title: 'Filtrlər',
    slug: 'filtrler',
    description:
      'AHU, FCU, dəqiq kontrollu və tibbi havalandırma sistemləri üçün müxtəlif sinifli hava filtrləri.',
    subcategories: [
      'Panel filtrlər',
      'Torba filtrlər',
      'Kompakt filtrlər',
    ],
    image: 'air-filters.webp',
    icon: 'filter',
  },
  {
    id: 16,
    title: 'Kontrol və avtomatika',
    slug: 'kontrol-ve-avtomatika',
    description:
      'BMS, otaq idarəetməsi və avadanlıq avtomatikası üçün kontroller, termostat, aktuator və interfeyslər.',
    subcategories: [
      'HVAC kontrollerləri',
      'Otaq termostatları',
      'Damper aktuatorları',
    ],
    image: 'controls-automation.webp',
    icon: 'board',
  },
  {
    id: 17,
    title: 'Soyuducu dövrə komponentləri',
    slug: 'soyuducu-dovre-komponentleri',
    description:
      'Soyuducu dövrənin qurulması və servisi üçün filtr-drier, sight glass, akkumulyator və separatorlar.',
    subcategories: [
      'Filtr-drierlər',
      'Sight glasslar',
      'Maye akkumulyatorları',
    ],
    image: 'refrigeration-parts.webp',
    icon: 'parts',
  },
]

export const getProductCategory = (slug) =>
  PRODUCT_CATEGORIES.find(
    (category) => category.slug === slug
  )
