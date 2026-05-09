import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/nos-pieces', label: 'Nos Pièces' },
  { to: '/cocktails-aperitifs', label: 'Apéritifs' },
  { to: '/cocktails-dinatoires', label: 'Dînatoires' },
  { to: '/photos', label: 'Photos' },
  { to: '/avis-clients', label: 'Avis' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src="/logo.png" alt="Cap'tain Cocktail" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Cap'tain Cocktail</span>
            <span className="navbar__logo-sub">depuis 1990</span>
          </div>
        </Link>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/devis" className="btn btn-primary navbar__cta">
            Devis gratuit
          </Link>
        </nav>

        <button
          className={`navbar__burger ${open ? 'navbar__burger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
