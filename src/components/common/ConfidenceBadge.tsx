import React from 'react';
import Badge from './Badge';

export default function ConfidenceBadge({ label, tone }: { label: string; tone: 'high' | 'medium' | 'low' }) {
  const map = { high: 'success', medium: 'warning', low: 'danger' } as const;
  return <Badge tone={map[tone]}>Độ tin cậy · {label}</Badge>;
}
