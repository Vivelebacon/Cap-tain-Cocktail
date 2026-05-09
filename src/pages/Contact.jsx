import { useReveal } from '../components/useReveal'
import './Contact.css'

export default function Contact() {
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>
      <div className="page-header">
        <h1>Contact</h1>
        <p>Une question ? Nous répondons rapidement.</p>
      </div>

      <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
        <div className="contact-layout reveal">

          <div className="contact-info-col">
            <a href="tel:0699400012" className="contact-info-card" style={{ textDecoration: 'none' }}>
              <div className="contact-info-card__label">Téléphone</div>
              <div className="contact-info-card__value" style={{ fontSize: '1.8rem', color: 'var(--brown)', display: 'block' }}>06 99 40 00 12</div>
            </a>

            <a href="mailto:captainco75@gmail.com" className="contact-info-card" style={{ textDecoration: 'none' }}>
              <div className="contact-info-card__label">Email</div>
              <div className="contact-info-card__value" style={{ fontSize: '1rem', letterSpacing: 0, textTransform: 'none', color: 'var(--brown)', display: 'block' }}>captainco75@gmail.com</div>
            </a>

            <div className="contact-info-card contact-info-card--dark">
              <div className="contact-info-card__label">Bureaux</div>
              <div className="contact-info-card__value">Bld Saint Germain</div>
              <div className="contact-info-card__sub">75005 Paris</div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card__label">Laboratoires</div>
              <div className="contact-info-card__value">Fontenay-sous-Bois</div>
              <div className="contact-info-card__sub">94120</div>
            </div>

            <div className="contact-info-card contact-info-card--dark">
              <div className="contact-info-card__label">Zone d'intervention</div>
              <div className="contact-info-card__value">Île-de-France</div>
              <div className="contact-info-card__sub">Paris · 92 · 93 · 94 et au-delà</div>
            </div>

            <a href="https://www.facebook.com/CaptainCocktail75/" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Suivez-nous sur Facebook
            </a>
          </div>

          <div className="contact-form-card reveal delay-2">
            <h2>Envoyez un message</h2>
            <p>Pour un devis détaillé, utilisez notre <a href="/devis" style={{ color: 'var(--orange)', fontWeight: 700 }}>formulaire de devis</a>.</p>
            <form className="form" onSubmit={e => { e.preventDefault(); alert('Message envoyé !') }}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input type="text" id="name" required placeholder="Jean Dupont" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" id="phone" placeholder="06 XX XX XX XX" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required placeholder="votre@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" required rows="5" placeholder="Votre message..." />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px' }}>
                Envoyer le message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
