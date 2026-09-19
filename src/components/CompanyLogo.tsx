import konfigLogo from '../assets/konfig-logo.svg'

export function CompanyLogo({
  company,
  id,
  className = 'w-10 h-10',
}: {
  company: string
  id?: string
  className?: string
}) {
  const norm = `${id || ''} ${company}`.toLowerCase()

  // Wells Fargo
  if (norm.includes('wells-fargo') || norm.includes('wells fargo')) {
    return (
      <div
        className={`${className} bg-[#D71E28] rounded-md flex flex-col items-center justify-center p-1 text-center shadow-sm select-none border border-[#B81921]`}
        title="Wells Fargo"
        aria-label="Wells Fargo logo"
      >
        <span className="text-[#FFCD00] font-black text-[7px] leading-[8px] tracking-wider font-serif">WELLS</span>
        <span className="text-[#FFCD00] font-black text-[7px] leading-[8px] tracking-wider font-serif">FARGO</span>
      </div>
    )
  }

  // KonfigAI
  if (norm.includes('konfig')) {
    return (
      <div
        className={`${className} bg-white rounded-md flex items-center justify-center p-1 shadow-sm select-none border border-border overflow-hidden`}
        title="KonfigAI"
        aria-label="KonfigAI logo"
      >
        <img
          src={konfigLogo}
          alt="KonfigAI logo"
          className="w-full h-full object-contain"
        />
      </div>
    )
  }

  // University of Maryland / SMaRS Lab
  if (norm.includes('umd') || norm.includes('maryland') || norm.includes('smars')) {
    return (
      <div
        className={`${className} bg-[#E03A3E] rounded-md flex items-center justify-center p-1 shadow-sm select-none border border-[#b82a2d]`}
        title="University of Maryland"
        aria-label="University of Maryland logo"
      >
        <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
          <rect width="40" height="40" rx="8" fill="#E03A3E" />
          <path
            d="M8 31V12H13L20 22L27 12H32V31H27V19L21.5 27.5H18.5L13 19V31H8Z"
            fill="#FFD520"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )
  }

  // JP Morgan Chase & Co.
  if (norm.includes('jpmc') || norm.includes('jpmorgan') || norm.includes('chase') || norm.includes('jp morgan')) {
    return (
      <div
        className={`${className} bg-[#0A2540] rounded-md flex items-center justify-center p-1 shadow-sm select-none border border-[#1a3b5c]`}
        title="JP Morgan Chase & Co."
        aria-label="JP Morgan Chase logo"
      >
        <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
          <rect width="40" height="40" rx="8" fill="#0A2540" />
          <g transform="translate(2, 2) scale(0.9)">
            <path d="M12 5H28L35 12V28L28 35H12L5 28V12L12 5Z" stroke="#005EB8" strokeWidth="1" fill="#0A2540" />
            <path d="M11 6L21 6L16 14L11 14Z" fill="#005EB8" />
            <path d="M34 11L34 21L26 16L26 11Z" fill="#005EB8" />
            <path d="M29 34L19 34L24 26L29 26Z" fill="#005EB8" />
            <path d="M6 29L6 19L14 24L14 29Z" fill="#005EB8" />
          </g>
        </svg>
      </div>
    )
  }

  // BITS Pilani
  if (norm.includes('bits') || norm.includes('pilani') || norm.includes('birla')) {
    return (
      <div
        className={`${className} bg-[#0B2545] rounded-md flex items-center justify-center p-1 shadow-sm select-none border border-[#134074]`}
        title="BITS Pilani"
        aria-label="BITS Pilani logo"
      >
        <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
          <rect width="40" height="40" rx="8" fill="#0B2545" />
          <circle cx="20" cy="20" r="14" fill="#0B2545" stroke="#FDB913" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="10" stroke="#FDB913" strokeWidth="1" strokeDasharray="3 2" />
          <path d="M19 11C19 9 20 8 20 8C20 8 21 9 21 11C22 12 21 14 20 15C19 14 18 12 19 11Z" fill="#EF4444" />
          <path d="M17 15H23L21.5 22H18.5L17 15Z" fill="#FDB913" />
          <rect x="19" y="22" width="2" height="6" fill="#FDB913" />
        </svg>
      </div>
    )
  }

  // Default fallback monogram
  const initials =
    company
      .split(/\s+/)
      .map((w) => w[0])
      .filter(Boolean)
      .slice(0, 2)
      .join('')
      .toUpperCase() || 'C'

  return (
    <div
      className={`${className} bg-panel rounded-md flex items-center justify-center border border-border text-fg font-mono text-xs font-bold select-none`}
      aria-label={`${company} logo`}
    >
      {initials}
    </div>
  )
}
