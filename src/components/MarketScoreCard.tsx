import React from 'react';
import Card from './common/Card';
import RadialScore from './common/RadialScore';
import Tooltip from './common/Tooltip';
import { marketScore } from '../data/mockData';
import { TrendingUp } from 'lucide-react';

export default function MarketScoreCard() {
  return (
    <Card className="flex flex-col justify-between">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <h3 className="font-serif text-base font-semibold text-ink">Điểm tổng hợp thị trường</h3>
          <Tooltip text="Điểm số đo trạng thái dữ liệu, không đo xác suất sinh lời." />
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-success-100 px-2 py-0.5 text-[11px] font-semibold text-success-700">
          <TrendingUp size={11} /> +{marketScore.changeVsYesterday} so với hôm qua
        </span>
      </div>

      <div className="mt-4 flex items-center gap-5">
        <div className="relative flex h-[92px] w-[92px] flex-shrink-0 items-center justify-center">
          <RadialScore value={marketScore.value} />
          <div className="absolute flex flex-col items-center">
            <span className="font-serif font-tabular text-2xl font-bold leading-none text-ink">{marketScore.value}</span>
            <span className="text-[10px] font-medium text-ink-faint">/100</span>
          </div>
        </div>
        <div>
          <span className="inline-block rounded-full bg-gold-100 px-2.5 py-1 text-xs font-bold text-gold-700">
            {marketScore.label.toUpperCase()}
          </span>
          <p className="mt-2 text-sm leading-snug text-ink-soft">{marketScore.note}</p>
        </div>
      </div>
    </Card>
  );
}
