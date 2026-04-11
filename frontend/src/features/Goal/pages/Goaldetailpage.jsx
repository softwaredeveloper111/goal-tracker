import Navbar from "../components/Navbar";
import GoalDetailHeader from "../components/Goaldetailheader";
import GoalCalendar from "../components/Goalcalender";
import GoalHeatmap from "../components/Goalheatmap";

// Dummy data — replace with real API data
const goal = {
  _id: "1",
  title: "21 Days Consistency Challenge",
  targetDate: "2026-05-01",
  createdAt: "2026-04-11T04:42:13.593Z",
  status: "inprogress",
};

// Dummy checkins — replace with real API data
// Format: ["2026-04-11", "2026-04-12", ...]
const checkins = ["2026-04-11", "2026-04-13", "2026-04-14"];

export default function GoalDetailPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <main className="pt-24 pb-20 px-6 max-w-6xl mx-auto">

        {/* Header */}
        <GoalDetailHeader goal={goal} />

        {/* Calendar */}
        <GoalCalendar targetDate={goal.targetDate} checkins={checkins} />

        {/* Heatmap */}
        <GoalHeatmap createdAt={goal.createdAt} targetDate={goal.targetDate} checkins={checkins} />

      </main>

      {/* Edit FAB — bottom right */}
      <button className="fixed bottom-8 right-8 w-14 h-14 flex items-center justify-center rounded-full bg-[#00ff87] text-[#0a0a0a] shadow-[0_0_25px_rgba(0,255,135,0.4)] hover:shadow-[0_0_40px_rgba(0,255,135,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 z-50">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
      </button>
    </div>
  );
}