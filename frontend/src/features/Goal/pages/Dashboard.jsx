import Navbar from "../components/Navbar";
import GoalCard from "../components/Goalcard";
import FAB from "../components/Fab";
import BottomNav from "../components/Bottomnav";

const goals = [
  {
    id: 1,
    target: "23 Apr, 2026. 1.00AM",
    title: "Master Neural Architecture",
    description:
      "Architecting deep learning models from scratch using low-level tensor operations. Focus on performance optimization.",
    streak: 28,
   
  },
  {
    id: 2,
    target: "28 Apr, 2026. 12.00AM",
    title: "05:00 AM Velocity Training",
    description:
      "Optimizing physical output through consistent early-morning conditioning and metabolic threshold training.",
    streak: 14,

  },
  {
    id: 3,
    target: "1 May, 2026. 12.00PM",
    title: "Portfolio Algorithm Tuning",
    description:
      "Rebalancing assets toward high-growth technological sectors and decentralized infrastructure protocols.",
    streak: 5,
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">

      <Navbar />


      {/* Main Content — offset for sidebar on large screens */}
      <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto lg:ml-64">

        {/* Dashboard Header */}
        <header className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.05em] text-[#00ff87] mb-2 font-['Space_Grotesk']">
            Architect Mode Active
          </p>
          <h1 className="text-5xl font-black text-white font-['Space_Grotesk'] leading-tight tracking-tight mb-4">
            Current Streak: 14
          </h1>
          <div className="h-px w-32 bg-gradient-to-r from-[#00ff87] to-transparent opacity-50" />
        </header>

        {/* Goal Cards */}
        <div className="space-y-6">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      </main>

      <FAB />
      <BottomNav />
    </div>
  );
}