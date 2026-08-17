import React from 'react';
import { LayoutGrid, Microscope, Gem, FileText, BellRing } from 'lucide-react';
import type { Tier } from '../types';

export type SubnavKey = 'tong-quan' | 'phan-tich' | 'tri-ky' | 'bao-cao' | 'canh-bao';

const items: { key: SubnavKey; label: string; icon: React.ReactNode }[] = [
  { key: 'tong-quan', label: 'Tổng quan', icon: <LayoutGrid size={15} /> },
  { key: 'phan-tich', label: 'Phân tích', icon: <Microscope size={15} /> },
  { key: 'tri-ky', label: 'TRI KỶ', icon: <Gem size={15} /> },
  { key: 'bao-cao', label: 'Báo cáo', icon: <FileText size={15} /> },
  { key: 'canh-bao', label: 'Cảnh báo', icon: <BellRing size={15} /> },
];

export default function ToolSubnav({
  active,
  onChange,
  tier,
}: {
  active: SubnavKey;
  onChange: (k: SubnavKey) => void;
  tier: Tier;
}) {
  return (
    <div className="sticky top-0 z-20 -mx-4 border-b border-gold-900/10 bg-paper/95 px-4 backdrop-blur-sm sm:-mx-6 sm:px-6">
      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2">
        {items.map((item) => {
          const isTriTab = item.key === 'tri-ky';
          const active_ = active === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onChange(item.key)}
              className={`relative inline-flex flex-shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200 whitespace-nowrap
                ${active_
                  ? isTriTab
                    ? 'bg-tri-500 text-paper-soft'
                    : 'bg-tea-600 text-paper-soft'
                  : 'text-ink-soft hover:bg-paper-deep'
                }`}
            >
              {item.icon}
              {item.label}
              {isTriTab && tier === 'tri-ky' && !active_ && (
                <span className="h-1.5 w-1.5 rounded-full bg-tri-500" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
