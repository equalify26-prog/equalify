# Equalify

A React (Vite) website for Equalify, using your uploaded images.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Contact form (SendGrid)

To receive emails from the Contact page and “Start With Us” forms, run the API server and configure SendGrid. See **[docs/SENDGRID_SETUP.md](docs/SENDGRID_SETUP.md)**.

Quick start:

```bash
cp .env.example .env
# Edit .env with your SendGrid API key and verified sender email
npm run dev:full
```

This runs `npm run server` (port 3001) and `npm run dev` together; Vite proxies `/api` to the server.

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- **Header** – Logo, nav (About Us, Projects, Resources, News & Upcoming Events, Contact Us), Search, Login, Language
- **Hero** – Image slider (your `image1.jpg`–`image4.jpg`), title, tagline, “About Us” CTA
- **Our Activities** – Three cards (Projects, Gallery, Resources) with your images and “Upcoming Activities” button
- **Our Partners** – Partner names/links and “Learn More About Our Projects” CTA
- **What People Say** – Testimonial carousel (prev/next + dots)
- **Footer** – Logo, Follow Us (Facebook, Instagram, YouTube, LinkedIn), Contact (email, location), copyright

## Images

Your images are used as follows:

- **Hero slider:** `public/images/image1.jpg` – `image4.jpg`
- **Activity cards:** `image1.jpg`, `image2.jpg`, `image3.jpg` (Projects, Gallery, Resources)
- **Testimonials:** `image5.jpg`, `image6.jpg`, `image1.jpg` (avatar backgrounds)
- **Testimonials section background:** `image4.jpg`
- **Footer background:** `image6.jpg`

They were copied from the project root into `public/images/` as `image1.jpg` … `image6.jpg` (no spaces) so they load correctly.

## Tech

- **React 18** + **Vite 5**
- **CSS** – CSS variables, flex/grid, responsive layout
- **JS** – Hero slider (auto + dots), testimonial carousel (prev/next + dots), mobile menu, search toggle

You can change copy, colors, and content in the component files and CSS when you’re ready.
