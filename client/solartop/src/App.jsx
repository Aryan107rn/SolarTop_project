import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import About from './sections/About'

export default function App() {
  return (
    <main className="bg-[#FEFCE8] text-[#1a2e1a] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
    </main>
  )
}