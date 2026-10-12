import React from 'react';

// Cute Demon Slayer themed floating doodles with custom SVGs
export default function DemonSlayerDoodles() {
  return (
    <div className="ds-doodles-layer" aria-hidden="true">
      {/* 1. Tanjiro Hanafuda Earring & Checkered Badge */}
      <div className="ds-doodle doodle-tanjiro" style={{ top: '14%', left: '4%' }}>
        <svg viewBox="0 0 60 80" className="doodle-svg" width="48" height="64">
          {/* Earring rectangle */}
          <rect x="10" y="8" width="40" height="64" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))" />
          {/* Red sun circle */}
          <circle cx="30" cy="30" r="14" fill="#ef4444" />
          {/* Sun rays */}
          <line x1="30" y1="30" x2="16" y2="48" stroke="#1e293b" strokeWidth="2.5" />
          <line x1="30" y1="30" x2="30" y2="52" stroke="#1e293b" strokeWidth="2.5" />
          <line x1="30" y1="30" x2="44" y2="48" stroke="#1e293b" strokeWidth="2.5" />
          {/* Top earring ring */}
          <circle cx="30" cy="8" r="4" fill="none" stroke="#64748b" strokeWidth="2" />
        </svg>
        <span className="doodle-tag">Tanjiro 🎴</span>
      </div>

      {/* 2. Nezuko Bamboo Muzzle & Pink Bow */}
      <div className="ds-doodle doodle-nezuko" style={{ top: '22%', right: '5%' }}>
        <svg viewBox="0 0 80 50" className="doodle-svg" width="60" height="38">
          {/* Bamboo cylinder */}
          <rect x="12" y="14" width="56" height="20" rx="9" fill="#86efac" stroke="#16a34a" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.06))" />
          {/* Bamboo segment lines */}
          <line x1="28" y1="14" x2="28" y2="34" stroke="#15803d" strokeWidth="2" />
          <line x1="52" y1="14" x2="52" y2="34" stroke="#15803d" strokeWidth="2" />
          {/* Pink side ribbons */}
          <path d="M 6 24 C 2 12, 12 18, 14 24" stroke="#f472b6" strokeWidth="3" fill="none" />
          <path d="M 74 24 C 78 12, 68 18, 66 24" stroke="#f472b6" strokeWidth="3" fill="none" />
          {/* Cute pink bow on top */}
          <circle cx="40" cy="10" r="4" fill="#f43f5e" />
          <ellipse cx="32" cy="10" rx="6" ry="4" fill="#fb7185" />
          <ellipse cx="48" cy="10" rx="6" ry="4" fill="#fb7185" />
        </svg>
        <span className="doodle-tag">Nezuko 🎋</span>
      </div>

      {/* 3. Shinobu Butterfly Haori */}
      <div className="ds-doodle doodle-shinobu" style={{ top: '65%', left: '3%' }}>
        <svg viewBox="0 0 70 60" className="doodle-svg" width="52" height="45">
          {/* Left wing */}
          <path d="M 35 30 C 20 8, 2 15, 6 36 C 8 48, 26 44, 35 34 Z" fill="#e0e7ff" stroke="#818cf8" strokeWidth="2" />
          <path d="M 6 36 C 10 44, 22 46, 30 38" stroke="#38bdf8" strokeWidth="3" fill="none" />
          {/* Right wing */}
          <path d="M 35 30 C 50 8, 68 15, 64 36 C 62 48, 44 44, 35 34 Z" fill="#e0e7ff" stroke="#818cf8" strokeWidth="2" />
          <path d="M 64 36 C 60 44, 48 46, 40 38" stroke="#38bdf8" strokeWidth="3" fill="none" />
          {/* Butterfly body */}
          <line x1="35" y1="20" x2="35" y2="44" stroke="#312e81" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <span className="doodle-tag">Shinobu 🦋</span>
      </div>

      {/* 4. Zenitsu Chuntaro (Sparrow) & Lightning */}
      <div className="ds-doodle doodle-zenitsu" style={{ top: '55%', right: '4%' }}>
        <svg viewBox="0 0 60 60" className="doodle-svg" width="46" height="46">
          {/* Chibi Sparrow Body */}
          <circle cx="28" cy="32" r="18" fill="#d97706" />
          <circle cx="28" cy="34" r="14" fill="#fef3c7" />
          {/* Beak */}
          <polygon points="12,32 6,34 12,36" fill="#f59e0b" />
          {/* Eye */}
          <circle cx="20" cy="28" r="2.5" fill="#1e293b" />
          {/* Cute eyebrows */}
          <line x1="16" y1="23" x2="22" y2="25" stroke="#78350f" strokeWidth="1.5" />
          {/* Little lightning bolt overhead */}
          <path d="M 36 8 L 30 18 L 36 18 L 32 26" fill="none" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="doodle-tag">Zenitsu ⚡</span>
      </div>

      {/* 5. Rengoku Flame Heart */}
      <div className="ds-doodle doodle-rengoku" style={{ bottom: '15%', left: '8%' }}>
        <svg viewBox="0 0 60 60" className="doodle-svg" width="46" height="46">
          {/* Flame outer */}
          <path d="M 30 6 C 36 16, 52 24, 48 42 C 44 54, 20 54, 12 42 C 6 30, 24 22, 30 6 Z" fill="#f97316" />
          {/* Flame inner yellow core */}
          <path d="M 30 20 C 34 26, 44 32, 40 44 C 36 50, 22 50, 18 44 C 14 36, 26 30, 30 20 Z" fill="#fde047" />
        </svg>
        <span className="doodle-tag">Rengoku 🔥</span>
      </div>

      {/* 6. Inosuke Chibi Boar Mask */}
      <div className="ds-doodle doodle-inosuke" style={{ bottom: '20%', right: '7%' }}>
        <svg viewBox="0 0 60 55" className="doodle-svg" width="46" height="42">
          {/* Boar head */}
          <ellipse cx="30" cy="26" rx="20" ry="17" fill="#94a3b8" />
          {/* Ears */}
          <polygon points="14,14 18,4 25,12" fill="#cbd5e1" />
          <polygon points="46,14 42,4 35,12" fill="#cbd5e1" />
          {/* Big blue eyes */}
          <circle cx="21" cy="24" r="5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="39" cy="24" r="5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
          {/* Pink Snout */}
          <ellipse cx="30" cy="34" rx="7" ry="5" fill="#fda4af" />
          <circle cx="28" cy="34" r="1.5" fill="#9f1239" />
          <circle cx="32" cy="34" r="1.5" fill="#9f1239" />
        </svg>
        <span className="doodle-tag">Inosuke 🐗</span>
      </div>

      {/* 7. Wisteria Blossom Cluster */}
      <div className="ds-doodle doodle-wisteria" style={{ top: '8%', left: '46%' }}>
        <svg viewBox="0 0 45 65" className="doodle-svg" width="34" height="48">
          <circle cx="22" cy="10" r="5.5" fill="#c084fc" />
          <circle cx="16" cy="18" r="5" fill="#d8b4fe" />
          <circle cx="28" cy="19" r="5" fill="#a855f7" />
          <circle cx="20" cy="27" r="4.5" fill="#c084fc" />
          <circle cx="26" cy="35" r="4" fill="#d8b4fe" />
          <circle cx="22" cy="43" r="3.5" fill="#a855f7" />
          <circle cx="22" cy="51" r="2.5" fill="#c084fc" />
          {/* Green stem */}
          <path d="M 22 4 Q 24 0, 26 -4" stroke="#86efac" strokeWidth="2" fill="none" />
        </svg>
        <span className="doodle-tag">Wisteria 🌸</span>
      </div>
    </div>
  );
}
