/* =========================================
   SPAREHVAC
   05 — SENSORLAR VƏ AVTOMATİKA
========================================= */

function createSlug(value) {
  return value
    .toLocaleLowerCase('az')
    .replace(/ə/g, 'e')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ğ/g, 'g')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

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

    children: items.map(([code, title, english]) => ({
      id: `${id}.${code}`,
      title,
      english,
      slug: createSlug(title),
    })),
  }
}

export const SENSORS_AUTOMATION_GROUPS = [

  /* =======================================
     05.01 — TEMPERATURE SENSORS
  ======================================= */

  createGroup(
    '05.01',
    'Temperatur sensorları və problar',
    'temperatur-sensorlari-ve-problar',
    'HVAC sistemlərində temperaturun ölçülməsi üçün sensorlar və problar.',
    [
      [
        '01',
        'Kanal temperatur sensorları',
        'Duct Temperature Sensors',
      ],
      [
        '02',
        'Daldırma temperatur sensorları',
        'Immersion Temperature Sensors',
      ],
      [
        '03',
        'Boru səthi temperatur sensorları',
        'Strap-On / Surface Sensors',
      ],
      [
        '04',
        'Otaq temperatur sensorları',
        'Room Temperature Sensors',
      ],
      [
        '05',
        'Xarici hava temperatur sensorları',
        'Outdoor Temperature Sensors',
      ],
      [
        '06',
        'Kabel tipli və uzaqdan ölçən problar',
        'Cable / Remote Temperature Probes',
      ],
    ],
    'NTC, PTC, Pt100, Pt1000 və Ni1000 ayrı kateqoriyalar yox, sensor elementi filtridir.'
  ),

  /* =======================================
     05.02 — PRESSURE SENSORS
  ======================================= */

  createGroup(
    '05.02',
    'Təzyiq sensorları və transmitterlər',
    'tezyiq-sensorlari-ve-transmitterler',
    'Soyuducu agent, su və hava sistemləri üçün təzyiq ölçmə cihazları.',
    [
      [
        '01',
        'Soyuducu agent təzyiq transmitterləri',
        'Refrigerant Pressure Transmitters',
      ],
      [
        '02',
        'Su və hidronik təzyiq sensorları',
        'Hydronic Pressure Sensors',
      ],
      [
        '03',
        'Hava diferensial təzyiq transmitterləri',
        'Air Differential Pressure Transmitters',
      ],
      [
        '04',
        'Maye diferensial təzyiq sensorları',
        'Liquid Differential Pressure Sensors',
      ],
      [
        '05',
        'Mütləq və barometrik təzyiq sensorları',
        'Absolute / Barometric Pressure Sensors',
      ],
    ],
    'Ölçən transmitter və yalnız həddə çatanda kontakt dəyişən pressostat fərqli məhsullardır. Pressostat 05.09-a aiddir.'
  ),

  /* =======================================
     05.03 — HUMIDITY & AIR QUALITY
  ======================================= */

  createGroup(
    '05.03',
    'Rütubət və hava keyfiyyəti sensorları',
    'rutubet-ve-hava-keyfiyyeti-sensorlari',
    'Rütubət, CO₂, VOC və hissəcik konsentrasiyasını ölçən sensorlar.',
    [
      [
        '01',
        'Otaq rütubət sensorları',
        'Room Humidity Sensors',
      ],
      [
        '02',
        'Kanal rütubət sensorları',
        'Duct Humidity Sensors',
      ],
      [
        '03',
        'Temperatur-rütubət kombinə sensorları',
        'Combined Temperature / Humidity Sensors',
      ],
      [
        '04',
        'CO₂ sensorları',
        'CO₂ Air Quality Sensors',
      ],
      [
        '05',
        'VOC hava keyfiyyəti sensorları',
        'VOC Sensors',
      ],
      [
        '06',
        'PM2.5 / PM10 hissəcik sensorları',
        'Particulate Matter Sensors',
      ],
    ],
    'Eyni korpusda CO₂, temperatur və rütubət ölçən cihaz üçün ayrıca məhsul nüsxələri yaratmırıq.'
  ),

  /* =======================================
     05.04 — FLOW, LEVEL & LEAK
  ======================================= */

  createGroup(
    '05.04',
    'Debi, səviyyə və su sızması sensorları',
    'debi-seviyye-ve-su-sizmasi-sensorlari',
    'Hava və maye axını, səviyyə və sızma nəzarəti üçün sensorlar.',
    [
      [
        '01',
        'Hava sərfi sensorları',
        'Airflow Sensors / Transmitters',
      ],
      [
        '02',
        'Su və hidronik debi sensorları',
        'Liquid Flow Sensors',
      ],
      [
        '03',
        'Soyuducu agent səviyyə sensorları',
        'Refrigerant Liquid Level Sensors',
      ],
      [
        '04',
        'Su çəni və maye səviyyə sensorları',
        'Tank Level Sensors',
      ],
      [
        '05',
        'Su sızması aşkarlama sensorları',
        'Water Leak Detection Sensors',
      ],
    ],
    'Kondensat nasosunun şamandırası və səviyyə hissələri 10-cu kateqoriyada saxlanılır.'
  ),

  /* =======================================
     05.05 — GAS & REFRIGERANT DETECTORS
  ======================================= */

  createGroup(
    '05.05',
    'Qaz və soyuducu agent detektorları',
    'qaz-ve-soyuducu-agent-detektorlari',
    'Soyuducu agent və qaz sızmalarının aşkarlanması üçün detektorlar.',
    [
      [
        '01',
        'A2L soyuducu agent detektorları',
        'A2L Refrigerant Detectors',
      ],
      [
        '02',
        'A3 soyuducu agent detektorları',
        'A3 Refrigerant Detectors',
      ],
      [
        '03',
        'Sənaye soyuducu agent və NH₃ detektorları',
        'Industrial Refrigerant / Ammonia Detectors',
      ],
      [
        '04',
        'CO / NO₂ qaraj və hava monitorları',
        'CO / NO₂ Gas Detectors',
      ],
      [
        '05',
        'Qaz detektor idarəetmə və alarm modulları',
        'Gas Detection Controllers / Alarm Modules',
      ],
    ],
    'Ölçülən qaz, təsdiqlənmiş agentlər, deteksiya prinsipi və təhlükəsizlik sertifikatı kritik parametrlərdir.'
  ),

  /* =======================================
     05.06 — THERMOSTATS & ROOM CONTROLS
  ======================================= */

  createGroup(
    '05.06',
    'Termostatlar və otaq idarəetmə cihazları',
    'termostatlar-ve-otaq-idareetme-cihazlari',
    'Otaq temperaturu və rütubətinin idarə olunması üçün cihazlar.',
    [
      [
        '01',
        'Standart otaq termostatları',
        'Room Thermostats',
      ],
      [
        '02',
        'Proqramlaşdırılan termostatlar',
        'Programmable Thermostats',
      ],
      [
        '03',
        'Fan-Coil otaq idarəetmə cihazları',
        'Fan-Coil Room Controllers',
      ],
      [
        '04',
        'Ağıllı və şəbəkəyə qoşulan termostatlar',
        'Smart / Connected Thermostats',
      ],
      [
        '05',
        'Rütubət tənzimləyiciləri',
        'Hygrostats / Humidity Controllers',
      ],
    ],
    'Burada tam hazır otaq idarəetmə cihazları yerləşir; cihazın daxili displey PCB-si 03.05-ə aiddir.'
  ),

  /* =======================================
     05.07 — HVAC CONTROLLERS & I/O
  ======================================= */

  createGroup(
    '05.07',
    'HVAC kontrollerləri və I/O modulları',
    'hvac-kontrollerleri-ve-io-modullari',
    'HVAC avadanlıqlarının avtomatik idarəetmə kontrollerləri.',
    [
      [
        '01',
        'AHU və Rooftop kontrollerləri',
        'AHU / Rooftop Controllers',
      ],
      [
        '02',
        'Chiller və istilik nasosu kontrollerləri',
        'Chiller / Heat Pump Controllers',
      ],
      [
        '03',
        'Soyuducu kamera və refrigeration kontrollerləri',
        'Refrigeration Controllers',
      ],
      [
        '04',
        'Proqramlaşdırılan DDC HVAC kontrollerləri',
        'Programmable DDC Controllers',
      ],
      [
        '05',
        'Giriş-çıxış genişləndirmə modulları',
        'I/O Expansion Modules',
      ],
    ],
    'Tam avtonom və ya şkafa quraşdırılan HVAC kontrolleri burada; cihazın daxili OEM Main PCB-si 03.01-də saxlanılır.'
  ),

  /* =======================================
     05.08 — ACTUATORS
  ======================================= */

  createGroup(
    '05.08',
    'Damper və klapan aktuatorları',
    'damper-ve-klapan-aktuatorlari',
    'Hava damperləri və klapanlar üçün elektrik aktuatorları.',
    [
      [
        '01',
        'Yayla geri dönməyən damper aktuatorları',
        'Non-Spring Return Damper Actuators',
      ],
      [
        '02',
        'Yayla geri dönən damper aktuatorları',
        'Spring Return Damper Actuators',
      ],
      [
        '03',
        'Yanğın və tüstü damperi aktuatorları',
        'Fire / Smoke Damper Actuators',
      ],
      [
        '04',
        'Fırlanan klapan aktuatorları',
        'Rotary Valve Actuators',
      ],
      [
        '05',
        'Xətti klapan aktuatorları',
        'Linear / Globe Valve Actuators',
      ],
      [
        '06',
        'Elektrotermik klapan aktuatorları',
        'Thermal Valve Actuators',
      ],
    ],
    'Aktuatorun momenti və qüvvəsi, işləmə vaxtı, siqnalı, gərginliyi və klapan/damper uyğunluğu ayrı parametrlər olacaq.'
  ),

  /* =======================================
     05.09 — SAFETY & CONTROL SWITCHES
  ======================================= */

  createGroup(
    '05.09',
    'Təhlükəsizlik və nəzarət açarları',
    'tehlukesizlik-ve-nezaret-acarlari',
    'Təzyiq, axın, temperatur və səviyyə üzrə təhlükəsizlik açarları.',
    [
      [
        '01',
        'Yüksək və aşağı təzyiq pressostatları',
        'High / Low Pressure Switches',
      ],
      [
        '02',
        'Hava diferensial təzyiq açarları',
        'Air Differential Pressure Switches',
      ],
      [
        '03',
        'Maye axın açarları',
        'Liquid Flow Switches',
      ],
      [
        '04',
        'Donmadan qoruma termostatları',
        'Frost Protection Thermostats',
      ],
      [
        '05',
        'Yüksək temperatur və limit açarları',
        'High-Limit Temperature Switches',
      ],
      [
        '06',
        'Maye səviyyə açarları',
        'Liquid Level / Float Switches',
      ],
    ],
    'Elektrik faza-nəzarət releləri və motor overload komponentləri 03.09-a aiddir.'
  ),

  /* =======================================
     05.10 — BMS COMMUNICATION
  ======================================= */

  createGroup(
    '05.10',
    'BMS kommunikasiya və inteqrasiya modulları',
    'bms-kommunikasiya-ve-inteqrasiya-modullari',
    'BMS şəbəkələri, protokol çeviriciləri və inteqrasiya modulları.',
    [
      [
        '01',
        'BACnet şəbəkə keçidləri',
        'BACnet Gateways',
      ],
      [
        '02',
        'Modbus və protokol çeviriciləri',
        'Modbus / Protocol Converters',
      ],
      [
        '03',
        'Simsiz sahə cihazı şəbəkə modulları',
        'Wireless Field Network Modules',
      ],
      [
        '04',
        'Fieldbus bağlantı və marşrutlaşdırma modulları',
        'Fieldbus Couplers / Routers',
      ],
      [
        '05',
        'BMS nəzarət və bağlantı interfeys cihazları',
        'Supervisory Interface Devices',
      ],
    ],
    'Müstəqil DIN-reyk və ya şəbəkə cihazları burada; avadanlığın içindəki OEM kommunikasiya PCB-si 03.04-dədir.'
  ),

  /* =======================================
     05.11 — ACCESSORIES
  ======================================= */

  createGroup(
    '05.11',
    'Sensor və avtomatika aksesuarları',
    'sensor-ve-avtomatika-aksesuarlari',
    'Sensorların quraşdırılması, mühafizəsi və servisi üçün aksesuarlar.',
    [
      [
        '01',
        'Sensor qoruyucu gilizləri',
        'Thermowells / Sensor Pockets',
      ],
      [
        '02',
        'Sensor montaj kronşteynləri',
        'Sensor Mounting Kits',
      ],
      [
        '03',
        'Xarici sensor qoruyucuları',
        'Weather Shields / Protective Housings',
      ],
      [
        '04',
        'Sensor kabel və adapter dəstləri',
        'Sensor-Specific Cable / Adapter Kits',
      ],
      [
        '05',
        'Dəyişən sensor elementləri və servis dəstləri',
        'Sensor Replacement / Service Kits',
      ],
    ],
    'Yalnız sensor və avtomatikaya məxsus aksesuarlar burada saxlanılır; ümumi elektrik kabelləri 03.10-a aiddir.'
  ),
]

export function getSensorsAutomationGroup(slug) {
  return SENSORS_AUTOMATION_GROUPS.find(
    (group) => group.slug === slug
  )
}

export function getSensorsAutomationSubcategory(groupSlug, childSlug) {
  return getSensorsAutomationGroup(groupSlug)?.children.find(
    (child) => child.slug === childSlug
  )
}