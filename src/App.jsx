import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import NosPieces from './pages/NosPieces'
import CocktailsAperitifs from './pages/CocktailsAperitifs'
import CocktailsDinatoires from './pages/CocktailsDinatoires'
import Photos from './pages/Photos'
import AvisClients from './pages/AvisClients'
import Contact from './pages/Contact'
import Devis from './pages/Devis'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nos-pieces" element={<NosPieces />} />
          <Route path="/cocktails-aperitifs" element={<CocktailsAperitifs />} />
          <Route path="/cocktails-dinatoires" element={<CocktailsDinatoires />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/avis-clients" element={<AvisClients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/devis" element={<Devis />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
