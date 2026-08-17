import type { DomesticPriceRow, FreshnessItem, MetricCardData } from '../types';

// ============ TOP INTRO / FRESHNESS ============
export const freshnessStrip: FreshnessItem[] = [
  { label: 'Giá', value: '6 phút trước', level: 'fresh' },
  { label: 'ETF', value: 'hôm nay', level: 'fresh' },
  { label: 'COT', value: '4 ngày trước', level: 'delayed' },
  { label: 'COMEX', value: '1 ngày trước', level: 'delayed' },
  { label: 'LBMA', value: '18 ngày trước', level: 'slow' },
];

// ============ MARKET SCORE ============
export const marketScore = {
  value: 56,
  label: 'Trung lập',
  note: 'Các chỉ số chưa nghiêng rõ về một phía.',
  changeVsYesterday: 4,
  sentiment: [
    { label: 'Tích cực', pct: 25, tone: 'success' as const },
    { label: 'Trung lập', pct: 50, tone: 'neutral' as const },
    { label: 'Tiêu cực', pct: 25, tone: 'danger' as const },
  ],
};

// ============ TODAY BRIEF ============
export const todayBrief = {
  points: [
    { no: '01', title: 'Vàng giữ nền', detail: 'XAU/USD dao động hẹp quanh vùng hỗ trợ ngắn hạn, chưa phá vỡ cấu trúc gần đây.' },
    { no: '02', title: 'Bạc mạnh hơn trong ngắn hạn', detail: 'Bạc tăng 1.48% trong khi vàng chỉ tăng 0.35%, tỷ lệ Gold/Silver nghiêng dần về bạc.' },
    { no: '03', title: 'Real Yield vẫn gây áp lực', detail: 'Lợi suất thực 10 năm neo cao tiếp tục là lực cản với kim loại quý không sinh lãi.' },
  ],
  overview: 'Thị trường kim loại quý mở đầu tuần trong trạng thái giằng co, thanh khoản vừa phải. Vàng thế giới giữ vùng nền quen thuộc trong khi bạc thể hiện lực mua nhanh hơn ở khung ngắn hạn.',
  analysis: 'DXY suy yếu nhẹ giúp giảm áp lực lên kim loại quý, nhưng lợi suất thực vẫn ở vùng cao khiến dòng tiền phòng thủ chưa dứt khoát. Chênh lệch SJC – thế giới duy trì quanh mức bình quân 30 phiên.',
  conclusion: 'Trà Đá cho rằng đây là giai đoạn tích lũy chờ dữ liệu vĩ mô Mỹ giữa tuần — chưa đủ cơ sở để nghiêng hẳn về một xu hướng.',
};

// ============ KEY MARKET CARDS (FREE) ============
export const keyMarketCards: MetricCardData[] = [
  {
    id: 'xau',
    label: 'Vàng thế giới',
    sublabel: 'XAU/USD',
    value: '4,404.20',
    unit: 'USD/oz',
    changePct: 0.35,
    direction: 'up',
    status: { label: 'Ổn định', tone: 'neutral' },
    freshness: '6 phút trước',
    sparkline: [10, 12, 11, 13, 15, 14, 16, 18, 17, 19],
  },
  {
    id: 'xag',
    label: 'Bạc',
    sublabel: 'XAG/USD',
    value: '66.10',
    unit: 'USD/oz',
    changePct: 1.48,
    direction: 'up',
    status: { label: 'Mạnh hơn vàng', tone: 'success' },
    freshness: '6 phút trước',
    sparkline: [8, 9, 8, 10, 11, 12, 11, 13, 15, 16],
  },
  {
    id: 'usdvnd',
    label: 'Tỷ giá',
    sublabel: 'USD/VND',
    value: '26,400',
    unit: 'VND',
    changePct: 0.08,
    direction: 'up',
    status: { label: 'Ổn định', tone: 'neutral' },
    freshness: '18 phút trước',
    sparkline: [20, 20, 21, 21, 20, 22, 22, 23, 23, 24],
  },
  {
    id: 'ratio',
    label: 'Gold / Silver Ratio',
    sublabel: 'XAU/XAG',
    value: '66.7',
    changePct: -1.12,
    direction: 'down',
    status: { label: 'Nghiêng về bạc', tone: 'warning' },
    freshness: '6 phút trước',
    sparkline: [22, 21, 21, 20, 19, 18, 18, 17, 16.5, 16],
  },
  {
    id: 'sjc',
    label: 'Vàng SJC',
    sublabel: 'Bán ra',
    value: '154.5',
    unit: 'triệu/lượng',
    changePct: 0.42,
    direction: 'up',
    status: { label: 'Tăng nhẹ', tone: 'success' },
    freshness: '25 phút trước',
    sparkline: [30, 31, 30, 32, 33, 32, 34, 34, 35, 36],
  },
  {
    id: 'gap',
    label: 'Chênh lệch SJC – Thế giới',
    sublabel: 'Quy đổi VND/lượng',
    value: '4.0',
    unit: 'triệu',
    changePct: 2.1,
    direction: 'up',
    status: { label: 'Nới rộng', tone: 'warning' },
    freshness: '25 phút trước',
    sparkline: [12, 12, 13, 12, 14, 14, 15, 15, 16, 16],
  },
];

