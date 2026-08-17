import React from 'react';
import MetricCard from './MetricCard';
import { keyMarketCards } from '../data/mockData';

export default function PriceCardsGrid() {
  return (
    <div>
      <h3 className="mb-3 font-serif text-lg font-semibold text-ink">Thị trường trong nháy mắt</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {keyMarketCards.map((c) => (
          <MetricCard key={c.id} data={c} />
        ))}
      </div>
    </div>
  );
}
