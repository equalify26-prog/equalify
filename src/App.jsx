import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import TransnationalExchangePage from './pages/TransnationalExchangePage'
import ResourceDetailPage from './pages/ResourceDetailPage'
import ResourcesPage from './pages/ResourcesPage'
import NewsPage from './pages/NewsPage'
import NewsDetailPage from './pages/NewsDetailPage'
import DonationPage from './pages/DonationPage'
import ContactPage from './pages/ContactPage'

// Start every page at the top (unless the link points to a #section)
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="what-we-do" element={<Navigate to="/about#what-we-do" replace />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="transnational-exchange" element={<TransnationalExchangePage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="resources/:resourceId" element={<ResourceDetailPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/gameready" element={<NewsDetailPage />} />
          <Route path="get-involved" element={<Navigate to="/#get-involved" replace />} />
          <Route path="donation" element={<DonationPage />} />
          <Route path="contacts" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
