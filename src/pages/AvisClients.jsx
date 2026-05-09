import { Link } from 'react-router-dom'
import { useReveal } from '../components/useReveal'
import './AvisClients.css'

const REVIEWS = [
  { name: 'Christina Thiellet', type: 'Buffet dînatoire', text: "Très satisfaite de notre collaboration avec Captain Cocktail à l'occasion d'un buffet dînatoire de notre entreprise. Personnel aussi efficace que discret, installation rapide, service agréable, adaptabilité à l'environnement. Traiteur force de proposition qui prend de bonnes initiatives lors de l'installation, gestion parfaite des quantités. Jolie présentation des mets. En prime, je salue l'humour de Claude, qui est très sympathique !" },
  { name: 'Ronald Giraud', type: 'Congrès médical', text: "J'ai eu recours au service de Captain Cocktail pour un buffet dînatoire dans le cadre d'un congrès avec 80 médecins à l'hôpital Sainte Anne. Le service a été excellent, ils ont su s'adapter pour répondre aux contraintes (nombreuses) de la journée. Les plats étaient vraiment bons et originaux. Nous avons été bien conseillés sur les quantités." },
  { name: 'Olivier Roche', type: 'Soirée privée', text: "Dans un cadre peu classique, pas simple d'accès (soirée dans une salle de boxe), l'équipe de Captain Cocktail s'est parfaitement adaptée et a montré un vrai professionnalisme, que nous avons senti avant même l'événement : force de proposition tout en étant à l'écoute, autonomie, prestation impeccable. A recommander pour vos prochaines soirées." },
  { name: 'Matthieu Lavigne', type: 'Baptême', text: "Nous avons bien apprécié l'ensemble de la prestation, du premier contact jusqu'au professionnalisme du service, en passant par la belle mise en place avant notre arrivée et la qualité du cocktail, efficace. Merci à Dominique pour sa gentillesse et sa disponibilité." },
  { name: 'Cuisinella Paris 2 Sébastopol', type: 'Entreprise', text: "Contact facile, excellent conseil de choix de mets et de quantités, livraison parfaite, prix très corrects et enfin... tout était délicieux, goûteux, frais. Le punch a lancé la fête, les petits fours l'ont vu battre son plein. Bravo Captain Cocktail ! Pro, sympa, qualitatif. À recommander." },
  { name: 'Rita Galati', type: 'Cocktail dînatoire', text: "Excellente prestation. Un grand professionnalisme et écoute. Tout le monde a apprécié la qualité du cocktail dînatoire y compris les végétariens ! Merci." },
  { name: 'AJPSC Paris', type: 'Cérémonie', text: "On est ravis : du choix du menu jusqu'à la mise en place, tout était parfait ! Les nouveaux diplômés se sont régalés ! Nous n'hésiterons pas à faire de nouveau appel à leur service !" },
  { name: 'Lucie Rondel', type: 'Réception', text: "Excellent buffet, plein de saveurs et de couleurs. Personnel agréable, gestion très professionnelle. Que du positif." },
  { name: 'Delphine Gobert', type: 'Réception', text: "Produits de grande qualité et surtout un excellent contact avec l'équipe qui a tout fait pour que ma réception se passe bien : excellent rapport qualité prix, je recommande !" },
  { name: 'Solène Petitdemange', type: 'Événement', text: "Très bon et jolie présentation. Service très agréable, très ponctuel et arrangeant. Parfait !" },
  { name: 'Valérie Sandevoir', type: 'Événement', text: "Interlocuteurs réactifs et à l'écoute. Prestation tout à fait conforme à ce que nous souhaitions ! Merci !" },
  { name: 'Christel Alcala', type: 'Réception', text: "Un service très professionnel, je recommande les yeux fermés." },
]

export default function AvisClients() {
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>
      <div className="page-header">
        <h1>Avis Clients</h1>
        <p>Note 5/5 sur Google — des centaines de réceptions réussies depuis 1990</p>
      </div>

      <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>

        <div className="avis-hero-grid reveal">
          <div className="avis-big-card">
            <div>
              <div className="avis-big-card__label">Notre note Google</div>
              <div className="avis-big-card__score">5/5</div>
              <div className="avis-big-card__stars">
                {[...Array(5)].map((_, i) => <div key={i} className="avis-star" />)}
              </div>
            </div>
            <div className="avis-big-card__sub">Des centaines de réceptions · depuis 1990</div>
          </div>
          <div className="avis-rating-img-card">
            <img
              src="https://static.wixstatic.com/media/2d5a72_31c1008a5b994c678fa956026bff3645~mv2.jpg/v1/fill/w_600,h_700,al_c,q_80,enc_avif,quality_auto/Screenshot_20260420_084252_Google_edited.jpg"
              alt="Avis Google Captain Cocktail"
            />
          </div>
        </div>

        <div style={{ marginBottom: 24 }} className="reveal">
          <div className="section-label">Témoignages</div>
          <h2 className="section-title">Ce qu'ils disent</h2>
        </div>

        <div className="avis-grid reveal">
          {REVIEWS.map((r, i) => (
            <div key={i} className="avis-card">
              <div className="avis-card__stars">
                {[...Array(5)].map((_, j) => <div key={j} className="avis-star" />)}
              </div>
              <p className="avis-card__text">"{r.text}"</p>
              <div className="avis-card__meta">
                <div className="avis-card__name">{r.name}</div>
                <div className="avis-card__type">{r.type}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="avis-cta-bar reveal">
          <div>
            <h2>Prêt pour votre réception ?</h2>
            <p>Rejoignez nos clients satisfaits. Devis gratuit, réponse sous 24h.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
            <Link to="/devis" className="btn btn-orange">Devis gratuit</Link>
            <a href="tel:0699400012" className="btn btn-white">06 99 40 00 12</a>
          </div>
        </div>

      </div>
    </div>
  )
}
