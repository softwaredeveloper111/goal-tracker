import { useState } from "react";
import { toast } from "react-toastify";


// props:
// goal — current goal data (for prefilling)
// onClose — modal band karo
// onConfirm — API call karega with updated data
export default function EditGoalModal({ goal, onClose, onConfirm }) {
  const [title, setTitle] = useState(goal?.title || "");
  const [description, setDescription] = useState(goal?.description || "");
  const [targetDate, setTargetDate] = useState(goal?.targetDate || "");
  const [focused, setFocused] = useState("");

  const handleSubmit = async () => {

  if (!title.trim()) return toast.error("Title is required");
  if (!description.trim()) return toast.error("Description is required");
  if (!targetDate) return toast.error("Target date is required");

  const updatedData = { title: title.trim(), description: description.trim(), targetDate };
  await onConfirm(updatedData);
  onClose();

  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#1a1919]/90 backdrop-blur-2xl border border-[#1a1a1a] border-t-2 border-t-[#00ff87] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: "0 0 15px rgba(0,255,135,0.08), 0 20px 50px rgba(0,0,0,0.5)" }}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#555] hover:text-[#00ff87] hover:bg-[#262626] rounded-lg transition-all duration-200 active:scale-95"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header */}
        <div className="px-8 pt-8 pb-4">
          <h2 className="text-2xl font-black tracking-tight text-white uppercase font-['Space_Grotesk'] mb-1">
            Edit Goal
          </h2>
          <p className="text-[11px] uppercase tracking-[0.05em] text-[#555] font-['Space_Grotesk']">
            All fields are optional — only changed fields will update
          </p>
        </div>

        {/* Form */}
        <div className="px-8 pb-8 space-y-7">

          {/* Title */}
          <div className="group">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#555] mb-2 group-focus-within:text-[#00ff87] transition-colors font-['Space_Grotesk']">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onFocus={() => setFocused("title")}
              onBlur={() => setFocused("")}
              placeholder={goal?.title}
              className={`w-full bg-transparent border-0 border-b px-0 py-2 text-white placeholder-[#333] text-lg font-['Inter'] outline-none transition-all ${
                focused === "title" ? "border-[#00ff87]" : "border-[#2a2a2a]"
              }`}
            />
          </div>

          {/* Description */}
          <div className="group">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#555] mb-2 group-focus-within:text-[#00ff87] transition-colors font-['Space_Grotesk']">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onFocus={() => setFocused("desc")}
              onBlur={() => setFocused("")}
              placeholder={goal?.description}
              rows={3}
              className={`w-full bg-transparent border-0 border-b px-0 py-2 text-white placeholder-[#333] font-['Inter'] outline-none resize-none transition-all ${
                focused === "desc" ? "border-[#00ff87]" : "border-[#2a2a2a]"
              }`}
            />
          </div>

          {/* Target Date */}
          <div className="group">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#555] mb-2 group-focus-within:text-[#00ff87] transition-colors font-['Space_Grotesk']">
              Target Date
            </label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full bg-transparent border-0 border-b border-[#2a2a2a] focus:border-[#00ff87] px-0 py-2 text-white font-['Inter'] outline-none transition-all [color-scheme:dark]"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={onClose}
              className="cursor-pointer flex-1 py-3 border border-[#1a1a1a] text-[#555] hover:text-white hover:border-[#2a2a2a] transition-all duration-200 text-xs uppercase tracking-widest font-['Space_Grotesk']"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="cursor-pointer flex-1 py-3 bg-[#00ff87] text-[#0a0a0a] font-black text-xs tracking-widest uppercase font-['Space_Grotesk'] hover:bg-[#00e87a] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(0,255,135,0.2)]"
            >
              Update Goal
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}