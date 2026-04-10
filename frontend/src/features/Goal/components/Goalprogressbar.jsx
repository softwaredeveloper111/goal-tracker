// checkedDays = total days user ne check-in kiya (from CheckIn model)
// totalDays = targetDate - createdAt (total goal duration in days)
export default function GoalProgressBar({ checkedDays, totalDays }) {
  const percentage = Math.min(Math.round((checkedDays / totalDays) * 100), 100);

  return (
    <div className="mt-3 w-36">
      {/* Numbers */}
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[10px] text-[#555] font-['Space_Grotesk'] uppercase tracking-widest">
          Progress
        </span>
        <span className="text-[10px] text-[#00ff87]/70 font-['Space_Grotesk']">
          {checkedDays}
          <span className="text-[#444]"> / </span>
          {totalDays}
        </span>
      </div>

      {/* Bar */}
      <div className="w-full h-[5px] bg-[#1f1f1f] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#00ff87] rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="text-right text-[9px] text-[#444] mt-1 font-['Space_Grotesk']">
        {percentage}%
      </p>
    </div>
  );
}