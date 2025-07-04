import { useState } from "react";

const StrategiesMd = () => {
  const [selectedStrategy, setSelectedStrategy] = useState("");
  const strategyLabels: Record<string, string> = {
    "": "Select strategy type",
    "rsi-divergences": "RSI Divergences",
    pool: "Pool",
  };

  return (
    <div className="space-y-6">
      <div className="prose prose-slate max-w-none">
        <div>
          <p className="text-xl font-semibold text-slate-800 mb-2">
            Learn Trading Strategies
          </p>
          <p className="text-slate-600 text-sm">
            Explore and deepen your understanding of trading strategies to
            become a more confident and successful trader.
          </p>
          <select
            className="border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 w-full px-3 py-2 rounded-md shadow-sm bg-white text-slate-900 mt-3"
            value={selectedStrategy}
            onChange={(e) => setSelectedStrategy(e.target.value)}
          >
            {Object.entries(strategyLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        {selectedStrategy && (
          <div>
            <p className="text-xl font-bold text-slate-800 my-4">
              {strategyLabels[selectedStrategy]}
            </p>
            <p className="text-lg font-semibold text-slate-700 mb-3">
              1. Trend Following Strategy
            </p>
            <p className="text-slate-600 mb-4">
              This strategy involves identifying and following market trends.
              Key indicators include moving averages, MACD, and RSI. The goal is
              to enter positions in the direction of the prevailing trend.
            </p>
            <p className="text-lg font-semibold text-slate-700 mb-3">
              2. Mean Reversion Strategy
            </p>
            <p className="text-slate-600 mb-4">
              Based on the assumption that prices will revert to their
              historical average. This strategy works well in ranging markets
              and uses indicators like Bollinger Bands and RSI.
            </p>
            <p className="text-lg font-semibold text-slate-700 mb-3">
              3. Momentum Trading
            </p>
            <p className="text-slate-600 mb-4">
              Focuses on stocks or assets that are moving significantly in one
              direction with high volume. Traders look for breakouts and strong
              price movements.
            </p>
            <p className="text-lg font-semibold text-slate-700 mb-3">
              Risk Management
            </p>
            <ul className="text-slate-600 mb-4 list-disc list-inside">
              <li>Always use stop-loss orders</li>
              <li>Never risk more than 2% of your capital per trade</li>
              <li>Diversify your portfolio</li>
              <li>Keep a trading journal</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StrategiesMd;
