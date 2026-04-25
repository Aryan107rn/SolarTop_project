import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import ServicesProjects from './sections/Services'
import About from './sections/About'
import FAQLegal from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <main className="bg-[#FEFCE8] text-[#1a2e1a] overflow-x-hidden">
      <Navbar />
      <Hero />
      <ServicesProjects />
      <About />
      <FAQLegal />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}