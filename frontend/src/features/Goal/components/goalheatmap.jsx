// checkins = ["2026-04-11", "2026-04-13", ...]
// Shows all days from createdAt to targetDate as small squares
export default function GoalHeatmap({ createdAt, targetDate, checkins = [] }) {
  const checkinSet = new Set(checkins);

  // Build array of all days from createdAt to targetDate
  const start = new Date(createdAt);
  start.setHours(0, 0, 0, 0);
  const end = new Date(targetDate);
  end.setHours(0, 0, 0, 0);

  const days = [];
  const cursor = new Date(start);
  while (cursor <= end) {
    const key = `${cursor.getFullYear()}-${String(cursor.getMonth()+1).padStart(2,"0")}-${String(cursor.getDate()).padStart(2,"0")}`;
    days.push(key);
    cursor.setDate(cursor.getDate() + 1);
  }

  const todayKey = (() => {
    const t = new Date();
    return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;
  })();

  return (
    <section>
      <div className="bg-[#111] border border-[#1a1a1a] p-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight font-['Space_Grotesk'] text-white mb-1">
              Your Progress
            </h2>
            <p className="text-[11px] text-[#444] font-['Space_Grotesk'] uppercase tracking-widest">
              {checkins.length} / {days.length} days checked in
            </p>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#444] uppercase tracking-widest font-['Space_Grotesk']">Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-[#1a1a1a]" />
              <div className="w-3 h-3 bg-[#00ff87]/20" />
              <div className="w-3 h-3 bg-[#00ff87]/60" />
              <div className="w-3 h-3 bg-[#00ff87]" />
            </div>
            <span className="text-[10px] text-[#444] uppercase tracking-widest font-['Space_Grotesk']">More</span>
          </div>
        </div>

        {/* Grid — square cells, wrap naturally */}
        <div className="flex flex-wrap gap-1.5">
          {days.map((dayKey) => {
            const isChecked = checkinSet.has(dayKey);
            const isTarget = dayKey === targetDate;
            const isFuture = dayKey > todayKey;

            return (
              <div
                key={dayKey}
                title={dayKey}
                className={`w-4 h-4 transition-all duration-200 ${
                  isTarget
                    ? "ring-1 ring-red-500"
                    : ""
                } ${
                  isChecked
                    ? "bg-[#00ff87] shadow-[0_0_6px_rgba(0,255,135,0.5)]"
                    : isFuture
                    ? "bg-[#111]"
                    : "bg-[#1a1a1a]"
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}