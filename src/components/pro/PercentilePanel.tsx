import React from 'react';
import Card from '../common/Card';
import { percentileCards } from '../../data/mockData';

function barTone(v: number) {
  if (v >= 80) return 'bg-terracotta-500';
  if (v >= 60) return 'bg-gold-400';
  return 'bg-tea-500';
}

export default function PercentilePanel() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {percentileCards.map((p) => (
        <Card key={p.id}>
          <p className="text-sm font-semibold text-ink">{p.label}</p>
          <div className="mt-3 flex items-end justify-between">
            <span className="font-serif font-tabular text-2xl font-bold text-ink">{p.value}<span className="text-sm text-ink-faint">/100</span></span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-paper-deep">
            <div className={`h-full rounded-full ${barTone(p.value)}`} style={{ width: `${p.value}%` }} />
          </div>
          <p className="mt-3 text-xs leading-snug text-ink-faint">{p.note}</p>
        </Card>
      ))}
    </div>
  );
}
