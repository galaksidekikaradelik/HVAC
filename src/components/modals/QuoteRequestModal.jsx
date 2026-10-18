
import { useEffect, useRef, useState } from 'react'
import {
  X,
  ArrowRight,
  ArrowLeft,
  Upload,
  Paperclip,
  ShieldCheck,
  CheckCircle2,
  LoaderCircle,
  AlertCircle,
  Send,
  FileText,
} from 'lucide-react'

import { createQuoteRequest } from '../../services/quoteRequests'

const STEP_NAMES = [
  'Hissə məlumatı',
  'Tələb və fayllar',
  'Əlaqə və çatdırılma',
]

const INITIAL_FORM = {
  partName: '',
  brand: '',
  modelCode: '',
  quantity: '1',
  preference: 'both',
  message: '',
  fullName: '',
  company: '',
  phone: '',
  email: '',
  country: 'Azərbaycan',
  city: 'Bakı',
}

const MAX_FILES = 5
const MAX_FILE_SIZE = 10 * 1024 * 1024

const ACCEPTED_EXTENSIONS = [
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.pdf',
  '.xlsx',
]

export default function QuoteRequestModal({
  isOpen,
  onClose,
  initialPartCode = '',
}) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(INITIAL_FORM)
  const [files, setFiles] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  const fileInputRef = useRef(null)
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const previousFocusRef = useRef(null)
  const onCloseRef = useRef(onClose)
  const loadingRef = useRef(false)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    if (!isOpen) return

    setStep(1)
    setForm({
      ...INITIAL_FORM,
      modelCode: initialPartCode,
    })
    setFiles([])
    setError('')
    setSuccess(null)
    setLoading(false)

    previousFocusRef.current = document.activeElement
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    requestAnimationFrame(() => closeRef.current?.focus())

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && !loadingRef.current) {
        onCloseRef.current()
      }

      if (event.key !== 'Tab') return

      const elements = Array.from(
        dialogRef.current?.querySelectorAll(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) || []
      ).filter((element) => element.getClientRects().length)

      if (!elements.length) return

      const first = elements[0]
      const last = elements[elements.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = oldOverflow
      previousFocusRef.current?.focus?.()
    }
  }, [isOpen, initialPartCode])

  if (!isOpen) return null

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const validateStep = () => {
    if (step === 1) {
      if (!form.partName.trim()) {
        return 'Məhsul və ya hissənin adını daxil edin.'
      }

      if (
        !Number.isInteger(Number(form.quantity)) ||
        Number(form.quantity) < 1
      ) {
        return 'Say 1 və ya daha böyük tam ədəd olmalıdır.'
      }
    }

    if (step === 3) {
      if (form.fullName.trim().length < 2) {
        return 'Ad və soyadınızı daxil edin.'
      }

      if (
        !/^\+?[0-9\s()-]{7,30}$/.test(form.phone.trim())
      ) {
        return 'Düzgün telefon nömrəsi daxil edin.'
      }

      if (
        form.email.trim() &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
          form.email.trim()
        )
      ) {
        return 'E-poçt ünvanını düzgün daxil edin.'
      }
    }

    return ''
  }

  const nextStep = () => {
    const validationError = validateStep()

    if (validationError) {
      setError(validationError)
      return
    }

    setError('')
    setStep((prev) => Math.min(3, prev + 1))
  }

  const previousStep = () => {
    setError('')
    setStep((prev) => Math.max(1, prev - 1))
  }

  const addFiles = (selectedFiles) => {
    const incoming = Array.from(selectedFiles || [])

    if (!incoming.length) return

    const combined = [...files]

    for (const file of incoming) {
      const extension = `.${file.name.split('.').pop()?.toLowerCase()}`

      if (!ACCEPTED_EXTENSIONS.includes(extension)) {
        setError(
          'Yalnız JPG, PNG, WebP, PDF və XLSX faylları qəbul olunur.'
        )
        return
      }

      if (file.size > MAX_FILE_SIZE) {
        setError('Hər fayl maksimum 10 MB ola bilər.')
        return
      }

      if (combined.length >= MAX_FILES) {
        setError(`Maksimum ${MAX_FILES} fayl əlavə edə bilərsiniz.`)
        return
      }

      if (
        !combined.some(
          (item) =>
            item.name === file.name &&
            item.size === file.size &&
            item.lastModified === file.lastModified
        )
      ) {
        combined.push(file)
      }
    }

    setFiles(combined)
    setError('')

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleDrop = (event) => {
    event.preventDefault()
    addFiles(event.dataTransfer.files)
  }

  const submitRequest = async () => {
    const validationError = validateStep()

    if (validationError) {
      setError(validationError)
      return
    }

    setError('')
    loadingRef.current = true
    setLoading(true)

    try {
      const result = await createQuoteRequest({
        ...form,
        files,
      })

      setSuccess({
        requestNumber: result.requestNumber,
      })
    } catch (err) {
      setError(
        err.message || 'Sorğu göndərilərkən xəta baş verdi.'
      )
    } finally {
      loadingRef.current = false
      setLoading(false)
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    if (loading) return

    if (step < 3) {
      nextStep()
    } else {
      submitRequest()
    }
  }

  const handleClose = () => {
    if (!loadingRef.current) onClose()
  }

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose()
    }
  }

  return (
    <div
      className="quote-modal__backdrop"
      onMouseDown={handleBackdropClick}
    >
      <div
        ref={dialogRef}
        className="quote-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        aria-describedby="quote-modal-description"
      >
        <button
          ref={closeRef}
          className="quote-modal__close"
          type="button"
          onClick={handleClose}
          disabled={loading}
          aria-label="Bağla"
        >
          <X size={21} />
        </button>

        {success ? (
          <div className="quote-modal__success" role="status">
            <CheckCircle2 size={58} strokeWidth={1.4} />

            <h2>Sorğunuz qəbul edildi!</h2>

            <p>
              Qiymət sorğunuz uğurla qeydə alındı.
              Komandamız məlumatlarınızı yoxlayacaq.
            </p>

            {success.requestNumber && (
              <div className="quote-modal__reference">
                <span>Sorğu nömrəsi</span>
                <strong>{success.requestNumber}</strong>
              </div>
            )}

            <button
              type="button"
              className="quote-modal__button quote-modal__button--primary"
              onClick={handleClose}
            >
              Bağla
              <ArrowRight size={19} />
            </button>
          </div>
        ) : (
          <>
            <header className="quote-modal__header">
              <span className="quote-modal__eyebrow">
                QİYMƏT TƏKLİFİ AL
              </span>

              <h2 id="quote-modal-title">
                Doğru hissəni birlikdə müəyyən edək.
              </h2>

              <p id="quote-modal-description">
                Bildiyiniz məlumatları yazın. Parça kodunu
                bilmirsinizsə, etiket və ya hissənin fotosu
                kifayətdir.
              </p>
            </header>

            <div
              className="quote-modal__progress"
              aria-label={`3 addımdan ${step}-ci`}
            >
              {[1, 2, 3].map((number) => (
                <div
                  key={number}
                  className={`quote-modal__progress-bar ${
                    number <= step ? 'is-active' : ''
                  }`}
                />
              ))}
            </div>

            <div className="quote-modal__step-header">
              <div>
                <span className="quote-modal__step-number">
                  {String(step).padStart(2, '0')}
                </span>

                <strong>{STEP_NAMES[step - 1]}</strong>
              </div>

              <span className="quote-modal__step-count">
                3 addımdan {step}-ci
              </span>
            </div>

            <form
              className="quote-modal__form"
              onSubmit={handleFormSubmit}
              noValidate
            >
              <div className="quote-modal__step-content" key={step}>

                {/* STEP 1 */}

                {step === 1 && (
                  <div className="quote-modal__fields">
                    <div className="quote-modal__field">
                      <label htmlFor="quote-part-name">
                        Məhsul / hissə adı *
                      </label>

                      <input
                        id="quote-part-name"
                        name="partName"
                        value={form.partName}
                        onChange={updateField}
                        placeholder="Məs: kompressor, elektron kart"
                        maxLength={180}
                        autoFocus
                      />
                    </div>

                    <div className="quote-modal__field-grid">
                      <div className="quote-modal__field">
                        <label htmlFor="quote-brand">
                          Marka
                        </label>

                        <input
                          id="quote-brand"
                          name="brand"
                          value={form.brand}
                          onChange={updateField}
                          placeholder="Məs: Daikin"
                          maxLength={120}
                        />
                      </div>

                      <div className="quote-modal__field">
                        <label htmlFor="quote-model">
                          Model / parça kodu
                        </label>

                        <input
                          id="quote-model"
                          name="modelCode"
                          value={form.modelCode}
                          onChange={updateField}
                          placeholder="Məs: KSG240S1VKT"
                          maxLength={180}
                        />
                      </div>
                    </div>

                    <div className="quote-modal__field-grid">
                      <div className="quote-modal__field">
                        <label htmlFor="quote-quantity">
                          Say
                        </label>

                        <input
                          id="quote-quantity"
                          type="number"
                          name="quantity"
                          min="1"
                          max="100000"
                          step="1"
                          value={form.quantity}
                          onChange={updateField}
                        />
                      </div>

                      <div className="quote-modal__field">
                        <label htmlFor="quote-preference">
                          Seçim
                        </label>

                        <select
                          id="quote-preference"
                          name="preference"
                          value={form.preference}
                          onChange={updateField}
                        >
                          <option value="both">
                            Orijinal və muadil
                          </option>
                          <option value="original">
                            Yalnız orijinal
                          </option>
                          <option value="alternative">
                            Yalnız muadil
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}

                {step === 2 && (
                  <div className="quote-modal__fields">
                    <div className="quote-modal__field">
                      <label htmlFor="quote-message">
                        Əlavə məlumat
                      </label>

                      <textarea
                        id="quote-message"
                        name="message"
                        value={form.message}
                        onChange={updateField}
                        rows={5}
                        maxLength={3000}
                        placeholder="Cihaz modeli, seriya nömrəsi, texniki göstəricilər və xüsusi tələblər..."
                      />
                    </div>

                    <div
                      className="quote-modal__upload-zone"
                      onDragOver={(event) => event.preventDefault()}
                      onDrop={handleDrop}
                    >
                      <input
                        ref={fileInputRef}
                        id="quote-files"
                        type="file"
                        accept=".jpg,.jpeg,.png,.webp,.pdf,.xlsx"
                        multiple
                        onChange={(event) =>
                          addFiles(event.target.files)
                        }
                        className="quote-modal__file-input"
                      />

                      <label
                        htmlFor="quote-files"
                        className="quote-modal__upload-label"
                      >
                        <Upload size={30} strokeWidth={1.7} />

                        <strong>
                          Foto, etiket və ya siyahı əlavə edin
                        </strong>

                        <span>
                          JPG, PNG, WebP, PDF, XLSX —
                          hər fayl maksimum 10 MB
                        </span>
                      </label>
                    </div>

                    {files.length > 0 && (
                      <div className="quote-modal__files">
                        {files.map((file, index) => (
                          <div
                            className="quote-modal__file"
                            key={`${file.name}-${index}`}
                          >
                            <FileText size={18} />

                            <span title={file.name}>
                              {file.name}
                            </span>

                            <button
                              type="button"
                              aria-label={`${file.name} faylını sil`}
                              onClick={() => {
                                setFiles((previous) =>
                                  previous.filter(
                                    (_, i) => i !== index
                                  )
                                )
                              }}
                            >
                              <X size={17} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="quote-modal__info">
                      <Paperclip size={19} />
                      <span>
                        Bir neçə məhsul üçün Excel və ya PDF
                        siyahısı yükləyə bilərsiniz.
                      </span>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}

                {step === 3 && (
                  <div className="quote-modal__fields">
                    <div className="quote-modal__field-grid">
                      <div className="quote-modal__field">
                        <label htmlFor="quote-fullname">
                          Ad və soyad *
                        </label>

                        <input
                          id="quote-fullname"
                          name="fullName"
                          value={form.fullName}
                          onChange={updateField}
                          placeholder="Əlaqə şəxsi"
                          autoComplete="name"
                          maxLength={120}
                        />
                      </div>

                      <div className="quote-modal__field">
                        <label htmlFor="quote-company">
                          Şirkət
                        </label>

                        <input
                          id="quote-company"
                          name="company"
                          value={form.company}
                          onChange={updateField}
                          placeholder="Varsa şirkət adı"
                          maxLength={160}
                        />
                      </div>
                    </div>

                    <div className="quote-modal__field">
                      <label htmlFor="quote-phone">
                        Telefon / WhatsApp *
                      </label>

                      <input
                        id="quote-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={updateField}
                        placeholder="+994 __ ___ __ __"
                        autoComplete="tel"
                        maxLength={30}
                      />
                    </div>

                    <div className="quote-modal__field">
                      <label htmlFor="quote-email">
                        E-poçt
                      </label>

                      <input
                        id="quote-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={updateField}
                        placeholder="name@company.az"
                        autoComplete="email"
                        maxLength={254}
                      />
                    </div>

                    <div className="quote-modal__field-grid">
                      <div className="quote-modal__field">
                        <label htmlFor="quote-country">
                          Ölkə
                        </label>

                        <input
                          id="quote-country"
                          name="country"
                          value={form.country}
                          onChange={updateField}
                          maxLength={100}
                        />
                      </div>

                      <div className="quote-modal__field">
                        <label htmlFor="quote-city">
                          Şəhər
                        </label>

                        <input
                          id="quote-city"
                          name="city"
                          value={form.city}
                          onChange={updateField}
                          maxLength={100}
                        />
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {error && (
                <div className="quote-modal__error" role="alert">
                  <AlertCircle size={18} />
                  <span>{error}</span>
                </div>
              )}

              <div className="quote-modal__actions">
                {step > 1 && (
                  <button
                    type="button"
                    className="quote-modal__button quote-modal__button--back"
                    onClick={previousStep}
                    disabled={loading}
                  >
                    <ArrowLeft size={21} />
                    Geri
                  </button>
                )}

                <button
                  type="submit"
                  className="quote-modal__button quote-modal__button--primary"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <LoaderCircle
                        size={19}
                        className="quote-modal__spinner"
                      />
                      Göndərilir...
                    </>
                  ) : step === 3 ? (
                    <>
                      Sorğunu göndər
                      <Send size={20} />
                    </>
                  ) : (
                    <>
                      Davam et
                      <ArrowRight size={21} />
                    </>
                  )}
                </button>
              </div>
            </form>

  
          </>
        )}
      </div>
    </div>
  )
}
