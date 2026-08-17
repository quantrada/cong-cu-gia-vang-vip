import React from 'react';
import { Inbox, CloudOff, AlertTriangle } from 'lucide-react';

type Kind = 'empty' | 'stale' | 'error';

const config: Record<Kind, { icon: React.ReactNode; text: string; tone: string }> = {
  empty: { icon: <Inbox size={18} />, text: 'Chưa có thay đổi đáng chú ý.', tone: 'text-ink-faint' },
  stale: { icon: <CloudOff size={18} />, text: 'Dữ liệu đang chậm hơn lịch bình thường.', tone: 'text-gold-600' },
  error: { icon: <AlertTriangle size={18} />, text: 'Chưa thể cập nhật nguồn này.', tone: 'text-danger-600' },
};

export default function EmptyState({ kind = 'empty', className = '' }: { kind?: Kind; className?: string }) {
  const c = config[kind];
  return (
    <div className={`flex flex-col items-center justify-center gap-2 py-8 text-center ${c.tone} ${className}`}>
      {c.icon}
      <p className="text-sm font-medium">{c.text}</p>
    </div>
  );
}
