import React from 'react';
import Card from './common/Card';
import Badge from './common/Badge';
import ChangeTag from './common/ChangeTag';
import Sparkline from './common/Sparkline';
import type { MetricCardData } from '../types';

const toneMap = { success: 'success', warning: 'warning', neutral: 'neutral', danger: 'danger' } as const;

export default function MetricCard({ data }: { data: MetricCardData }) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-ink">{data.label}</p>
          {data.sublabel && <p className="text-xs text-ink-faint">{data.sublabel}</p>}
        </div>
        {data.status && <Badge tone={toneMap[data.status.tone]}>{data.status.label}</Badge>}
      </div>

      <div className="flex items-end justify-between gap-2">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif font-tabular text-2xl font-bold text-ink">{data.value}</span>
            {data.unit && <span className="text-xs font-medium text-ink-faint">{data.unit}</span>}
          </div>
          <div className="mt-1">
            <ChangeTag pct={data.changePct} direction={data.direction} />
          </div>
        </div>
        {data.sparkline && <Sparkline data={data.sparkline} positive={data.direction !== 'down'} />}
      </div>

      <p className="text-[11px] text-ink-faint">{data.freshness}</p>
    </Card>
  );
}
