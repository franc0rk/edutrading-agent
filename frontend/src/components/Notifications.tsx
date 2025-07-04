const Notifications = () => {
  return (
    <div className="h-full space-y-6 flex flex-col overflow-y-auto">
      <div>
        <p className="text-xl font-semibold text-slate-800 mb-2">
          Notifications
        </p>
        <p className="text-slate-600 text-sm">
          Recent alerts and updates from your trading strategies.
        </p>
      </div>
      <div className="space-y-4 flex-1 overflow-y-auto">
        <div className="bg-slate-100 rounded-lg border border-slate-200 p-4">
          <p className="font-medium text-slate-800 mb-2">
            Strategy Alert: RSI Divergence Detected
          </p>
          <p className="text-slate-600 text-sm mb-3">
            A potential RSI divergence pattern has been identified on BTC/USD.
            Consider reviewing your position.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              High Priority
            </span>
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              BTC/USD
            </span>
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              RSI
            </span>
          </div>
        </div>
        <div className="bg-slate-100 rounded-lg border border-slate-200 p-4">
          <p className="font-medium text-slate-800 mb-2">
            Trade Executed Successfully
          </p>
          <p className="text-slate-600 text-sm mb-3">
            Your ETH/USD trade has been executed at the target price. Stop loss
            and take profit levels have been set.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              Success
            </span>
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              ETH/USD
            </span>
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              Executed
            </span>
          </div>
        </div>
        <div className="bg-slate-100 rounded-lg border border-slate-200 p-4">
          <p className="font-medium text-slate-800 mb-2">Market Update</p>
          <p className="text-slate-600 text-sm mb-3">
            High volatility detected in the crypto market. Consider adjusting
            your risk parameters for active strategies.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              Market Update
            </span>
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              Volatility
            </span>
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              Risk Alert
            </span>
          </div>
        </div>
        <div className="bg-slate-100 rounded-lg border border-slate-200 p-4">
          <p className="font-medium text-slate-800 mb-2">
            Strategy Performance Update
          </p>
          <p className="text-slate-600 text-sm mb-3">
            Your Pool strategy has achieved a 15% return this week. Performance
            metrics have been updated in your dashboard.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              Performance
            </span>
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              Pool Strategy
            </span>
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              Weekly Report
            </span>
          </div>
        </div>
        <div className="bg-slate-100 rounded-lg border border-slate-200 p-4">
          <p className="font-medium text-slate-800 mb-2">
            System Maintenance Notice
          </p>
          <p className="text-slate-600 text-sm mb-3">
            Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM
            UTC. Trading may be temporarily unavailable.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              Maintenance
            </span>
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              System
            </span>
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              Scheduled
            </span>
          </div>
        </div>
        <div className="bg-slate-100 rounded-lg border border-slate-200 p-4">
          <p className="font-medium text-slate-800 mb-2">
            Account Balance Update
          </p>
          <p className="text-slate-600 text-sm mb-3">
            Your account balance has been updated following recent trades. New
            balance: $15,432.67
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              Balance
            </span>
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              Account
            </span>
          </div>
        </div>
        <div className="bg-slate-100 rounded-lg border border-slate-200 p-4">
          <p className="font-medium text-slate-800 mb-2">
            New Feature Available
          </p>
          <p className="text-slate-600 text-sm mb-3">
            Advanced charting tools are now available in the Trade tab. Upgrade
            your analysis capabilities today.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              Feature
            </span>
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              Charts
            </span>
            <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
              New
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