// ============ DOMESTIC PRICE TABLE ============
export const domesticPrices: DomesticPriceRow[] = [
  { id: 'sjc', vendor: 'SJC', buy: 152.5, sell: 154.5, spread: 2.0, changePct: 0.42 },
  { id: 'doji', vendor: 'DOJI', buy: 152.3, sell: 154.3, spread: 2.0, changePct: 0.39 },
  { id: 'pnj', vendor: 'PNJ', buy: 152.1, sell: 154.1, spread: 2.0, changePct: 0.35 },
  { id: 'mihong', vendor: 'Mi Hồng', buy: 152.4, sell: 154.2, spread: 1.8, changePct: 0.31 },
  { id: 'phuquy', vendor: 'Bạc Phú Quý', buy: 1.28, sell: 1.34, spread: 0.06, changePct: 1.05 },
];

// ============ CHART SERIES (mock) ============
function genSeries(base: number, points: number, vol: number) {
  const arr: number[] = [];
  let v = base;
  for (let i = 0; i < points; i++) {
    v += (Math.sin(i / 3) * vol) + (Math.random() - 0.5) * vol * 1.4;
    arr.push(Math.round(v * 100) / 100);
  }
  return arr;
}

export const priceChartSeries = {
  gold: {
    '1D': genSeries(4380, 24, 4),
    '1W': genSeries(4300, 28, 10),
    '1M': genSeries(4150, 30, 18),
    '3M': genSeries(3900, 36, 32),
    '1Y': genSeries(3200, 48, 60),
  },
  silver: {
    '1D': genSeries(65, 24, 0.15),
    '1W': genSeries(63, 28, 0.4),
    '1M': genSeries(58, 30, 0.9),
    '3M': genSeries(48, 36, 1.6),
    '1Y': genSeries(30, 48, 3),
  },
};

// ============ PRO: MACRO ============
export const macroCards = [
  { id: 'cpi', label: 'CPI (YoY)', value: '3.0%', changePct: 0.1, direction: 'up' as const, note: 'Lạm phát Mỹ nhích nhẹ so với dự báo.' },
  { id: 'realyield', label: 'Real Yield 10Y', value: '2.15%', changePct: 0.03, direction: 'up' as const, note: 'Vẫn ở vùng cao, gây áp lực lên vàng.' },
  { id: 'dxy', label: 'DXY Index', value: '101.32', changePct: -0.26, direction: 'down' as const, note: 'USD suy yếu nhẹ, hỗ trợ kim loại quý.' },
  { id: 'm2', label: 'M2 Money Supply', value: '$21.4T', changePct: 0.4, direction: 'up' as const, note: 'Cung tiền mở rộng chậm rãi.' },
  { id: 'pce', label: 'Core PCE (YoY)', value: '2.8%', changePct: -0.05, direction: 'down' as const, note: 'Chỉ số ưa thích của Fed hạ nhiệ nhẹ.' },
  { id: 'liquidity', label: 'Fed Liquidity', value: '$6.1T', changePct: 0.6, direction: 'up' as const, note: 'Thanh khoản hệ thống nhích lên.' },
];

// ============ PRO: PERCENTILE ============
export const percentileCards = [
  { id: 'xau', label: 'XAU Percentile', value: 78, note: 'Giá đang ở vùng cao so với 5 năm gần nhất.' },
  { id: 'xag', label: 'XAG Percentile', value: 64, note: 'Bạc ở vùng trung bình cao.' },
  { id: 'ratio', label: 'Gold/Silver Ratio Percentile', value: 41, note: 'Tỷ lệ đang thấp hơn trung bình dài hạn.' },
  { id: 'gap', label: 'SJC – Thế giới Gap Percentile', value: 88, note: 'Chênh lệch trong nước hiếm khi cao hơn mức này.' },
  { id: 'cot', label: 'COT Percentile', value: 96, note: 'Vị thế managed money đang rất đông.' },
];

// ============ PRO: CORRELATION ============
export const correlationSeries = {
  '30D': { a: genSeries(4300, 30, 8), b: genSeries(101, 30, 0.4), pair: 'Gold vs DXY', corr: -0.62 },
  '90D': { a: genSeries(4150, 30, 15), b: genSeries(2.1, 30, 0.05), pair: 'Gold vs Real Yield', corr: -0.71 },
  '180D': { a: genSeries(4000, 30, 20), b: genSeries(55, 30, 1.5), pair: 'Gold vs Silver', corr: 0.84 },
};

