import { MarketInstrument, Candle } from '../types';

export const MARKET_INSTRUMENTS: MarketInstrument[] = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    assetClass: 'Equities',
    currentPrice: 228.45,
    change24h: 3.25,
    changePercent24h: 1.44,
    high24h: 229.80,
    low24h: 224.50,
    volume24h: 48920000,
    baseCurrency: 'AAPL',
    quoteCurrency: 'USD',
    pipSize: 0.01,
    description: 'Global consumer technology leader in personal computing, smartphones, wearable devices, and digital subscription services.'
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    assetClass: 'Equities',
    currentPrice: 124.80,
    change24h: -1.75,
    changePercent24h: -1.38,
    high24h: 127.40,
    low24h: 123.10,
    volume24h: 68140000,
    baseCurrency: 'NVDA',
    quoteCurrency: 'USD',
    pipSize: 0.01,
    description: 'Pioneer of GPU-accelerated computing and dominant architecture for artificial intelligence and datacenter infrastructure.'
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    assetClass: 'Equities',
    currentPrice: 218.60,
    change24h: 6.80,
    changePercent24h: 3.21,
    high24h: 221.50,
    low24h: 211.20,
    volume24h: 54100000,
    baseCurrency: 'TSLA',
    quoteCurrency: 'USD',
    pipSize: 0.01,
    description: 'Electric vehicle manufacturing, battery energy storage systems, and autonomous robotics development.'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    assetClass: 'Equities',
    currentPrice: 422.30,
    change24h: 2.10,
    changePercent24h: 0.50,
    high24h: 425.00,
    low24h: 419.80,
    volume24h: 21300000,
    baseCurrency: 'MSFT',
    quoteCurrency: 'USD',
    pipSize: 0.01,
    description: 'Global cloud computing provider (Azure), enterprise productivity software (Office 365), and gaming.'
  },
  {
    symbol: 'BTC/USD',
    name: 'Bitcoin',
    assetClass: 'Crypto',
    currentPrice: 64250.00,
    change24h: 1420.00,
    changePercent24h: 2.26,
    high24h: 64800.00,
    low24h: 62500.00,
    volume24h: 28400000000,
    baseCurrency: 'BTC',
    quoteCurrency: 'USD',
    pipSize: 0.5,
    description: 'Decentralized peer-to-peer digital monetary network and store-of-value benchmark with fixed 21M supply cap.'
  },
  {
    symbol: 'ETH/USD',
    name: 'Ethereum',
    assetClass: 'Crypto',
    currentPrice: 2640.50,
    change24h: -32.50,
    changePercent24h: -1.22,
    high24h: 2695.00,
    low24h: 2610.00,
    volume24h: 14200000000,
    baseCurrency: 'ETH',
    quoteCurrency: 'USD',
    pipSize: 0.1,
    description: 'Smart-contract computational platform powering decentralized finance, rollups, and digital asset protocols.'
  },
  {
    symbol: 'SOL/USD',
    name: 'Solana',
    assetClass: 'Crypto',
    currentPrice: 152.80,
    change24h: 5.40,
    changePercent24h: 3.66,
    high24h: 156.20,
    low24h: 146.50,
    volume24h: 3100000000,
    baseCurrency: 'SOL',
    quoteCurrency: 'USD',
    pipSize: 0.05,
    description: 'High-throughput layer-1 blockchain engineered for sub-second settlement and ultra-low transaction costs.'
  },
  {
    symbol: 'EUR/USD',
    name: 'Euro / US Dollar',
    assetClass: 'Forex',
    currentPrice: 1.0875,
    change24h: 0.0018,
    changePercent24h: 0.17,
    high24h: 1.0895,
    low24h: 1.0842,
    volume24h: 420000000000,
    baseCurrency: 'EUR',
    quoteCurrency: 'USD',
    pipSize: 0.0001,
    description: 'The world\'s most heavily traded foreign exchange currency pair representing European and US central bank policy differential.'
  },
  {
    symbol: 'USD/JPY',
    name: 'US Dollar / Japanese Yen',
    assetClass: 'Forex',
    currentPrice: 149.25,
    change24h: -0.45,
    changePercent24h: -0.30,
    high24h: 150.10,
    low24h: 148.80,
    volume24h: 290000000000,
    baseCurrency: 'USD',
    quoteCurrency: 'JPY',
    pipSize: 0.01,
    description: 'Key Asian-Pacific macro FX pair sensitive to Federal Reserve and Bank of Japan yield curve control dynamics.'
  },
  {
    symbol: 'XAU/USD',
    name: 'Gold (Ounce)',
    assetClass: 'Commodities',
    currentPrice: 2654.20,
    change24h: 18.60,
    changePercent24h: 0.71,
    high24h: 2665.00,
    low24h: 2632.00,
    volume24h: 48000000000,
    baseCurrency: 'XAU',
    quoteCurrency: 'USD',
    pipSize: 0.1,
    description: 'The ancient store-of-value commodity, hedge against monetary debasement and geopolitical uncertainty.'
  },
  {
    symbol: 'WTI/USD',
    name: 'Crude Oil (Barrel)',
    assetClass: 'Commodities',
    currentPrice: 74.80,
    change24h: -1.20,
    changePercent24h: -1.58,
    high24h: 76.40,
    low24h: 73.90,
    volume24h: 32000000000,
    baseCurrency: 'WTI',
    quoteCurrency: 'USD',
    pipSize: 0.01,
    description: 'West Texas Intermediate crude oil benchmark reflective of global energy demand and OPEC+ production quotas.'
  }

  // Indian equities and indices — illustrative practice-mode seed prices, not live quotes
  { symbol: 'TCS', name: 'Tata Consultancy Services', assetClass: 'Equities', currentPrice: 4125, change24h: 28.5, changePercent24h: 0.70, high24h: 4160, low24h: 4080, volume24h: 1250000, baseCurrency: 'TCS', quoteCurrency: 'INR', pipSize: 0.05, description: 'Indian IT services company. Practice-mode seed price; not a live quote.' },
  { symbol: 'RELIANCE', name: 'Reliance Industries', assetClass: 'Equities', currentPrice: 1450, change24h: -8.5, changePercent24h: -0.58, high24h: 1472, low24h: 1438, volume24h: 5200000, baseCurrency: 'RELIANCE', quoteCurrency: 'INR', pipSize: 0.05, description: 'Diversified Indian energy, retail and telecom company. Practice-mode seed price.' },
  { symbol: 'HDFCBANK', name: 'HDFC Bank', assetClass: 'Equities', currentPrice: 1685, change24h: 12, changePercent24h: 0.72, high24h: 1698, low24h: 1668, volume24h: 4300000, baseCurrency: 'HDFCBANK', quoteCurrency: 'INR', pipSize: 0.05, description: 'Major Indian private-sector bank. Practice-mode seed price.' },
  { symbol: 'ICICIBANK', name: 'ICICI Bank', assetClass: 'Equities', currentPrice: 1280, change24h: 7.5, changePercent24h: 0.59, high24h: 1292, low24h: 1268, volume24h: 3900000, baseCurrency: 'ICICIBANK', quoteCurrency: 'INR', pipSize: 0.05, description: 'Major Indian private-sector bank. Practice-mode seed price.' },
  { symbol: 'INFY', name: 'Infosys', assetClass: 'Equities', currentPrice: 1525, change24h: -11, changePercent24h: -0.72, high24h: 1548, low24h: 1510, volume24h: 2800000, baseCurrency: 'INFY', quoteCurrency: 'INR', pipSize: 0.05, description: 'Indian IT consulting company. Practice-mode seed price.' },
  { symbol: 'ITC', name: 'ITC Limited', assetClass: 'Equities', currentPrice: 430, change24h: 2.1, changePercent24h: 0.49, high24h: 434, low24h: 426, volume24h: 6100000, baseCurrency: 'ITC', quoteCurrency: 'INR', pipSize: 0.05, description: 'Indian consumer goods company. Practice-mode seed price.' },
  { symbol: 'SBIN', name: 'State Bank of India', assetClass: 'Equities', currentPrice: 790, change24h: 5.25, changePercent24h: 0.67, high24h: 798, low24h: 781, volume24h: 5500000, baseCurrency: 'SBIN', quoteCurrency: 'INR', pipSize: 0.05, description: 'Major Indian public-sector bank. Practice-mode seed price.' },
  { symbol: 'BHARTIARTL', name: 'Bharti Airtel', assetClass: 'Equities', currentPrice: 1840, change24h: 14, changePercent24h: 0.77, high24h: 1855, low24h: 1818, volume24h: 1700000, baseCurrency: 'BHARTIARTL', quoteCurrency: 'INR', pipSize: 0.05, description: 'Indian telecom provider. Practice-mode seed price.' },
  { symbol: 'LT', name: 'Larsen & Toubro', assetClass: 'Equities', currentPrice: 3580, change24h: -16, changePercent24h: -0.45, high24h: 3625, low24h: 3550, volume24h: 850000, baseCurrency: 'LT', quoteCurrency: 'INR', pipSize: 0.05, description: 'Indian engineering and infrastructure group. Practice-mode seed price.' },
  { symbol: 'AXISBANK', name: 'Axis Bank', assetClass: 'Equities', currentPrice: 1185, change24h: 6, changePercent24h: 0.51, high24h: 1198, low24h: 1172, volume24h: 2200000, baseCurrency: 'AXISBANK', quoteCurrency: 'INR', pipSize: 0.05, description: 'Indian private-sector bank. Practice-mode seed price.' },
  { symbol: 'TATAMOTORS', name: 'Tata Motors', assetClass: 'Equities', currentPrice: 675, change24h: -4.5, changePercent24h: -0.66, high24h: 688, low24h: 668, volume24h: 3600000, baseCurrency: 'TATAMOTORS', quoteCurrency: 'INR', pipSize: 0.05, description: 'Indian automotive manufacturer. Practice-mode seed price.' },
  { symbol: 'MARUTI', name: 'Maruti Suzuki India', assetClass: 'Equities', currentPrice: 12400, change24h: 95, changePercent24h: 0.77, high24h: 12520, low24h: 12280, volume24h: 210000, baseCurrency: 'MARUTI', quoteCurrency: 'INR', pipSize: 0.05, description: 'Indian passenger vehicle maker. Practice-mode seed price.' },
  { symbol: 'SUNPHARMA', name: 'Sun Pharmaceutical', assetClass: 'Equities', currentPrice: 1760, change24h: 9, changePercent24h: 0.51, high24h: 1778, low24h: 1740, volume24h: 900000, baseCurrency: 'SUNPHARMA', quoteCurrency: 'INR', pipSize: 0.05, description: 'Indian pharmaceutical company. Practice-mode seed price.' },
  { symbol: 'NIFTY50', name: 'Nifty 50 Index', assetClass: 'Indices', currentPrice: 25150, change24h: 125, changePercent24h: 0.50, high24h: 25280, low24h: 24980, volume24h: 0, baseCurrency: 'NIFTY50', quoteCurrency: 'INR', pipSize: 0.05, description: 'NSE benchmark index. Illustrative practice-mode index level; not live data.' },
  { symbol: 'BANKNIFTY', name: 'Nifty Bank Index', assetClass: 'Indices', currentPrice: 54200, change24h: -180, changePercent24h: -0.33, high24h: 54600, low24h: 53900, volume24h: 0, baseCurrency: 'BANKNIFTY', quoteCurrency: 'INR', pipSize: 0.05, description: 'Banking sector index. Illustrative practice-mode level; not live data.' },
  { symbol: 'FINNIFTY', name: 'Nifty Financial Services Index', assetClass: 'Indices', currentPrice: 25800, change24h: 85, changePercent24h: 0.33, high24h: 25950, low24h: 25650, volume24h: 0, baseCurrency: 'FINNIFTY', quoteCurrency: 'INR', pipSize: 0.05, description: 'Financial services index. Illustrative practice-mode level; not live data.' },
  { symbol: 'SENSEX', name: 'BSE Sensex Index', assetClass: 'Indices', currentPrice: 82300, change24h: 210, changePercent24h: 0.26, high24h: 82600, low24h: 81950, volume24h: 0, baseCurrency: 'SENSEX', quoteCurrency: 'INR', pipSize: 0.05, description: 'BSE benchmark index. Illustrative practice-mode level; not live data.' },
  { symbol: 'MIDCPNIFTY', name: 'Nifty Midcap Select Index', assetClass: 'Indices', currentPrice: 12850, change24h: 48, changePercent24h: 0.37, high24h: 12920, low24h: 12770, volume24h: 0, baseCurrency: 'MIDCPNIFTY', quoteCurrency: 'INR', pipSize: 0.05, description: 'Nifty midcap select index. Illustrative practice-mode level; not live data.' },
]; 

