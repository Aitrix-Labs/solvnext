import { Link, useLocation, useParams } from 'react-router-dom'
import { ContactSection } from '../components/ContactSection'
import { industries, services } from '../data/content'

const routes: Record<string, {
  badge: string
  title: string
  highlight: string
  lead: string
  image: string
  story: string[]
  highlights: string[]
}> = {
  'app-development': {
    badge: 'App Development',
    title: 'Mobile Apps Built',
    highlight: 'for Melbourne',
    lead: 'Native and cross-platform applications defined by user-centric design and robust functionality. iOS, Android, React Native, and Flutter.',
    image: '/images/portfolio_banner_app_desktop-v2.webp',
    story: services[0].story,
    highlights: services[0].highlights,
  },
  'web-development': {
    badge: 'Web Development',
    title: 'Web Solutions That',
    highlight: 'Scale Globally',
    lead: 'Enterprise web apps, e-commerce, and SaaS platforms engineered for speed, security, and the next ten times your traffic.',
    image: '/images/macbooknew.avif',
    story: services[1].story,
    highlights: services[1].highlights,
  },
  'software-development': {
    badge: 'Software Development',
    title: 'Custom Software',
    highlight: 'for Real Operations',
    lead: 'Internal platforms, customer portals, and integrations when an off-the-shelf tool stops fitting the way your business actually works.',
    image: '/images/app_showcase.webp',
    story: [
      'Solvnext designs software around the workflow you already have, then removes the steps that waste a day.',
      'React, Node.js, Python, and cloud services are chosen for the problem, not for a trend.',
    ],
    highlights: [
      'Custom business platforms',
      'API and system integrations',
      'Admin tools and automation',
      'Architecture your team can keep',
    ],
  },
  ai: {
    badge: 'Artificial Intelligence',
    title: 'AI Products with',
    highlight: 'a Real Job',
    lead: 'We put models to work inside the apps and web platforms you already need: support, search, documents, and decisions.',
    image: '/images/success_strategy_app_2_desktop-v2.webp',
    story: [
      'Solvnext treats AI as a feature of a product, not a demo. The interface, the data, and the fallback when the model is unsure all ship together.',
      'Our Melbourne team designs assistants, retrieval, and automation that sit inside healthcare, finance, and education workflows.',
    ],
    highlights: [
      'Product-ready assistants and chat',
      'Search across your own documents',
      'Workflow automation with a human check',
      'Privacy-minded deployment on the cloud you already use',
    ],
  },
}

export function TopicPage({ kind }: { kind: 'route' | 'service' | 'industry' }) {
  const params = useParams()
  const { pathname } = useLocation()
  const service = services.find((item) => item.slug === params.slug)
  const industry = industries.find((item) => item.slug === params.slug)
  const routed = routes[pathname.replace(/^\//, '')]

  const page =
    kind === 'route'
      ? routed
      : kind === 'service' && service
        ? {
            badge: 'Services',
            title: service.title,
            highlight: 'by Solvnext',
            lead: service.lead,
            image: service.image,
            story: service.story,
            highlights: service.highlights,
          }
        : kind === 'industry' && industry
          ? {
              badge: 'Industries',
              title: industry.title,
              highlight: 'Software',
              lead: industry.lead,
              image: industry.image,
              story: industry.story,
              highlights: industry.highlights,
            }
          : undefined

  if (!page) {
    return (
      <section className="about-section">
        <div className="about-container">
          <header className="about-header">
            <h2 className="about-title">Page not found</h2>
            <p className="about-description">That page is not on Solvnext.</p>
            <Link to="/" className="btn btn-primary">Back home</Link>
          </header>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="section-badge">
              <span className="badge-text">{page.badge}</span>
            </div>
            <h1>{page.title} {page.highlight}</h1>
            <p className="hero-subtitle">{page.lead}</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
              <Link to="/case-studies" className="btn btn-secondary">View Our Work</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-slideshow">
              <div className="slideshow-container">
                <div className="slide active">
                  <div className="slide-image-wrapper">
                    <img src={page.image} className="slide-image" alt={page.title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="about-story topic-extra">
              <h3>How we work</h3>
              {page.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul className="about-highlights">
                {page.highlights.map((item) => (
                  <li key={item}><span className="check-icon">✓</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="about-stats-container">
              <div className="about-stats">
                <div className="stat-card"><span className="stat-number">5+</span><span className="stat-label">Years Experience</span></div>
                <div className="stat-card"><span className="stat-number">50+</span><span className="stat-label">Projects Delivered</span></div>
                <div className="stat-card"><span className="stat-number">100%</span><span className="stat-label">Client Satisfaction</span></div>
                <div className="stat-card"><span className="stat-number">24/7</span><span className="stat-label">Support Available</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
