import React, { useState } from 'react';
import MacroPanel from './MacroPanel';
import PercentilePanel from './PercentilePanel';
import CorrelationPanel from './CorrelationPanel';
import HistoricalAnalogPanel from './HistoricalAnalogPanel';
import EtfPanel from './EtfPanel';
import { Microscope } from 'lucide-react';

const tabs = [
  { key: 'macro', label: 'Vĩ mô' },
  { key: 'percentile', label: 'Vị trí lịch sử' },
  { key: 'correlation', label: 'Tương quan' },
  { key: 'analog', label: 'Bối cảnh tương tự' },
  { key: 'etf', label: 'ETF' },
] as const;
type TabKey = typeof tabs[number]['key'];

export default function DeepAnalysisSection() {
  const [active, setActive] = useState<TabKey>('macro');

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Microscope size={18} className="text-tea-600" />
        <h2 className="font-serif text-xl font-semibold text-ink">Phân tích chuyên sâu</h2>
      </div>

      <div className="mb-5 flex gap-1.5 overflow-x-auto no-scrollbar rounded-full border border-gold-900/10 bg-paper-warm/50 p-1.5">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`flex-shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              active === t.key ? 'bg-ink text-paper-soft' : 'text-ink-soft hover:bg-paper-deep'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="animate-fadeUp" key={active}>
        {active === 'macro' && <MacroPanel />}
        {active === 'percentile' && <PercentilePanel />}
        {active === 'correlation' && <CorrelationPanel />}
        {active === 'analog' && <HistoricalAnalogPanel />}
        {active === 'etf' && <EtfPanel />}
      </div>
    </div>
  );
}
