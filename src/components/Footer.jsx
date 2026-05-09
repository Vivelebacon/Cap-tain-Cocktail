import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__brand-mark">
            <img src="/logo.png" alt="Cap'tain Cocktail" className="footer__logo-img" />
            <div>
              <div className="footer__brand-name">Cap'tain Cocktail</div>
              <span className="footer__brand-since">Traiteur Paris — 1990</span>
            </div>
          </div>
          <p className="footer__desc">
            Cocktails apéritifs et dînatoires de qualité, livrés ou servis sur place à Paris et en Île-de-France.
          </p>
          <a href="https://www.facebook.com/CaptainCocktail75/" target="_blank" rel="noopener noreferrer" className="footer__social">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </a>
        </div>

        <div className="footer__col">
          <h4>Navigation</h4>
          <Link to="/">Accueil</Link>
          <Link to="/nos-pieces">Nos pièces cocktail</Link>
          <Link to="/cocktails-aperitifs">Cocktails apéritifs</Link>
          <Link to="/cocktails-dinatoires">Cocktails dînatoires</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/avis-clients">Avis clients</Link>
          <Link to="/devis">Demander un devis</Link>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href="tel:0699400012" className="footer__contact-row">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.07 2a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            06 99 40 00 12
          </a>
          <a href="mailto:captainco75@gmail.com" className="footer__contact-row">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            captainco75@gmail.com
          </a>
          <div className="footer__contact-row">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Bld Saint Germain, 75005 Paris
          </div>
          <div className="footer__zone">
            Ile-de-France — 75 · 92 · 93 · 94
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <span>© 2024 Cap'tain Cocktail — Tous droits réservés</span>
          <div className="footer__bottom-links">
            <Link to="/contact">CGV</Link>
            <span>·</span>
            <Link to="/contact">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