// Generate deterministic realistic candles for any instrument
export function generateSeedCandles(basePrice: number, count: number = 80, volatility: number = 0.012): Candle[] {
  const candles: Candle[] = [];
  let price = basePrice * 0.94; // start a bit lower
  const now = Date.now();
  const intervalMs = 15 * 60 * 1000; // 15 min default
  let time = now - count * intervalMs;

  for (let i = 0; i < count; i++) {
    const trendFactor = Math.sin(i / 10) * 0.003 + (i / count) * 0.008;
    const randomShock = (Math.random() - 0.49) * volatility;
    const changePercent = trendFactor + randomShock;

    const open = price;
    const close = Math.max(open * (1 + changePercent), open * 0.98);
    const high = Math.max(open, close) * (1 + Math.random() * volatility * 0.7);
    const low = Math.min(open, close) * (1 - Math.random() * volatility * 0.7);
    const baseVolume = basePrice > 1000 ? 50 : 25000;
    const volume = Math.round(baseVolume * (0.6 + Math.random() * 0.8 + Math.abs(changePercent) * 20));

    candles.push({
      time: time + i * intervalMs,
      open: Number(open.toFixed(2)),
      high: Number(high.toFixed(2)),
      low: Number(low.toFixed(2)),
      close: Number(close.toFixed(2)),
      volume
    });

    price = close;
  }

  // Ensure last candle matches current price closely
  const last = candles[candles.length - 1];
  if (last) {
    const factor = basePrice / last.close;
    candles.forEach((c) => {
      c.open = Number((c.open * factor).toFixed(2));
      c.high = Number((c.high * factor).toFixed(2));
      c.low = Number((c.low * factor).toFixed(2));
      c.close = Number((c.close * factor).toFixed(2));
    });
  }

  return candles;
}

