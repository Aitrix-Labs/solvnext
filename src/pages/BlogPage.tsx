import { Link, useParams } from 'react-router-dom'
import { posts } from '../data/content'

export function BlogPage() {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug)

  if (slug && !post) {
    return (
      <section className="about-section">
        <div className="about-container">
          <header className="about-header">
            <h2 className="about-title">Article not found</h2>
            <Link to="/blog" className="btn btn-primary">Back to the blog</Link>
          </header>
        </div>
      </section>
    )
  }

  if (post) {
    return (
      <section className="about-section">
        <div className="about-container">
          <header className="about-header">
            <div className="about-badge"><span>{post.kicker}</span></div>
            <h1 className="about-title">{post.title}</h1>
          </header>
          <div className="article-body">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link to="/blog" className="btn btn-secondary">All articles</Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="about-section" style={{ paddingBottom: '2rem' }}>
        <div className="about-container">
          <header className="about-header">
            <div className="about-badge"><span>Journal</span></div>
            <h1 className="about-title">Notes from the <span className="gradient-text">Solvnext</span> studio</h1>
            <p className="about-description">
              Practical writing on app budgets, platform choices, and what happens after launch.
            </p>
          </header>
        </div>
      </section>
      <div className="blog-grid">
        {posts.map((item) => (
          <Link key={item.slug} to={`/blog/${item.slug}`} className="blog-card">
            <div className="blog-kicker">{item.kicker}</div>
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
          </Link>
        ))}
      </div>
    </>
  )
}
