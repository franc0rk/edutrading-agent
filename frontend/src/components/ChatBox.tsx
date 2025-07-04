const ChatBox = () => {
  return (
    <div className="h-full space-y-6 flex flex-col overflow-y-auto">
      <div className="bg-slate-50 rounded-lg p-6 flex flex-col">
        <div className="mb-4 flex-1 overflow-y-auto space-y-4">
          <div className="justify-end flex">
            <div className="lg:max-w-md px-4 py-2 rounded-lg bg-slate-600 text-white max-w-xs">
              <p className="text-sm">What's the best strategy for beginners?</p>
            </div>
          </div>
          <div className="justify-start flex">
            <div className="lg:max-w-md px-4 py-2 rounded-lg bg-white max-w-xs border border-slate-200">
              <p className="text-sm text-slate-700">
                For beginners, I recommend starting with a simple
                trend-following strategy using moving averages. It's easier to
                understand and implement while you learn the basics of risk
                management.
              </p>
            </div>
          </div>
          <div className="justify-end flex">
            <div className="lg:max-w-md px-4 py-2 rounded-lg bg-slate-600 text-white max-w-xs">
              <p className="text-sm">How do I set up stop losses?</p>
            </div>
          </div>
          <div className="justify-start flex">
            <div className="lg:max-w-md px-4 py-2 rounded-lg bg-white max-w-xs border border-slate-200">
              <p className="text-sm text-slate-700">
                Stop losses should be set at a level where your trade thesis is
                invalidated. A common approach is to place them 2-3% below your
                entry point for long positions, or use technical levels like
                support/resistance.
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Ask about trading strategies..."
            className="flex-1 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 placeholder-slate-400 px-4 py-2 rounded-lg bg-white text-slate-900"
          />
          <button
            type="submit"
            className="hover:bg-slate-700 transition-colors px-4 py-2 bg-slate-600 text-white rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
