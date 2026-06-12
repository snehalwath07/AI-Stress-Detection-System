import { useEffect, useState } from "react";

export default function HistoryTable() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/history"
        );

        const data = await response.json();

        setHistory(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800">

      <h2 className="text-xl font-semibold mb-4">
        📊 Assessment History
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="pb-3">Date</th>
              <th className="pb-3">Stress</th>
              <th className="pb-3">Sleep</th>
              <th className="pb-3">Work</th>
            </tr>
          </thead>

          <tbody>

            {history.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-800"
              >
                <td className="py-3">
                  {item.date}
                </td>

                <td className="py-3">
                  {item.stress_level}
                </td>

                <td className="py-3">
                  {item.sleep}
                </td>

                <td className="py-3">
                  {item.work}
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}