import React from 'react';
import Card from '../common/Card';
import { weeklyReport } from '../../data/mockData';
import { FileText, Download } from 'lucide-react';

export default function WeeklyReportCard() {
  return (
    <Card>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
            <FileText size={20} />
          </div>
          <div>
            <h3 className="font-serif text-base font-semibold text-ink">{weeklyReport.title}</h3>
            <p className="text-sm text-ink-faint">{weeklyReport.range}</p>
            <div className="mt-1.5 flex items-center gap-2 text-xs text-ink-faint">
              <span className="rounded-full bg-paper-deep px-2 py-0.5 font-semibold text-ink-soft">{weeklyReport.format}</span>
              <span>{weeklyReport.pages} trang</span>
            </div>
          </div>
        </div>
        <button className="inline-flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-tea-600 px-4 py-2.5 text-sm font-bold text-paper-soft shadow-card transition-transform hover:scale-[1.02]">
          <Download size={15} /> Tải PDF
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 border-t border-gold-900/10 pt-4">
        {weeklyReport.sections.map((s) => (
          <span key={s} className="rounded-full border border-gold-900/10 bg-paper-warm px-3 py-1 text-xs font-medium text-ink-soft">
            {s}
          </span>
        ))}
      </div>
    </Card>
  );
}
