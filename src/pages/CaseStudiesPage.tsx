import { ProjectCard } from './HomePage'
import { projects } from '../data/content'

export function CaseStudiesPage() {
  return (
    <>
      <section className="featured-projects-section" aria-labelledby="cases-heading">
        <div className="featured-projects-container">
          <header className="section-header">
            <div className="section-badge">
              <span className="badge-text">Selected Work</span>
            </div>
            <h1 id="cases-heading" className="featured-projects-title">Featured Projects</h1>
            <p className="section-description">
              Apps and platforms shipped for sports, logistics, finance, healthcare, and retail.
            </p>
          </header>
        </div>
      </section>
      <div className="case-list">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  )
}
