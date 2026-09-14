const LOCK_WINDOW_MS = 3 * 24 * 60 * 60 * 1000
const STORAGE_PREFIX = 'suvid-form-lock:'

const normalizeEmail = (email) => email.trim().toLowerCase()

export const getSubmissionLock = (formName, email) => {
  const normalizedEmail = normalizeEmail(email)
  if (!normalizedEmail) return null

  try {
    const rawValue = localStorage.getItem(STORAGE_PREFIX + formName + ':' + normalizedEmail)
    if (!rawValue) return null

    const lock = JSON.parse(rawValue)
    if (!lock.createdAt || Date.now() - lock.createdAt >= LOCK_WINDOW_MS) {
      localStorage.removeItem(STORAGE_PREFIX + formName + ':' + normalizedEmail)
      return null
    }

    return lock
  } catch {
    return null
  }
}

export const setSubmissionLock = (formName, email, idempotencyKey) => {
  const normalizedEmail = normalizeEmail(email)
  localStorage.setItem(
    STORAGE_PREFIX + formName + ':' + normalizedEmail,
    JSON.stringify({ createdAt: Date.now(), idempotencyKey }),
  )
}

export const getRemainingLockDays = (createdAt) => {
  const remainingMs = Math.max(0, LOCK_WINDOW_MS - (Date.now() - createdAt))
  return Math.ceil(remainingMs / (24 * 60 * 60 * 1000))
}

export const createIdempotencyKey = async (formName, fields) => {
  const payload = JSON.stringify({
    formName,
    fields: Object.fromEntries(
      Object.entries(fields)
        .map(([key, value]) => [key, String(value || '').trim().toLowerCase()])
        .sort(([firstKey], [secondKey]) => firstKey.localeCompare(secondKey)),
    ),
  })

  if (globalThis.crypto?.subtle) {
    const digest = await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode(payload))
    return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
  }

  return encodeURIComponent(payload)
}
