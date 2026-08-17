import React from 'react';
import type { FreshnessLevel } from '../../types';

const dotColor: Record<FreshnessLevel, string> = {
  fresh: 'bg-success-500',
  delayed: 'bg-gold-400',
  slow: 'bg-ink-faint',
};

export default function DataFreshnessBadge({
  label,
  value,
  level,
}: {
  label: string;
  value: string;
  level: FreshnessLevel;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-ink-soft whitespace-nowrap">
      <span className={`h-1.5 w-1.5 rounded-full ${dotColor[level]}`} />
      <span className="font-medium text-ink">{label}</span>
      <span className="text-ink-faint">· {value}</span>
    </span>
  );
}
