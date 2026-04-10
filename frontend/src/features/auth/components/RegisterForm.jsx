import { useState } from "react";
import { useForm  } from "react-hook-form"
import {toast} from "react-toastify"


export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState("");

  
  const {
     register,
     handleSubmit,
    formState: { errors }
  } = useForm()



    const onError = (errors) => {
    Object.values(errors).forEach((err) => {
      toast.error(err.message); 
    });
  };



  function SubmitEventHandler(data){
    console.log(data)
  }
  


  return (
    <div className="p-10 flex flex-col justify-center min-h-[480px] border-t border-[#1a1a1a] md:border-t-0">

      {/* Header */}
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.2em] text-[#00ff87]/50 uppercase mb-2 font-['Space_Grotesk']">
          Deploy
        </p>
        <h2 className="text-3xl font-black text-white font-['Space_Grotesk'] leading-tight">
          New Node
        </h2>
        <p className="text-sm text-[#555] mt-1">
          Create a new architectural node.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-5" onSubmit={handleSubmit(SubmitEventHandler,onError)}>

        {/* Username */}
        <div>
          <label className="block text-[10px] tracking-[0.2em] text-[#00ff87]/70 uppercase mb-2 font-['Space_Grotesk']">
            Username
          </label>
          <input
          {...register("username", {
            required: "Username is required",
            minLength: {value: 3, message: "Username must be at least 3 characters"},
            maxLength: {value: 20, message: "Username must be less than 20 characters"},
            pattern: {value: /^[A-Za-z_][A-Za-z0-9_]*$/, message: "Username can only contain letters, numbers, and underscores,start with letter"}
          })}
            type="text"
            placeholder="architect_01"
            onFocus={() => setFocused("username")}
            onBlur={() => setFocused("")}
            className={`w-full bg-[#111] border px-4 py-3 text-sm text-white placeholder-[#333] outline-none transition-all duration-200 font-['Inter'] ${
              focused === "username"
                ? "border-[#00ff87]/60 shadow-[0_0_12px_rgba(0,255,135,0.08)]"
                : "border-[#1f1f1f] hover:border-[#2a2a2a]"
            }`}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[10px] tracking-[0.2em] text-[#00ff87]/70 uppercase mb-2 font-['Space_Grotesk']">
            Email
          </label>
          <input
          {...register("email", {
            required: "Email is required",
            pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address"}
          })}
            type="email"
            placeholder="new@system.flow"
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused("")}
            className={`w-full bg-[#111] border px-4 py-3 text-sm text-white placeholder-[#333] outline-none transition-all duration-200 font-['Inter'] ${
              focused === "email"
                ? "border-[#00ff87]/60 shadow-[0_0_12px_rgba(0,255,135,0.08)]"
                : "border-[#1f1f1f] hover:border-[#2a2a2a]"
            }`}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-[10px] tracking-[0.2em] text-[#00ff87]/70 uppercase mb-2 font-['Space_Grotesk']">
            New Access Key
          </label>
          <div className="relative">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {value: 8, message: "Password must be at least 8 characters"},
                pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Password must contain at least one lowercase, uppercase, number, and special character"}
              })}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              onFocus={() => setFocused("password")}
              onBlur={() => setFocused("")}
              className={`w-full bg-[#111] border px-4 py-3 text-sm text-white placeholder-[#333] outline-none transition-all duration-200 pr-12 font-['Inter'] ${
                focused === "password"
                  ? "border-[#00ff87]/60 shadow-[0_0_12px_rgba(0,255,135,0.08)]"
                  : "border-[#1f1f1f] hover:border-[#2a2a2a]"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#444] hover:text-[#00ff87] transition-colors"
            >
              {showPassword ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
                  <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Terms */}
        <p className="text-[10px] text-[#333] leading-relaxed font-['Inter']">
          By deploying, you agree to the{" "}
          <span className="text-[#00ff87]/50 cursor-pointer hover:text-[#00ff87] transition-colors underline underline-offset-2">
            System Protocols
          </span>{" "}
          and{" "}
          <span className="text-[#00ff87]/50 cursor-pointer hover:text-[#00ff87] transition-colors underline underline-offset-2">
            Data Encryption standards
          </span>
          .
        </p>

        {/* Submit Button */}
        <button type="submit" className="cursor-pointer w-full py-3.5 bg-transparent border border-[#00ff87]/40 text-[#00ff87] font-black text-xs tracking-[0.25em] uppercase font-['Space_Grotesk'] hover:bg-[#00ff87] hover:text-[#0a0a0a] active:scale-[0.98] transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,255,135,0.25)] mt-2">
          Register
        </button>
      </form>
    </div>
  );
}