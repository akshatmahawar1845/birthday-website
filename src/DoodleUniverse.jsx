import React from 'react';

// Rich floating Demon Slayer & Harry Potter doodles with chibi faces & magical artifacts
export default function DoodleUniverse() {
  return (
    <div className="doodle-universe-container" aria-hidden="true">
      {/* ================= DEMON SLAYER CHIBI FACES & ARTIFACTS ================= */}

      {/* 1. Chibi Tanjiro Face */}
      <div className="universe-doodle doodle-tanjiro-face" style={{ top: '10%', left: '4%' }}>
        <svg viewBox="0 0 80 80" width="56" height="56">
          {/* Hair back */}
          <path d="M 15 35 C 10 15, 30 5, 45 6 C 65 7, 72 20, 68 38 C 74 48, 62 68, 55 70 C 45 74, 25 72, 18 64 Z" fill="#450a0a" />
          {/* Face base */}
          <ellipse cx="40" cy="44" rx="24" ry="22" fill="#fed7aa" />
          {/* Hair front spikes */}
          <path d="M 18 32 C 22 18, 32 16, 38 24 C 44 14, 56 18, 62 30 C 56 28, 48 30, 44 36 C 36 26, 26 30, 18 32 Z" fill="#7f1d1d" />
          {/* Forehead flame scar */}
          <path d="M 24 30 Q 28 27 30 31 Q 32 35 28 36 Q 26 38 25 34 Z" fill="#991b1b" />
          {/* Eyes */}
          <ellipse cx="30" cy="45" rx="5" ry="6" fill="#7f1d1d" />
          <circle cx="31" cy="43" r="2" fill="#ffffff" />
          <ellipse cx="50" cy="45" rx="5" ry="6" fill="#7f1d1d" />
          <circle cx="51" cy="43" r="2" fill="#ffffff" />
          {/* Smile & blush */}
          <path d="M 37 53 Q 40 56 43 53" stroke="#9a3412" strokeWidth="2" fill="none" strokeLinecap="round" />
          <ellipse cx="23" cy="49" rx="3.5" ry="2" fill="#fca5a5" />
          <ellipse cx="57" cy="49" rx="3.5" ry="2" fill="#fca5a5" />
          {/* Hanafuda earring */}
          <rect x="14" y="52" width="6" height="12" rx="1" fill="#ffffff" stroke="#991b1b" strokeWidth="1" />
          <circle cx="17" cy="56" r="2" fill="#dc2626" />
        </svg>
      </div>

      {/* 2. Chibi Nezuko Face */}
      <div className="universe-doodle doodle-nezuko-face" style={{ top: '9%', right: '5%' }}>
        <svg viewBox="0 0 80 80" width="58" height="58">
          {/* Long dark hair */}
          <path d="M 12 36 C 8 10, 40 4, 68 12 C 76 34, 74 68, 64 74 C 52 78, 16 75, 12 36 Z" fill="#18181b" />
          {/* Face */}
          <ellipse cx="40" cy="42" rx="23" ry="20" fill="#fef08a" />
          {/* Pink Ribbon on head */}
          <ellipse cx="26" cy="18" rx="7" ry="4" fill="#fb7185" />
          <circle cx="26" cy="18" r="3" fill="#f43f5e" />
          {/* Big pink eyes */}
          <ellipse cx="29" cy="38" rx="6" ry="7" fill="#f43f5e" />
          <circle cx="30" cy="36" r="2.5" fill="#ffffff" />
          <ellipse cx="51" cy="38" rx="6" ry="7" fill="#f43f5e" />
          <circle cx="52" cy="36" r="2.5" fill="#ffffff" />
          {/* Bamboo muzzle */}
          <rect x="25" y="47" width="30" height="11" rx="5" fill="#86efac" stroke="#15803d" strokeWidth="1.5" />
          <line x1="35" y1="47" x2="35" y2="58" stroke="#166534" strokeWidth="1.5" />
          <line x1="45" y1="47" x2="45" y2="58" stroke="#166534" strokeWidth="1.5" />
          <path d="M 25 52 Q 18 50 16 56" stroke="#f43f5e" strokeWidth="2" fill="none" />
          <path d="M 55 52 Q 62 50 64 56" stroke="#f43f5e" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* 3. Chibi Zenitsu Face */}
      <div className="universe-doodle doodle-zenitsu-face" style={{ top: '36%', left: '7%' }}>
        <svg viewBox="0 0 80 80" width="54" height="54">
          {/* Yellow spiky bowl hair */}
          <path d="M 14 36 C 12 12, 38 6, 66 12 C 72 30, 68 55, 62 60 C 44 68, 20 62, 14 36 Z" fill="#eab308" />
          {/* Hair tips orange */}
          <path d="M 14 36 L 22 46 L 28 38 L 36 48 L 44 38 L 54 48 L 62 38" stroke="#f97316" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* Face */}
          <ellipse cx="40" cy="46" rx="22" ry="20" fill="#fef3c7" />
          {/* Worried round eyes */}
          <circle cx="30" cy="46" r="5" fill="#ca8a04" />
          <circle cx="32" cy="44" r="2" fill="#ffffff" />
          <circle cx="50" cy="46" r="5" fill="#ca8a04" />
          <circle cx="52" cy="44" r="2" fill="#ffffff" />
          {/* Sad/scared cute wavy mouth */}
          <path d="M 36 56 Q 40 53 44 56" stroke="#854d0e" strokeWidth="2" fill="none" />
          {/* Blushing triangles */}
          <polygon points="21,50 25,48 24,53" fill="#f97316" />
          <polygon points="57,50 53,48 54,53" fill="#f97316" />
        </svg>
      </div>

      {/* 4. Chibi Inosuke Boar Mask */}
      <div className="universe-doodle doodle-inosuke-face" style={{ top: '48%', right: '6%' }}>
        <svg viewBox="0 0 80 80" width="56" height="56">
          {/* Boar Head */}
          <ellipse cx="40" cy="42" rx="28" ry="24" fill="#94a3b8" />
          {/* Ears */}
          <polygon points="18,24 24,10 34,22" fill="#cbd5e1" />
          <polygon points="62,24 56,10 46,22" fill="#cbd5e1" />
          {/* Big blue eyes */}
          <circle cx="28" cy="38" r="7" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
          <circle cx="30" cy="36" r="2.5" fill="#ffffff" />
          <circle cx="52" cy="38" r="7" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
          <circle cx="54" cy="36" r="2.5" fill="#ffffff" />
          {/* Pink snout & tusks */}
          <ellipse cx="40" cy="52" rx="10" ry="7" fill="#fda4af" />
          <circle cx="37" cy="52" r="2" fill="#9f1239" />
          <circle cx="43" cy="52" r="2" fill="#9f1239" />
          {/* White tusks */}
          <path d="M 28 56 Q 26 50 23 54" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 52 56 Q 54 50 57 54" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* 5. Chibi Rengoku Face */}
      <div className="universe-doodle doodle-rengoku-face" style={{ bottom: '18%', left: '6%' }}>
        <svg viewBox="0 0 80 80" width="56" height="56">
          {/* Fiery hair */}
          <path d="M 12 40 C 8 12, 38 4, 70 12 C 76 34, 72 65, 60 70 C 44 76, 16 68, 12 40 Z" fill="#fde047" />
          {/* Red flame tips */}
          <path d="M 16 34 Q 26 18 36 26 Q 44 14 54 26 Q 66 20 68 36" stroke="#dc2626" strokeWidth="4" fill="none" />
          {/* Face */}
          <ellipse cx="40" cy="46" rx="22" ry="20" fill="#fef3c7" />
          {/* Bold eyebrows */}
          <path d="M 24 38 L 34 40" stroke="#1c1917" strokeWidth="3" strokeLinecap="round" />
          <path d="M 56 38 L 46 40" stroke="#1c1917" strokeWidth="3" strokeLinecap="round" />
          {/* Big confident eyes */}
          <circle cx="30" cy="46" r="6" fill="#ea580c" />
          <circle cx="30" cy="46" r="3" fill="#fde047" />
          <circle cx="32" cy="44" r="1.5" fill="#ffffff" />
          <circle cx="50" cy="46" r="6" fill="#ea580c" />
          <circle cx="50" cy="46" r="3" fill="#fde047" />
          <circle cx="52" cy="44" r="1.5" fill="#ffffff" />
          {/* Confident wide smile */}
          <path d="M 34 56 Q 40 60 46 56" stroke="#991b1b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* 6. Chibi Shinobu Face */}
      <div className="universe-doodle doodle-shinobu-face" style={{ bottom: '20%', right: '7%' }}>
        <svg viewBox="0 0 80 80" width="56" height="56">
          {/* Purple-black hair */}
          <path d="M 14 36 C 12 10, 42 4, 68 14 C 76 34, 72 65, 60 70 C 42 75, 18 66, 14 36 Z" fill="#312e81" />
          {/* Butterfly hair ornament */}
          <path d="M 55 16 C 50 6, 68 8, 66 22 Z" fill="#a78bfa" stroke="#c084fc" strokeWidth="1" />
          <path d="M 55 16 C 45 22, 60 30, 66 22 Z" fill="#67e8f9" stroke="#38bdf8" strokeWidth="1" />
          {/* Face */}
          <ellipse cx="38" cy="44" rx="22" ry="20" fill="#fdf4ff" />
          {/* Purple eyes */}
          <ellipse cx="28" cy="43" rx="5" ry="7" fill="#7c3aed" />
          <circle cx="29" cy="41" r="2" fill="#ffffff" />
          <ellipse cx="48" cy="43" rx="5" ry="7" fill="#7c3aed" />
          <circle cx="49" cy="41" r="2" fill="#ffffff" />
          {/* Gentle calm smile */}
          <path d="M 35 53 Q 38 55 41 53" stroke="#6d28d9" strokeWidth="2" fill="none" strokeLinecap="round" />
          <ellipse cx="22" cy="48" rx="3" ry="1.5" fill="#f5d0fe" />
          <ellipse cx="54" cy="48" rx="3" ry="1.5" fill="#f5d0fe" />
        </svg>
      </div>

      {/* 7. Tanjiro's Nichirin Katana */}
      <div className="universe-doodle doodle-katana" style={{ top: '28%', left: '22%' }}>
        <svg viewBox="0 0 80 80" width="52" height="52">
          {/* Blade */}
          <line x1="68" y1="12" x2="28" y2="52" stroke="#1e293b" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="67" y1="13" x2="27" y2="53" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
          {/* Blade Glint */}
          <polygon points="62,18 64,14 66,18 70,20 66,22 64,26 62,22 58,20" fill="#38bdf8" />
          {/* Wheel Tsuba (Handguard) */}
          <circle cx="28" cy="52" r="7" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
          {/* Hilt */}
          <line x1="28" y1="52" x2="14" y2="66" stroke="#b91c1c" strokeWidth="6" strokeLinecap="round" />
          <line x1="26" y1="54" x2="16" y2="64" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3,3" />
        </svg>
      </div>

      {/* 8. Kasugai Messenger Crow */}
      <div className="universe-doodle doodle-crow" style={{ top: '77%', left: '46%' }}>
        <svg viewBox="0 0 70 70" width="46" height="46">
          {/* Body */}
          <circle cx="34" cy="38" r="18" fill="#1e293b" />
          {/* Head */}
          <circle cx="44" cy="26" r="12" fill="#0f172a" />
          {/* Yellow Beak */}
          <polygon points="54,26 64,28 54,32" fill="#eab308" />
          {/* Eye */}
          <circle cx="46" cy="24" r="3" fill="#ffffff" />
          <circle cx="47" cy="24" r="1.5" fill="#000000" />
          {/* Red neckerchief */}
          <polygon points="38,32 46,38 34,42" fill="#ef4444" />
          {/* Little wing */}
          <path d="M 22 36 Q 32 44 24 50" stroke="#334155" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* ================= HARRY POTTER DOODLES & ARTIFACTS ================= */}

      {/* 9. Chibi Harry Potter Face */}
      <div className="universe-doodle doodle-harry-face" style={{ top: '12%', right: '20%' }}>
        <svg viewBox="0 0 80 80" width="58" height="58">
          {/* Messy Black Hair */}
          <path d="M 14 36 C 10 12, 38 4, 68 12 C 76 30, 72 58, 62 64 C 44 70, 18 64, 14 36 Z" fill="#0f172a" />
          <path d="M 16 32 L 26 22 L 34 30 L 44 20 L 52 30 L 64 24" stroke="#0f172a" strokeWidth="5" fill="none" strokeLinecap="round" />
          {/* Face */}
          <ellipse cx="40" cy="44" rx="23" ry="20" fill="#fed7aa" />
          {/* Lightning Bolt Scar */}
          <path d="M 32 26 L 36 32 L 33 33 L 37 38" stroke="#dc2626" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* Round Glasses */}
          <circle cx="28" cy="44" r="8" fill="none" stroke="#1e293b" strokeWidth="2.5" />
          <circle cx="52" cy="44" r="8" fill="none" stroke="#1e293b" strokeWidth="2.5" />
          <line x1="36" y1="44" x2="44" y2="44" stroke="#1e293b" strokeWidth="2" />
          {/* Eyes inside glasses */}
          <circle cx="28" cy="44" r="3" fill="#15803d" />
          <circle cx="52" cy="44" r="3" fill="#15803d" />
          {/* Smile */}
          <path d="M 36 53 Q 40 56 44 53" stroke="#9a3412" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Gryffindor Scarf Collar */}
          <rect x="22" y="60" width="36" height="10" rx="3" fill="#b91c1c" />
          <line x1="32" y1="60" x2="32" y2="70" stroke="#f59e0b" strokeWidth="4" />
          <line x1="48" y1="60" x2="48" y2="70" stroke="#f59e0b" strokeWidth="4" />
        </svg>
      </div>

      {/* 10. The Golden Snitch */}
      <div className="universe-doodle doodle-snitch" style={{ top: '23%', left: '18%' }}>
        <svg viewBox="0 0 90 50" width="62" height="36">
          {/* Left Wing */}
          <path d="M 36 25 Q 15 8 2 12 Q 18 24 34 26" fill="rgba(255,255,255,0.85)" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Right Wing */}
          <path d="M 54 25 Q 75 8 88 12 Q 72 24 56 26" fill="rgba(255,255,255,0.85)" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Golden Ball */}
          <circle cx="45" cy="25" r="12" fill="url(#snitchGold)" stroke="#d97706" strokeWidth="1.5" />
          <defs>
            <radialGradient id="snitchGold" cx="35%" cy="35%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="70%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>
          </defs>
          {/* Carved stitches on ball */}
          <path d="M 38 20 Q 45 23 52 20" stroke="#b45309" strokeWidth="1" fill="none" />
          <path d="M 38 30 Q 45 27 52 30" stroke="#b45309" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* 11. The Sorting Hat */}
      <div className="universe-doodle doodle-sorting-hat" style={{ top: '34%', right: '20%' }}>
        <svg viewBox="0 0 70 70" width="52" height="52">
          {/* Hat Brim */}
          <ellipse cx="35" cy="58" rx="28" ry="8" fill="#78350f" />
          {/* Hat Cone with character folds */}
          <path d="M 18 56 Q 24 38 30 26 Q 34 10 46 8 Q 42 20 44 32 Q 48 46 52 56 Z" fill="#92400e" stroke="#451a03" strokeWidth="1.5" />
          {/* Folds for Eyes */}
          <path d="M 26 42 Q 30 38 34 42" stroke="#451a03" strokeWidth="2.5" fill="none" />
          <path d="M 40 42 Q 44 38 48 42" stroke="#451a03" strokeWidth="2.5" fill="none" />
          {/* Wide folded Mouth */}
          <path d="M 28 50 Q 37 46 46 50" stroke="#451a03" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Patch */}
          <rect x="36" y="24" width="8" height="6" fill="#b45309" stroke="#451a03" strokeWidth="1" />
        </svg>
      </div>

      {/* 12. Magic Wand & Lumos Sparkle */}
      <div className="universe-doodle doodle-wand" style={{ bottom: '31%', left: '24%' }}>
        <svg viewBox="0 0 70 70" width="50" height="50">
          {/* Wooden wand */}
          <line x1="22" y1="58" x2="52" y2="24" stroke="#78350f" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="20" y1="60" x2="26" y2="53" stroke="#451a03" strokeWidth="6" strokeLinecap="round" />
          {/* Glowing starburst at tip */}
          <circle cx="54" cy="22" r="5" fill="#fef08a" />
          <polygon points="54,12 56,20 64,22 56,24 54,32 52,24 44,22 52,20" fill="#facc15" />
          {/* Little spark dots */}
          <circle cx="62" cy="14" r="1.5" fill="#fde047" />
          <circle cx="48" cy="14" r="1.5" fill="#fde047" />
          <circle cx="64" cy="28" r="1.5" fill="#fde047" />
        </svg>
      </div>

      {/* 13. Bubbling Cauldron */}
      <div className="universe-doodle doodle-cauldron" style={{ bottom: '16%', right: '18%' }}>
        <svg viewBox="0 0 70 70" width="50" height="50">
          {/* Cauldron Belly */}
          <ellipse cx="35" cy="46" rx="22" ry="16" fill="#1e293b" />
          {/* Cauldron Rim */}
          <ellipse cx="35" cy="32" rx="20" ry="5" fill="#334155" />
          {/* Potion surface */}
          <ellipse cx="35" cy="32" rx="17" ry="3.5" fill="#c084fc" />
          {/* Bubbles */}
          <circle cx="30" cy="25" r="4" fill="#e879f9" opacity="0.85" />
          <circle cx="39" cy="20" r="5" fill="#d946ef" opacity="0.8" />
          <circle cx="44" cy="27" r="3" fill="#f0abfc" opacity="0.9" />
          {/* Feet */}
          <rect x="20" y="58" width="4" height="6" rx="2" fill="#0f172a" />
          <rect x="46" y="58" width="4" height="6" rx="2" fill="#0f172a" />
        </svg>
      </div>

      {/* 14. Nimbus Broomstick */}
      <div className="universe-doodle doodle-broom" style={{ bottom: '12%', left: '12%' }}>
        <svg viewBox="0 0 80 50" width="58" height="38">
          {/* Wooden handle */}
          <line x1="10" y1="36" x2="52" y2="18" stroke="#854d0e" strokeWidth="4" strokeLinecap="round" />
          {/* Golden twig band */}
          <rect x="50" y="15" width="4" height="8" rx="1" fill="#facc15" transform="rotate(-22 52 19)" />
          {/* Twig bristles */}
          <path d="M 54 18 C 64 12, 74 14, 76 24 C 68 28, 58 24, 54 18 Z" fill="#d97706" />
          {/* Wind swooshes */}
          <path d="M 6 38 Q 14 36 20 38" stroke="#cbd5e1" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* 15. Hedwig Snowy Owl */}
      <div className="universe-doodle doodle-hedwig" style={{ top: '76%', right: '28%' }}>
        <svg viewBox="0 0 65 65" width="48" height="48">
          {/* Owl Body */}
          <ellipse cx="32" cy="34" rx="18" ry="20" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          {/* Feather speckles */}
          <circle cx="26" cy="36" r="1" fill="#64748b" />
          <circle cx="38" cy="38" r="1" fill="#64748b" />
          <circle cx="32" cy="44" r="1" fill="#64748b" />
          {/* Big amber eyes */}
          <circle cx="26" cy="24" r="5" fill="#f59e0b" />
          <circle cx="26" cy="24" r="2.5" fill="#0f172a" />
          <circle cx="38" cy="24" r="5" fill="#f59e0b" />
          <circle cx="38" cy="24" r="2.5" fill="#0f172a" />
          {/* Small black beak */}
          <polygon points="31,28 33,28 32,33" fill="#1e293b" />
          {/* Tiny letter in beak */}
          <rect x="27" y="32" width="10" height="7" rx="1" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.8" />
          <polygon points="27,32 32,36 37,32" fill="none" stroke="#ca8a04" strokeWidth="0.8" />
        </svg>
      </div>
    </div>
  );
}
