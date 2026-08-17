import React from 'react';
import Card from './common/Card';
import { Lock, ArrowRight } from 'lucide-react';

export default function TierLockedPreview({
  title,
  description,
  badge,
  cta,
  variant = 'pro',
  onUpgrade,
  ghostContent,
}: {
  title: string;
  description: string;
  badge: string;
  cta: string;
  variant?: 'pro' | 'tri-ky';
  onUpgrade?: () => void;
  ghostContent?: React.ReactNode;
}) {
  const accent = variant === 'tri-ky' ? 'tri' : 'tea';
  return (
    <Card
      className="relative overflow-hidden"
      premium={variant === 'tri-ky'}
    >
      {ghostContent && (
        <div className="pointer-events-none absolute inset-0 select-none opacity-40 blur-[2px]">
          {ghostContent}
        </div>
      )}
      <div className="relative flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div
            className={`mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${
              accent === 'tri' ? 'bg-tri-100 text-tri-600' : 'bg-tea-100 text-tea-600'
            }`}
          >
            <Lock size={16} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-serif text-base font-semibold text-ink">{title}</h4>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  accent === 'tri' ? 'bg-tri-500 text-paper-soft' : 'bg-tea-600 text-paper-soft'
                }`}
              >
                {badge}
              </span>
            </div>
            <p className="mt-1 max-w-md text-sm leading-snug text-ink-soft">{description}</p>
          </div>
        </div>
        <button
          onClick={onUpgrade}
          className={`inline-flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-bold shadow-card transition-transform duration-200 hover:scale-[1.02] ${
            accent === 'tri' ? 'bg-tri-500 text-paper-soft' : 'bg-gold-500 text-paper-soft'
          }`}
        >
          {cta}
          <ArrowRight size={15} />
        </button>
      </div>
    </Card>
  );
}
