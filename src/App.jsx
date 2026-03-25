import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ResourcesPage from './pages/ResourcesPage'
import NewsPage from './pages/NewsPage'
import DonationPage from './pages/DonationPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="what-we-do" element={<Navigate to="/about#what-we-do" replace />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="get-involved" element={<Navigate to="/#get-involved" replace />} />
          <Route path="donation" element={<DonationPage />} />
          <Route path="contacts" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
