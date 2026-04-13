export default function GoalDetailSkeleton() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white animate-pulse">

      {/* Header Section */}
      <div className="pt-24 pb-8 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">

          {/* Left */}
          <div className="flex-1">
            {/* Badges */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-32 bg-[#1a1a1a] rounded" />
              <div className="h-6 w-24 bg-[#1a1a1a] rounded" />
            </div>
            {/* Title */}
            <div className="h-14 w-3/4 bg-[#1a1a1a] rounded mb-2" />
            <div className="h-14 w-1/2 bg-[#1a1a1a] rounded" />
          </div>

          {/* Right — target date + mark as complete */}
          <div className="flex flex-col items-end gap-3 shrink-0">
            <div className="h-3 w-28 bg-[#1a1a1a] rounded" />
            <div className="h-8 w-36 bg-[#1a1a1a] rounded" />
            <div className="h-9 w-40 bg-[#1a1a1a] rounded" />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#1a1a1a]" />
      </div>

      {/* Calendar Section */}
      <div className="px-6 max-w-6xl mx-auto mb-10">
        <div className="bg-[#111] border border-[#1a1a1a] p-8">

          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="h-6 w-32 bg-[#1a1a1a] rounded" />
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-[#1a1a1a] rounded" />
              <div className="w-8 h-8 bg-[#1a1a1a] rounded" />
            </div>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 mb-2 gap-px">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="h-4 bg-[#1a1a1a] rounded mx-2" />
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-px bg-[#1a1a1a]">
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i} className="bg-[#0e0e0e] h-20" />
            ))}
          </div>
        </div>
      </div>

      {/* Heatmap Section */}
      <div className="px-6 max-w-6xl mx-auto">
        <div className="bg-[#111] border border-[#1a1a1a] p-8">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="h-6 w-36 bg-[#1a1a1a] rounded mb-2" />
              <div className="h-3 w-48 bg-[#1a1a1a] rounded" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-8 bg-[#1a1a1a] rounded" />
              <div className="flex gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-[#1a1a1a]" />
                ))}
              </div>
              <div className="h-3 w-8 bg-[#1a1a1a] rounded" />
            </div>
          </div>

          {/* Grid */}
          <div className="flex flex-wrap gap-1.5">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="w-4 h-4 bg-[#1a1a1a]" />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}