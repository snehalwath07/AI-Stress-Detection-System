import ReportDownload from "../components/ReportDownload";
import { useEffect, useState } from "react";
import { getLatestAssessment } from "../api/dashboardApi";

export default function Reports() {
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const data = await getLatestAssessment();
        setLatest(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLatest();
  }, []);

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        📄 Reports
      </h1>

      <div className="bg-[#1A1F2E] p-6 rounded-2xl border border-gray-800">

        <h2 className="text-2xl font-semibold mb-4">
          Latest Assessment Report
        </h2>

        <p className="mb-2">
          Stress Level:{" "}
          <span className="font-bold">
            {latest?.stress_level || "--"}
          </span>
        </p>

        <p className="mb-6">
          Sleep Hours:{" "}
          <span className="font-bold">
            {latest?.sleep || "--"}
          </span>
        </p>

        <ReportDownload latest={latest} />

      </div>

    </div>
  );
}