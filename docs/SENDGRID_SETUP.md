# SendGrid: receive contact form emails

The site sends mail through **SendGrid** from a small Node server (`server/index.js`). The API key and “from” address stay **only on the server** — never in the browser.

## What you need to do

### 1. Create a SendGrid account

Sign up at [SendGrid](https://sendgrid.com/) (free tier is enough to start).

### 2. Verify a sender address

SendGrid will only send mail from addresses you verify.

- **Single Sender** (fastest): **Settings → Sender Authentication → Single Sender Verification** — verify an email you control (e.g. `noreply@…` or your Gmail if allowed).
- **Domain Authentication** (recommended for production): verify your whole domain so you can use `noreply@yourdomain.com`.

Note the exact address you verify — that becomes `SENDGRID_FROM_EMAIL`.

### 3. Create an API key

1. **Settings → API Keys → Create API Key**
2. Name it (e.g. `equalify-website`)
3. Give it **Restricted Access** → enable **Mail Send** (or **Full Access** for testing only)
4. Copy the key once (starts with `SG.`). You cannot see it again later.

### 4. Configure environment variables

Create a file named `.env` in the **project root** (same folder as `package.json`):

```bash
cp .env.example .env
```

Edit `.env`:

| Variable | Meaning |
|----------|--------|
| `SENDGRID_API_KEY` | The API key from step 3 |
| `SENDGRID_FROM_EMAIL` | Verified sender address (must match SendGrid) |
| `CONTACT_TO_EMAIL` | Inbox where you want to receive submissions (e.g. `equalify26@gmail.com`) |

### 5. Run the app with the API server

The Vite dev server must **proxy** `/api` to the Node server.

**Terminal 1 – API (port 3001):**

```bash
npm install
npm run server
```

**Terminal 2 – frontend:**

```bash
npm run dev
```

Or use one command:

```bash
npm run dev:full
```

### 6. Production

1. Build: `npm run build`
2. Set the same environment variables on your host (Railway, Render, VPS, etc.).
3. Start: `npm start` (runs `NODE_ENV=production node server/index.js` and serves `dist/` from the same server).

If the frontend and API are on **different** domains, set `CORS_ORIGIN` to your HTTPS site URL, and set `VITE_API_BASE` in the build to your API origin (see below).

### Optional: API on another domain

If the React app is static on one host and the API on another, build with:

```bash
VITE_API_BASE=https://api.yourdomain.com npm run build
```

## Troubleshooting

- **503 “Email not configured”** — `.env` is missing or `SENDGRID_API_KEY` / `SENDGRID_FROM_EMAIL` are empty.
- **SendGrid 403** — API key lacks Mail Send permission, or “from” address is not verified.
- **Emails go to spam** — Complete domain authentication and avoid spammy content; use a real `CONTACT_TO_EMAIL` you check.

## Endpoints

- `POST /api/contact` — JSON body: `{ kind, name, email, phone?, subject?, message }`  
  - `kind`: `"contact"` | `"volunteer"` | `"partner"`  
  - For `contact`, `subject` is required.
- `GET /api/health` — `{ ok: true, emailConfigured: boolean }`
