const CreateStrategy = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xl font-semibold text-slate-800 mb-2">
          Create New Strategy
        </p>
        <p className="text-slate-600 text-sm">
          Configure your trading strategy with the parameters below to optimize
          your trading performance.
        </p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="text-sm font-medium text-slate-700 mb-2 block">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter strategy name"
            className="border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 placeholder-slate-400 w-full px-3 py-2 rounded-md shadow-sm bg-white text-slate-900"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700 mb-2 block">
            Type of Strategy
          </label>
          <select className="border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 w-full px-3 py-2 rounded-md shadow-sm bg-white text-slate-900">
            <option value="">Select strategy type</option>
            <option value="rsi-divergences">RSI Divergences</option>
            <option value="pool">Pool</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700 mb-2 block">
            Stop Loss
          </label>
          <input
            step="0.01"
            type="number"
            placeholder="0.00"
            className="border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 placeholder-slate-400 w-full px-3 py-2 rounded-md shadow-sm bg-white text-slate-900"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700 mb-2 block">
            Take Profit
          </label>
          <input
            step="0.01"
            type="number"
            placeholder="0.00"
            className="border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 placeholder-slate-400 w-full px-3 py-2 rounded-md shadow-sm bg-white text-slate-900"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700 mb-2 block">
            Max Duration of Trade
          </label>
          <input
            type="number"
            placeholder="Enter duration in minutes"
            className="border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 placeholder-slate-400 w-full px-3 py-2 rounded-md shadow-sm bg-white text-slate-900"
          />
        </div>
        <button
          type="submit"
          className="hover:bg-slate-700 transition duration-200 w-full bg-slate-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Create Strategy
        </button>
      </form>
    </div>
  );
};

export default CreateStrategy;
