const apiBase = import.meta.env.VITE_API_BASE || ''

/**
 * @param {{ kind: 'contact' | 'volunteer' | 'partner', name: string, email: string, phone?: string, subject?: string, message: string }} payload
 */
export async function submitContact(payload) {
  const url = `${apiBase}/api/contact`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const msg = data.message || `Request failed (${res.status})`
    throw new Error(msg)
  }
  return data
}
