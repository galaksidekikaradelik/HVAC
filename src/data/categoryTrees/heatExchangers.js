/* =========================================
   SPAREHVAC
   06 — İSTİLİK MÜBADİLƏ APARATLARI
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

export const HEAT_EXCHANGERS_GROUPS = [
  /* =======================================
     06.01 — FIN-AND-TUBE COILS
  ======================================= */

  createGroup(
    '06.01',
    'Borulu-lamelli serpantinlər',
    'borulu-lamelli-serpantinler',
    'HVAC avadanlıqları üçün borulu-lamelli soyutma və isitmə serpantinləri.',
    [
      [
        '01',
        'DX evaporator serpantinləri',
        'Direct Expansion Evaporator Coils',
      ],
      [
        '02',
        'Hava ilə soyudulan kondenser serpantinləri',
        'Air-Cooled Condenser Coils',
      ],
      [
        '03',
        'Soyuq su və qlikol serpantinləri',
        'Chilled Water / Glycol Cooling Coils',
      ],
      [
        '04',
        'İsti su isitmə serpantinləri',
        'Hot Water Heating Coils',
      ],
      [
        '05',
        'Buxar isitmə serpantinləri',
        'Steam Heating Coils',
      ],
      [
        '06',
        'Reversiv və kombinə istilik nasosu serpantinləri',
        'Reversible Heat Pump Coils',
      ],
    ],
    'AHU, FCU, VRF, Rooftop və chiller cihazlarında istifadə olunan borulu-lamelli OEM coil-lər. Material, boru sırası, FPI və ölçülər filtr olacaq.'
  ),

  /* =======================================
     06.02 — MICROCHANNEL
  ======================================= */

  createGroup(
    '06.02',
    'Mikrokanallı istilik dəyişdiriciləri',
    'mikrokanalli-istilik-deyisdiricileri',
    'Mikrokanallı kondenser, evaporator və istilik nasosu komponentləri.',
    [
      [
        '01',
        'Mikrokanallı kondenserlər',
        'Microchannel Condensers',
      ],
      [
        '02',
        'Mikrokanallı evaporatorlar',
        'Microchannel Evaporators',
      ],
      [
        '03',
        'Reversiv mikrokanallı istilik nasosu coil-ləri',
        'Reversible Microchannel Coils',
      ],
      [
        '04',
        'CO₂ mikrokanallı qaz soyuducuları',
        'Microchannel CO₂ Gas Coolers',
      ],
    ],
    'Mikrokanallı məhsulun əsas konstruksiya tipi ayrıca saxlanılır. Yüksək təzyiqli CO₂ tətbiqlərində istehsalçı təsdiqi kritikdir.'
  ),

  /* =======================================
     06.03 — BRAZED & FUSION-BONDED PLATES
  ======================================= */

  createGroup(
    '06.03',
    'Lehimli və diffuziya birləşməli plakalı eşanjörlər',
    'lehimli-ve-diffuziya-birlesmeli-plakali-esanjorler',
    'Lehimli və diffuziya ilə birləşdirilmiş plakalı istilik dəyişdiriciləri.',
    [
      [
        '01',
        'Mis lehimli plakalı eşanjörlər',
        'Copper-Brazed Plate Heat Exchangers',
      ],
      [
        '02',
        'Nikel lehimli plakalı eşanjörlər',
        'Nickel-Brazed Plate Heat Exchangers',
      ],
      [
        '03',
        'Tam paslanmaz diffuziya birləşməli eşanjörlər',
        'Fusion-Bonded Stainless Plate Heat Exchangers',
      ],
      [
        '04',
        'OEM plakalı eşanjör yığma dəstləri',
        'OEM Brazed Plate Assemblies',
      ],
    ],
    'BPHE məhsulları evaporator, kondenser, economizer və ya maye-maye funksiyaları üzrə ayrıca filtrdən keçiriləcək; ikikonturlu variantlar da texniki atribut kimi saxlanacaq.'
  ),

  /* =======================================
     06.04 — GASKETED & SEMI-WELDED PLATES
  ======================================= */

  createGroup(
    '06.04',
    'Contalı və yarıqaynaqlı plakalı eşanjörlər',
    'contali-ve-yariqaynaqli-plakali-esanjorler',
    'Sökülə bilən, yarıqaynaqlı və geniş kanallı plakalı eşanjörlər.',
    [
      [
        '01',
        'Sökülə bilən contalı plakalı eşanjörlər',
        'Gasketed Plate-and-Frame Heat Exchangers',
      ],
      [
        '02',
        'Yarıqaynaqlı plakalı eşanjörlər',
        'Semi-Welded Plate Heat Exchangers',
      ],
      [
        '03',
        'Geniş kanallı və Free-Flow plakalı eşanjörlər',
        'Wide-Gap / Free-Flow Plate Heat Exchangers',
      ],
    ],
    'Plaka sayı, plaka materialı, conta materialı və bağlantı ölçüsü texniki filtr olmalıdır. Plakalar və contalar 06.09-da ayrıca ehtiyat hissəsi kimi yerləşəcək.'
  ),

  /* =======================================
     06.05 — WELDED & SPECIAL PLATE TYPES
  ======================================= */

  createGroup(
    '06.05',
    'Qaynaqlı və xüsusi konstruksiyalı plakalı eşanjörlər',
    'qaynaqli-ve-xususi-konstruksiyali-plakali-esanjorler',
    'Sənaye və xüsusi HVAC/R tətbiqləri üçün plakalı eşanjörlər.',
    [
      [
        '01',
        'Tam qaynaqlı plakalı-blok eşanjörlər',
        'Welded Plate-and-Block Heat Exchangers',
      ],
      [
        '02',
        'Plakalı-gövdəli eşanjörlər',
        'Welded Plate-and-Shell Heat Exchangers',
      ],
      [
        '03',
        'Spiral plakalı eşanjörlər',
        'Welded Spiral Heat Exchangers',
      ],
      [
        '04',
        'Mikrokanallı emal olunmuş plakalı eşanjörlər',
        'Printed Circuit Heat Exchangers',
      ],
      [
        '05',
        'Lehimli alüminium Plate-Fin eşanjörlər',
        'Brazed Aluminium Plate-Fin Heat Exchangers',
      ],
    ],
    'Əsasən sənaye və xüsusi HVAC/R tətbiqləri üçündür. Bu məhsulların satış çeşidi məhduddursa, qrupun bütün alt səhifələri ilk gündən aktivləşdirilməyə bilər.'
  ),

  /* =======================================
     06.06 — SHELL & TUBE
  ======================================= */

  createGroup(
    '06.06',
    'Boru-gövdə tipli eşanjörlər',
    'boru-govde-tipli-esanjorler',
    'Chiller və sənaye soyutma sistemləri üçün boru-gövdə tipli eşanjörlər.',
    [
      [
        '01',
        'DX tipli boru-gövdə evaporatorları',
        'Dry Expansion Shell-and-Tube Evaporators',
      ],
      [
        '02',
        'Flooded boru-gövdə evaporatorları',
        'Flooded Shell-and-Tube Evaporators',
      ],
      [
        '03',
        'Su ilə soyudulan boru-gövdə kondenserləri',
        'Water-Cooled Shell-and-Tube Condensers',
      ],
      [
        '04',
        'Maye-maye boru-gövdə eşanjörlər',
        'Liquid-to-Liquid Shell-and-Tube Exchangers',
      ],
    ],
    'Chiller və sənaye soyuducu sistemləri üçün. Boru dəstinin konstruksiyası, keçid sayı və refrigerant ilə su tərəfinin parametrləri ayrı saxlanılmalıdır.'
  ),

  /* =======================================
     06.07 — COAXIAL / TUBE-IN-TUBE
  ======================================= */

  createGroup(
    '06.07',
    'Koaksial və boru-içində-boru eşanjörlər',
    'koaksial-ve-boru-icinde-boru-esanjorler',
    'Kiçik və orta tutumlu istilik nasosları üçün koaksial eşanjörlər.',
    [
      [
        '01',
        'Spiral koaksial eşanjörlər',
        'Helical Coaxial Heat Exchangers',
      ],
      [
        '02',
        'Düz boru-içində-boru eşanjörlər',
        'Straight Tube-in-Tube Exchangers',
      ],
      [
        '03',
        'Çoxborulu koaksial eşanjörlər',
        'Multi-Tube / Multi-Pass Coaxial Exchangers',
      ],
    ],
    'Kiçik və orta tutumlu istilik nasosları, soyuducu sistemlər və xüsusi OEM tətbiqləri üçün.'
  ),

  /* =======================================
     06.08 — AIR-TO-AIR HEAT RECOVERY
  ======================================= */

  createGroup(
    '06.08',
    'Hava-hava istilik geri qazanım eşanjörləri',
    'hava-hava-istilik-geri-qazanim-esanjorleri',
    'Havalandırma sistemləri üçün istilik geri qazanım komponentləri.',
    [
      [
        '01',
        'Çarpaz axınlı plakalı rekuperatorlar',
        'Cross-Flow Plate Heat Exchangers',
      ],
      [
        '02',
        'Əks axınlı plakalı rekuperatorlar',
        'Counter-Flow Plate Heat Exchangers',
      ],
      [
        '03',
        'Membranlı entalpiya eşanjörləri',
        'Membrane Enthalpy Exchangers',
      ],
      [
        '04',
        'Rotary istilik geri qazanım rotorları',
        'Rotary Heat Recovery Wheels',
      ],
      [
        '05',
        'Heat-Pipe istilik geri qazanım modulları',
        'Heat-Pipe Recovery Modules',
      ],
      [
        '06',
        'Run-Around istilik geri qazanım coil dəstləri',
        'Run-Around Recovery Coil Assemblies',
      ],
    ],
    'Tam AHU cihazı deyil, onun ayrıca dəyişdirilə bilən istilik geri qazanım komponentləri nəzərdə tutulur.'
  ),

  /* =======================================
     06.09 — OEM SPARE PARTS
  ======================================= */

  createGroup(
    '06.09',
    'İstilik dəyişdiricilərinin OEM ehtiyat hissələri',
    'istilik-deyisdiricilerinin-oem-ehtiyat-hisseleri',
    'Eşanjörlər üçün ayrıca sifariş edilən OEM ehtiyat və servis hissələri.',
    [
      [
        '01',
        'Plakalı eşanjör contaları',
        'Plate Heat Exchanger Gasket Sets',
      ],
      [
        '02',
        'Dəyişdirilən eşanjör plakaları',
        'Replacement Heat Exchanger Plates',
      ],
      [
        '03',
        'Plaka paketləri və kartriclər',
        'Plate Packs / Replacement Cartridges',
      ],
      [
        '04',
        'Boru dəstləri',
        'Replacement Tube Bundles',
      ],
      [
        '05',
        'Serpantin kollektorları və bağlantı hissələri',
        'Coil Headers / OEM Connection Parts',
      ],
      [
        '06',
        'İzolyasiya və montaj dəstləri',
        'Insulation / Mounting Kits',
      ],
      [
        '07',
        'Rotary rotor ötürmə və servis dəstləri',
        'Rotary Wheel Drive / Service Kits',
      ],
    ],
    'Eşanjörə məxsus ayrıca sifariş edilən OEM ehtiyat hissələri. Ümumi boru və montaj materialları daxil edilmir.'
  ),
]

export function getHeatExchangersGroup(slug) {
  return HEAT_EXCHANGERS_GROUPS.find(
    (group) => group.slug === slug
  )
}

export function getHeatExchangersSubcategory(groupSlug, childSlug) {
  return getHeatExchangersGroup(groupSlug)?.children.find(
    (child) => child.slug === childSlug
  )
}