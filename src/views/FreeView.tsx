import React from 'react';
import MarketScoreCard from '../components/MarketScoreCard';
import Card from '../components/common/Card';
import TodayBrief from '../components/TodayBrief';
import PriceCardsGrid from '../components/PriceCardsGrid';
import DomesticPriceTable from '../components/DomesticPriceTable';
import PriceChart from '../components/PriceChart';
import TierLockedPreview from '../components/TierLockedPreview';
import { marketScore } from '../data/mockData';

const toneDot = { success: 'bg-success-500', neutral: 'bg-gold-400', danger: 'bg-danger-500' } as const;

function SentimentCard() {
  return (
    <Card>
      <h3 className="font-serif text-base font-semibold text-ink">Tâm lý thị trường</h3>
      <div className="mt-4 space-y-3">
        {marketScore.sentiment.map((s) => (
          <div key={s.label}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="inline-flex items-center gap-1.5 font-medium text-ink-soft">
                <span className={`h-2 w-2 rounded-full ${toneDot[s.tone]}`} />
                {s.label}
              </span>
              <span className="font-tabular font-semibold text-ink">{s.pct}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-paper-deep">
              <div
                className={`h-full rounded-full ${toneDot[s.tone]}`}
                style={{ width: `${s.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-ink-faint">Dải tâm lý: <span className="font-semibold text-ink">Trung lập</span></p>
    </Card>
  );
}

export default function FreeView({ onUpgrade }: { onUpgrade: (tier: 'pro' | 'tri-ky') => void }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MarketScoreCard />
        </div>
        <SentimentCard />
      </div>

      <TodayBrief />

      <PriceCardsGrid />

      <DomesticPriceTable />

      <PriceChart />

      <div className="space-y-4">
        <h3 className="font-serif text-lg font-semibold text-ink">Mở khoá thêm góc nhìn</h3>
        <TierLockedPreview
          title="Phân tích chuyên sâu"
          description="Vĩ mô, percentile, tương quan, ETF và bối cảnh lịch sử."
          badge="PRO"
          cta="Nâng cấp PRO"
          variant="pro"
          onUpgrade={() => onUpgrade('pro')}
        />
        <TierLockedPreview
          title="Market Intelligence"
          description="Dấu chân định chế, thay đổi quan trọng, vùng hội tụ và cảnh báo thông minh."
          badge="TRI KỶ"
          cta="Khám phá TRI KỶ"
          variant="tri-ky"
          onUpgrade={() => onUpgrade('tri-ky')}
        />
      </div>
    </div>
  );
}
