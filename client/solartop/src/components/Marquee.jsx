export default function Marquee() {
  const items = ['Solar Installation', 'Clean Energy', 'Free Site Survey', 'Save 90% On Bills', 'MNRE Approved', 'Fast Installation', 'Go Green Today', 'PM Surya Ghar']

  return (
    <div className="bg-[#1a2e1a] py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-4 mx-6 text-xs font-black tracking-[.2em] uppercase text-[#c5f135]">
            {item}
            <span className="text-[#F4B663]">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}