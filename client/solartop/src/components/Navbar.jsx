export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-[#FEFCE8]/80 border-b border-[#ACC6A8]/30">
      <a href="#" className="font-black text-2xl tracking-widest text-[#ACC6A8]">
        SOLAR<span className="text-[#F4B663]">TOP</span>
      </a>
      <ul className="hidden md:flex gap-8 text-xs font-semibold tracking-widest uppercase text-[#7a9b7e]">
        {['Services', 'Projects', 'About', 'Contact'].map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="hover:text-[#ACC6A8] transition-colors">{link}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="text-xs font-bold tracking-widest uppercase bg-[#ACC6A8] text-[#1a2e1a] px-5 py-2 hover:bg-[#F4B663] transition-colors">
        Get Quote
      </a>
    </nav>
  )
}