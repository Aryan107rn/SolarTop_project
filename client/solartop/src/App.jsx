import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import About from './sections/About'
import FAQ from './sections/FAQ'
import Legal from './sections/Legal'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <main className="bg-[#080f08] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <FAQ />
      <Legal />
      <ScrollToTop />
    </main>
  )
}