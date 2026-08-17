import React from 'react';
import DataFreshnessBadge from './common/DataFreshnessBadge';
import { freshnessStrip } from '../data/mockData';

export default function DataFreshnessStrip() {
  return (
    <div className="flex items-center gap-x-5 gap-y-2 overflow-x-auto no-scrollbar rounded-full border border-gold-900/10 bg-paper-warm/60 px-4 py-2.5 sm:flex-wrap sm:overflow-visible">
      {freshnessStrip.map((item) => (
        <DataFreshnessBadge key={item.label} label={item.label} value={item.value} level={item.level} />
      ))}
    </div>
  );
}
