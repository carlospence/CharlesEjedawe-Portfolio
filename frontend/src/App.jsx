import { useState } from "react";
import ClassicPortfolio from "./pages/ClassicPortfolio";
import ProPortfolio from "./pages/ProPortfolio";

function App() {
  const [portfolioStyle, setPortfolioStyle] = useState("pro"); // 'classic' or 'pro'

  if (portfolioStyle === "classic") {
    return (
      <div>
        <ClassicPortfolio />

        {/* Style Switcher */}
        <div className="fixed bottom-8 right-8 flex gap-4 z-50">
          <button
            onClick={() => setPortfolioStyle("pro")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition shadow-lg"
          >
            ← Pro Design
          </button>
        </div>
      </div>
    );
  }

  //   if (portfolioStyle === "classic") {
  //     return (
  //       <div>
  //         <ClassicPortfolio />

  //         {/* Style Switcher */}
  //         <div className="fixed bottom-8 right-8 flex gap-4 z-50">
  //           <button
  //             onClick={() => setPortfolioStyle("pro")}
  //             className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition shadow-lg"
  //           >
  //             Pro Design →
  //           </button>
  //         </div>
  //       </div>
  //     );
  //   }

  return (
    <div>
      <ProPortfolio />
      <button
        onClick={() => setPortfolioStyle("classic")}
        className="fixed bottom-8 right-8 px-6 py-3 bg-slate-900 text-emerald-400 border border-emerald-400/50 rounded-lg font-mono text-sm uppercase tracking-widest hover:bg-emerald-400/10 transition z-50"
      >
        Classic View →
      </button>
    </div>
  );
}

export default App;
