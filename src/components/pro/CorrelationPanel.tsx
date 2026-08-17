import React, { useState } from 'react';
import Card from '../common/Card';
import LineChart from '../common/LineChart';
import { correlationSeries } from '../../data/mockData';

const windows = ['30D', '90D', '180D'] as const;
type Win = typeof windows[number];

export default function CorrelationPanel() {
  const [win, setWin] = useState<Win>('30D');
  const s = correlationSeries[win];

  return (
    <Card>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h4 className="font-serif text-base font-semibold text-ink">{s.pair}</h4>
          <p className="text-xs text-ink-faint">Hệ số tương quan: <span className="font-tabular font-semibold text-ink">{s.corr}</span></p>
        </div>
        <div className="inline-flex rounded-full border border-gold-900/15 bg-paper-warm p-0.5">
          {windows.map((w) => (
            <button
              key={w}
              onClick={() => setWin(w)}
              className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
                win === w ? 'bg-tea-600 text-paper-soft' : 'text-ink-soft hover:text-ink'
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-4 text-xs text-ink-faint">
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-gold-500" />Vàng</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-tea-500" />Chỉ số so sánh</span>
      </div>
      <div className="mt-2">
        <LineChart series={[{ data: s.a, color: '#AB812E' }, { data: s.b, color: '#5F7A3D', dashed: true }]} height={220} />
      </div>
    </Card>
  );
}
