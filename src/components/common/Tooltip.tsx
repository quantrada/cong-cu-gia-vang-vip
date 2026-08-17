import React, { useState } from 'react';
import { Info } from 'lucide-react';

export default function Tooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center justify-center text-ink-faint hover:text-tea-600 transition-colors"
        aria-label="Thông tin"
      >
        <Info size={14} />
      </button>
      {open && (
        <span className="absolute bottom-full left-1/2 z-30 mb-2 w-56 -translate-x-1/2 rounded-lg border border-gold-900/10 bg-ink px-3 py-2 text-[11px] leading-snug text-paper-soft shadow-cardHover animate-fadeUp">
          {text}
        </span>
      )}
    </span>
  );
}
