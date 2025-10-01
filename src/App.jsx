import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import BenefitsBar from './components/BenefitsBar.jsx'
import Collections from './components/Collections.jsx'
import FeaturedSection from './components/FeaturedSection.jsx'
import InteractiveImage from './components/InteractiveImage.jsx'
import ContentVideo from './components/ContentVideo.jsx'
import CommunitySection from './components/CommunitySection.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    // Mantemos o fundo escuro principal para os outros componentes
    <main className="bg-gat-dark">
      {/* Este container continua controlando a sobreposição do Header */}
      <div className="relative">
        <Header />
        {/* MUDANÇA: A cor de fundo do 'envelope' foi atualizada para #fcfcfc */}
        <div className="bg-[#fcfcfc]">
          <Hero />
        </div>
      </div>
      <BenefitsBar />
      <Collections />
      <FeaturedSection />
      <InteractiveImage />
      <ContentVideo />
      <CommunitySection />
      <Footer />
    </main>
  )
}

export default App

