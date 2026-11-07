import { useEffect, useState } from 'react'
import { asset } from '../asset'
import { Link } from 'react-router-dom'
import { ContactSection } from '../components/ContactSection'
import { CtaArrow, FaqIcon } from '../components/Icons'
import { ServicesSection } from '../components/ServicesSection'
import {
  faqs,
  heroSlides,
  phones,
  projects,
  team,
  testimonials,
  webSlides,
} from '../data/content'

const logos = Array.from({ length: 12 }, (_, index) =>
  index % 2 === 0
    ? { src: asset('images/deloitte_logo.webp'), alt: 'Deloitte' }
    : { src: asset('images/tesla_logo.webp'), alt: 'Tesla' },
)

function useRotator(length: number, delay: number) {
  const [index, setIndex] = useState(0)
  const [token, setToken] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % length)
    }, delay)
    return () => window.clearInterval(id)
  }, [delay, length, token])

  const go = (next: number) => {
    setIndex((next + length) % length)
    setToken((current) => current + 1)
  }

  return { index, go }
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="featured-card">
      <div className="card-info">
        <div className="card-header-row">
          <div className="app-icon" style={{ background: project.gradient }}>{project.icon}</div>
          <h3 className="card-title">{project.title}</h3>
        </div>
        <p className="card-description">{project.description}</p>
        <div className="card-stats-grid">
          {project.stats.map((stat) => (
            <div key={stat.label} className="card-stat-item">
              <span className="stat-value-large">{stat.value}</span>
              <span className="stat-label-small">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="card-image-col">
        <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
      </div>
    </div>
  )
}

export function HomePage() {
  const hero = useRotator(heroSlides.length, 3000)
  const web = useRotator(webSlides.length, 5000)
  const featured = useRotator(projects.length, 4000)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const close = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element) || !target.closest('.faq-item')) {
        setOpenFaq(null)
      }
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Leading App & Web Development Company in Melbourne</h1>
            <p className="hero-subtitle">
              Transform your business with cutting-edge mobile apps and web solutions. We deliver innovative digital products for healthcare, fintech, and education clients across Victoria.
            </p>
            <div className="stats-bar">
              <div className="stat-item"><span className="stat-value">50+</span><span className="stat-label">Apps Delivered</span></div>
              <div className="stat-item"><span className="stat-value">4.9★</span><span className="stat-label">Client Rating</span></div>
              <div className="stat-item"><span className="stat-value">$10M+</span><span className="stat-label">Revenue Generated</span></div>
              <div className="stat-item"><span className="stat-value">5 Years</span><span className="stat-label">Melbourne Experience</span></div>
            </div>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
              <Link to="/case-studies" className="btn btn-secondary">View Our Work</Link>
            </div>
            <div className="trust-indicators">
              <p className="trust-text">Trusted by leading Melbourne businesses</p>
              <div className="client-logos">
                <div className="client-logo-chip">Healthcare+</div>
                <div className="client-logo-chip">FinTech Pro</div>
                <div className="client-logo-chip">EduLearn</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-slideshow">
              <div className="slideshow-container">
                {heroSlides.map((slide, index) => (
                  <div key={slide.src} className={`slide${hero.index === index ? ' active' : ''}`}>
                    <div className="slide-image-wrapper">
                      <img src={slide.src} className="slide-image" alt={slide.alt} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="client-logos-section" aria-labelledby="client-logos-heading">
        <div className="client-logos-container">
          <div className="client-logos-header">
            <h2 id="client-logos-heading" className="client-logos-title">Trusted by Industry Leaders</h2>
            <p className="client-logos-subtitle">Partnering with innovative companies to build the future</p>
          </div>
          <div className="logo-slider">
            <div className="logo-track">
              {logos.map((logo, index) => (
                <div className="logo-slide" key={`${logo.alt}-${index}`}>
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cascade-section" id="APPA" aria-labelledby="showcase-heading">
        <div className="cascade-container">
          <div className="cascade-content">
            <h2 id="showcase-heading">
              Apps That Drive <span className="gradient-text">Real Results</span>
            </h2>
            <p>
              Our mobile applications deliver exceptional user experiences and measurable business outcomes. From concept to launch, we create apps that users love and businesses rely on.
            </p>
            <div className="cascade-stats">
              <div className="stat"><span className="stat-value">4.8★</span><span className="stat-label">Average Rating</span></div>
              <div className="stat"><span className="stat-value">500K+</span><span className="stat-label">Downloads</span></div>
              <div className="stat"><span className="stat-value">98%</span><span className="stat-label">User Retention</span></div>
            </div>
            <a href="#featured-projects" className="cta-button-large">
              View Case Studies <CtaArrow />
            </a>
          </div>
          <div className="cascade-phones">
            {phones.map((src, index) => (
              <img key={src} src={src} alt={`App screen ${index + 1}`} className={`cascade-phone phone-${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="macbook-showcase-section" id="WEBS" aria-labelledby="web-showcase-heading">
        <div className="macbook-showcase-container">
          <div className="macbook-showcase-content">
            <h2 id="web-showcase-heading">
              Web Solutions That <span className="gradient-text">Scale Globally</span>
            </h2>
            <p>
              We build robust, scalable, and high-performance web applications tailored to your business needs. From enterprise platforms to dynamic web portals, we ensure your digital presence is second to none.
            </p>
            <div className="showcase-stats">
              <div className="showcase-stat"><span className="showcase-stat-number">100+</span><span className="showcase-stat-label">Web Platforms</span></div>
              <div className="showcase-stat"><span className="showcase-stat-number">99.9%</span><span className="showcase-stat-label">Uptime</span></div>
              <div className="showcase-stat"><span className="showcase-stat-number">3x</span><span className="showcase-stat-label">ROI Increase</span></div>
            </div>
            <a href="#featured-projects" className="cta-button-large">
              View Web Projects <CtaArrow />
            </a>
          </div>
          <div className="macbook-display">
            <div className="web-showcase-slider">
              {webSlides.map((slide, index) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  className={`web-slide${web.index === index ? ' active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects-section" id="featured-projects" aria-labelledby="featured-projects-heading">
        <div className="featured-projects-container">
          <h2 id="featured-projects-heading" className="featured-projects-title">Featured Projects</h2>
          <div className="featured-slideshow">
            {projects.map((project, index) => (
              <div key={project.title} className={`featured-slide${featured.index === index ? ' active' : ''}`}>
                <ProjectCard project={project} />
              </div>
            ))}
            <button className="featured-nav prev" aria-label="Previous Project" onClick={() => featured.go(featured.index - 1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button className="featured-nav next" aria-label="Next Project" onClick={() => featured.go(featured.index + 1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
          <div className="featured-indicators">
            {projects.map((project, index) => (
              <button
                key={project.title}
                className={`featured-indicator${featured.index === index ? ' active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => featured.go(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-cascade-section" id="scroll-cascade" aria-labelledby="innovation-heading">
        <div className="innovation-content">
          <div className="innovation-text">
            <h2 id="innovation-heading">
              We created technology valued at <span className="highlight">$17,000,000 by Telstra.</span>
            </h2>
            <p>This world first technology was granted a patent within the US & Australia.</p>
            <div className="innovation-stats">
              <div className="innovation-stat"><span className="innovation-stat-number">$17M</span><span className="innovation-stat-label">Technology Value</span></div>
              <div className="innovation-stat"><span className="innovation-stat-number">2</span><span className="innovation-stat-label">Patents Granted</span></div>
              <div className="innovation-stat"><span className="innovation-stat-number">1st</span><span className="innovation-stat-label">World First Tech</span></div>
            </div>
            <Link to="/ai" className="cta-button-large">
              Learn More About Our Innovation <CtaArrow />
            </Link>
          </div>
          <div className="innovation-macbooks">
            <div className="macbook-grid">
              <div className="macbook-item">
                <img src={asset('images/macbooknew.avif')} alt="MacBook showing innovative technology interface" className="device-laptop animate-in" />
              </div>
              <div className="macbook-item">
                <img src={asset('images/app_showcase.webp')} alt="App Interface Showcase" className="device-tablet animate-in" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-heading">
        <div className="about-container">
          <header className="about-header">
            <div className="about-badge"><span>👥</span><span>About Solvnext</span></div>
            <h2 id="about-heading" className="about-title">
              Building the Future of <span className="gradient-text">Digital Innovation</span>
            </h2>
            <p className="about-description">
              We&apos;re a Melbourne-based team of passionate developers, designers, and strategists committed to transforming businesses through cutting-edge technology solutions.
            </p>
          </header>
          <div className="about-content">
            <div className="about-story">
              <h3>Our Story</h3>
              <p>Founded in Melbourne&apos;s vibrant tech scene, Solvnext emerged from a simple belief: every business deserves world-class digital solutions that drive real results.</p>
              <p>Over the years, we&apos;ve partnered with startups, scale-ups, and enterprises across healthcare, fintech, and education sectors, delivering applications that don&apos;t just meet expectations—they exceed them.</p>
              <ul className="about-highlights">
                <li><span className="check-icon">✓</span> Award-winning mobile and web applications</li>
                <li><span className="check-icon">✓</span> Patented technology valued at $17M by Telstra</li>
                <li><span className="check-icon">✓</span> Trusted by leading Melbourne businesses</li>
                <li><span className="check-icon">✓</span> 100% client satisfaction rate</li>
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
          <div className="team-preview">
            <h3>Meet Our Expert Team</h3>
            <div className="team-grid">
              {team.map((member) => (
                <div key={member.initials} className="team-member">
                  <div className="team-avatar">{member.initials}</div>
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-role">{member.role}</p>
                </div>
              ))}
            </div>
            <div className="about-cta">
              <Link to="/ai" className="cta-button-large">
                Learn More About Our Team <CtaArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
        <div className="testimonials-container">
          <header className="testimonials-header">
            <h2 id="testimonials-heading" className="testimonials-title">
              Clients Love <span className="gradient-text">Solvnext!</span>
            </h2>
            <p className="testimonials-description">
              Don&apos;t just take our word for it. Here&apos;s what our clients say about working with us.
            </p>
          </header>
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <div key={item.name} className="testimonial-card">
                <div className="testimonial-company">
                  <div className={`company-logo ${item.tone}`}>{item.company}</div>
                </div>
                <div className="testimonial-rating">
                  {Array.from({ length: item.stars }, (_, index) => (
                    <span key={index} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-quote">{item.quote}</p>
                <div className="testimonial-client">
                  <div className="client-avatar">{item.initials}</div>
                  <div className="client-info">
                    <div className="client-name">{item.name}</div>
                    <div className="client-role">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq" aria-labelledby="faq-heading">
        <div className="faq-container">
          <header className="faq-header">
            <div className="faq-badge"><span>❓</span><span>Frequently Asked Questions</span></div>
            <h2 id="faq-heading" className="faq-title">
              Common Questions About <span className="gradient-text">App Development</span>
            </h2>
            <p className="faq-description">
              Everything you need to know about mobile app development, web development, and software solutions in Melbourne.
            </p>
          </header>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <div key={item.q} className={`faq-item${openFaq === index ? ' active' : ''}`}>
                <button
                  className="faq-question"
                  onClick={(event) => {
                    event.stopPropagation()
                    setOpenFaq((current) => (current === index ? null : index))
                  }}
                >
                  {item.q}
                  <FaqIcon />
                </button>
                <div className="faq-answer"><p>{item.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}

export { ProjectCard }
