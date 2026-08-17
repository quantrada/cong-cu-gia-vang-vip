import React from 'react';

export default function Sparkline({
  data,
  positive = true,
  width = 96,
  height = 32,
}: {
  data: number[];
  positive?: boolean;
  width?: number;
  height?: number;
}) {
  if (!data || data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);
  const points = data.map((d, i) => {
    const x = i * step;
    const y = height - ((d - min) / range) * height;
    return `${x},${y}`;
  });
  const path = `M${points.join(' L')}`;
  const areaPath = `${path} L${width},${height} L0,${height} Z`;
  const stroke = positive ? '#5F7A3D' : '#AD6140';
  const fill = positive ? 'rgba(95,122,61,0.12)' : 'rgba(173,97,64,0.10)';

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <path d={areaPath} fill={fill} stroke="none" />
      <path d={path} fill="none" stroke={stroke} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
