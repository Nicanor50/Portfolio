import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const glowRef = useRef(null);
  useEffect(() => {
    let raf = null;
    const onMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = glowRef.current?.parentElement?.getBoundingClientRect();
        if (glowRef.current && rect) {
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          glowRef.current.style.setProperty('--mx', `${x}%`);
          glowRef.current.style.setProperty('--my', `${y}%`);
        }
        raf = null;
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: '#08080f' }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,148,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,148,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 75% 60% at 50% 0%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 60% at 50% 0%, black 20%, transparent 75%)',
        }}
      />
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div
        ref={glowRef}
        className="absolute inset-0"
        style={{ background: 'radial-gradient(480px circle at var(--mx,50%) var(--my,20%), rgba(99,102,241,0.12), transparent 45%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 100% 60% at 50% 0%, transparent 40%, #08080f 100%)' }}
      />
      <style>{`
        @keyframes af1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(50px,-35px) scale(1.15)} }
        @keyframes af2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-45px,45px) scale(1.1)} }
        @keyframes af3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(35px,50px) scale(0.92)} }
        .aurora { position:absolute; border-radius:50%; filter:blur(80px); }
        .aurora-1 { width:320px;height:320px; top:-8%; left:0%; background:#6366f1; opacity:0.35; animation:af1 16s ease-in-out infinite; }
        .aurora-2 { width:280px;height:280px; top:20%; right:-6%; background:#22d3ee; opacity:0.26; animation:af2 19s ease-in-out infinite; }
        .aurora-3 { width:260px;height:260px; bottom:-10%; left:28%; background:#a855f7; opacity:0.24; animation:af3 22s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

const GlassCard = ({ title, desc, badge, gradient }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="rounded-2xl overflow-hidden flex flex-col"
    style={{ background: 'rgba(16,15,28,0.55)', backdropFilter: 'blur(16px)', border: '1px solid rgba(148,148,255,0.1)' }}
  >
    <div className="h-24 flex items-end p-3" style={{ background: gradient }}>
      <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(8,8,15,0.55)', color: '#fff' }}>{badge}</span>
    </div>
    <div className="p-4 flex flex-col gap-1.5">
      <p className="text-sm font-semibold" style={{ color: '#e8e8f4' }}>{title}</p>
      <p className="text-xs" style={{ color: '#8b8b9e', lineHeight: 1.6 }}>{desc}</p>
    </div>
  </motion.div>
);

export default function BackgroundPreview() {
  const [tab] = useState('preview');

  return (
    <div className="w-full rounded-2xl overflow-hidden relative" style={{ minHeight: 520 }}>
      <AnimatedBackground />

      <div className="relative z-10 px-8 py-14 flex flex-col items-center text-center gap-4">
        <span
          className="text-xs font-medium px-3 py-1 rounded-full"
          style={{ background: 'rgba(63,185,80,0.1)', color: '#3fb950', border: '1px solid rgba(63,185,80,0.25)' }}
        >
          ● Disponible pour de nouvelles opportunités
        </span>
        <h1 className="text-3xl font-semibold" style={{ color: '#e8e8f4' }}>
          Développeur Web <span style={{ color: '#8b8b9e' }}>Full Stack</span>
        </h1>
        <p className="text-sm max-w-md" style={{ color: '#a5a5b8', lineHeight: 1.7 }}>
          Bouge ta souris sur cette zone pour voir le halo réagir, et observe les 3 taches de couleur dériver lentement en fond.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mt-6">
          <GlassCard title="Location d'objets" desc="Laravel + CSS" badge="Web app" gradient="linear-gradient(135deg,#6366f1,#22d3ee)" />
          <GlassCard title="Supermarché" desc="Laravel + Bootstrap" badge="E-commerce" gradient="linear-gradient(135deg,#f97316,#ec4899)" />
          <GlassCard title="E-learning" desc="React + CSS" badge="EdTech" gradient="linear-gradient(135deg,#22c55e,#22d3ee)" />
        </div>
      </div>
    </div>
  );
}
