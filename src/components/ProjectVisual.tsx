/** Decorative SVG illustrations for project cards — replaceable with real screenshots later */

interface ProjectVisualProps {
  type: 'agent' | 'hospital' | 'ml' | 'ecommerce' | 'whatsapp'
  accent: string
}

export default function ProjectVisual({ type, accent }: ProjectVisualProps) {
  const common = {
    className: 'h-full w-full',
    viewBox: '0 0 320 160',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  }

  if (type === 'agent') {
    return (
      <svg {...common}>
        <rect width="320" height="160" fill="#0f172a" />
        <circle cx="160" cy="70" r="28" stroke={accent} strokeWidth="1.5" fill={`${accent}15`} />
        <circle cx="160" cy="70" r="10" fill={accent} opacity="0.8" />
        {[0, 60, 120, 180, 240, 300].map((a, i) => {
          const rad = (a * Math.PI) / 180
          const x = 160 + Math.cos(rad) * 55
          const y = 70 + Math.sin(rad) * 40
          return (
            <g key={i}>
              <line x1="160" y1="70" x2={x} y2={y} stroke={accent} strokeWidth="1" opacity="0.4" />
              <circle cx={x} cy={y} r="5" fill={accent} opacity="0.6" />
            </g>
          )
        })}
        <rect x="40" y="120" width="240" height="24" rx="6" fill={`${accent}20`} stroke={accent} strokeWidth="1" opacity="0.5" />
        <rect x="52" y="128" width="80" height="8" rx="2" fill={accent} opacity="0.5" />
      </svg>
    )
  }

  if (type === 'hospital') {
    return (
      <svg {...common}>
        <rect width="320" height="160" fill="#0f172a" />
        <rect x="30" y="30" width="100" height="100" rx="6" fill={`${accent}12`} stroke={accent} strokeWidth="1" opacity="0.6" />
        <line x1="45" y1="50" x2="115" y2="50" stroke={accent} strokeWidth="1.5" opacity="0.4" />
        <line x1="45" y1="65" x2="100" y2="65" stroke={accent} strokeWidth="1.5" opacity="0.3" />
        <line x1="45" y1="80" x2="110" y2="80" stroke={accent} strokeWidth="1.5" opacity="0.3" />
        <line x1="45" y1="95" x2="90" y2="95" stroke={accent} strokeWidth="1.5" opacity="0.25" />
        <path d="M160 50 L200 80 L160 110 L120 80 Z" fill={`${accent}20`} stroke={accent} strokeWidth="1.5" />
        <circle cx="160" cy="80" r="12" fill={accent} opacity="0.7" />
        <rect x="220" y="40" width="70" height="80" rx="6" fill={`${accent}10`} stroke={accent} strokeWidth="1" opacity="0.5" />
        <circle cx="255" cy="70" r="14" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M255 60 v20 M245 70 h20" stroke={accent} strokeWidth="1.5" opacity="0.6" />
      </svg>
    )
  }

  if (type === 'ml') {
    return (
      <svg {...common}>
        <rect width="320" height="160" fill="#0f172a" />
        {/* Axes */}
        <line x1="40" y1="130" x2="290" y2="130" stroke="#334155" strokeWidth="1" />
        <line x1="40" y1="130" x2="40" y2="25" stroke="#334155" strokeWidth="1" />
        {/* Curve */}
        <path
          d="M50 120 C90 110, 110 90, 140 70 C170 50, 200 45, 230 55 C250 62, 270 80, 285 95"
          stroke={accent}
          strokeWidth="2"
          fill="none"
        />
        {/* Points */}
        {[
          [60, 115],
          [100, 95],
          [140, 70],
          [180, 52],
          [220, 55],
          [260, 78],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill={accent} opacity="0.8" />
        ))}
        <text x="250" y="40" fill={accent} fontSize="10" opacity="0.7" fontFamily="monospace">
          Logistic
        </text>
      </svg>
    )
  }

  if (type === 'ecommerce') {
    return (
      <svg {...common}>
        <rect width="320" height="160" fill="#0f172a" />
        <rect x="40" y="35" width="90" height="90" rx="8" fill={`${accent}15`} stroke={accent} strokeWidth="1" opacity="0.6" />
        <rect x="55" y="50" width="60" height="40" rx="4" fill={`${accent}25`} />
        <rect x="55" y="100" width="40" height="8" rx="2" fill={accent} opacity="0.5" />
        <rect x="150" y="40" width="130" height="20" rx="4" fill={`${accent}20`} stroke={accent} strokeWidth="1" opacity="0.4" />
        <rect x="150" y="70" width="110" height="14" rx="3" fill={`${accent}15`} />
        <rect x="150" y="92" width="95" height="14" rx="3" fill={`${accent}12`} />
        <rect x="150" y="114" width="80" height="14" rx="3" fill={`${accent}10`} />
        <circle cx="260" cy="50" r="8" fill={accent} opacity="0.7" />
      </svg>
    )
  }

  // whatsapp
  return (
    <svg {...common}>
      <rect width="320" height="160" fill="#0f172a" />
      <rect x="70" y="25" width="180" height="110" rx="16" fill={`${accent}12`} stroke={accent} strokeWidth="1.5" opacity="0.6" />
      <rect x="90" y="45" width="100" height="18" rx="9" fill={`${accent}30`} />
      <rect x="130" y="72" width="90" height="18" rx="9" fill={`${accent}20`} />
      <rect x="90" y="99" width="70" height="18" rx="9" fill={`${accent}25`} />
      <circle cx="220" cy="108" r="12" fill={accent} opacity="0.7" />
      <path d="M215 108 h10 M220 103 v10" stroke="#0f172a" strokeWidth="1.5" />
    </svg>
  )
}
