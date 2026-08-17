import React from 'react';
import { Coins } from 'lucide-react';
import DataFreshnessStrip from './DataFreshnessStrip';

export default function ToolIntro() {
  return (
    <div className="animate-fadeUp">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-tea-600/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-tea-700">
        <Coins size={12} /> Giá vàng bạc
      </span>
      <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
        Vàng bạc hôm nay
      </h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
        Giá, dòng tiền, vị thế và những thay đổi đáng chú ý — gộp trong một nơi.
      </p>
      <div className="mt-5">
        <DataFreshnessStrip />
      </div>
    </div>
  );
}
