
import GoalProgressBar from "./GoalProgressBar"
import {formatDate , calcTotalDays} from "../utils/Dateutil"
import { Link } from "react-router-dom";
import DeleteGoalButton from "./Deletegoalbutton";



// goal prop shape:
// { id, category, target, title, description, streak, grid[] }
export default function GoalCard({ goal }) {

 const totalDays = calcTotalDays(goal.createdAt, goal.targetDate);

  return (
    <Link to={`/goals/${goal._id}`} className=" block group relative bg-[#1a1a1a] p-8 transition-all duration-300 hover:bg-[#1f1f1f] cursor-pointer">

      {/* Left accent bar — animates on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#00ff87] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">

        {/* Left — Goal Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">

            <span className="text-[11px] uppercase tracking-[0.05em] text-[#555] text-red-400 drop-shadow-[0_0_6px_rgba(248,113,113,0.8)]  font-['Space_Grotesk']">
              Target Date: {formatDate(goal.targetDate)}
            </span>
          </div>
          <h3 className="text-2xl font-black text-white font-['Space_Grotesk'] mb-3">
            {goal.title}
          </h3>
          <p className="text-sm text-[#555] leading-relaxed max-w-xl font-['Inter']">
            {goal.description}
          </p>
        </div>

        {/* Right — Streak Counter */}
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 bg-[#0e0e0e] px-4 py-2 border border-[#00ff87]/10">
            {/* Fire icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#00ff87">
              <path d="M12 2C9.5 6 7 8.5 7 12a5 5 0 0010 0c0-2-1-4-2-5-1 2-2 3-3 3s-1-2 0-8z"/>
            </svg>
            <span className="text-2xl font-black text-[#00ff87] font-['Space_Grotesk']">
              {String(goal.checkedDays ?? 0).padStart(2, "0")}
              
              <GoalProgressBar checkedDays={goal.checkedDays ?? 0 }  totalDays={totalDays} />
            </span>
          </div>
        </div>
         

      </div>

                             
            <div className="absolute  top-1 right-1">
  <DeleteGoalButton onConfirm={() => {}} />
</div>


    </Link>
  );
}