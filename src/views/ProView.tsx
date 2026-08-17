import React from 'react';
import FreeView from './FreeView';
import DeepAnalysisSection from '../components/pro/DeepAnalysisSection';
import WeeklyReportCard from '../components/pro/WeeklyReportCard';
import BasicAlertsPanel from '../components/pro/BasicAlertsPanel';
import TierLockedPreview from '../components/TierLockedPreview';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { Footprints, GitCompareArrows, BellRing, History } from 'lucide-react';

const teaserFeatures = [
  { icon: <History size={16} />, label: 'Từ lần cuối bác xem' },
  { icon: <Footprints size={16} />, label: 'Dấu chân định chế' },
  { icon: <GitCompareArrows size={16} />, label: 'Confluence Map' },
  { icon: <BellRing size={16} />, label: 'Smart Intelligence Alerts' },
];

function TriKyTeaser({ onUpgrade }: { onUpgrade: () => void }) {
  return (
    <Card premium className="relative overflow-hidden">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Badge tone="tri">TRI KỶ</Badge>
          <h3 className="mt-2 font-serif text-xl font-semibold text-ink">Market Intelligence</h3>
          <p className="mt-1 max-w-md text-sm leading-snug text-ink-soft">
            Theo dõi dòng tiền định chế, phát hiện thay đổi bất thường và vùng hội tụ kỹ thuật — như có người theo dõi thị trường thay bạn.
          </p>
        </div>
        <button
          onClick={onUpgrade}
          className="inline-flex flex-shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-tri-500 px-5 py-3 text-sm font-bold text-paper-soft shadow-glow transition-transform hover:scale-[1.02]"
        >
          Nâng cấp TRI KỶ
        </button>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {teaserFeatures.map((f) => (
          <div key={f.label} className="flex items-center gap-2 rounded-xl border border-tri-400/30 bg-paper-soft/60 px-3 py-2.5 text-sm font-medium text-ink-soft">
            <span className="text-tri-500">{f.icon}</span>
            {f.label}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default function ProView({ onUpgrade }: { onUpgrade: (tier: 'pro' | 'tri-ky') => void }) {
  return (
    <div className="space-y-10">
      <FreeView onUpgrade={onUpgrade} />

      <section id="phan-tich-chuyen-sau">
        <DeepAnalysisSection />
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <WeeklyReportCard />
        <BasicAlertsPanel />
      </section>

      <TriKyTeaser onUpgrade={() => onUpgrade('tri-ky')} />
    </div>
  );
}
