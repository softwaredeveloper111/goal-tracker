import { formatDate } from "../utils/Dateutil";
import { calcDaysLeft } from "../utils/Dateutil";


export default function GoalDetailHeader({ goal }) {

  

  const daysLeft = calcDaysLeft(goal?.targetDate);
  const isOverdue = daysLeft < 0;
  const isToday = daysLeft === 0;

  return (
    <header className="mb-12">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">

        {/* Left — Status badge + Title */}
        <div>
          <div className="flex items-center gap-3 mb-4">

            {/* Active/Overdue badge */}
            <span className={`px-3 py-1 text-[10px] uppercase tracking-widest font-['Space_Grotesk'] border ${
              isOverdue
                ? "bg-red-500/10 text-red-400 border-red-500/20"
                : "bg-[#00ff87]/10 text-[#00ff87] border-[#00ff87]/20"
            }`}>
              {isOverdue ? "Overdue" : "Active Operation"}
            </span>

            {/* Days left badge */}
            <span className={`px-4 py-1 text-[10px] font-black uppercase tracking-tight font-['Space_Grotesk'] shadow-lg ${
              isOverdue
                ? "bg-red-500 text-white shadow-red-500/20"
                : isToday
                ? "bg-yellow-400 text-black shadow-yellow-400/20"
                : "bg-[#00ff87] text-[#0a0a0a] shadow-[#00ff87]/20"
            }`}>
              {isOverdue
                ? `${Math.abs(daysLeft)} days overdue`
                : isToday
                ? "Due today"
                : `${daysLeft} days left`}
            </span>
          </div>

          {/* Goal Title */}
          <h1 className="text-5xl md:text-6xl font-black text-white font-['Space_Grotesk'] tracking-tighter leading-none uppercase">
            {goal?.title}
          </h1>
        </div>

        {/* Right — Target date */}
        <div className="flex flex-col items-start md:items-end shrink-0">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-1 font-['Space_Grotesk']">
            Target Completion
          </p>
          <p className="text-2xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            {formatDate(goal?.targetDate)}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 h-px w-full bg-gradient-to-r from-[#00ff87]/20 via-[#00ff87]/5 to-transparent" />
    </header>
  );
}