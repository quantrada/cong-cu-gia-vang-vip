import React from 'react';
import Card from '../common/Card';
import ChangeTag from '../common/ChangeTag';
import { macroCards } from '../../data/mockData';

export default function MacroPanel() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {macroCards.map((m) => (
        <Card key={m.id}>
          <p className="text-sm font-semibold text-ink">{m.label}</p>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-serif font-tabular text-xl font-bold text-ink">{m.value}</span>
            <ChangeTag pct={m.changePct} direction={m.direction} />
          </div>
          <p className="mt-2 text-xs leading-snug text-ink-faint">{m.note}</p>
        </Card>
      ))}
    </div>
  );
}
