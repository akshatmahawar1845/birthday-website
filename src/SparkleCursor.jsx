import React, { useEffect, useRef } from 'react';

const ICONS = ['✦', '✧', '⋆', '♡', '✨', '🌸'];
const COLORS = ['#ff8bb5', '#fca5a5', '#c084fc', '#fde047', '#67e8f9', '#f472b6'];

export default function SparkleCursor() {
  const containerRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    const handlePointerMove = (e) => {
      const now = performance.now();
      // Throttle sparkle creation slightly
      if (now - lastPos.current.time < 35) return;

      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 8) return;

      lastPos.current = { x: e.clientX, y: e.clientY, time: now };

      const el = document.createElement('span');
      el.className = 'cursor-sparkle';
      el.innerText = ICONS[Math.floor(Math.random() * ICONS.length)];
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      el.style.fontSize = `${12 + Math.random() * 14}px`;
      el.style.setProperty('--tx', `${(Math.random() - 0.5) * 40}px`);
      el.style.setProperty('--ty', `${-15 - Math.random() * 35}px`);
      el.style.setProperty('--rot', `${(Math.random() - 0.5) * 60}deg`);

      if (containerRef.current) {
        containerRef.current.appendChild(el);
      }

      setTimeout(() => {
        el.remove();
      }, 700);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return <div ref={containerRef} className="sparkle-cursor-container" aria-hidden="true" />;
}
