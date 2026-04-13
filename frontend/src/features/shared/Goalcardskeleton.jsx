export default function GoalCardSkeleton() {
  return (
    <div className="relative bg-[#1a1a1a] p-8 animate-pulse">

      {/* Top — target date */}
      <div className="h-3 w-36 bg-[#262626] rounded mb-4" />

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">

        {/* Left */}
        <div className="flex-1 space-y-3">
          {/* Title */}
          <div className="h-6 w-2/3 bg-[#262626] rounded" />
          {/* Description line 1 */}
          <div className="h-4 w-full bg-[#262626] rounded" />
          {/* Description line 2 */}
          <div className="h-4 w-4/5 bg-[#262626] rounded" />
        </div>

        {/* Right — streak + progress */}
        <div className="flex flex-col items-end gap-3 shrink-0">
          {/* Streak number */}
          <div className="w-20 h-10 bg-[#262626] rounded" />
          {/* Progress label */}
          <div className="w-24 h-3 bg-[#262626] rounded" />
          {/* Progress bar */}
          <div className="w-36 h-[5px] bg-[#262626] rounded-full" />
          {/* Percentage */}
          <div className="w-8 h-3 bg-[#262626] rounded" />
        </div>

      </div>
    </div>
  );
}