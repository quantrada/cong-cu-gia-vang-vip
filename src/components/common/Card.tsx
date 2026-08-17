import React from 'react';

export default function Card({
  children,
  className = '',
  premium = false,
  padded = true,
}: {
  children: React.ReactNode;
  className?: string;
  premium?: boolean;
  padded?: boolean;
}) {
  return (
    <div
      className={`rounded-card border bg-paper-soft shadow-card transition-shadow duration-200 hover:shadow-cardHover
      ${premium ? 'border-gold-400/40 bg-gradient-to-b from-tri-50/70 to-paper-soft' : 'border-gold-900/10'}
      ${padded ? 'p-5' : ''}
      ${className}`}
    >
      {children}
    </div>
  );
}