// ============ PRO: HISTORICAL ANALOG ============
export const historicalAnalog = {
  similarity: 82,
  range: '03/2008 – 09/2008',
  outcome: 'Vàng tăng ~14% trong 6 tháng tiếp theo giữa lúc real yield giảm và DXY suy yếu kéo dài.',
  disclaimer: 'Thống kê mô tả quá khứ, không phải dự báo.',
};

// ============ PRO: ETF ============
export const etfPanel = {
  gld: { label: 'GLD Holdings', value: '872.4', unit: 'tấn', changePct: 0.8 },
  slv: { label: 'SLV Holdings', value: '14,732.1', unit: 'tấn', changePct: 0.62 },
  netFlow: { '1D': '+1.2', '1W': '+4.8', '1M': '+11.3' },
};

// ============ PRO: WEEKLY REPORT ============
export const weeklyReport = {
  title: 'Báo cáo vàng bạc tuần',
  range: 'Tuần 17–23/08/2026',
  pages: 12,
  format: 'PDF',
  sections: ['Giá', 'Macro', 'ETF', 'Historical context'],
};

// ============ PRO: ALERTS ============
export const alertAssets = ['XAU', 'XAG', 'SJC', 'PNJ'];
export const alertConditions = ['Giá trên', 'Giá dưới', 'Thay đổi 24h', 'Spread thay đổi', 'SJC-world gap'];

export const activeAlerts = [
  { id: 1, asset: 'XAU', condition: 'Giá trên', threshold: '4,450 USD', active: true },
  { id: 2, asset: 'SJC', condition: 'SJC-world gap', threshold: '4.5 triệu', active: true },
  { id: 3, asset: 'XAG', condition: 'Thay đổi 24h', threshold: '±2%', active: false },
];

// ============ TRI KỶ: COCKPIT ============
export const cockpit = {
  market: { value: 56, label: 'Trung lập' },
  footprint: { value: 72, label: 'Đang mạnh lên' },
  confluence: { value: 86, label: 'Hội tụ cao' },
  summary: 'Bối cảnh chung chưa nghiêng rõ, nhưng dấu chân dòng tiền đang cải thiện và giá đang tiến gần một vùng kỹ thuật đáng chú ý.',
};

// ============ TRI KỶ: SINCE LAST VISIT ============
export const sinceLastVisit = {
  lastVisit: '14/08/2026 09:15',
  count: 3,
  items: [
    {
      id: 1,
      title: 'COMEX Silver Registered',
      value: '-8.2%',
      context: '5 phiên',
      badge: { label: 'Bất thường', tone: 'danger' as const },
    },
    {
      id: 2,
      title: 'SLV Holdings',
      value: '+2.4%',
      context: 'trong khi giá bạc -1.1%',
      badge: { label: 'Phân kỳ', tone: 'warning' as const },
    },
    {
      id: 3,
      title: 'COT Gold',
      value: 'Percentile 96%',
      context: 'Managed Money',
      badge: { label: 'Vị thế đông', tone: 'neutral' as const },
    },
  ],
};

// ============ EVIDENCE DRAWER CONTENT ============
export const evidenceContent: Record<number, {
  title: string;
  whatHappened: string;
  whyMatters: string;
  confirming: string;
  contradicting: string;
  watch: string;
  confidence: { label: string; tone: 'high' | 'medium' | 'low' };
  freshness: { source: string; value: string }[];
  sources: string;
}> = {
  1: {
    title: 'COMEX SILVER REGISTERED',
    whatHappened: 'Registered giảm 8.2% trong 5 phiên liên tiếp.',
    whyMatters: 'Mức thay đổi nằm trong nhóm hiếm so với lịch sử gần đây, thường đi kèm biến động thanh khoản vật chất.',
    confirming: 'SLV holdings đang tăng cùng thời điểm.',
    contradicting: 'COT chưa xác nhận mạnh, vị thế managed money đổi chậm.',
    watch: 'Registered có tiếp tục giảm hay chỉ là chuyển trạng thái giữa Eligible và Registered.',
    confidence: { label: 'Khá cao', tone: 'high' },
    freshness: [
      { source: 'COMEX', value: '1 ngày' },
      { source: 'SLV', value: 'hôm nay' },
      { source: 'COT', value: '4 ngày' },
    ],
    sources: 'CME / ETF / CFTC',
  },
  2: {
    title: 'SLV HOLDINGS DIVERGENCE',
    whatHappened: 'SLV holdings tăng 2.4% trong khi giá bạc giao ngay giảm 1.1%.',
    whyMatters: 'Phân kỳ giữa dòng vốn ETF và giá thường xuất hiện trước các đợt điều chỉnh xu hướng ngắn hạn.',
    confirming: 'COMEX Registered giảm cùng chiều với dòng tiền ETF tăng.',
    contradicting: 'Khối lượng giao dịch giao ngay chưa tăng tương ứng.',
    watch: 'Giá có bắt kịp xu hướng dòng vốn ETF trong các phiên tới.',
    confidence: { label: 'Trung bình', tone: 'medium' },
    freshness: [
      { source: 'SLV', value: 'hôm nay' },
      { source: 'Giá', value: '6 phút' },
    ],
    sources: 'ETF / Sàn giao ngay',
  },
  3: {
    title: 'COT GOLD — MANAGED MONEY',
    whatHappened: 'Vị thế Long của Managed Money đạt percentile 96% so với 3 năm gần nhất.',
    whyMatters: 'Vị thế quá đông một chiều thường làm tăng rủi ro biến động mạnh khi có tin bất ngờ.',
    confirming: 'Open Interest tăng đồng thời với Long percentile.',
    contradicting: 'Giá chưa có dấu hiệu quá nhiệt trên khung kỹ thuật.',
    watch: 'Báo cáo COT tuần tới có tiếp tục nghiêng thêm hay bắt đầu hạ nhiệt.',
    confidence: { label: 'Khá cao', tone: 'high' },
    freshness: [
      { source: 'COT', value: '4 ngày' },
      { source: 'Giá', value: '6 phút' },
    ],
    sources: 'CFTC',
  },
};