// Indicator Calculation Helpers
export function calculateSMA(candles: Candle[], period: number = 20): (number | null)[] {
  const result: (number | null)[] = [];
  for (let i = 0; i < candles.length; i++) {
    if (i < period - 1) {
      result.push(null);
    } else {
      let sum = 0;
      for (let j = 0; j < period; j++) {
        sum += candles[i - j].close;
      }
      result.push(Number((sum / period).toFixed(2)));
    }
  }
  return result;
}

export function calculateEMA(candles: Candle[], period: number = 20): (number | null)[] {
  const result: (number | null)[] = [];
  const k = 2 / (period + 1);
  let previousEMA: number | null = null;

  for (let i = 0; i < candles.length; i++) {
    if (i < period - 1) {
      result.push(null);
    } else if (i === period - 1) {
      let sum = 0;
      for (let j = 0; j < period; j++) sum += candles[i - j].close;
      previousEMA = sum / period;
      result.push(Number(previousEMA.toFixed(2)));
    } else {
      const currentPrice: number = candles[i].close;
      const prev: number = previousEMA !== null ? previousEMA : currentPrice;
      const currentVal: number = currentPrice * k + prev * (1 - k);
      previousEMA = currentVal;
      result.push(Number(currentVal.toFixed(2)));
    }
  }
  return result;
}

