import sgMail from '@sendgrid/mail'

function getBody(req) {
  if (!req?.body) return {}
  if (typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body)
    } catch {
      return {}
    }
  }
  return {}
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method not allowed' })
    return
  }

  const apiKey = process.env.SENDGRID_API_KEY
  const fromEmail = process.env.SENDGRID_FROM_EMAIL
  const toEmail = process.env.CONTACT_TO_EMAIL || 'equalify26@gmail.com'

  if (!apiKey || !fromEmail) {
    console.error('[contact] Missing SENDGRID_API_KEY or SENDGRID_FROM_EMAIL')
    res.status(503).json({ ok: false, message: 'Email sending is not configured on the server.' })
    return
  }

  const { kind, name, email, phone, subject, message } = getBody(req)

  if (!name || typeof name !== 'string' || !email || typeof email !== 'string') {
    res.status(400).json({ ok: false, message: 'Name and email are required.' })
    return
  }
  if (!message || typeof message !== 'string' || !message.trim()) {
    res.status(400).json({ ok: false, message: 'Message is required.' })
    return
  }

  const k = kind === 'volunteer' || kind === 'partner' ? kind : 'contact'
  if (k === 'contact' && (!subject || typeof subject !== 'string' || !subject.trim())) {
    res.status(400).json({ ok: false, message: 'Subject is required.' })
    return
  }

  let emailSubject = ''
  if (k === 'volunteer') emailSubject = '[Equalify] Volunteer interest'
  else if (k === 'partner') emailSubject = '[Equalify] Partnership interest'
  else emailSubject = `[Equalify Contact] ${subject.trim()}`

  const textBody = [
    `Form: ${k}`,
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Phone: ${phone && String(phone).trim() ? String(phone).trim() : 'N/A'}`,
    k === 'contact' ? `Subject: ${subject.trim()}` : null,
    '',
    'Message:',
    message.trim(),
  ]
    .filter(Boolean)
    .join('\n')

  try {
    sgMail.setApiKey(apiKey)
    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      replyTo: { email: email.trim(), name: name.trim() },
      subject: emailSubject,
      text: textBody,
    })

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[contact] SendGrid error:', err?.response?.body || err)
    res.status(500).json({ ok: false, message: 'Could not send email. Try again later.' })
  }
}
