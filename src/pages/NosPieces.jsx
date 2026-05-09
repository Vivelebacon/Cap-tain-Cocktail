import { Link } from 'react-router-dom'
import { useReveal } from '../components/useReveal'
import './NosPieces.css'

const CATEGORIES = [
  { label: 'Salé', name: 'Canapés & Bouchées', desc: 'Créations de saison, renouvelées régulièrement pour une qualité constante.' },
  { label: 'Salé', name: 'Mini-clubs & Sandwichs', desc: 'Pain polaire, malt, tomate — des recettes simples et raffinées.' },
  { label: 'Frais', name: 'Verrines & Brochettes', desc: 'Fraîcheur et légèreté en une bouchée.' },
  { label: 'Sucré', name: 'Buffet Dessert', desc: 'Macarons, petits fours, mirlitons et tartelettes.' },
]

const GALLERY = [
  'https://static.wixstatic.com/media/2d5a72_08614cdfabd94457b783479f50652d1c~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/2d5a72_08614cdfabd94457b783479f50652d1c~mv2.jpg',
  'https://static.wixstatic.com/media/2d5a72_8e2dfbfba9184c90a2e068bfa86a0c1c~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/2d5a72_8e2dfbfba9184c90a2e068bfa86a0c1c~mv2.jpg',
  'https://static.wixstatic.com/media/2d5a72_2bfa100967a44a7895d5c1c81a1a88c5~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/2d5a72_2bfa100967a44a7895d5c1c81a1a88c5~mv2.jpg',
  'https://static.wixstatic.com/media/2d5a72_af6884d6dde04a3ebf6b0690cd452f3b~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,enc_avif,quality_auto/2d5a72_af6884d6dde04a3ebf6b0690cd452f3b~mv2.jpg',
  'https://static.wixstatic.com/media/2d5a72_da6b1080db41496d9835360f71a019d2~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/IMG_20181014_1333211%20(1).jpg',
  'https://static.wixstatic.com/media/2d5a72_68c81bad06bb40d582cfccfc16c5dff0~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/IMG_20190413_1827551.jpg',
]

export default function NosPieces() {
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>
      <div className="page-header">
        <h1>Nos Pièces Cocktail</h1>
        <p>Des bouchées raffinées, fraîches, renouvelées selon la saison</p>
      </div>

      <div className="container">
        {/* Categories */}
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="reveal">
            <div className="section-label">Ce qu'on propose</div>
            <h2 className="section-title">Nos catégories</h2>
          </div>
          <div className="pieces-categories reveal">
            {CATEGORIES.map((c, i) => (
              <div key={i} className="pieces-cat">
                <div className="pieces-cat__label">{c.label}</div>
                <div className="pieces-cat__name">{c.name}</div>
                <div className="pieces-cat__desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 0 }}>
            <div>
              <div className="section-label">Galerie</div>
              <h2 className="section-title">Nos créations</h2>
            </div>
            <Link to="/photos" className="btn btn-outline">Toutes les photos</Link>
          </div>
          <div className="pieces-grid reveal">
            {GALLERY.map((src, i) => (
              <div key={i} className="pieces-grid__item">
                <img src={src} alt={`Bouchée traiteur ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* Info */}
        <section className="section">
          <div className="reveal">
            <div className="section-label">Quantités recommandées</div>
            <h2 className="section-title" style={{ marginBottom: 24 }}>Combien prévoir ?</h2>
          </div>
          <div className="pieces-info-bar reveal">
            <div className="pieces-info-card">
              <div className="pieces-info-card__label">Cocktail apéritif — 2 à 3 heures</div>
              <div className="pieces-info-card__value">8 à 12 pièces</div>
              <div className="pieces-info-card__sub">par personne</div>
            </div>
            <div className="pieces-info-card pieces-info-card--light">
              <div className="pieces-info-card__label">Cocktail dînatoire — 4 à 5 heures</div>
              <div className="pieces-info-card__value">18 à 22 pièces</div>
              <div className="pieces-info-card__sub">par personne</div>
            </div>
          </div>
          <p style={{ marginTop: 16, fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            Les variétés peuvent changer selon la saison — pour une qualité constante.
          </p>
        </section>
      </div>
    </div>
  )
}
