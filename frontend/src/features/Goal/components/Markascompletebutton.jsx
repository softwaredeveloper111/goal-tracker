import { useState } from "react";

// props:
// status — "inprogress" | "completed"
// onConfirm — function jo API call karega
export default function MarkAsCompleteButton({ status, onConfirm }) {
  const [showPopup, setShowPopup] = useState(false);

  if (status === "completed") {
    return (
      <div className="flex items-center gap-2 px-4 py-2 border border-[#00ff87]/20 bg-[#00ff87]/5">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00ff87" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span className="text-[11px] text-[#00ff87] uppercase tracking-widest font-['Space_Grotesk']">
          Completed
        </span>
      </div>
    );
  }

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setShowPopup(true)}
        className=" cursor-pointer flex w-fit items-center gap-2 px-4 py-2 border border-[#00ff87]/30 text-[#00ff87] hover:bg-[#00ff87] hover:text-[#0a0a0a] transition-all duration-200 active:scale-95 font-['Space_Grotesk']"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span className="text-[11px] uppercase tracking-widest">
          Mark as Complete
        </span>
      </button>

      {/* Confirm Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-[#111] border border-[#1a1a1a] border-t-2 border-t-[#00ff87] p-8">

            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/20 flex items-center justify-center mb-6">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00ff87" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            {/* Text */}
            <h3 className="text-xl font-black text-white uppercase tracking-tight font-['Space_Grotesk'] mb-2">
              Mark as Complete?
            </h3>
            <p className="text-sm text-[#555] font-['Inter'] leading-relaxed mb-8">
              Once marked as complete, the calendar will be locked and this action cannot be undone.
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="flex-1 py-3 border border-[#1a1a1a] text-[#555] hover:text-white hover:border-[#2a2a2a] transition-all duration-200 text-xs uppercase tracking-widest font-['Space_Grotesk']"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowPopup(false);
                  onConfirm();
                }}
                className="flex-1 py-3 bg-[#00ff87] text-[#0a0a0a] font-black text-xs uppercase tracking-widest font-['Space_Grotesk'] hover:bg-[#00e87a] active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(0,255,135,0.2)]"
              >
                Yes, Complete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}