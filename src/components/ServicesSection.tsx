import { Link } from 'react-router-dom'
import { services } from '../data/content'

export function ServicesSection({
  ctaTo = '/services',
  ctaLabel = 'View All Services',
}: {
  ctaTo?: string
  ctaLabel?: string
}) {
  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <header className="section-header">
          <div className="section-badge">
            <span className="badge-icon">⚡</span>
            <span className="badge-text">Our Services</span>
          </div>
          <h2 id="services-heading" className="section-title">Our Expertise</h2>
          <p className="section-description">Comprehensive digital solutions for modern businesses</p>
        </header>
        <div className="services-grid" role="region" aria-label="Services">
          {services.map((service) => (
            <article key={service.slug} className="service-card" data-service={service.slug}>
              <div className="card-background">
                <div className="gradient-orb" />
              </div>
              <div className="card-content">
                <header className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-meta">
                    <h3>{service.title}</h3>
                    <span className="service-tag" />
                  </div>
                </header>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature} className="feature-item">✓ {feature}</li>
                  ))}
                </ul>
                <div className="service-stats">
                  <span className="card-stat-value">{service.stat}</span>
                  <span className="card-stat-label">{service.statLabel}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="services-cta">
          <h3>Ready to start?</h3>
          <p>Let&apos;s discuss how our services can accelerate your digital growth.</p>
          <Link to={ctaTo} className="btn-primary cta-button-large">{ctaLabel}</Link>
        </div>
      </div>
    </section>
  )
}
