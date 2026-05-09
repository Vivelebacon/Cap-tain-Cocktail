import { Link } from 'react-router-dom'
import { useReveal } from '../components/useReveal'
import './Home.css'

const IMG = {
  hero: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1400&q=85&fit=crop',
  aperitif: 'https://static.wixstatic.com/media/2d5a72_8d16d7f9e5cf4863bd5f5cdf07ed83a0~mv2.jpg/v1/fill/w_700,h_500,al_c,q_80,enc_avif,quality_auto/traiteur-brunch-cocktail-aperitif-angers.jpg',
  dinatoire: 'https://static.wixstatic.com/media/2d5a72_5cfeae4e5cdd435e8c78cb93f4b4095d~mv2.jpg/v1/fill/w_700,h_500,al_c,q_80,enc_avif,quality_auto/image0000011%20(1).jpg',
  sideTop: 'https://static.wixstatic.com/media/2d5a72_af6884d6dde04a3ebf6b0690cd452f3b~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80,enc_avif,quality_auto/2d5a72_af6884d6dde04a3ebf6b0690cd452f3b~mv2.jpg',
  sideBottom: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=85&fit=crop',
  g1: 'https://static.wixstatic.com/media/2d5a72_08614cdfabd94457b783479f50652d1c~mv2.jpg/v1/fill/w_500,h_500,q_90,enc_avif,quality_auto/2d5a72_08614cdfabd94457b783479f50652d1c~mv2.jpg',
  g2: 'https://static.wixstatic.com/media/2d5a72_8e2dfbfba9184c90a2e068bfa86a0c1c~mv2.jpg/v1/fill/w_500,h_500,q_90,enc_avif,quality_auto/2d5a72_8e2dfbfba9184c90a2e068bfa86a0c1c~mv2.jpg',
  g3: 'https://static.wixstatic.com/media/2d5a72_2bfa100967a44a7895d5c1c81a1a88c5~mv2.jpg/v1/fill/w_500,h_500,q_90,enc_avif,quality_auto/2d5a72_2bfa100967a44a7895d5c1c81a1a88c5~mv2.jpg',
  g4: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85&fit=crop',
}

const REVIEWS = [
  { name: 'Christina Thiellet', text: "Personnel aussi efficace que discret, installation rapide, service agréable. Traiteur force de proposition qui prend de bonnes initiatives, gestion parfaite des quantités, jolie présentation des mets. Je salue l'humour de Claude, qui est très sympathique !" },
  { name: 'Olivier Roche', text: "Dans un cadre peu classique (soirée dans une salle de boxe), l'équipe de Captain Cocktail s'est parfaitement adaptée et a montré un vrai professionnalisme. Force de proposition tout en étant à l'écoute, autonomie, prestation impeccable." },
  { name: 'Ronald Giraud', text: "Pour un congrès avec 80 médecins à l'hôpital Sainte Anne, le service a été excellent. Ils ont su s'adapter pour répondre aux contraintes (nombreuses) de la journée. Les plats étaient vraiment bons et originaux." },
]

const LOGOS = [
  'https://static.wixstatic.com/media/2d5a72_c40993dbe2b84a0db64fbd2566e6589d~mv2.png/v1/fill/w_160,h_80,al_c,q_85,enc_avif,quality_auto/t%C3%A9l%C3%A9chargement%20(1).png',
  'https://static.wixstatic.com/media/2d5a72_b5f07edc1a4f47bda2cb8154a0d7c9b4~mv2.png/v1/fill/w_80,h_80,al_c,q_85,enc_avif,quality_auto/t%C3%A9l%C3%A9chargement%20(3).png',
  'https://static.wixstatic.com/media/2d5a72_adeeac5367374cea95ad2e6f5aa29703~mv2.png/v1/fill/w_120,h_80,al_c,q_85,enc_avif,quality_auto/2d5a72_adeeac5367374cea95ad2e6f5aa29703~mv2.png',
  'https://static.wixstatic.com/media/2d5a72_3deadeec7c4040e088323988e7426f84~mv2.png/v1/fill/w_120,h_80,al_c,q_85,enc_avif,quality_auto/2d5a72_3deadeec7c4040e088323988e7426f84~mv2.png',
  'https://static.wixstatic.com/media/2d5a72_f29e60a164264773861dd96f1879fbbd~mv2.jpg/v1/fill/w_120,h_80,al_c,q_80,enc_avif,quality_auto/2d5a72_f29e60a164264773861dd96f1879fbbd~mv2.jpg',
]

