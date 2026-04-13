import { useState } from "react";

// props:
// onConfirm — function jo API call karega
export default function DeleteGoalButton({ onConfirm }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Delete Icon Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowPopup(true);
        }}
        className="p-2 cursor-pointer text-[#555] hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 active:scale-95"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
        </svg>
      </button>

      {/* Confirm Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="w-full max-w-sm bg-[#111] border border-[#1a1a1a] border-t-2 border-t-red-500 p-8"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                <path d="M10 11v6" />
                <path d="M14 11v6" />
                <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
              </svg>
            </div>

            {/* Text */}
            <h3 className="text-xl font-black text-white uppercase tracking-tight font-['Space_Grotesk'] mb-2">
              Delete Goal?
            </h3>
            <p className="text-sm text-[#555] font-['Inter'] leading-relaxed mb-8">
              This will permanently delete the goal and all its checkins. This action cannot be undone.
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
                  onConfirm(); // API call yahan hogi
                }}
                className="flex-1 py-3 bg-red-500 text-white font-black text-xs uppercase tracking-widest font-['Space_Grotesk'] hover:bg-red-600 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
              >
                Yes, Delete
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}