import React, { useState } from 'react';
import Card from './common/Card';
import { ChevronDown, Sparkles } from 'lucide-react';
import { todayBrief } from '../data/mockData';

export default function TodayBrief() {
  const [open, setOpen] = useState(false);

  return (
    <Card padded={false} className="overflow-hidden">
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-gold-500" />
          <h3 className="font-serif text-lg font-semibold text-ink">Góc nhìn hôm nay</h3>
        </div>
        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-tea-600">3 chuyện đáng chú ý</p>

        <div className="mt-4 space-y-3.5">
          {todayBrief.points.map((p) => (
            <div key={p.no} className="flex gap-3">
              <span className="font-serif text-lg font-semibold text-gold-500/70">{p.no}</span>
              <div>
                <p className="text-sm font-semibold text-ink">{p.title}</p>
                <p className="mt-0.5 text-sm leading-snug text-ink-soft">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-gold-900/15 bg-paper-warm px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-paper-deep"
        >
          Xem phân tích đầy đủ
          <ChevronDown size={15} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div
        className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        style={{ display: 'grid' }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-gold-900/10 bg-paper-warm/60 p-5 sm:p-6 space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-ink-faint">Tổng quan hôm nay</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{todayBrief.overview}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-ink-faint">Phân tích gộp</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{todayBrief.analysis}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-tea-600">Kết luận Trà Đá</p>
              <p className="mt-1 text-sm leading-relaxed text-ink font-medium">{todayBrief.conclusion}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
