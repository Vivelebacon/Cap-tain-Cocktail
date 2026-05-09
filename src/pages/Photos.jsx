import { useState } from 'react'
import { useReveal } from '../components/useReveal'
import './Photos.css'

const PHOTOS = [
  { src: 'https://static.wixstatic.com/media/2d5a72_08614cdfabd94457b783479f50652d1c~mv2.jpg/v1/fill/w_800,h_800,q_90,enc_avif,quality_auto/2d5a72_08614cdfabd94457b783479f50652d1c~mv2.jpg', alt: 'Traiteur cocktail Paris' },
  { src: 'https://static.wixstatic.com/media/2d5a72_8e2dfbfba9184c90a2e068bfa86a0c1c~mv2.jpg/v1/fill/w_800,h_800,q_90,enc_avif,quality_auto/2d5a72_8e2dfbfba9184c90a2e068bfa86a0c1c~mv2.jpg', alt: 'Cocktail apéritif Paris' },
  { src: 'https://static.wixstatic.com/media/2d5a72_2bfa100967a44a7895d5c1c81a1a88c5~mv2.jpg/v1/fill/w_800,h_800,q_90,enc_avif,quality_auto/2d5a72_2bfa100967a44a7895d5c1c81a1a88c5~mv2.jpg', alt: 'Bouchées traiteur Paris' },
  { src: 'https://static.wixstatic.com/media/2d5a72_af6884d6dde04a3ebf6b0690cd452f3b~mv2.jpg/v1/fill/w_800,h_800,al_c,q_80,enc_avif,quality_auto/2d5a72_af6884d6dde04a3ebf6b0690cd452f3b~mv2.jpg', alt: 'Buffet cocktail' },
  { src: 'https://static.wixstatic.com/media/2d5a72_68c81bad06bb40d582cfccfc16c5dff0~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/IMG_20190413_1827551.jpg', alt: 'Cocktail apéro Paris' },
  { src: 'https://static.wixstatic.com/media/470dcda58d3b4552a7c30a7a2c001937.jpg/v1/fill/w_800,h_400,al_c,q_80,enc_avif,quality_auto/470dcda58d3b4552a7c30a7a2c001937.jpg', alt: 'Traiteur réception Paris' },
  { src: 'https://static.wixstatic.com/media/2d5a72_da6b1080db41496d9835360f71a019d2~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/IMG_20181014_1333211%20(1).jpg', alt: 'Verrines captain cocktail' },
  { src: 'https://static.wixstatic.com/media/2d5a72_8d16d7f9e5cf4863bd5f5cdf07ed83a0~mv2.jpg/v1/fill/w_800,h_500,al_c,q_80,enc_avif,quality_auto/traiteur-brunch-cocktail-aperitif-angers.jpg', alt: 'Buffet apéritif' },
  { src: 'https://static.wixstatic.com/media/2d5a72_4300da36525d442097ff4ae813f97df4~mv2.jpg/v1/fill/w_800,h_460,al_c,q_80,enc_avif,quality_auto/unnamed%20(10)_edited.jpg', alt: 'Cocktail dînatoire Paris' },
  { src: 'https://static.wixstatic.com/media/2d5a72_1efa2c8d96f34406a5650407915b7257~mv2_d_2560_1536_s_2.jpg/v1/fill/w_800,h_480,al_c,q_80,enc_avif,quality_auto/20180704_151619.jpg', alt: 'Cocktail mariage Paris' },
  { src: 'https://static.wixstatic.com/media/2d5a72_ca69c722ba1349a09d89a505d2e7fc9c~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/IMG_20190413_1828361.jpg', alt: 'Cocktail réception Paris' },
  { src: 'https://static.wixstatic.com/media/2d5a72_362f5e9926d74b30b0c1b35ea38ef288~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/IMG_20190409_1347161.jpg', alt: 'Traiteur apéritif Paris' },
  { src: 'https://static.wixstatic.com/media/e7a52513412bb1fddcee94c14073d260.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/e7a52513412bb1fddcee94c14073d260.jpg', alt: 'Buffet mariage' },
  { src: 'https://static.wixstatic.com/media/214ec6_61638b6be3ef2473f96d37261b4007a0.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/214ec6_61638b6be3ef2473f96d37261b4007a0.jpg', alt: 'Cocktail traiteur Paris' },
  { src: 'https://static.wixstatic.com/media/9cc53553a8ff4339afd2d4e37e1090a9.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/9cc53553a8ff4339afd2d4e37e1090a9.jpg', alt: 'Cocktail dînatoire' },
  { src: 'https://static.wixstatic.com/media/2d5a72_62f26d0e2e9c4abc83ceafd0a5aaf811~mv2.jpg/v1/fill/w_400,h_640,al_c,q_80,enc_avif,quality_auto/2d5a72_62f26d0e2e9c4abc83ceafd0a5aaf811~mv2.jpg', alt: 'Cocktail société' },
  { src: 'https://static.wixstatic.com/media/2d5a72_ca915a89ec234dce990eafdce6bff443~mv2.jpg/v1/fill/w_400,h_640,al_c,q_80,enc_avif,quality_auto/2d5a72_ca915a89ec234dce990eafdce6bff443~mv2.jpg', alt: 'Mariage cocktail' },
  { src: 'https://static.wixstatic.com/media/2d5a72_c479a42ba8724ea5b01be17d12be6552~mv2.jpg/v1/fill/w_400,h_640,al_c,q_80,enc_avif,quality_auto/2d5a72_c479a42ba8724ea5b01be17d12be6552~mv2.jpg', alt: 'Buffet dînatoire' },
  { src: 'https://static.wixstatic.com/media/2d5a72_3d3bf5a7b89f409fa23760174f8418cd~mv2.jpg/v1/fill/w_400,h_640,al_c,q_80,enc_avif,quality_auto/2d5a72_3d3bf5a7b89f409fa23760174f8418cd~mv2.jpg', alt: 'Réception traiteur' },
  { src: 'https://static.wixstatic.com/media/2d5a72_5cfeae4e5cdd435e8c78cb93f4b4095d~mv2.jpg/v1/fill/w_800,h_500,al_c,q_80,enc_avif,quality_auto/image0000011%20(1).jpg', alt: 'Cocktail dînatoire buffet' },
]

export default function Photos() {
  const revealRef = useReveal()
  const [lb, setLb] = useState(null)

  return (
    <div ref={revealRef}>
      <div className="page-header">
        <h1>Photos</h1>
        <p>Nos réceptions et créations en images</p>
      </div>

      <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 24 }} className="reveal">
          <div>
            <div className="section-label">Galerie</div>
            <h2 className="section-title">Nos réalisations</h2>
          </div>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>Cliquez pour agrandir</span>
        </div>
        <div className="photos-grid reveal">
          {PHOTOS.map((p, i) => (
            <div key={i} className="photos-item" onClick={() => setLb(i)}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {lb !== null && (
        <div className="lightbox" onClick={() => setLb(null)}>
          <button className="lightbox__close" onClick={() => setLb(null)}>✕</button>
          <button className="lightbox__prev" onClick={e => { e.stopPropagation(); setLb((lb - 1 + PHOTOS.length) % PHOTOS.length) }}>‹</button>
          <img src={PHOTOS[lb].src} alt={PHOTOS[lb].alt} onClick={e => e.stopPropagation()} />
          <button className="lightbox__next" onClick={e => { e.stopPropagation(); setLb((lb + 1) % PHOTOS.length) }}>›</button>
          <div className="lightbox__counter">{lb + 1} / {PHOTOS.length}</div>
        </div>
      )}
    </div>
  )
}