export default function Home() {
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>

      {/* HERO BENTO */}
      <section className="hero">
        <div className="hero__bento">

          {/* Main card */}
          <div className="hero__main">
            <img className="hero__main-img" src={IMG.hero} alt="Cap'tain Cocktail traiteur Paris" />
            <div className="hero__main-overlay" />
            <div className="hero__main-content">
              <div className="hero__tag">Traiteur Paris — Depuis 1990</div>
              <h1 className="hero__title">
                Vos moments<br />
                <em>heureux,</em><br />
                livrés.
              </h1>
              <div className="hero__bottom">
                <div>
                  <div className="hero__rating-stars">
                    {[...Array(5)].map((_, i) => <div key={i} className="hero__rating-star" />)}
                  </div>
                  <div className="hero__rating-text">5/5 · Google Reviews</div>
                </div>
                <div className="hero__since">Paris &amp; Île-de-France</div>
                <Link to="/devis" className="btn btn-white" style={{ borderRadius: '100px' }}>
                  Devis gratuit
                </Link>
              </div>
            </div>
          </div>

          {/* Side top — aperitifs */}
          <div className="hero__side-top">
            <div>
              <div className="hero__side-top-title">APÉRITIFS<br />&amp; BUFFETS</div>
              <div className="hero__side-top-sub">Bouchées raffinées, livraison gratuite</div>
            </div>
            <Link to="/cocktails-aperitifs" className="hero__side-top-btn">Voir les formules</Link>
            <img className="hero__side-top-img" src={IMG.sideTop} alt="Bouchées cocktail apéritif" />
          </div>

          {/* Side bottom — prix */}
          <div className="hero__side-bottom">
            <div className="hero__price-badge">Dès 15€/pers.</div>
            <div>
              <div className="hero__side-bottom-title">DÎNATOIRES</div>
              <div className="hero__side-bottom-sub">Formules VIP et Jet-Set<br />pour vos grandes occasions</div>
            </div>
            <img className="hero__side-bottom-img" src={IMG.sideBottom} alt="Buffet dînatoire" />
          </div>

        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="services-strip reveal">
        <div className="services-strip__inner">
          <div className="services-strip__item">
            <div className="services-strip__label">Livraison</div>
            <div className="services-strip__value">Gratuite</div>
            <div className="services-strip__sub">Paris + proche banlieue, dès 20 convives</div>
          </div>
          <div className="services-strip__item">
            <div className="services-strip__label">Service complet</div>
            <div className="services-strip__value">Clé en main</div>
            <div className="services-strip__sub">Mise en place + service au buffet disponible</div>
          </div>
          <div className="services-strip__item">
            <div className="services-strip__label">Zone</div>
            <div className="services-strip__value">Île-de-France</div>
            <div className="services-strip__sub">Paris · 92 · 93 · 94 et au-delà</div>
          </div>
        </div>
      </section>

      {/* FORMULAS */}
      <section className="formulas">
        <div className="formulas__header reveal">
          <div>
            <div className="section-label">Nos formules</div>
            <h2 className="section-title">Deux façons de<br />nous régaler</h2>
          </div>
          <Link to="/nos-pieces" className="btn btn-outline">Voir toutes les pièces</Link>
        </div>
        <div className="formulas__cards reveal">
          <div className="formula-card">
            <img className="formula-card__bg" src={IMG.aperitif} alt="Cocktail apéritif" />
            <div className="formula-card__overlay" />
            <div className="formula-card__content">
              <div className="formula-card__type">2 à 3 heures · 8–12 pièces/pers.</div>
              <div className="formula-card__name">Cocktails<br />Apéritifs</div>
              <div className="formula-card__bottom">
                <div className="formula-card__price">À partir de <strong>15€</strong></div>
                <Link to="/cocktails-aperitifs" className="formula-card__btn">Découvrir</Link>
              </div>
            </div>
          </div>
          <div className="formula-card">
            <img className="formula-card__bg" src={IMG.dinatoire} alt="Cocktail dînatoire" />
            <div className="formula-card__overlay" />
            <div className="formula-card__content">
              <div className="formula-card__type">4 à 5 heures · 18–22 pièces/pers.</div>
              <div className="formula-card__name">Cocktails<br />Dînatoires</div>
              <div className="formula-card__bottom">
                <div className="formula-card__price">À partir de <strong>26€</strong></div>
                <Link to="/cocktails-dinatoires" className="formula-card__btn">Découvrir</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="gallery-strip">
        <div className="gallery-strip__header reveal">
          <div>
            <div className="section-label">Galerie</div>
            <h2 className="section-title">Nos créations</h2>
          </div>
          <Link to="/photos" className="btn btn-outline">Toutes les photos</Link>
        </div>
        <div className="gallery-strip__grid reveal">
          {[IMG.g1, IMG.g2, IMG.g3, IMG.g4].map((src, i) => (
            <div key={i} className="gallery-strip__item">
              <img src={src} alt={`Bouchée traiteur ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews">
        <div className="reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32 }}>
          <div>
            <div className="section-label">Avis Google — 5/5</div>
            <h2 className="section-title">Ce qu'ils<br />disent</h2>
          </div>
          <Link to="/avis-clients" className="btn btn-outline">Tous les avis</Link>
        </div>
        <div className="reviews__grid reveal">
          {REVIEWS.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-card__stars">
                {[...Array(5)].map((_, j) => <div key={j} className="review-card__star" />)}
              </div>
              <p className="review-card__text">"{r.text}"</p>
              <div className="review-card__author">{r.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients">
        <div className="reveal" style={{ marginBottom: 16 }}>
          <div className="section-label" style={{ textAlign: 'center' }}>Ils nous ont fait confiance</div>
        </div>
        <div className="clients__strip reveal">
          {LOGOS.map((src, i) => (
            <div key={i} className="clients__logo">
              <img src={src} alt={`Client ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="home-cta__inner reveal">
          <div>
            <h2 className="home-cta__title">Prêt pour votre<br />prochaine réception ?</h2>
            <p className="home-cta__sub">Livraison gratuite dès 20 convives à Paris et en Île-de-France. Réponse sous 24h.</p>
          </div>
          <div className="home-cta__actions">
            <Link to="/devis" className="btn btn-orange">Devis gratuit</Link>
            <a href="tel:0699400012" className="btn btn-white">06 99 40 00 12</a>
          </div>
        </div>
      </section>

    </div>
  )
}
