
const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || ''
).replace(/\/$/, '')

export async function createQuoteRequest({
  fullName,
  phone,
  email,
  partCode,
  message,
  attachment,
}) {
  const formData = new FormData()

  formData.append('fullName', fullName.trim())
  formData.append('phone', phone.trim())
  formData.append('email', email.trim())
  formData.append('partCode', partCode.trim())
  formData.append('message', message.trim())

  if (attachment) {
    formData.append('attachment', attachment)
  }

  let response

  try {
    response = await fetch(
      `${API_BASE_URL}/api/quote-requests`,
      {
        method: 'POST',
        body: formData,
      }
    )
  } catch {
    throw new Error(
      'Serverlə əlaqə qurulmadı. Bir az sonra yenidən cəhd edin.'
    )
  }

  const result = await response
    .json()
    .catch(() => ({}))

  if (!response.ok) {
    throw new Error(
      result.message ||
      'Sorğu göndərilərkən xəta baş verdi.'
    )
  }

  return result
}
