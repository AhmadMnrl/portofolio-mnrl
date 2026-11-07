export function CICDBackground() {
  return (
    <div className="cicd-background" aria-hidden="true">
      <svg className="cicd-background__svg" viewBox="0 0 1200 700" role="presentation">
        <defs>
          <linearGradient id="cicd-metal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="18%" stopColor="#555a5d" />
            <stop offset="42%" stopColor="#151719" />
            <stop offset="64%" stopColor="#969b9d" />
            <stop offset="82%" stopColor="#25282a" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="cicd-edge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity=".1" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity=".95" />
            <stop offset="58%" stopColor="#ffffff" stopOpacity=".2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity=".8" />
          </linearGradient>
          <filter id="cicd-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="18" result="blur" />
            <feOffset dy="18" result="offset" />
            <feFlood floodColor="#ffffff" floodOpacity=".42" />
            <feComposite in2="offset" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="cicd-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="cicd-background__mark" filter="url(#cicd-shadow)">
          <path
            className="cicd-background__glow"
            d="M600 350C510 170 410 120 290 120C135 120 65 235 65 350s70 230 225 230c120 0 220-50 310-230Zm0 0c90 180 190 230 310 230 155 0 225-115 225-230s-70-230-225-230c-120 0-220 50-310 230Z"
          />
          <path
            className="cicd-background__body"
            d="M600 350C510 170 410 120 290 120C135 120 65 235 65 350s70 230 225 230c120 0 220-50 310-230Zm0 0c90 180 190 230 310 230 155 0 225-115 225-230s-70-230-225-230c-120 0-220 50-310 230Z"
          />
          <path
            className="cicd-background__edge"
            d="M600 350C510 170 410 120 290 120C135 120 65 235 65 350s70 230 225 230c120 0 220-50 310-230Zm0 0c90 180 190 230 310 230 155 0 225-115 225-230s-70-230-225-230c-120 0-220 50-310 230Z"
          />
          <path
            className="cicd-background__shimmer"
            d="M600 350C510 170 410 120 290 120C135 120 65 235 65 350s70 230 225 230c120 0 220-50 310-230Zm0 0c90 180 190 230 310 230 155 0 225-115 225-230s-70-230-225-230c-120 0-220 50-310 230Z"
          />
        </g>
      </svg>
    </div>
  );
}
