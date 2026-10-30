/* =========================================
   SPAREHVAC
   03 — ELECTRONIC & ELECTRICAL PARTS
========================================= */

function createGroup(
  id,
  title,
  slug,
  description,
  items,
  note = ''
) {
  return {
    id,
    title,
    slug,
    description,
    note,

    children: items.map(
      ([code, childTitle, childSlug, english = '']) => ({
        id: `${id}.${code}`,
        title: childTitle,
        slug: childSlug,
        english,
      })
    ),
  }
}

export const ELECTRICAL_GROUPS = [

  /* =======================================
     03.01 — MAIN CONTROL PCB
  ======================================= */

  createGroup(
    '03.01',
    'Əsas idarəetmə kartları (Main Control PCB)',
    'esas-idareetme-kartlari',
    'HVAC avadanlıqlarının əsas OEM idarəetmə kartları.',
    [
      [
        '01',
        'Daxili blok əsas idarəetmə kartları',
        'daxili-blok-esas-idareetme-kartlari',
        'Indoor Main PCB',
      ],
      [
        '02',
        'Xarici blok əsas idarəetmə kartları',
        'xarici-blok-esas-idareetme-kartlari',
        'Outdoor Main PCB',
      ],
      [
        '03',
        'Chiller və Rooftop idarəetmə kartları',
        'chiller-rooftop-idareetme-kartlari',
        'Chiller / Rooftop Main PCB',
      ],
      [
        '04',
        'AHU və Fan-Coil idarəetmə kartları',
        'ahu-fan-coil-idareetme-kartlari',
        'AHU / FCU Main PCB',
      ],
      [
        '05',
        'Köməkçi idarəetmə kartları',
        'komekci-idareetme-kartlari',
        'Auxiliary / Sub Control PCB',
      ],
    ],
    'Tam OEM kodu, cihaz modeli və PCB reviziyası bu qrupda əsas identifikatorlardır.'
  ),

  /* =======================================
     03.02 — INVERTER & DRIVER PCB
  ======================================= */

  createGroup(
    '03.02',
    'İnverter və sürücü kartları',
    'inverter-ve-surucu-kartlari',
    'Kompressor və fan mühərriklərinin inverter və sürücü kartları.',
    [
      [
        '01',
        'Kompressor inverter kartları',
        'kompressor-inverter-kartlari',
        'Compressor Inverter PCB',
      ],
      [
        '02',
        'Fan motoru sürücü kartları',
        'fan-motoru-surucu-kartlari',
        'Fan Driver PCB',
      ],
      [
        '03',
        'İnverter idarəetmə və gate-driver kartları',
        'inverter-idareetme-gate-driver-kartlari',
        'Inverter Control / Gate Driver PCB',
      ],
      [
        '04',
        'Komplekt OEM inverter blokları',
        'komplekt-oem-inverter-bloklari',
        'Inverter Drive Assemblies',
      ],
    ],
    'Bütöv inverter kartı burada, ayrıca satılan IPM və IGBT güc modulları isə 03.03-də yerləşəcək.'
  ),

  /* =======================================
     03.03 — POWER ELECTRONICS
  ======================================= */

  createGroup(
    '03.03',
    'Güc elektronikası modulları',
    'guc-elektronikasi-modullari',
    'Ayrıca satılan elektron güc modulları və OEM dəstləri.',
    [
      [
        '01',
        'IPM güc modulları',
        'ipm-guc-modullari',
        'Intelligent Power Modules',
      ],
      [
        '02',
        'IGBT modulları',
        'igbt-modullari',
        'IGBT Power Modules',
      ],
      [
        '03',
        'Güc faktoru korreksiyası modulları',
        'guc-faktoru-korreksiyasi-modullari',
        'PFC Modules',
      ],
      [
        '04',
        'Düzləndirici və diod körpüsü modulları',
        'duzlendirici-diod-korpusu-modullari',
        'Rectifier / Diode Bridge Modules',
      ],
      [
        '05',
        'Komplekt güc modulları və OEM dəstləri',
        'komplekt-guc-modullari-oem-destleri',
        'Power Module Assemblies',
      ],
    ],
    'Bu qrup ayrı OEM hissəsi kimi satılan güc modullarına aiddir; PCB üzərində inteqrasiya olunmuş çip ayrıca məhsul yaradılmamalıdır.'
  ),

  /* =======================================
     03.04 — COMMUNICATION & INTERFACE
  ======================================= */

  createGroup(
    '03.04',
    'Kommunikasiya və interfeys kartları',
    'kommunikasiya-ve-interfeys-kartlari',
    'Cihazdaxili kommunikasiya və interfeys üçün OEM kartlar.',
    [
      [
        '01',
        'Daxili və xarici blok kommunikasiya kartları',
        'daxili-xarici-blok-kommunikasiya-kartlari',
        'Indoor / Outdoor Communication PCB',
      ],
      [
        '02',
        'Kommunikasiya şin interfeys kartları',
        'kommunikasiya-sin-interfeys-kartlari',
        'Communication Bus Interface PCB',
      ],
      [
        '03',
        'OEM protokol keçid kartları',
        'oem-protokol-kecid-kartlari',
        'Protocol Gateway PCB',
      ],
      [
        '04',
        'Giriş-çıxış genişləndirmə kartları',
        'giris-cixis-genislendirme-kartlari',
        'I/O Expansion PCB',
      ],
      [
        '05',
        'Siqnal çevirmə və izolyasiya kartları',
        'siqnal-cevirme-izolyasiya-kartlari',
        'Signal Converter / Isolator PCB',
      ],
    ],
    'Cihazın OEM kommunikasiya kartları burada, ümumi BMS kontrollerləri və avtomatika avadanlıqları isə 05-ci kateqoriyada saxlanılacaq.'
  ),

  /* =======================================
     03.05 — DISPLAY & USER INTERFACE
  ======================================= */

  createGroup(
    '03.05',
    'Displey və istifadəçi interfeysi kartları',
    'displey-ve-istifadeci-interfeysi-kartlari',
    'HVAC cihazlarının displey və idarəetmə panel kartları.',
    [
      [
        '01',
        'Displey elektron kartları',
        'displey-elektron-kartlari',
        'Display PCB',
      ],
      [
        '02',
        'İnfraqırmızı siqnal qəbuledici kartlar',
        'infraqirmizi-siqnal-qebuledici-kartlar',
        'IR Receiver PCB',
      ],
      [
        '03',
        'Düymə və sensor panel kartları',
        'duyme-sensor-panel-kartlari',
        'Keypad / Touch PCB',
      ],
      [
        '04',
        'İnteqrasiya olunmuş HMI displey modulları',
        'inteqrasiya-olunmus-hmi-displey-modullari',
        'HMI Display Board Assemblies',
      ],
    ],
    'Daxili displey və receiver PCB burada yerləşir; müstəqil otaq termostatı və uzaqdan idarəetmə pultu 05-ci kateqoriyaya aiddir.'
  ),

  /* =======================================
     03.06 — POWER SUPPLIES
  ======================================= */

  createGroup(
    '03.06',
    'Qida blokları və transformatorlar',
    'qida-bloklari-ve-transformatorlar',
    'Elektrik qidalanması və gərginliyin çevrilməsi komponentləri.',
    [
      [
        '01',
        'OEM qida elektron kartları',
        'oem-qida-elektron-kartlari',
        'Power Supply PCB',
      ],
      [
        '02',
        'İmpuls qida blokları',
        'impuls-qida-bloklari',
        'Switching Power Supply Modules',
      ],
      [
        '03',
        'İdarəetmə transformatorları',
        'idareetme-transformatorlari',
        'Control Transformers',
      ],
      [
        '04',
        'AC/DC və DC/DC çevirici modullar',
        'ac-dc-dc-dc-cevirici-modullar',
        'Power Converter Modules',
      ],
      [
        '05',
        'Reaktorlar və induktivlik komponentləri',
        'reaktorlar-ve-induktivlik-komponentleri',
        'Reactors / Chokes / Inductors',
      ],
    ],
    'Bu qrup cihazı elektriklə qidalandıran və gərginliyi çevirən komponentlər üçündür.'
  ),

  /* =======================================
     03.07 — CONTACTORS, RELAYS, STARTERS
  ======================================= */

  createGroup(
    '03.07',
    'Kontaktorlar, relelər və starterlər',
    'kontaktorlar-releler-ve-starterler',
    'Elektrik açma-bağlama və mühərrik starter komponentləri.',
    [
      [
        '01',
        'Güc kontaktorları',
        'guc-kontaktorlari',
        'Power Contactors',
      ],
      [
        '02',
        'İdarəetmə və köməkçi relelər',
        'idareetme-ve-komekci-releler',
        'Control / Auxiliary Relays',
      ],
      [
        '03',
        'Elektron bərkhal releləri',
        'elektron-berkhal-releleri',
        'Solid-State Relays',
      ],
      [
        '04',
        'Vaxt gecikdirmə releləri',
        'vaxt-gecikdirme-releleri',
        'Time Delay Relays',
      ],
      [
        '05',
        'Motor starterləri və OEM starter dəstləri',
        'motor-starterleri-oem-starter-destleri',
        'Motor Starters / Starter Kits',
      ],
    ],
    'Açma-bağlama funksiyalı elektrik komponentləri burada, qoruma funksiyalı relelər isə 03.09-da saxlanılacaq.'
  ),

  /* =======================================
     03.08 — CAPACITORS
  ======================================= */

  createGroup(
    '03.08',
    'Kondensatorlar',
    'kondensatorlar',
    'HVAC sistemləri üçün iş, başlanğıc və xüsusi təyinatlı kondensatorlar.',
    [
      [
        '01',
        'İş kondensatorları',
        'is-kondensatorlari',
        'Motor Run Capacitors',
      ],
      [
        '02',
        'Başlanğıc kondensatorları',
        'baslangic-kondensatorlari',
        'Motor Start Capacitors',
      ],
      [
        '03',
        'İkili iş kondensatorları',
        'ikili-is-kondensatorlari',
        'Dual Run Capacitors',
      ],
      [
        '04',
        'DC-Link kondensatorları',
        'dc-link-kondensatorlari',
        'DC-Link Capacitors',
      ],
      [
        '05',
        'OEM xüsusi təyinatlı kondensatorlar',
        'oem-xususi-teyinatli-kondensatorlar',
        'OEM Specialized Capacitors',
      ],
    ],
    'µF, VAC/VDC, ölçü, tolerans və terminal forması bu kateqoriyanın əsas filtrləridir.'
  ),

  /* =======================================
     03.09 — ELECTRICAL PROTECTION
  ======================================= */

  createGroup(
    '03.09',
    'Elektrik qoruma və filtrasiya komponentləri',
    'elektrik-qoruma-ve-filtrasiya-komponentleri',
    'HVAC cihazları üçün elektrik təhlükəsizliyi və filtrasiya hissələri.',
    [
      [
        '01',
        'Qoruyucular və qoruyucu yuvaları',
        'qoruyucular-ve-qoruyucu-yuvalari',
        'Fuses / Fuse Holders',
      ],
      [
        '02',
        'Avtomatik açarlar və ayırıcılar',
        'avtomatik-acarlar-ve-ayiricilar',
        'Circuit Breakers / Disconnects',
      ],
      [
        '03',
        'Termik və həddindən artıq yüklənmə qoruyucuları',
        'termik-ve-artiq-yuklenme-qoruyuculari',
        'Thermal / Overload Protectors',
      ],
      [
        '04',
        'Faza və gərginlik nəzarət releləri',
        'faza-ve-gerginlik-nezaret-releleri',
        'Phase / Voltage Monitoring Relays',
      ],
      [
        '05',
        'Gərginlik impulsundan qoruma modulları',
        'gerginlik-impulsundan-qoruma-modullari',
        'Surge Protection Devices',
      ],
      [
        '06',
        'EMI və elektrik səs-küyü filtr kartları',
        'emi-elektrik-ses-kuyu-filtr-kartlari',
        'EMI / Noise Filter PCB',
      ],
      [
        '07',
        'Elektrik təhlükəsizlik açarları və interloklar',
        'elektrik-tehlukesizlik-acarlari-interloklar',
        'Safety Switches / Interlocks',
      ],
    ],
    'Məsələn, OEM Noise Filter PCB adi Main PCB deyil; əsas funksiyası elektrik filtrasiyası olduğu üçün burada təsnif edilməlidir.'
  ),

  /* =======================================
     03.10 — WIRING & CONNECTORS
  ======================================= */

  createGroup(
    '03.10',
    'Kabel dəstləri, konnektorlar və elektrik aksesuarları',
    'kabel-destleri-konnektorlar-elektrik-aksesuarlari',
    'HVAC cihazlarına aid OEM elektrik kabel və birləşmə hissələri.',
    [
      [
        '01',
        'OEM elektrik kabel dəstləri',
        'oem-elektrik-kabel-destleri',
        'Wiring Harness Assemblies',
      ],
      [
        '02',
        'PCB fişləri və konnektor dəstləri',
        'pcb-fisleri-konnektor-destleri',
        'PCB Connector Kits',
      ],
      [
        '03',
        'Terminal blokları və bağlantı klemmələri',
        'terminal-bloklari-ve-baglanti-klemmeleri',
        'Terminal Blocks',
      ],
      [
        '04',
        'Kompressor və motor elektrik qoşulma dəstləri',
        'kompressor-motor-elektrik-qosulma-destleri',
        'Motor / Compressor Harness Kits',
      ],
      [
        '05',
        'Kommunikasiya və siqnal kabel dəstləri',
        'kommunikasiya-siqnal-kabel-destleri',
        'Communication / Signal Cable Assemblies',
      ],
    ],
    'Bu hissə ümumi kabel satışı üçün deyil, HVAC cihazları ilə əlaqəli OEM elektrik ehtiyat hissələri üçündür.'
  ),
]

export function getElectricalGroup(slug) {
  return ELECTRICAL_GROUPS.find(
    (group) => group.slug === slug
  )
}

export function getElectricalSubcategory(groupSlug, childSlug) {
  return getElectricalGroup(groupSlug)?.children.find(
    (child) => child.slug === childSlug
  )
}