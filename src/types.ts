export type Tier = 'free' | 'pro' | 'tri-ky';

export type FreshnessLevel = 'fresh' | 'delayed' | 'slow';

export interface FreshnessItem {
  label: string;
  value: string;
  level: FreshnessLevel;
}

export type ChangeDirection = 'up' | 'down' | 'flat';

export interface MetricCardData {
  id: string;
  label: string;
  sublabel?: string;
  value: string;
  unit?: string;
  changePct: number;
  direction: ChangeDirection;
  status?: { label: string; tone: 'success' | 'warning' | 'neutral' | 'danger' };
  freshness: string;
  sparkline?: number[];
}

export interface DomesticPriceRow {
  id: string;
  vendor: string;
  buy: number;
  sell: number;
  spread: number;
  changePct: number;
}

export interface ConfidenceLevel {
  label: string;
  tone: 'high' | 'medium' | 'low';
}
