import { useState } from "react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default function GoalCalendar({ targetDate, checkins = [], createdAt , onToggle }) {

 
  const createdKey = createdAt
    ? `${new Date(createdAt).getFullYear()}-${String(new Date(createdAt).getMonth()+1).padStart(2,"0")}-${String(new Date(createdAt).getDate()).padStart(2,"0")}`
    : null;

  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  const checkinSet = new Set(checkins.map(item=>item.date));

  // First day of month and total days
  const firstDay = new Date(currentYear, currentMonth, 1);
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Monday-based offset (0=Mon, 6=Sun)
  let startOffset = firstDay.getDay() - 1;
  if (startOffset < 0) startOffset = 6;

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  };

  const formatDayKey = (day) => {
    const mm = String(currentMonth + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${currentYear}-${mm}-${dd}`;
  };

  const todayKey = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;

  return (
    <section className="mb-10">
      <div className="bg-[#111] border border-[#1a1a1a] p-8">

        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-black uppercase tracking-tight font-['Space_Grotesk'] text-white">
            {MONTHS[currentMonth]} {currentYear}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevMonth}
              className="p-2 text-[#555] hover:text-[#00ff87] hover:bg-[#1a1a1a] transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button
              onClick={nextMonth}
              className="p-2 text-[#555] hover:text-[#00ff87] hover:bg-[#1a1a1a] transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map(d => (
            <div key={d} className="py-3 text-center text-[10px] uppercase tracking-widest text-[#444] font-['Space_Grotesk']">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-px bg-[#1a1a1a]">

          {/* Empty offset cells */}
          {Array.from({ length: startOffset }).map((_, i) => (
            <div key={`empty-${i}`} className="bg-[#0e0e0e] h-20" />
          ))}

          {/* Day cells */}
          {Array.from({ length: totalDays }).map((_, i) => {
            const day = i + 1;
            const dayKey = formatDayKey(day);
            const isChecked = checkinSet.has(dayKey);
            const isTarget = dayKey === targetDate;
            const isToday = dayKey === todayKey;
            const isFuture = dayKey > todayKey;
            const isStartDay = dayKey === createdKey;

            return (
              <div
                key={dayKey}
                onClick={() => {
    if (isFuture) return;
    if (createdKey && dayKey < createdKey) return;
    console.log(dayKey);
    onToggle && onToggle(dayKey);
  }}
                className={`bg-[#0e0e0e] h-20 p-2 relative flex flex-col items-center justify-between transition-all duration-200 ${
                  !isFuture ? "cursor-pointer hover:bg-[#151515]" : "cursor-not-allowed opacity-40"
                }`}
              >
                {/* Day number */}
                <span className={`text-xs font-['Space_Grotesk'] self-start ${
                  isToday ? "text-[#00ff87]" : "text-[#555]"
                }`}>
                  {String(day).padStart(2, "0")}
                </span>
              
                {/* mark start day */}
               
                {isStartDay && (
  <span className="text-[8px] text-[#ffe600] uppercase tracking-widest font-['Space_Grotesk'] absolute bottom-1 left-1/2 -translate-x-1/2">
    Start
  </span>
)}

                {/* Target date — red circle */}
                {isTarget && !isChecked && (
                  <div className="sm:w-14 sm:h-14  w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center shadow-[0_0_12px_rgba(239,68,68,0.4)]">
                    <span className="text-red-400 text-xs font-black font-['Space_Grotesk']">{day}</span>
                  </div>
                )}

                {/* Checked day — red X cross */}
                {isChecked && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </div>
                )}

                {/* Target + Checked — red circle with X */}
                {isTarget && isChecked && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="sm:w-14 sm:h-14  w-9 h-9 rounded-full border-2 border-red-500 flex items-center justify-center shadow-[0_0_12px_rgba(239,68,68,0.4)]">
                      <svg className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}