import React from 'react';
import Card from './common/Card';
import ChangeTag from './common/ChangeTag';
import { domesticPrices } from '../data/mockData';

export default function DomesticPriceTable() {
  return (
    <Card padded={false}>
      <div className="flex items-center justify-between p-5 pb-3">
        <h3 className="font-serif text-lg font-semibold text-ink">Giá vàng bạc trong nước</h3>
        <span className="text-xs text-ink-faint">Đơn vị: triệu VND/lượng · lượng bạc</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-t border-gold-900/10 text-left text-xs font-semibold uppercase tracking-wide text-ink-faint">
              <th className="px-5 py-2.5">Nơi bán</th>
              <th className="px-3 py-2.5 text-right">Mua</th>
              <th className="px-3 py-2.5 text-right">Bán</th>
              <th className="px-3 py-2.5 text-right">Spread</th>
              <th className="px-5 py-2.5 text-right">Biến động</th>
            </tr>
          </thead>
          <tbody>
            {domesticPrices.map((row, i) => (
              <tr
                key={row.id}
                className={`border-t border-gold-900/8 transition-colors hover:bg-paper-warm/60 ${i % 2 === 1 ? 'bg-paper-warm/25' : ''}`}
              >
                <td className="px-5 py-3 font-semibold text-ink">{row.vendor}</td>
                <td className="px-3 py-3 text-right font-tabular text-ink-soft">{row.buy.toLocaleString('vi-VN')}</td>
                <td className="px-3 py-3 text-right font-tabular font-semibold text-ink">{row.sell.toLocaleString('vi-VN')}</td>
                <td className="px-3 py-3 text-right font-tabular text-ink-faint">{row.spread.toLocaleString('vi-VN')}</td>
                <td className="px-5 py-3 text-right">
                  <div className="flex justify-end">
                    <ChangeTag pct={row.changePct} direction={row.changePct >= 0 ? 'up' : 'down'} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
