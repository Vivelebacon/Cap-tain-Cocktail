import { Link } from 'react-router-dom'
import { useReveal } from '../components/useReveal'
import './Formulas.css'

const FORMULES = [
  {
    name: 'Formule VIP',
    subtitle: '16 pièces / personne · 4 à 5 heures',
    price: 26,
    color: 'orange',
    items: [
      { name: 'Canapés', qty: '9 variétés', detail: 'Bouchée écrevisse et fromage au raifort sur moelleux citron basilic · tomate marinée avec fromage de chèvre et noix de pécan sur pain aux noix · crevette sur pain aux épinards avec fromage au basilic · courgette mini-involtini sur pain aux olives · jambon Serrano sur beurre figue pistache sur pain aux noisettes · chou comté abricot moelleux amande · roulé de galette et saumon fumé avec fromage frais à l\'aneth · chou crabe concombre et graines de pavot · bloc de foie gras et chutney mangue-abricot sur pain aux épices.' },
      { name: 'Mini-burgers saumon', qty: '1 pièce', detail: 'Briochettes au sésame avec saumon sur lit de fromage raifort.' },
      { name: 'Verrines', qty: '1 pièce · 3 variétés', detail: 'Saumon sur mezzé à la grecque · fromage de chèvre sur miel · foie gras et figue · ricotta et légumes marinés.' },
      { name: 'Pain surprise', qty: '2 sandwichs · 5 variétés', detail: 'Délices d\'avocat crevettes et sésame noir · coppas crème fraîche moutarde à l\'ancienne et cornichons · foie gras de canard et purée de mangue · saumon fumé fromage frais et agrumes · fromage de chèvre cranberries et pistaches.' },
      { name: 'Brochettes gourmandes', qty: '1 pièce · 3 variétés', detail: 'Figue moelleuse et roulé de comté · tomates marinées/olive noire kalamon · mozzarella enrobée de pistaches · tomate jaune marinée/jambon serrano · fromage de chèvre au cranberrie et pistache · ananas mariné.' },
      { name: 'Mini-gougères', qty: '2 pièces', detail: 'Recette bourguignonne au comté, beurre et noix de muscade.' },
      { name: 'Macarons + Mini tartelettes', qty: '3 pièces', detail: 'Macarons : ananas, fraises, pomme verte, mangue, cassis, mandarine. Tartelettes : ananas passion, fromage blanc framboise, pomme caramel, chocolat, groseille framboise, citron, abricot.' },
    ],
    boissons: '+8€/pers.',
    boissonsDetail: 'Champagne Sélection Captain (75cl/6 pers.) · Vins Bordeaux et Sauvignon (75cl/10 pers.) · Sodas et eaux (1L/4 pers.)',
    options: ['Service au buffet', 'Verrerie', 'Décoration', 'Location salle'],
  },
  {
    name: 'Formule Jet-Set',
    subtitle: '20 pièces / personne · 4 à 5 heures',
    price: 32,
    color: 'brown',
    items: [
      { name: 'Canapés', qty: '9 variétés', detail: 'Bloc de foie gras et chutney mangue abricot chocolat sur mini brioche · coppa et basilic sur moelleux de polenta · aubergine au cumin et fromage de brebis sur pain figues noisettes · poulet façon turque et tomate cerise sur pain nordique · poulet mariné tikka ananas et coriandre sur pain noir · rillettes aux deux saumons et roquette sur mini-blinis sarrasin · saumon fumé et tzatziki sur pain aux épinards · crevette et guacamole coriandre sushi sur pain tomate · fromage de brebis et compotée de cerise noire sur pain aux noix.' },
      { name: 'Mini-Wraps', qty: '2 pièces · 4 variétés', detail: 'Fromage de chèvre et légumes · truite sauvage · suprême de poulet · pastrami.' },
      { name: 'Verrines', qty: '1 pièce · 4 variétés', detail: 'Foie gras et figue aux éclats de noisettes · saumon sur mezzé à la grecque · fromage de chèvre sur miel · ricotta et légumes marinés.' },
      { name: 'Mini-burgers saumon', qty: '1 pièce', detail: 'Briochettes au sésame avec saumon sur lit de fromage raifort.' },
      { name: 'Mini-clubs', qty: '1 pièce · 4 variétés', detail: 'Pain polaire saumon fumé fromage frais oignon et ciboulette · pain de mie malt comté et beurre aux noix · pain de mie tomate fromage frais au pesto de basilic.' },
      { name: 'Pain surprise + Brochettes', qty: '3 pièces', detail: 'Pain surprise 5 variétés : mousse de canard au foie gras · jambon et fromage frais aux piquillos · saumon fumé sur beurre au citron et pavot · tomates mi-séchées fromage de brebis et olives · brie crémeux figues et noisettes.' },
      { name: 'Mini-gougères', qty: '2 pièces', detail: 'Recette bourguignonne au comté, beurre et noix de muscade.' },
      { name: 'Macarons + Petits fours', qty: '4 pièces', detail: 'Macarons : caramel pointe de sel · chocolat orange · noix de coco · figue · banane · chocolat au lait noisette. Petits fours : mini-éclairs chocolat et café · carrés pomme cassis · barquettes abricot et framboises · carrés opéra et pistache · tartelettes citron et chocolat.' },
    ],
    boissons: '+10€/pers.',
    boissonsDetail: 'Champagne de notre sélection (75cl/5 pers.) · Vins Bordeaux et Sauvignon (75cl/8 pers.) · Sodas et eaux (1L/4 pers.)',
    options: ['Service au buffet', 'Verrerie', 'Décoration', 'Location salle'],
  },
]

export default function CocktailsDinatoires() {
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>
      <div className="page-header">
        <h1>Cocktails Dînatoires</h1>
        <p>Formules VIP et Jet-Set — 4 à 5 heures · livraison gratuite dès 20 convives</p>
      </div>

      <div className="formulas-page" style={{ paddingTop: 64, paddingBottom: 80 }}>
        <div className="formulas-page__intro reveal">
          <div className="formulas-page__intro-card">
            <div className="label">Durée</div>
            <div className="value">4 à 5h</div>
            <div className="sub">Cocktail dînatoire</div>
          </div>
          <div className="formulas-page__intro-card">
            <div className="label">Quantité</div>
            <div className="value">18 à 22 pièces</div>
            <div className="sub">par personne</div>
          </div>
          <div className="formulas-page__intro-card">
            <div className="label">Livraison gratuite</div>
            <div className="value">Dès 20 pers.</div>
            <div className="sub">Paris et proche banlieue — minimum 20 personnes</div>
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
          <p>Minimum 20 personnes. Les variétés peuvent changer selon la saison, pour une même qualité. Nous consulter pour moins de 20 personnes.</p>
        </div>
      </div>
    </div>
  )
}
