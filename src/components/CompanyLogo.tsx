import konfigLogo from '../assets/konfig-logo.svg'
import jpmcLogo from '../assets/jpmorganchase.png'
import bitsLogo from '../assets/bits-pilani-logo.webp'

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
        className={`${className} rounded-md flex items-center justify-center shadow-sm select-none border border-border overflow-hidden`}
        title="JP Morgan Chase & Co."
        aria-label="JP Morgan Chase logo"
      >
        <img
          src={jpmcLogo}
          alt="JP Morgan Chase logo"
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  // BITS Pilani
  if (norm.includes('bits') || norm.includes('pilani') || norm.includes('birla')) {
    return (
      <div
        className={`${className} bg-white rounded-md flex items-center justify-center p-1 shadow-sm select-none border border-border overflow-hidden`}
        title="Birla Institute of Technology and Science"
        aria-label="BITS Pilani logo"
      >
        <img
          src={bitsLogo}
          alt="BITS Pilani logo"
          className="w-full h-full object-contain"
        />
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
