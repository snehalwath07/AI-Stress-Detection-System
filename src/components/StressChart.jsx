import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { getHistory } from "../api/historyApi";

export default function StressChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const history = await getHistory();

        const formatted = history.map((item, index) => ({
          assessment: `#${index + 1}`,
          stress:
            item.stress_level === "Low"
              ? 30
              : item.stress_level === "Moderate"
              ? 60
              : 90,
        }));

        setChartData(formatted);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="bg-[#1A1F2E] p-6 rounded-xl h-[350px]">
      <h2 className="text-xl font-bold mb-4 text-white">
        📈 Stress Trend
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="assessment" />

          <YAxis
            domain={[0, 100]}
            ticks={[30, 60, 90]}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "1px solid #374151",
              borderRadius: "10px",
            }}
          />

          <Line
            type="monotone"
            dataKey="stress"
            stroke="#EF4444"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}