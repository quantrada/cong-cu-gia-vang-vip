import React, { useId } from 'react';

interface Series {
  data: number[];
  color: string;
  fill?: boolean;
  dashed?: boolean;
}

export default function LineChart({
  series,
  height = 220,
  labels,
}: {
  series: Series[];
  height?: number;
  labels?: string[];
}) {
  const id = useId();
  const width = 1000;
  const padding = 8;
  const allValues = series.flatMap((s) => s.data);
  const min = Math.min(...allValues);
  const max = Math.max(...allValues);
  const range = max - min || 1;

  const toPoints = (data: number[]) => {
    const step = (width - padding * 2) / (data.length - 1);
    return data.map((d, i) => {
      const x = padding + i * step;
      const y = padding + (height - padding * 2) * (1 - (d - min) / range);
      return `${x},${y}`;
    });
  };

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} preserveAspectRatio="none" className="overflow-visible">
        <defs>
          {series.map((s, i) => (
            <linearGradient key={i} id={`${id}-grad-${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.color} stopOpacity="0.18" />
              <stop offset="100%" stopColor={s.color} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
        {[0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            x1={padding}
            x2={width - padding}
            y1={padding + (height - padding * 2) * f}
            y2={padding + (height - padding * 2) * f}
            stroke="#EAE0C7"
            strokeWidth={1}
          />
        ))}
        {series.map((s, i) => {
          const pts = toPoints(s.data);
          const path = `M${pts.join(' L')}`;
          const areaPath = `${path} L${width - padding},${height - padding} L${padding},${height - padding} Z`;
          return (
            <g key={i}>
              {s.fill && <path d={areaPath} fill={`url(#${id}-grad-${i})`} />}
              <path
                d={path}
                fill="none"
                stroke={s.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={s.dashed ? '6 5' : undefined}
              />
            </g>
          );
        })}
      </svg>
      {labels && (
        <div className="mt-1 flex justify-between text-[11px] text-ink-faint font-tabular">
          {labels.map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </div>
      )}
    </div>
  );
}
