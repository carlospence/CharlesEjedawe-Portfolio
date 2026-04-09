import { useState } from "react";
import ClassicPortfolio from "./pages/ClassicPortfolio";
import ProPortfolio from "./pages/ProPortfolio";
import ClassicPortfolioAPI from "./pages/ClassicPortfolioAPI";
import ProPortfolioAPI from "./pages/ProPortfolioAPI";

function App() {
  const [portfolioStyle, setPortfolioStyle] = useState("pro"); // 'classic' or 'pro'
  const [dataSource, setDataSource] = useState("api"); // 'local' or 'api'

  if (portfolioStyle === "classic") {
    return (
      <div>
        {dataSource === "api" ? <ClassicPortfolioAPI /> : <ClassicPortfolio />}

        {/* Style & Data Source Switcher */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
          <button
            onClick={() => setPortfolioStyle("pro")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition shadow-lg"
          >
            ← Pro Design
          </button>
          <button
            onClick={() =>
              setDataSource(dataSource === "local" ? "api" : "local")
            }
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold text-sm transition shadow-lg"
          >
            {dataSource === "local" ? "Use API Data" : "Use Local Data"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {dataSource === "api" ? <ProPortfolioAPI /> : <ProPortfolio />}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
        <button
          onClick={() => setPortfolioStyle("classic")}
          className="px-6 py-3 bg-slate-900 text-emerald-400 border border-emerald-400/50 rounded-lg font-mono text-sm uppercase tracking-widest hover:bg-emerald-400/10 transition"
        >
          Classic View →
        </button>
        <button
          onClick={() =>
            setDataSource(dataSource === "local" ? "api" : "local")
          }
          className="px-6 py-3 bg-slate-800 text-emerald-400 border border-emerald-400/50 rounded-lg font-mono text-sm uppercase tracking-widest hover:bg-emerald-400/10 transition"
        >
          {dataSource === "local" ? "Use API Data" : "Use Local Data"}
        </button>
      </div>
    </div>
  );
}

export default App;
