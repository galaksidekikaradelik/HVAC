import { useMemo } from 'react'
import {
  Link,
  useParams,
  useSearchParams,
} from 'react-router-dom'

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  FolderOpen,
  Package,
  PackageSearch,
  Search,
  SlidersHorizontal,
  RotateCcw,
} from 'lucide-react'

import {
  PRODUCT_CATEGORIES,
  getProductCategory,
} from '../data/productCategories'

import {
  getCategoryGroups,
  getCategoryGroup,
  getCategoryChild,
} from '../data/categoryTrees'

import { CATALOG_PRODUCTS } from '../data/catalogProducts'

/* =========================================
   CATEGORY IMAGES
========================================= */

const categoryImages = import.meta.glob(
  '../assets/images/categories/*.{png,webp,jpg,jpeg}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

/* =========================================
   HELPERS
========================================= */

function getCategoryImage(category) {
  if (!category?.image) return null

  return (
    categoryImages[
      `../assets/images/categories/${category.image}`
    ] ?? null
  )
}

function uniqueValues(products, field) {
  return [
    ...new Set(
      products
        .map((product) => product[field])
        .filter(
          (value) =>
            value !== null &&
            value !== undefined &&
            value !== ''
        )
        .map(String)
    ),
  ].sort((a, b) => a.localeCompare(b, 'az'))
}

function normalize(value) {
  return String(value ?? '')
    .trim()
    .toLocaleLowerCase('az')
}

function getGroupUrl(
  categorySlug,
  groupSlug = '',
  childSlug = ''
) {
  const base = `/products/category/${categorySlug}`

  if (!groupSlug) return base

  if (!childSlug) {
    return `${base}/${groupSlug}`
  }

  return `${base}/${groupSlug}/${childSlug}`
}

/* =========================================
   SIDEBAR
========================================= */

function CategorySidebar({ activeSlug }) {
  return (
    <aside className="catalog-sidebar">
      <div className="catalog-sidebar__heading">
        <FolderOpen
          size={19}
          strokeWidth={1.7}
        />

        <h2>Məhsul kateqoriyaları</h2>
      </div>

      <nav aria-label="Əsas məhsul kateqoriyaları">
        <ul className="catalog-sidebar__list">
          {PRODUCT_CATEGORIES.map((category) => {
            const isActive =
              category.slug === activeSlug

            return (
              <li key={category.id}>
                <Link
                  to={getGroupUrl(category.slug)}
                  className={[
                    'catalog-sidebar__item',
                    isActive ? 'is-active' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  aria-current={
                    isActive ? 'page' : undefined
                  }
                >
                  <span className="catalog-sidebar__number">
                    {String(category.id).padStart(2, '0')}
                  </span>

                  <span className="catalog-sidebar__title">
                    {category.title}
                  </span>

                  <ChevronRight
                    size={15}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

/* =========================================
   BREADCRUMB
========================================= */

function CatalogBreadcrumb({
  category,
  group,
  child,
}) {
  return (
    <nav
      className="catalog-breadcrumb"
      aria-label="Səhifə yolu"
    >
      <Link to="/">
        Ana səhifə
      </Link>

      <ChevronRight size={13} />

      <Link to="/products">
        Məhsullar
      </Link>

      <ChevronRight size={13} />

      {group ? (
        <>
          <Link
            to={getGroupUrl(category.slug)}
          >
            {category.title}
          </Link>

          <ChevronRight size={13} />

          {child ? (
            <>
              <Link
                to={getGroupUrl(
                  category.slug,
                  group.slug
                )}
              >
                {group.title}
              </Link>

              <ChevronRight size={13} />

              <span aria-current="page">
                {child.title}
              </span>
            </>
          ) : (
            <span aria-current="page">
              {group.title}
            </span>
          )}
        </>
      ) : (
        <span aria-current="page">
          {category.title}
        </span>
      )}
    </nav>
  )
}

/* =========================================
   CATEGORY HERO
========================================= */

function CategoryHero({ category }) {
  const image = getCategoryImage(category)

  return (
    <div className="catalog-hero catalog-hero--horizontal">
      <div className="catalog-hero__visual">
        {image ? (
          <img
            src={image}
            alt=""
            draggable="false"
          />
        ) : (
          <Package
            size={80}
            strokeWidth={1.1}
            aria-hidden="true"
          />
        )}
      </div>

      <div className="catalog-hero__content">
        <span className="catalog-hero__eyebrow">
          SPAREHVAC / MƏHSUL KATALOQU
        </span>

        <h1>{category.title}</h1>

        <p>{category.description}</p>

        <div className="catalog-hero__meta">
          <CheckCircle2 size={16} />

          <span>
            Texniki uyğunluq üzrə dəstək
          </span>
        </div>
      </div>
    </div>
  )
}

/* =========================================
   LEVEL 2 — GROUP SELECTOR
========================================= */

function GroupSelector({
  category,
  groups,
  activeGroup,
}) {
  return (
    <section className="catalog-select-section">
      <div className="catalog-select-section__heading">
        <div>
          <span className="catalog-select-section__eyebrow">
            {String(category.id).padStart(2, '0')}
            {' / '}
            MƏHSUL QRUPLARI
          </span>

          <h2>Alt kateqoriyalar</h2>
        </div>

        <span className="catalog-select-section__count">
          {groups.length} qrup
        </span>
      </div>

      <div className="catalog-group-selector">
        {/* ALL GROUPS */}

        <Link
          to={getGroupUrl(category.slug)}
          className={[
            'catalog-group-choice',
            !activeGroup ? 'is-active' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-current={
            !activeGroup ? 'page' : undefined
          }
        >
          <span className="catalog-group-choice__symbol">
            <Package
              size={25}
              strokeWidth={1.5}
            />
          </span>

          <span className="catalog-group-choice__title">
            Hamısı
          </span>
        </Link>

        {/* CATEGORY GROUPS */}

        {groups.map((group) => {
          const isActive =
            activeGroup?.slug === group.slug

          return (
            <Link
              key={group.id}
              to={getGroupUrl(
                category.slug,
                group.slug
              )}
              className={[
                'catalog-group-choice',
                isActive ? 'is-active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              aria-current={
                isActive ? 'page' : undefined
              }
            >
              <span className="catalog-group-choice__number">
                {group.id}
              </span>

              <span className="catalog-group-choice__title">
                {group.title}
              </span>

              <ArrowRight
                size={15}
                aria-hidden="true"
              />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

/* =========================================
   LEVEL 3 — SUBCATEGORY SELECTOR
========================================= */

function ChildSelector({
  category,
  group,
  activeChild,
}) {
  if (!group?.children?.length) {
    return null
  }

  return (
    <section className="catalog-child-section">
      <div className="catalog-child-section__heading">
        <span className="catalog-child-section__eyebrow">
          {group.id} / ALT QRUPLAR
        </span>

        <h3>{group.title}</h3>
      </div>

      <div className="catalog-child-options">

        <Link
          to={getGroupUrl(
            category.slug,
            group.slug
          )}
          className={[
            'catalog-child-option',
            !activeChild ? 'is-active' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-current={
            !activeChild ? 'page' : undefined
          }
        >
          Hamısı
        </Link>

        {/* INDIVIDUAL SUBCATEGORIES */}

        {group.children.map((child) => {
          const isActive =
            activeChild?.slug === child.slug

          return (
            <Link
              key={child.id}
              to={getGroupUrl(
                category.slug,
                group.slug,
                child.slug
              )}
              className={[
                'catalog-child-option',
                isActive ? 'is-active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              aria-current={
                isActive ? 'page' : undefined
              }
            >
              {child.title}
            </Link>
          )
        })}
      </div>
      {group.note && (
      <p className="catalog-child-section__note">
        {group.note}
      </p>
    )}
    </section>
  )
}

/* =========================================
   FILTERS
========================================= */

function CatalogFilters({
  search,
  brand,
  refrigerant,
  voltage,
  sort,
  brands,
  refrigerants,
  voltages,
  onChange,
  onClear,
  resultCount,
}) {
  const hasFilters = Boolean(
    search ||
    brand ||
    refrigerant ||
    voltage ||
    sort !== 'default'
  )

  return (
    <section className="catalog-filters">
      <div className="catalog-filters__heading">
        <div>
          <SlidersHorizontal size={19} />

          <h2>Filtrlər</h2>
        </div>

        <button
          type="button"
          className="catalog-filters__clear"
          onClick={onClear}
          disabled={!hasFilters}
        >
          <RotateCcw size={14} />

          Filtrləri təmizlə
        </button>
      </div>

      <div className="catalog-filters__grid">
        {/* SEARCH */}

        <label className="catalog-filter catalog-filter--search">
          <span>Axtarış</span>

          <div className="catalog-filter__search">
            <Search size={17} />

            <input
              type="search"
              value={search}
              onChange={(event) =>
                onChange(
                  'q',
                  event.target.value
                )
              }
              placeholder="Məhsul adı, model və ya OEM kodu"
            />
          </div>
        </label>

        {/* BRAND */}

        <label className="catalog-filter">
          <span>Brend</span>

          <select
            value={brand}
            onChange={(event) =>
              onChange(
                'brand',
                event.target.value
              )
            }
            disabled={!brands.length}
          >
            <option value="">
              Bütün brendlər
            </option>

            {brands.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </label>

        {/* REFRIGERANT */}

        <label className="catalog-filter">
          <span>Soyuducu qaz</span>

          <select
            value={refrigerant}
            onChange={(event) =>
              onChange(
                'refrigerant',
                event.target.value
              )
            }
            disabled={!refrigerants.length}
          >
            <option value="">
              Hamısı
            </option>

            {refrigerants.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </label>

        {/* VOLTAGE */}

        <label className="catalog-filter">
          <span>Gərginlik</span>

          <select
            value={voltage}
            onChange={(event) =>
              onChange(
                'voltage',
                event.target.value
              )
            }
            disabled={!voltages.length}
          >
            <option value="">
              Hamısı
            </option>

            {voltages.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </label>

        {/* SORT */}

        <label className="catalog-filter">
          <span>Sıralama</span>

          <select
            value={sort}
            onChange={(event) =>
              onChange(
                'sort',
                event.target.value
              )
            }
          >
            <option value="default">
              Standart
            </option>

            <option value="az">
              Ad: A–Z
            </option>

            <option value="za">
              Ad: Z–A
            </option>

            <option value="brand">
              Brend: A–Z
            </option>
          </select>
        </label>
      </div>

      <div className="catalog-filters__footer">
        <span>
          <strong>
            {resultCount}
          </strong>
          {' '}
          məhsul tapıldı
        </span>
      </div>
    </section>
  )
}

/* =========================================
   PRODUCT RESULTS
========================================= */

function ProductResults({
  products,
  hasAnyProducts,
}) {
  if (!products.length) {
    return (
      <div className="catalog-empty">
        <div className="catalog-empty__icon">
          <PackageSearch
            size={38}
            strokeWidth={1.3}
          />
        </div>

        <h3>
          {hasAnyProducts
            ? 'Uyğun məhsul tapılmadı'
            : 'Məhsul siyahısı hazırlanır'}
        </h3>

        <p>
          {hasAnyProducts
            ? 'Seçdiyiniz kateqoriya və filtrlərə uyğun məhsul yoxdur. Digər seçimləri yoxlaya və ya sorğu göndərə bilərsiniz.'
            : 'Məhsullar kataloqa əlavə olunur. Axtardığınız hissənin modelini və ya OEM kodunu göndərərək qiymət təklifi istəyə bilərsiniz.'}
        </p>

        <Link
          to="/contact"
          className="catalog-empty__button"
        >
          Sorğu göndərin

          <ArrowUpRight size={17} />
        </Link>
      </div>
    )
  }

  return (
    <div className="catalog-products-grid">
      {products.map((product) => (
        <article
          key={product.id}
          className="catalog-product-card"
        >
          <div className="catalog-product-card__image">
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
              />
            ) : (
              <Package
                size={47}
                strokeWidth={1.2}
              />
            )}
          </div>

          <div className="catalog-product-card__body">
            {product.brand && (
              <span className="catalog-product-card__brand">
                {product.brand}
              </span>
            )}

            <h3>
              {product.title}
            </h3>

            {product.model && (
              <p>
                Model: {product.model}
              </p>
            )}

            {product.oemCode && (
              <p>
                OEM: {product.oemCode}
              </p>
            )}

            <Link
              to="/contact"
              className="catalog-product-card__button"
            >
              Qiymət soruş

              <ArrowUpRight size={16} />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

/* =========================================
   MAIN PAGE
========================================= */

export default function ProductCategory() {
  const {
    slug,
    '*': nestedPath = '',
  } = useParams()

  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams()

  /* =======================================
     CATEGORY
  ======================================= */

  const category = getProductCategory(slug)

  const segments = nestedPath
    .split('/')
    .filter(Boolean)

  const [
    groupSlug,
    childSlug,
  ] = segments

  /* =======================================
     DYNAMIC CATEGORY TREE
  ======================================= */

  const groups = getCategoryGroups(slug)

  const group = groupSlug
    ? getCategoryGroup(
        slug,
        groupSlug
      )
    : null

  const child = group && childSlug
    ? getCategoryChild(
        slug,
        groupSlug,
        childSlug
      )
    : null

  /* =======================================
     PATH VALIDATION
  ======================================= */

  const invalidPath =
    segments.length > 2 ||
    (Boolean(groupSlug) && !group) ||
    (Boolean(childSlug) && !child)

  /* =======================================
     FILTER STATE
  ======================================= */

  const search = searchParams.get('q') ?? ''

  const brand =
    searchParams.get('brand') ?? ''

  const refrigerant =
    searchParams.get('refrigerant') ?? ''

  const voltage =
    searchParams.get('voltage') ?? ''

  const sort =
    searchParams.get('sort') ?? 'default'

  /* =======================================
     CATEGORY PRODUCT SCOPE

     No selected group:
       All category products.

     Selected group:
       All products in that group.

     Selected child:
       Only matching child products.
  ======================================= */

  const scopedProducts = useMemo(() => {
    return CATALOG_PRODUCTS.filter((product) => {
      if (
        product.categorySlug !== slug
      ) {
        return false
      }

      if (
        group &&
        product.groupSlug !== group.slug
      ) {
        return false
      }

      if (
        child &&
        product.subcategorySlug !== child.slug
      ) {
        return false
      }

      return true
    })
  }, [slug, group, child])

  /* =======================================
     AVAILABLE FILTER OPTIONS
  ======================================= */

  const brands = useMemo(
    () =>
      uniqueValues(
        scopedProducts,
        'brand'
      ),
    [scopedProducts]
  )

  const refrigerants = useMemo(
    () =>
      uniqueValues(
        scopedProducts,
        'refrigerant'
      ),
    [scopedProducts]
  )

  const voltages = useMemo(
    () =>
      uniqueValues(
        scopedProducts,
        'voltage'
      ),
    [scopedProducts]
  )

  /* =======================================
     FILTERED PRODUCTS
  ======================================= */

  const filteredProducts = useMemo(() => {
    const result = scopedProducts.filter(
      (product) => {
        const searchText = normalize(
          [
            product.title,
            product.brand,
            product.model,
            product.oemCode,
          ].join(' ')
        )

        if (
          search &&
          !searchText.includes(
            normalize(search)
          )
        ) {
          return false
        }

        if (
          brand &&
          product.brand !== brand
        ) {
          return false
        }

        if (
          refrigerant &&
          product.refrigerant !== refrigerant
        ) {
          return false
        }

        if (
          voltage &&
          product.voltage !== voltage
        ) {
          return false
        }

        return true
      }
    )

    if (sort === 'az') {
      result.sort((a, b) =>
        a.title.localeCompare(
          b.title,
          'az'
        )
      )
    }

    if (sort === 'za') {
      result.sort((a, b) =>
        b.title.localeCompare(
          a.title,
          'az'
        )
      )
    }

    if (sort === 'brand') {
      result.sort((a, b) =>
        (a.brand ?? '').localeCompare(
          b.brand ?? '',
          'az'
        )
      )
    }

    return result
  }, [
    scopedProducts,
    search,
    brand,
    refrigerant,
    voltage,
    sort,
  ])

  /* =======================================
     UPDATE FILTER
  ======================================= */

  function updateFilter(key, value) {
    setSearchParams(
      (previous) => {
        const next =
          new URLSearchParams(previous)

        if (
          !value ||
          (
            key === 'sort' &&
            value === 'default'
          )
        ) {
          next.delete(key)
        } else {
          next.set(key, value)
        }

        return next
      },
      {
        replace: true,
      }
    )
  }

  /* =======================================
     CLEAR FILTERS
  ======================================= */

  function clearFilters() {
    setSearchParams(
      new URLSearchParams(),
      {
        replace: true,
      }
    )
  }

  /* =======================================
     INVALID CATEGORY
  ======================================= */

  if (!category || invalidPath) {
    return (
      <main className="catalog-page">
        <div className="container">
          <div className="catalog-not-found">
            <h1>
              Kateqoriya tapılmadı
            </h1>

            <p>
              Axtardığınız məhsul
              kateqoriyası mövcud deyil.
            </p>

            <Link to="/products">
              <ArrowLeft size={17} />

              Məhsullara qayıt
            </Link>
          </div>
        </div>
      </main>
    )
  }

  /* =======================================
     PAGE
  ======================================= */

  return (
    <main className="catalog-page">
      <div className="container">

        {/* BREADCRUMB */}

        <CatalogBreadcrumb
          category={category}
          group={group}
          child={child}
        />

        <div className="catalog-layout">

          {/* SIDEBAR */}

          <CategorySidebar
            activeSlug={slug}
          />

          {/* MAIN CONTENT */}

          <div className="catalog-main">

            {/* 01 — IMAGE + TITLE */}

            <CategoryHero
              category={category}
            />

            {/* 02 — MAIN SUBCATEGORIES */}

            {groups.length > 0 && (
              <GroupSelector
                category={category}
                groups={groups}
                activeGroup={group}
              />
            )}

            {/* 03 — SELECTED GROUP CHILDREN */}

            {group && (
              <ChildSelector
                category={category}
                group={group}
                activeChild={child}
              />
            )}

            {/* 04 — FILTERS */}

            <CatalogFilters
              search={search}
              brand={brand}
              refrigerant={refrigerant}
              voltage={voltage}
              sort={sort}
              brands={brands}
              refrigerants={refrigerants}
              voltages={voltages}
              onChange={updateFilter}
              onClear={clearFilters}
              resultCount={
                filteredProducts.length
              }
            />

            {/* 05 — PRODUCT RESULTS */}

            <section className="catalog-results">
              <div className="catalog-results__heading">
                <div>
                  <span className="catalog-section__eyebrow">
                    MƏHSUL KATALOQU
                  </span>

                  <h2>
                    {child?.title ??
                      group?.title ??
                      category.title}
                  </h2>
                </div>

                <span className="catalog-results__count">
                  {filteredProducts.length} məhsul
                </span>
              </div>

              <ProductResults
                products={filteredProducts}
                hasAnyProducts={
                  scopedProducts.length > 0
                }
              />
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}