export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ ok: false, message: 'Method not allowed' })
    return
  }

  const hasSendgridKey = Boolean(process.env.SENDGRID_API_KEY)
  const hasFromEmail = Boolean(process.env.SENDGRID_FROM_EMAIL)
  const toEmail = process.env.CONTACT_TO_EMAIL || 'equalify26@gmail.com'

  res.status(200).json({
    ok: true,
    emailConfigured: hasSendgridKey && hasFromEmail,
    hasSendgridKey,
    hasFromEmail,
    hasToEmail: Boolean(toEmail),
  })
}