export function calculateRSI(candles: Candle[], period: number = 14): (number | null)[] {
  const result: (number | null)[] = [];
  if (candles.length <= period) return candles.map(() => null);

  let gains = 0;
  let losses = 0;

  for (let i = 1; i <= period; i++) {
    const diff = candles[i].close - candles[i - 1].close;
    if (diff >= 0) gains += diff;
    else losses += Math.abs(diff);
  }

  let avgGain = gains / period;
  let avgLoss = losses / period;

  for (let i = 0; i < period; i++) {
    result.push(null);
  }

  const initialRS = avgLoss === 0 ? 100 : avgGain / avgLoss;
  result.push(Number((100 - 100 / (1 + initialRS)).toFixed(1)));

  for (let i = period + 1; i < candles.length; i++) {
    const diff = candles[i].close - candles[i - 1].close;
    const currentGain = diff > 0 ? diff : 0;
    const currentLoss = diff < 0 ? Math.abs(diff) : 0;

    avgGain = (avgGain * (period - 1) + currentGain) / period;
    avgLoss = (avgLoss * (period - 1) + currentLoss) / period;

    if (avgLoss === 0) {
      result.push(100);
    } else {
      const rs = avgGain / avgLoss;
      result.push(Number((100 - 100 / (1 + rs)).toFixed(1)));
    }
  }

  return result;
}

export function calculateBollingerBands(candles: Candle[], period: number = 20, multiplier: number = 2) {
  const sma = calculateSMA(candles, period);
  const upper: (number | null)[] = [];
  const lower: (number | null)[] = [];

  for (let i = 0; i < candles.length; i++) {
    const mid = sma[i];
    if (mid === null) {
      upper.push(null);
      lower.push(null);
    } else {
      let sumSquares = 0;
      for (let j = 0; j < period; j++) {
        sumSquares += Math.pow(candles[i - j].close - mid, 2);
      }
      const stdDev = Math.sqrt(sumSquares / period);
      upper.push(Number((mid + multiplier * stdDev).toFixed(2)));
      lower.push(Number((mid - multiplier * stdDev).toFixed(2)));
    }
  }

  return { middle: sma, upper, lower };
}
