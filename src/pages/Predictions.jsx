import StressChart from "../components/StressChart";
import AIInsight from "../components/AIInsight";
import StressForecast from "../components/StressForecast";

export default function Predictions() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        📈 Predictions & Forecasting
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2">
          <StressChart />
        </div>

      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">

        <AIInsight />

        <StressForecast />

      </div>

    </div>
  );
}