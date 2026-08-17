import React from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import type { ChangeDirection } from '../../types';

export default function ChangeTag({ pct, direction }: { pct: number; direction: ChangeDirection }) {
  const isUp = direction === 'up';
  const isFlat = direction === 'flat';
  const color = isFlat ? 'text-ink-faint' : isUp ? 'text-success-600' : 'text-danger-600';
  const Icon = isFlat ? Minus : isUp ? ArrowUp : ArrowDown;
  return (
    <span className={`inline-flex items-center gap-0.5 font-tabular text-sm font-semibold ${color}`}>
      <Icon size={13} strokeWidth={2.5} />
      {Math.abs(pct).toFixed(2)}%
    </span>
  );
}
