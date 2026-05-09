import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../components/useReveal'
import './Contact.css'
import './Devis.css'

const OCCASIONS = ['Cocktail d\'entreprise', 'Mariage', 'Anniversaire', 'Séminaire', 'Soirée privée', 'Pot de départ', 'Cérémonie', 'Autre']

const FORMULES = [
  { name: 'After', price: '15€' },
  { name: 'Charme', price: '20€' },
  { name: 'VIP', price: '26€' },
  { name: 'Jet-Set', price: '32€' },
]

export default function Devis() {
  const revealRef = useReveal()
  const [sent, setSent] = useState(false)

  return (
    <div ref={revealRef}>
      <div className="page-header">
        <h1>Demandez un devis</h1>
        <p>Gratuit, sans engagement — réponse sous 24h</p>
      </div>

      <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
        <div className="devis-layout reveal">

          {/* Sidebar */}
          <div className="devis-sidebar">
            <div className="devis-sidebar-card devis-sidebar-card--dark">
              <div className="devis-sidebar-card__label">Pourquoi nous ?</div>
              <div className="devis-checklist">
                {['Devis gratuit, sans engagement', 'Réponse sous 24h', 'Livraison gratuite dès 20 pers.', 'Note 5/5 Google', '+30 ans d\'expérience', 'Toute l\'Île-de-France'].map((item, i) => (
                  <div key={i} className="devis-checklist-item">
                    <div className="devis-checklist-item__dot" />
                    <span style={{ color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="devis-sidebar-card">
              <div className="devis-sidebar-card__label">Nos formules</div>
              <div className="devis-formules-list">
                {FORMULES.map((f, i) => (
                  <div key={i} className="devis-formule-row">
                    <div className="devis-formule-row__name">{f.name}</div>
                    <div className="devis-formule-row__price">{f.price}<span style={{ fontFamily: 'DM Sans', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>/pers.</span></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="devis-sidebar-card">
              <div className="devis-sidebar-card__label">Vous préférez appeler ?</div>
              <a href="tel:0699400012" className="btn btn-primary" style={{ justifyContent: 'center', marginTop: 8 }}>
                06 99 40 00 12
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="devis-form-card reveal delay-2">
            {sent ? (
              <div className="devis-success">
                <div className="devis-success__mark">✓</div>
                <h2>Demande envoyée</h2>
                <p>Merci. Nous vous recontacterons très rapidement pour établir votre devis personnalisé.</p>
                <Link to="/" className="btn btn-primary" style={{ marginTop: 8 }}>Retour à l'accueil</Link>
              </div>
            ) : (
              <>
                <h2>Votre demande</h2>
                <p>Remplissez ce formulaire et recevez votre devis personnalisé sous 24h.</p>
                <form className="form" onSubmit={e => { e.preventDefault(); setSent(true) }}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nom complet *</label>
                      <input type="text" required placeholder="Jean Dupont" />
                    </div>
                    <div className="form-group">
                      <label>Téléphone *</label>
                      <input type="tel" required placeholder="06 XX XX XX XX" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" required placeholder="votre@email.com" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Type d'occasion *</label>
                      <select required>
                        <option value="">Choisissez...</option>
                        {OCCASIONS.map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Date prévue</label>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nombre de convives *</label>
                      <input type="number" required placeholder="ex: 50" min="1" />
                    </div>
                    <div className="form-group">
                      <label>Formule souhaitée</label>
                      <select>
                        <option value="">À définir ensemble</option>
                        {FORMULES.map(f => <option key={f.name}>Formule {f.name} ({f.price}/pers.)</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Précisions</label>
                    <textarea rows="4" placeholder="Lieu, contraintes alimentaires, demandes particulières..." />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: '0.95rem' }}>
                    Envoyer ma demande de devis
                  </button>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    Livraison gratuite dès 20 convives à Paris et proche banlieue
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
