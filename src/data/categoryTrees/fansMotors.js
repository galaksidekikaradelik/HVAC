/* =========================================
   SPAREHVAC
   04 — FANLAR VƏ MÜHƏRRİKLƏR
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

export const FANS_MOTORS_GROUPS = [

  /* =======================================
     04.01 — AXIAL FANS
  ======================================= */

  createGroup(
    '04.01',
    'Aksial fanlar və komplektlər',
    'aksial-fanlar-ve-komplektler',
    'Aksial fanlar, fan-motor komplektləri və OEM dəstləri.',
    [
      [
        '01',
        'Panel və çərçivəli aksial fanlar',
        'panel-ve-cerciveli-aksial-fanlar',
        'Panel / Frame-Mounted Axial Fans',
      ],
      [
        '02',
        'Boru və halqa korpuslu aksial fanlar',
        'boru-ve-halqa-korpuslu-aksial-fanlar',
        'Tube / Ring-Mounted Axial Fans',
      ],
      [
        '03',
        'Kompakt aksial fan dəstləri',
        'kompakt-aksial-fan-destleri',
        'Compact Axial Fan Assemblies',
      ],
      [
        '04',
        'OEM aksial fan-motor komplektləri',
        'oem-aksial-fan-motor-komplektleri',
        'OEM Axial Fan-Motor Assemblies',
      ],
    ],
    'AC, EC, DC, diametr, hava sərfi və tətbiq yeri ayrıca filtrlərdir.'
  ),

  /* =======================================
     04.02 — CENTRIFUGAL FANS
  ======================================= */

  createGroup(
    '04.02',
    'Mərkəzdənqaçma fanları və blowerlər',
    'merkezdenqacma-fanlari-ve-blowerler',
    'Korpuslu radial fanlar, blowerlər və OEM komplektlər.',
    [
      [
        '01',
        'Tək girişli korpuslu fanlar',
        'tek-girisli-korpuslu-fanlar',
        'Single-Inlet Centrifugal Blowers',
      ],
      [
        '02',
        'İki girişli korpuslu fanlar',
        'iki-girisli-korpuslu-fanlar',
        'Double-Inlet Centrifugal Blowers',
      ],
      [
        '03',
        'Kanal tipli radial fan dəstləri',
        'kanal-tipli-radial-fan-destleri',
        'Inline Centrifugal Fan Assemblies',
      ],
      [
        '04',
        'Kompakt centrifugal blowerlər',
        'kompakt-centrifugal-blowerler',
        'Compact Centrifugal Blowers',
      ],
      [
        '05',
        'OEM radial blower komplektləri',
        'oem-radial-blower-komplektleri',
        'OEM Blower Assemblies',
      ],
    ],
    'Forward-curved və backward-curved pər formaları filtr kimi seçiləcək. Bu qrup korpuslu tam fan dəstlərini əhatə edir.'
  ),

  /* =======================================
     04.03 — MIXED-FLOW FANS
  ======================================= */

  createGroup(
    '04.03',
    'Diaqonal və qarışıq axınlı fanlar',
    'diaqonal-ve-qarisiq-axinli-fanlar',
    'Diaqonal və qarışıq hava axınlı fan konstruksiyaları.',
    [
      [
        '01',
        'Diaqonal fan dəstləri',
        'diaqonal-fan-destleri',
        'Diagonal Fans',
      ],
      [
        '02',
        'Kanal tipli qarışıq axınlı fanlar',
        'kanal-tipli-qarisiq-axinli-fanlar',
        'Inline Mixed-Flow Fans',
      ],
      [
        '03',
        'OEM diaqonal fan modulları',
        'oem-diaqonal-fan-modullari',
        'OEM Mixed-Flow Fan Assemblies',
      ],
    ],
    'Axial və radial arasında qarışıq axınlı konstruksiyalar bu kateqoriyada saxlanılır.'
  ),

  /* =======================================
     04.04 — CROSS-FLOW FANS
  ======================================= */

  createGroup(
    '04.04',
    'Tangensial və Cross-Flow fanlar',
    'tangensial-ve-cross-flow-fanlar',
    'Daxili bloklarda istifadə olunan tangensial fan dəstləri.',
    [
      [
        '01',
        'Tək çarxlı tangensial fan dəstləri',
        'tek-carxli-tangensial-fan-destleri',
        'Single Cross-Flow Fan Assemblies',
      ],
      [
        '02',
        'Çoxçarxlı tangensial fan dəstləri',
        'coxcarxli-tangensial-fan-destleri',
        'Multi-Section Cross-Flow Assemblies',
      ],
      [
        '03',
        'OEM daxili blok Cross-Flow fan komplektləri',
        'oem-daxili-blok-cross-flow-fan-komplektleri',
        'OEM Indoor Cross-Flow Assemblies',
      ],
    ],
    'Ayrıca satılan uzun silindrik Cross-Flow çarxı 04.07 kateqoriyasına aiddir.'
  ),

  /* =======================================
     04.05 — PLUG / PLENUM / FAN-WALL
  ======================================= */

  createGroup(
    '04.05',
    'Plug-Fan, Plenum Fan və Fan-Wall modulları',
    'plug-fan-plenum-fan-ve-fan-wall-modullari',
    'Korpussuz və modulyar fan komplektləri.',
    [
      [
        '01',
        'Komplekt Plug-Fan modulları',
        'komplekt-plug-fan-modullari',
        'Plug Fan Assemblies',
      ],
      [
        '02',
        'Plenum fan komplektləri',
        'plenum-fan-komplektleri',
        'Plenum Fan Assemblies',
      ],
      [
        '03',
        'Fan-Wall və Fan-Grid modulları',
        'fan-wall-ve-fan-grid-modullari',
        'Fan-Wall / Fan-Grid Modules',
      ],
      [
        '04',
        'OEM modulyar fan dəyişdirmə dəstləri',
        'oem-modulyar-fan-deyisdirme-destleri',
        'OEM Modular Fan Replacement Kits',
      ],
    ],
    'Korpussuz motorlu çarx və ya modul quruluşlu fan komplektləri üçün; sırf pər və motor ayrıca saxlanılır.'
  ),

  /* =======================================
     04.06 — FAN MOTORS
  ======================================= */

  createGroup(
    '04.06',
    'Fan mühərrikləri',
    'fan-muherrikleri',
    'HVAC fanları üçün ayrıca satılan elektrik mühərrikləri.',
    [
      [
        '01',
        'PSC tipli AC motorlar',
        'psc-tipli-ac-motorlar',
        'Permanent Split Capacitor Motors',
      ],
      [
        '02',
        'Shaded-Pole motorlar',
        'shaded-pole-motorlar',
        'Shaded-Pole Motors',
      ],
      [
        '03',
        'Üçfazalı asinxron fan motorları',
        'ucfazali-asinxron-fan-motorlari',
        'Three-Phase Induction Fan Motors',
      ],
      [
        '04',
        'EC fan motorları',
        'ec-fan-motorlari',
        'Electronically Commutated Motors',
      ],
      [
        '05',
        'DC və BLDC fan motorları',
        'dc-ve-bldc-fan-motorlari',
        'DC / Brushless DC Motors',
      ],
      [
        '06',
        'Unit-Bearing fan motorları',
        'unit-bearing-fan-motorlari',
        'Unit-Bearing Motors',
      ],
    ],
    'Motor ayrıca satılan ehtiyat hissəsidirsə burada; motor+fan bir yığma dəstdirsə 04.01–04.05 üzrə təsnif ediləcək.'
  ),

  /* =======================================
     04.07 — BLADES & IMPELLERS
  ======================================= */

  createGroup(
    '04.07',
    'Fan pərləri və çarxları',
    'fan-perleri-ve-carxlari',
    'Mühərriksiz satılan fan pərləri və mexaniki çarxlar.',
    [
      [
        '01',
        'Aksial fan pərləri',
        'aksial-fan-perleri',
        'Axial Propellers / Fan Blades',
      ],
      [
        '02',
        'Geriyə əyilmiş radial çarxlar',
        'geriye-eyilmis-radial-carxlar',
        'Backward-Curved Impellers',
      ],
      [
        '03',
        'İrəli əyilmiş radial çarxlar',
        'ireli-eyilmis-radial-carxlar',
        'Forward-Curved Impellers',
      ],
      [
        '04',
        'Cross-Flow silindrik çarxlar',
        'cross-flow-silindrik-carxlar',
        'Tangential Fan Wheels',
      ],
      [
        '05',
        'İki girişli blower çarxları',
        'iki-girisli-blower-carxlari',
        'Double-Inlet Blower Wheels',
      ],
    ],
    'Buradakı məhsullar mühərriksiz satılan mexaniki hissələrdir.'
  ),

  /* =======================================
     04.08 — MECHANICAL DRIVE COMPONENTS
  ======================================= */

  createGroup(
    '04.08',
    'Mexaniki ötürmə və fırlanma hissələri',
    'mexaniki-oturme-ve-firlanma-hisseleri',
    'Fan ötürmə sistemləri üçün mexaniki ehtiyat hissələri.',
    [
      [
        '01',
        'V-kəmərlər',
        'v-kemerler',
        'V-Belts',
      ],
      [
        '02',
        'Poly-V və dişli kəmərlər',
        'poly-v-ve-disli-kemerler',
        'Poly-V / Timing Belts',
      ],
      [
        '03',
        'Kasnaqlar',
        'kasnaqlar',
        'Pulleys / Sheaves',
      ],
      [
        '04',
        'Podşipniklər',
        'podsipnikler',
        'Bearings',
      ],
      [
        '05',
        'Podşipnik yuvaları və burçlar',
        'podsipnik-yuvalari-ve-burclar',
        'Bearing Housings / Bushings',
      ],
      [
        '06',
        'Vallar və muftalar',
        'vallar-ve-muftalar',
        'Shafts / Couplings',
      ],
      [
        '07',
        'Kəmər gərginləşdiriciləri',
        'kemer-gerginlesdiricileri',
        'Belt Tensioners',
      ],
    ],
    'Yalnız fan ötürməsinə aid OEM və ya standart ehtiyat hissələri; digər avadanlıqlar üçün uyğunluq ayrıca əlaqə ilə verilə bilər.'
  ),

  /* =======================================
     04.09 — HOUSINGS & ACCESSORIES
  ======================================= */

  createGroup(
    '04.09',
    'Fan korpusu, montaj və mexaniki aksesuarlar',
    'fan-korpusu-montaj-ve-mexaniki-aksesuarlar',
    'Fanların mexaniki konstruksiya, montaj və servis hissələri.',
    [
      [
        '01',
        'Fan giriş halqaları və konusları',
        'fan-giris-halqalari-ve-konuslari',
        'Inlet Rings / Inlet Cones',
      ],
      [
        '02',
        'Fan korpusları və spiral gövdələr',
        'fan-korpuslari-ve-spiral-govdeler',
        'Scroll / Fan Housings',
      ],
      [
        '03',
        'Qoruyucu barmaqlıqlar və torlar',
        'qoruyucu-barmaqliqlar-ve-torlar',
        'Fan Guards / Grilles',
      ],
      [
        '04',
        'Motor bazaları və montaj kronşteynləri',
        'motor-bazalari-ve-montaj-kronsteynleri',
        'Motor Bases / Mounting Brackets',
      ],
      [
        '05',
        'Fan vibrasiya izolyatorları',
        'fan-vibrasiya-izolyatorlari',
        'Fan Vibration Isolators',
      ],
      [
        '06',
        'OEM montaj və mexaniki təmir dəstləri',
        'oem-montaj-ve-mexaniki-temir-destleri',
        'OEM Mounting / Mechanical Kits',
      ],
    ],
    'Elektron sürücü kartları və fan kontrollerləri bu bölməyə deyil, 03 və 05-ci kateqoriyalara bağlanacaq.'
  ),
]

export function getFansMotorsGroup(slug) {
  return FANS_MOTORS_GROUPS.find(
    (group) => group.slug === slug
  )
}

export function getFansMotorsSubcategory(groupSlug, childSlug) {
  return getFansMotorsGroup(groupSlug)?.children.find(
    (child) => child.slug === childSlug
  )
}