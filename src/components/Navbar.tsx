import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { brand, navLinks } from '../data/content'

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    return () => document.body.classList.remove('no-scroll')
  }, [open])

  const close = () => setOpen(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={close}>
          {brand.name}
        </Link>
        <button
          className={`mobile-menu-toggle${open ? ' active' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <ul className={`nav-menu${open ? ' active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={close}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="cta-button" onClick={close}>
              Get Free Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
