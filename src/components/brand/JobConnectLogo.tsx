interface JobConnectLogoProps {
  className?: string;
}

export function JobConnectLogo({ className = 'w-10 h-10' }: JobConnectLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="شعار JobConnect"
    >
      <rect x="25" y="25" width="450" height="450" rx="110" fill="white" />
      <rect x="25" y="25" width="450" height="450" rx="110" fill="url(#bg_grad)" opacity="0.05" />
      <rect x="25" y="25" width="450" height="450" rx="110" stroke="#f1f5f9" strokeWidth="8" />
      <g filter="url(#shadow_drop)">
        <path
          d="M120 340 C120 230, 190 140, 230 170 C260 190, 210 320, 270 340 C300 350, 310 230, 390 130"
          stroke="url(#m_grad_blue_purple)"
          strokeWidth="54"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M290 320 L380 180"
          stroke="url(#m_grad_green)"
          strokeWidth="54"
          strokeLinecap="round"
        />
        <path d="M330 150 L405 135 L420 210 Z" fill="#10b981" />
        <path
          d="M400 300 C410 330, 380 370, 345 350 C325 340, 360 270, 400 300 Z"
          fill="url(#m_grad_green_light)"
        />
      </g>
      <defs>
        <linearGradient id="bg_grad" x1="0" y1="0" x2="500" y2="500">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="m_grad_blue_purple" x1="120" y1="340" x2="390" y2="130">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
        <linearGradient id="m_grad_green" x1="290" y1="320" x2="380" y2="180">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="m_grad_green_light" x1="345" y1="350" x2="400" y2="300">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <filter id="shadow_drop" x="50" y="50" width="400" height="400" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0f172a" floodOpacity="0.12" />
        </filter>
      </defs>
    </svg>
  );
}
