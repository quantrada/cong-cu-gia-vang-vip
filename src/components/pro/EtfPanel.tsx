import React, { useState } from 'react';
import Card from '../common/Card';
import ChangeTag from '../common/ChangeTag';
import { etfPanel } from '../../data/mockData';

const flows = ['1D', '1W', '1M'] as const;

export default function EtfPanel() {
  const [flow, setFlow] = useState<typeof flows[number]>('1D');
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Card>
        <p className="text-sm font-semibold text-ink">{etfPanel.gld.label}</p>
        <div className="mt-2 flex items-baseline justify-between">
          <span className="font-serif font-tabular text-2xl font-bold text-ink">{etfPanel.gld.value}<span className="ml-1 text-sm text-ink-faint">{etfPanel.gld.unit}</span></span>
          <ChangeTag pct={etfPanel.gld.changePct} direction="up" />
        </div>
      </Card>
      <Card>
        <p className="text-sm font-semibold text-ink">{etfPanel.slv.label}</p>
        <div className="mt-2 flex items-baseline justify-between">
          <span className="font-serif font-tabular text-2xl font-bold text-ink">{etfPanel.slv.value}<span className="ml-1 text-sm text-ink-faint">{etfPanel.slv.unit}</span></span>
          <ChangeTag pct={etfPanel.slv.changePct} direction="up" />
        </div>
      </Card>
      <Card className="sm:col-span-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-ink">Net Flow</p>
          <div className="inline-flex rounded-full border border-gold-900/15 bg-paper-warm p-0.5">
            {flows.map((f) => (
              <button
                key={f}
                onClick={() => setFlow(f)}
                className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
                  flow === f ? 'bg-tea-600 text-paper-soft' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-3 font-serif font-tabular text-2xl font-bold text-success-600">{etfPanel.netFlow[flow]} tấn</p>
        <p className="mt-1 text-xs text-ink-faint">Dòng tiền ròng vào ETF vàng &amp; bạc trong kỳ đã chọn.</p>
      </Card>
    </div>
  );
}
