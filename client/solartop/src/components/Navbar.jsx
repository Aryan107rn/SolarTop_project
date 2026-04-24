export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-[#080f08]/60 border-b border-white/5">
      <a href="#" className="font-black text-2xl tracking-widest text-[#c5f135]">
        SOLAR<span className="text-white">TOP</span>
      </a>
      <ul className="hidden md:flex gap-8 text-xs font-semibold tracking-widest uppercase text-white/50">
        {['Services', 'Projects', 'About', 'Contact'].map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="hover:text-[#c5f135] transition-colors">{link}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="text-xs font-bold tracking-widest uppercase bg-[#c5f135] text-[#080f08] px-5 py-2 rounded-full hover:opacity-80 transition-opacity">
        Get Started
      </a>
    </nav>
  )
}