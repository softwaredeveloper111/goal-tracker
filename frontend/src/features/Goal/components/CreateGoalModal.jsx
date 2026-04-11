import {useForm} from "react-hook-form"
import {toast} from "react-toastify"
import Fullpageloader from "../../shared/Fullpageloader"
import useGoal from "../hooks/useGoal"


export default function CreateGoalModal({ onClose }) {

  const { register, handleSubmit , formState: { errors } } = useForm();

  const {HandleCreateGoalAPI,loading} = useGoal() ;
 const onSubmit =   async (data) => {

   try {
    const response = await HandleCreateGoalAPI(data);
      if(response.success){

        toast.success("Goal created successfully!");
        onClose();

      }

      else{
        toast.error("Failed to create goal.");
      }
    
   } catch (error) { 

      toast.error(error.message || "An error occurred while creating the goal.");
   }

  };


    const onError = (errors) => {
    Object.values(errors).forEach((err) => {
      toast.error(err.message); 
    });
  };


   if(loading) return <Fullpageloader />


  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-[#1a1919]/90 backdrop-blur-2xl rounded-xl border-t-2 border-[#00ff87] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        style={{ boxShadow: "0 0 15px rgba(0,255,135,0.08), 0 20px 50px rgba(0,0,0,0.5)" }}>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#555] hover:text-[#00ff87] hover:bg-[#262626] rounded-lg transition-all duration-200 active:scale-95"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Header */}
        <div className="px-8 pt-8 pb-4">
          <h2 className="text-2xl font-black tracking-tight text-white uppercase font-['Space_Grotesk'] mb-1">
            Create New Goal
          </h2>
          <p className="text-[11px] uppercase tracking-[0.05em] text-[#555] font-['Space_Grotesk']">
            System: Goal Architecture Module 4.0
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit , onError)} className="px-8 pb-8 space-y-7">

          {/* Title Field */}
          <div className="group">
            <label className="block text-[11px] uppercase tracking-[0.05em] text-[#555] mb-2 group-focus-within:text-[#00ff87] transition-colors font-['Space_Grotesk']">
              Goal Title
            </label>
            <input
              {...register("title", { required: "Title is required" , maxLength: { value: 100, message: "Title cannot be more than 100 characters" } })}
              type="text"
              placeholder="e.g., Master Quantum Computing"
              className="w-full bg-transparent border-0 border-b border-[#2a2a2a] focus:border-[#00ff87] focus:ring-0 outline-none px-0 py-2 text-white placeholder-[#333] text-lg font-['Inter'] transition-all"
            />
          </div>

          {/* Description Field */}
          <div className="group">
            <label className="block text-[11px] uppercase tracking-[0.05em] text-[#555] mb-2 group-focus-within:text-[#00ff87] transition-colors font-['Space_Grotesk']">
              Description
            </label>
            <textarea
              {...register("description", { required: "Description is required" , maxLength: { value: 500, message: "Description cannot be more than 500 characters" } })}
              placeholder="Define your architectural roadmap..."
              rows={3}
              className="w-full bg-transparent border-0 border-b border-[#2a2a2a] focus:border-[#00ff87] focus:ring-0 outline-none px-0 py-2 text-white placeholder-[#333] font-['Inter'] resize-none transition-all"
            />
          </div>

          {/* Target Date */}
          <div className="grid grid-cols-2 gap-6">
            <div className="group">
              <label className="block text-[11px] uppercase tracking-[0.05em] text-[#555] mb-2 group-focus-within:text-[#00ff87] transition-colors font-['Space_Grotesk']">
                Target Date
              </label>
              <input
                {...register("targetDate", {
                   required: "Target date is required",
                    validate: (value) => value >= new Date().toISOString().split("T")[0] || "Target date cannot be in the past"
                   })}
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="w-full bg-transparent border-0 border-b border-[#2a2a2a] focus:border-[#00ff87] focus:ring-0 outline-none px-0 py-2 text-white font-['Inter'] transition-all [color-scheme:dark]"
              />
            </div>
            <div className="flex flex-col justify-end pb-2">
              <div className="flex items-center gap-2 text-[10px] text-[#555] font-['Space_Grotesk'] uppercase tracking-wider">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                EST. COMPLETION: 24 DAYS
              </div>
            </div>
          </div>

          {/* Decorative Banner */}
          <div className="relative h-16 w-full overflow-hidden rounded-lg bg-[#0a0a0a] border border-[#1a1a1a]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff87]/5 via-[#00ff87]/10 to-[#00ff87]/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[9px] font-['Space_Grotesk'] tracking-[0.2em] text-[#00ff87]/40 uppercase">
                Neural Optimization Active
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className=" cursor-pointer w-full bg-gradient-to-r from-[#00ff87] to-[#00fd86] text-[#0a0a0a] py-4 rounded-md font-black text-sm tracking-widest uppercase font-['Space_Grotesk'] flex items-center justify-center gap-3 transition-all duration-200 hover:brightness-110 active:scale-[0.98] shadow-[0_4px_20px_rgba(0,255,135,0.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Create Goal
          </button>

          {/* Footer Note */}
          <p className="text-center text-[9px] uppercase tracking-wider text-[#333] font-['Space_Grotesk']">
            Data will be synchronized across the distributed network
          </p>

        </form>
      </div>
    </div>
  );
}