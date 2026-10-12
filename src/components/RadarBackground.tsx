import React from 'react';

// Original decorative radar animation for the hero background.
// Pure CSS + inline SVG (no libraries), gold-on-army-green to match the site
// theme. Respects prefers-reduced-motion via the global media query.
const BLIPS = [
  { x: 272, y: 138, d: '0s' },
  { x: 138, y: 242, d: '0.7s' },
  { x: 252, y: 282, d: '1.3s' },
  { x: 112, y: 148, d: '1.9s' },
  { x: 304, y: 218, d: '2.5s' },
];

export const RadarBackground: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    {/* faint tactical grid across the hero */}
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)',
        backgroundSize: '44px 44px',
      }}
    />
    {/* slow scan line drifting top to bottom */}
    <div
      className="radar-scan absolute left-0 right-0 h-[2px]"
      style={{
        background:
          'linear-gradient(90deg, transparent, rgba(201,162,39,0.5), transparent)',
      }}
    />
    {/* soft glow behind the scope */}
    <div
      className="absolute -right-20 top-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] rounded-full"
      style={{
        background:
          'radial-gradient(circle, rgba(201,162,39,0.10) 0%, transparent 65%)',
      }}
    />
    {/* radar scope */}
    <svg
      viewBox="0 0 400 400"
      className="absolute -right-24 sm:-right-16 top-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] opacity-60"
    >
      <g fill="none" stroke="#C9A227">
        <circle cx="200" cy="200" r="190" strokeWidth="1.5" opacity="0.5" />
        <circle cx="200" cy="200" r="145" strokeWidth="1" strokeDasharray="5 7" opacity="0.35" />
        <circle cx="200" cy="200" r="100" strokeWidth="1" opacity="0.3" />
        <circle cx="200" cy="200" r="55" strokeWidth="1" opacity="0.3" />
        <line x1="200" y1="8" x2="200" y2="392" opacity="0.22" />
        <line x1="8" y1="200" x2="392" y2="200" opacity="0.22" />
      </g>
      <g className="radar-sweep">
        <path d="M200,200 L200,10 A190,190 0 0 1 322,54 Z" fill="#C9A227" opacity="0.10" />
        <line x1="200" y1="200" x2="200" y2="12" stroke="#E7C55A" strokeWidth="2.5" opacity="0.9" />
      </g>
      {BLIPS.map((b, i) => (
        <g key={i}>
          <circle
            className="radar-ping"
            cx={b.x}
            cy={b.y}
            r="5"
            fill="none"
            stroke="#E7C55A"
            strokeWidth="1.5"
            style={{ animationDelay: b.d }}
          />
          <circle
            className="radar-blip"
            cx={b.x}
            cy={b.y}
            r="4"
            fill="#E7C55A"
            style={{ animationDelay: b.d }}
          />
        </g>
      ))}
      <circle cx="200" cy="200" r="5" fill="#E7C55A" opacity="0.9" />
    </svg>
  </div>
);
