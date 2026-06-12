import { useEffect, useState } from "react";
import { getLatestAssessment } from "../api/dashboardApi";

import Header from "../components/Header";
import MetricCard from "../components/MetricCard";

import RecentActivity from "../components/RecentActivity";
import HistoryTable from "../components/HistoryTable";
import WellnessBadges from "../components/WellnessBadges";
import WellnessStreak from "../components/WellnessStreak";

export default function Dashboard() {
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

      <Header />

      {/* Top Metrics */}
      <div className="grid grid-cols-4 gap-6">

        <MetricCard
          title="Stress Level"
          value={latest?.stress_level || "--"}
          subtitle="Latest Assessment"
        />

        <MetricCard
          title="Sleep Hours"
          value={latest?.sleep || "--"}
          subtitle="Latest Sleep Data"
        />

        <MetricCard
          title="Working Hours"
          value={latest?.work || "--"}
          subtitle="Latest Work Data"
        />

        <MetricCard
          title="Mood Score"
          value={latest?.mood || "--"}
          subtitle="Latest Mood Data"
        />

        <MetricCard
          title="Screen Time"
          value={latest?.screen || "--"}
          subtitle="Latest Screen Data"
        />

        <MetricCard
          title="Water Intake"
          value={latest?.water || "--"}
          subtitle="Latest Water Data"
        />

        <MetricCard
          title="Exercise Hours"
          value={latest?.exercise || "--"}
          subtitle="Latest Exercise Data"
        />

        <MetricCard
          title="Social Interaction"
          value={latest?.social || "--"}
          subtitle="Latest Social Data"
        />

      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <RecentActivity />
      </div>

      {/* History */}
      <div className="mt-8">
        <HistoryTable />
      </div>

      {/* Wellness Badges */}
      <div className="mt-8">
        <WellnessBadges />
      </div>

      {/* Wellness Streak */}
      <div className="mt-8">
        <WellnessStreak />
      </div>

    </div>
  );
}