import React from 'react';

type Tone = 'success' | 'warning' | 'neutral' | 'danger' | 'gold' | 'tri';

const toneClasses: Record<Tone, string> = {
  success: 'bg-success-100 text-success-700 border-success-500/30',
  warning: 'bg-terracotta-100 text-terracotta-700 border-terracotta-500/30',
  neutral: 'bg-tea-50 text-tea-700 border-tea-300/50',
  danger: 'bg-danger-100 text-danger-700 border-danger-500/30',
  gold: 'bg-gold-100 text-gold-700 border-gold-400/40',
  tri: 'bg-tri-100 text-tri-600 border-tri-400/50',
};

export default function Badge({
  children,
  tone = 'neutral',
  className = '',
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold leading-none whitespace-nowrap ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
