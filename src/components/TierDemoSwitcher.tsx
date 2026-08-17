import React from 'react';
import { Eye, BrainCircuit, Gem } from 'lucide-react';
import type { Tier } from '../types';

const tiers: { id: Tier; label: string; icon: React.ReactNode }[] = [
  { id: 'free', label: 'FREE', icon: <Eye size={14} /> },
  { id: 'pro', label: 'PRO', icon: <BrainCircuit size={14} /> },
  { id: 'tri-ky', label: 'TRI KỶ', icon: <Gem size={14} /> },
];

export default function TierDemoSwitcher({ tier, onChange }: { tier: Tier; onChange: (t: Tier) => void }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-gold-900/15 bg-paper-warm p-1 shadow-card">
      {tiers.map((t) => {
        const active = tier === t.id;
        return (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className={`relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide transition-all duration-200 whitespace-nowrap
              ${active
                ? t.id === 'tri-ky'
                  ? 'bg-tri-500 text-paper-soft shadow-glow'
                  : t.id === 'pro'
                  ? 'bg-tea-600 text-paper-soft'
                  : 'bg-ink text-paper-soft'
                : 'text-ink-soft hover:bg-paper-deep'
              }`}
          >
            {t.icon}
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
