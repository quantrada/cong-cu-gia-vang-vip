import React from 'react';

export default function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`skeleton-shimmer rounded-md ${className}`} />;
}

export function SkeletonCard() {
  return (
    <div className="rounded-card border border-gold-900/10 bg-paper-soft p-5 shadow-card">
      <Skeleton className="h-3 w-24 mb-3" />
      <Skeleton className="h-7 w-32 mb-2" />
      <Skeleton className="h-3 w-20" />
    </div>
  );
}
