import React, { useState } from 'react';
import Card from './common/Card';
import LineChart from './common/LineChart';
import { priceChartSeries } from '../data/mockData';

const timeframes = ['1D', '1W', '1M', '3M', '1Y'] as const;
type Timeframe = typeof timeframes[number];

export default function PriceChart() {
  const [asset, setAsset] = useState<'gold' | 'silver'>('gold');
  const [tf, setTf] = useState<Timeframe>('1D');

  const data = priceChartSeries[asset][tf];
  const color = asset === 'gold' ? '#AB812E' : '#5F7A3D';
  const label = asset === 'gold' ? 'XAU/USD' : 'XAG/USD';

  const labels = data.length
    ? [data[0], data[Math.floor(data.length / 2)], data[data.length - 1]].map((v) => v.toFixed(1))
    : [];

  return (
    <Card>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h3 className="font-serif text-lg font-semibold text-ink">Biểu đồ giá</h3>
          <div className="inline-flex rounded-full border border-gold-900/15 bg-paper-warm p-0.5">
            {(['gold', 'silver'] as const).map((a) => (
              <button
                key={a}
                onClick={() => setAsset(a)}
                className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
                  asset === a ? 'bg-ink text-paper-soft' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {a === 'gold' ? 'Vàng' : 'Bạc'}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-1 overflow-x-auto no-scrollbar">
          {timeframes.map((t) => (
            <button
              key={t}
              onClick={() => setTf(t)}
              className={`flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
                tf === t ? 'bg-tea-600 text-paper-soft' : 'text-ink-soft hover:bg-paper-deep'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2 text-xs text-ink-faint">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
          {label}
        </span>
      </div>

      <div className="mt-3">
        <LineChart series={[{ data, color, fill: true }]} height={240} labels={labels.length ? [labels[0], labels[1], labels[2]] : undefined} />
      </div>
    </Card>
  );
}
