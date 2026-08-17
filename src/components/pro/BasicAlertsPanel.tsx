import React, { useState } from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { alertAssets, alertConditions, activeAlerts } from '../../data/mockData';
import { BellPlus, Trash2 } from 'lucide-react';

export default function BasicAlertsPanel() {
  const [asset, setAsset] = useState(alertAssets[0]);
  const [condition, setCondition] = useState(alertConditions[0]);
  const [threshold, setThreshold] = useState('');
  const [alerts, setAlerts] = useState(activeAlerts);

  function createAlert() {
    if (!threshold.trim()) return;
    setAlerts((prev) => [
      { id: Date.now(), asset, condition, threshold, active: true },
      ...prev,
    ]);
    setThreshold('');
  }

  return (
    <Card>
      <div className="flex items-center gap-2">
        <BellPlus size={17} className="text-tea-600" />
        <h3 className="font-serif text-base font-semibold text-ink">Tạo cảnh báo</h3>
      </div>
      <p className="mt-1 text-xs text-ink-faint">Cảnh báo do bạn tự đặt — hệ thống sẽ theo dõi và báo khi điều kiện xảy ra.</p>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-4">
        <select
          value={asset}
          onChange={(e) => setAsset(e.target.value)}
          className="rounded-xl border border-gold-900/15 bg-paper-soft px-3 py-2.5 text-sm font-medium text-ink outline-none transition-colors focus:border-tea-500"
        >
          {alertAssets.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="rounded-xl border border-gold-900/15 bg-paper-soft px-3 py-2.5 text-sm font-medium text-ink outline-none transition-colors focus:border-tea-500 sm:col-span-2"
        >
          {alertConditions.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <input
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          placeholder="Ngưỡng, ví dụ 4,450"
          className="rounded-xl border border-gold-900/15 bg-paper-soft px-3 py-2.5 text-sm font-medium text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-tea-500"
        />
      </div>

      <button
        onClick={createAlert}
        className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-paper-soft transition-transform hover:scale-[1.02]"
      >
        Tạo cảnh báo
      </button>

      <div className="mt-5 border-t border-gold-900/10 pt-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-faint">Đang bật ({alerts.filter(a => a.active).length})</p>
        <div className="space-y-2">
          {alerts.map((a) => (
            <div key={a.id} className="flex items-center justify-between gap-3 rounded-xl border border-gold-900/10 bg-paper-warm/50 px-3.5 py-2.5">
              <div className="flex items-center gap-2.5 text-sm">
                <span className="rounded-md bg-paper-deep px-2 py-0.5 font-bold text-ink">{a.asset}</span>
                <span className="text-ink-soft">{a.condition}</span>
                <span className="font-tabular font-semibold text-ink">{a.threshold}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge tone={a.active ? 'success' : 'neutral'}>{a.active ? 'Đang bật' : 'Tạm dừng'}</Badge>
                <button
                  onClick={() => setAlerts((prev) => prev.filter((x) => x.id !== a.id))}
                  className="text-ink-faint transition-colors hover:text-danger-600"
                  aria-label="Xoá cảnh báo"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
