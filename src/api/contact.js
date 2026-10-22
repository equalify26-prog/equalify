const apiBase = import.meta.env.VITE_API_BASE || ''

const FRIENDLY_ERROR =
  "We couldn't send your message right now. Please try again later or email us at equalify26@gmail.com."

/**
 * @param {{ kind: 'contact' | 'volunteer' | 'partner', name: string, email: string, phone?: string, subject?: string, message: string }} payload
 */
export async function submitContact(payload) {
  const url = `${apiBase}/api/contact`
  let res
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch (err) {
    console.error('[contact] Network error:', err)
    throw new Error(FRIENDLY_ERROR)
  }
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    // 4xx: show the server's validation message. 5xx (server down / email not configured): friendly text.
    if (res.status >= 500) {
      console.error('[contact] Server error', res.status, data.message || '')
      throw new Error(FRIENDLY_ERROR)
    }
    throw new Error(data.message || `Request failed (${res.status})`)
  }
  return data
}
