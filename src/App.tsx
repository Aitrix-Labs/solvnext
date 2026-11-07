import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { BlogPage } from './pages/BlogPage'
import { CaseStudiesPage } from './pages/CaseStudiesPage'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'
import { ServicesPage } from './pages/ServicesPage'
import { TopicPage } from './pages/TopicPage'
import { ContactSection } from './components/ContactSection'

export default function App() {
  return (
    <BrowserRouter basename="/solvnext">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="app-development" element={<TopicPage kind="route" />} />
          <Route path="web-development" element={<TopicPage kind="route" />} />
          <Route path="software-development" element={<TopicPage kind="route" />} />
          <Route path="ai" element={<TopicPage kind="route" />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<TopicPage kind="service" />} />
          <Route path="industries/:slug" element={<TopicPage kind="industry" />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="contact" element={<ContactSection />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPage />} />
          <Route path="privacy" element={<LegalPage kind="privacy" />} />
          <Route path="refund" element={<LegalPage kind="refund" />} />
          <Route path="*" element={<TopicPage kind="route" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