// ============ SMART INTELLIGENCE ALERTS ============
export const smartAlerts = [
  {
    id: 1,
    time: '14:20',
    title: 'Bạc xuất hiện 2 điều kiện đáng chú ý cùng lúc',
    points: [
      'COMEX Registered giảm nhanh',
      'SLV holdings tăng',
      'Giá chưa phản ứng tương ứng',
    ],
    badge: { label: 'Cần theo dõi', tone: 'warning' as const },
  },
  {
    id: 2,
    time: '10:30',
    title: 'XAU đang tiến gần vùng hội tụ kỹ thuật cao',
    points: ['Confluence Score 86/100', 'Vùng giá được nhiều yếu tố kỹ thuật trùng nhau'],
    badge: { label: 'Hội tụ cao', tone: 'success' as const },
  },
  {
    id: 3,
    time: '08:05',
    title: 'DXY suy yếu 3 phiên liên tiếp',
    points: ['Áp lực lên kim loại quý giảm dần', 'Chưa đủ để đổi chiều xu hướng chính'],
    badge: { label: 'Thông tin', tone: 'neutral' as const },
  },
];

// ============ FOOTPRINT — COMEX ============
export const comexFootprint = {
  goldRegistered: { value: '18.4M oz', d1: 0.3, w1: -1.2, m1: 2.1 },
  goldEligible: { value: '9.1M oz', d1: -0.1, w1: 0.8, m1: -0.6 },
  silverRegistered: { value: '31.2M oz', d1: -1.4, w1: -8.2, m1: -6.5 },
  silverEligible: { value: '248.7M oz', d1: -0.3, w1: -2.1, m1: 1.4 },
};

export const cotFootprint = {
  managedMoney: { long: 214300, short: 48200, net: 166100, pctOI: 38.2, percentile: 96 },
};

export const etfFootprint = {
  gld: { holdings: '872.4t', flow1w: '+2.1t', divergence: 'Giá và holdings cùng chiều' },
  slv: { holdings: '14,732.1t', flow1w: '+91.2t', divergence: 'Holdings tăng, giá giảm nhẹ' },
};

export const gdxFootprint = {
  gdx: { value: '+1.8%', vsSpot: 'Vượt trội so với spot' },
  gdxj: { value: '+2.6%', vsSpot: 'Vượt trội mạnh so với spot' },
};

export const lbmaFootprint = {
  note: 'Dữ liệu tháng — không realtime',
  vaultGold: '8,412 tấn',
  vaultSilver: '26,830 tấn',
  updated: '18 ngày trước',
};

export const centralBankFootprint = [
  { bank: 'Ngân hàng Trung ương Trung Quốc', action: 'Mua thêm', amount: '+9.5 tấn' },
  { bank: 'Ngân hàng Trung ương Ấn Độ', action: 'Mua thêm', amount: '+4.2 tấn' },
  { bank: 'Ngân hàng Trung ương Nga', action: 'Giữ nguyên', amount: '0 tấn' },
];

// ============ CONFLUENCE ============
export const confluence = {
  currentPrice: 4404.2,
  nearestZone: '4,380 – 4,420',
  distancePct: 0.4,
  score: 86,
  label: 'Hội tụ cao',
  overlays: ['MA50', 'MA200', 'Fibonacci 0.618', 'Trendline tăng từ 03/2026'],
};
