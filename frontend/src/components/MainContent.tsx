import { useState } from "react";
import ChatBox from "./ChatBox";
import CreateStrategy from "./CreateStrategy";
import Notifications from "./Notifications";
import StrategiesMd from "./StrategiesMd";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("learn");

  return (
    <main className="mx-auto px-4 py-8 container flex-1 flex">
      <div className="mx-auto max-w-6xl flex-1 flex flex-col">
        <div className="rounded-lg shadow-lg border border-slate-200 overflow-hidden flex-1 flex flex-col max-h-[calc(100vh-16rem)]">
          <div className="border-b border-slate-200 flex-shrink-0">
            <nav className="px-6 flex space-x-8">
              <button
                type="button"
                className={`border-b-2 py-4 px-2 font-medium text-sm ${
                  activeTab === "learn"
                    ? "border-slate-600 text-slate-600"
                    : "border-transparent hover:text-slate-700 text-slate-500"
                }`}
                onClick={() => setActiveTab("learn")}
              >
                Learn
              </button>
              <button
                type="button"
                className={`border-b-2 py-4 px-2 font-medium text-sm ${
                  activeTab === "trade"
                    ? "border-slate-600 text-slate-600"
                    : "border-transparent hover:text-slate-700 text-slate-500"
                }`}
                onClick={() => setActiveTab("trade")}
              >
                Trade
              </button>
              <button
                type="button"
                className={`border-b-2 py-4 px-2 font-medium text-sm ${
                  activeTab === "portfolio"
                    ? "border-slate-600 text-slate-600"
                    : "border-transparent hover:text-slate-700 text-slate-500"
                }`}
                onClick={() => setActiveTab("portfolio")}
              >
                Portfolio
              </button>
            </nav>
          </div>
          <div className="p-6 max-h-full">
            <div className="lg:grid-cols-2 h-full grid grid-cols-1 gap-8">
              {activeTab === "learn" && (
                <>
                  <StrategiesMd />
                  <ChatBox />
                </>
              )}
              {activeTab === "trade" && (
                <>
                  <CreateStrategy />
                  <Notifications />
                </>
              )}
              {activeTab === "portfolio" && (
                <div className="col-span-2 flex items-center justify-center h-full w-full">
                  <p className="text-xl font-semibold text-slate-700">
                    Portfolio
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
