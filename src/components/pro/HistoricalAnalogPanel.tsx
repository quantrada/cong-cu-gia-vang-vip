import React from 'react';
import Card from '../common/Card';
import { historicalAnalog } from '../../data/mockData';
import { CalendarClock } from 'lucide-react';

export default function HistoricalAnalogPanel() {
  return (
    <Card>
      <h4 className="font-serif text-base font-semibold text-ink">Giai đoạn lịch sử gần giống hiện tại</h4>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Similarity Score</p>
          <p className="mt-1 font-serif font-tabular text-2xl font-bold text-gold-600">{historicalAnalog.similarity}%</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Khoảng thời gian</p>
          <p className="mt-1 inline-flex items-center gap-1.5 font-tabular text-sm font-semibold text-ink">
            <CalendarClock size={14} className="text-ink-faint" /> {historicalAnalog.range}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Diễn biến sau đó</p>
          <p className="mt-1 text-sm leading-snug text-ink-soft">{historicalAnalog.outcome}</p>
        </div>
      </div>
      <p className="mt-4 rounded-lg bg-paper-warm px-3 py-2 text-xs italic text-ink-faint">{historicalAnalog.disclaimer}</p>
    </Card>
  );
}
