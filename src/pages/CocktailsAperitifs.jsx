import { Link } from 'react-router-dom'
import { useReveal } from '../components/useReveal'
import './Formulas.css'

const FORMULES = [
  {
    name: 'Formule After',
    subtitle: '9 pièces / personne · 2 à 3 heures',
    price: 15,
    color: 'orange',
    items: [
      { name: 'Canapés', qty: '9 variétés', detail: 'Coppa et basilic sur moelleux de polenta, aubergine au cumin et fromage de brebis sur pain figues/noisettes, poulet façon kebab et tomate cerise sur pain nordique, bloc de foie gras et chutney mangue/abricot sur mini-brioche, poulet mariné tikka et ananas et coriandre sur pain noir, rillettes aux deux saumons sur mini-blinis sarrasin, saumon fumé et tzatziki sur pain aux épinards, crevette et guacamole/coriandre sur pain tomate, fromage de brebis et compotée de cerise noire sur pain aux noix.' },
      { name: 'Mini-clubs', qty: '3 pièces', detail: 'Pain polaire saumon fumé/fromage frais/oignon et ciboulette · pain de mie malt comté et beurre aux noix · pain de mie tomate fromage frais au pesto de basilic.' },
      { name: 'Sandwichs du voyage', qty: '2 pièces', detail: 'Grecs (saumon fumé et tzatziki) · Indiens (poulet tikka et tomate marinée) · Espagnols (jambon Serrano et fromage frais piquillos) · Japonais (thon fumé/sésame et sauce soja).' },
      { name: 'Mini-chouquettes', qty: '1 pièce', detail: 'Comté, beurre et noix de muscade.' },
      { name: 'Macarons', qty: '1 pièce · 6 variétés', detail: 'Chocolat, vanille, pistache, café, framboise et citron.' },
      { name: 'Mirlitons', qty: '1 pièce · 6 variétés', detail: 'Moelleux noisette, griotte, noix de coco, pistache, pomme caramélisée, chocolat.' },
    ],
    boissons: '+6€/pers.',
    boissonsDetail: 'Punch planteur (1L/6 pers.) · Vins Merlot et Sauvignon (75cl/10 pers.) · Sodas et eaux (1L/4 pers.)',
    options: ['Service au buffet', 'Verrerie', 'Location salle'],
  },
  {
    name: 'Formule Charme',
    subtitle: '12 pièces / personne · 2 à 3 heures',
    price: 20,
    color: 'brown',
    items: [
      { name: 'Canapés', qty: '9 variétés', detail: 'Cake aux oignons et chutney d\'orange amère et magret de canard fumé · financier aux tomates et crème de chèvre · blini crème au raifort et anchois marinés et baies roses · pain nordique et moelleux au crabe et mousse d\'avocat · biscuit aux noix et crème au roquefort · biscuit au caramel et crémeux au foie gras et gelée de figues · cake au poivron et crème crustacé et écrevisse marinée · blini crème citronnée et saumon fumé.' },
      { name: 'Mini-wraps', qty: '5 pièces', detail: 'Fromage de chèvre et légumes · saumon · suprême de poulet · pastrami.' },
      { name: 'Mini-clubs', qty: '1 pièce', detail: 'Pain polaire saumon fumé · pain de mie malt comté et beurre aux noix · pain de mie tomate fromage frais au pesto.' },
      { name: 'Sandwichs du voyage', qty: '2 pièces', detail: 'Grecs · Indiens · Espagnols · Japonais.' },
      { name: 'Mini-chouquettes', qty: '1 pièce', detail: 'Comté, beurre et noix de muscade.' },
      { name: 'Macarons + Petits fours', qty: '3 pièces', detail: 'Macarons mangue, cassis, mandarine, ananas, fraises. Petits fours : carrés opéra, pistache, tartelettes citron et chocolat, mini-éclairs chocolat et café.' },
    ],
    boissons: '+8€/pers.',
    boissonsDetail: 'Champagne Sélection Captain (75cl/6 pers.) · Vins Bordeaux et Sauvignon (75cl/10 pers.) · Sodas et eaux (1L/4 pers.)',
    options: ['Service au buffet', 'Verrerie', 'Location salle'],
  },
]

export default function CocktailsAperitifs() {
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>
      <div className="page-header">
        <h1>Cocktails Apéritifs</h1>
        <p>Formules After et Charme — 2 à 3 heures · livraison gratuite dès 25 convives</p>
      </div>

      <div className="formulas-page" style={{ paddingTop: 64, paddingBottom: 80 }}>
        <div className="formulas-page__intro reveal">
          <div className="formulas-page__intro-card">
            <div className="label">Durée</div>
            <div className="value">2 à 3h</div>
            <div className="sub">Cocktail apéritif</div>
          </div>
          <div className="formulas-page__intro-card">
            <div className="label">Quantité</div>
            <div className="value">8 à 12 pièces</div>
            <div className="sub">par personne</div>
          </div>
          <div className="formulas-page__intro-card">
            <div className="label">Livraison gratuite</div>
            <div className="value">Dès 25 pers.</div>
            <div className="sub">Paris et proche banlieue · mise en place +120€</div>
          </div>
        </div>

        {FORMULES.map((f, i) => (
          <div key={i} className="formula-block reveal">
            <div className={`formula-block__header formula-block__header--${f.color}`}>
              <div>
                <div className="formula-block__title">{f.name}</div>
                <div className="formula-block__subtitle">{f.subtitle}</div>
              </div>
              <div className="formula-block__price-wrap">
                <div className="formula-block__price">{f.price}€</div>
                <span className="formula-block__price-unit">par personne</span>
              </div>
            </div>

            <div className="formula-block__body">
              {f.items.map((item, j) => (
                <div key={j} className="formula-block__item">
                  <div className="formula-block__item-name">{item.name}</div>
                  <div className="formula-block__item-detail">{item.detail}</div>
                  <div className="formula-block__item-qty">{item.qty}</div>
                </div>
              ))}
            </div>

            <div className="formula-block__footer">
              <div>
                <div className="formula-block__boissons-label">Option boissons {f.boissons}</div>
                <div className="formula-block__boissons-text">{f.boissonsDetail}</div>
              </div>
              <div className="formula-block__options">
                {f.options.map((o, k) => <span key={k} className="formula-block__opt">{o}</span>)}
              </div>
            </div>

            <div className="formula-block__cta">
              <Link to="/devis" className="btn btn-primary">Demander un devis pour cette formule</Link>
            </div>
          </div>
        ))}

        <div className="formulas-note reveal">
          <p>Les variétés peuvent changer selon la saison, pour une même qualité. Minimum 25 personnes — nous consulter en dessous.</p>
        </div>
      </div>
    </div>
  )
}
