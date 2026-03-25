import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import sgMail from '@sendgrid/mail'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = Number(process.env.PORT) || 3001

const toEmail = process.env.CONTACT_TO_EMAIL || 'equalify26@gmail.com'
const fromEmail = process.env.SENDGRID_FROM_EMAIL
const apiKey = process.env.SENDGRID_API_KEY

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || true,
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)
app.use(express.json({ limit: '48kb' }))

app.get('/api/health', (_, res) => {
  res.json({ ok: true, emailConfigured: Boolean(apiKey && fromEmail) })
})

app.post('/api/contact', async (req, res) => {
  if (!apiKey || !fromEmail) {
    console.error('[contact] Missing SENDGRID_API_KEY or SENDGRID_FROM_EMAIL')
    return res.status(503).json({
      ok: false,
      message: 'Email sending is not configured on the server.',
    })
  }

  const { kind, name, email, phone, subject, message } = req.body || {}

  if (!name || typeof name !== 'string' || !email || typeof email !== 'string') {
    return res.status(400).json({ ok: false, message: 'Name and email are required.' })
  }
  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ ok: false, message: 'Message is required.' })
  }

  const k = kind === 'volunteer' || kind === 'partner' ? kind : 'contact'
  if (k === 'contact' && (!subject || typeof subject !== 'string' || !subject.trim())) {
    return res.status(400).json({ ok: false, message: 'Subject is required.' })
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
    return res.json({ ok: true })
  } catch (err) {
    console.error('[contact] SendGrid error:', err?.response?.body || err)
    return res.status(500).json({ ok: false, message: 'Could not send email. Try again later.' })
  }
})

if (process.env.NODE_ENV === 'production') {
  const dist = path.join(__dirname, '../dist')
  app.use(express.static(dist))
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ ok: false, message: 'Not found' })
    }
    res.sendFile(path.join(dist, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Equalify API listening on http://localhost:${PORT}`)
})
