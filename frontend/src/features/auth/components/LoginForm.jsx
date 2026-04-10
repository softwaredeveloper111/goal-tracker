import { useState } from "react";
import { useForm  } from "react-hook-form"
import {toast} from "react-toastify"
import useAuth from "../hooks/useAuth.js"
import Fullpageloader from "../../shared/Fullpageloader.jsx"
import {useNavigate} from "react-router-dom"



export default function LoginForm() {


  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState("");
  const { HandlerLoginAPI , loading} = useAuth()

  
  const navigate = useNavigate()


    
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



  

async  function SubmitEventHandler(data){
    try {

   const response =  await  HandlerLoginAPI(data);
   if(response.success){
    toast.success(response.message)
    navigate("/")
   }
   else{
    toast.error(response.message)

   }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }


  if(loading){
    return <Fullpageloader/>
  }


  return (
    <div className="p-10 flex flex-col justify-center min-h-[480px]">

      {/* Header */}
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.2em] text-[#00ff87]/50 uppercase mb-2 font-['Space_Grotesk']">
          Initialize
        </p>
        <h2 className="text-3xl font-black text-white font-['Space_Grotesk'] leading-tight">
          Access System
        </h2>
        <p className="text-sm text-[#555] mt-1">
          Access your existing goal framework.
        </p>
      </div>
    
      {/* Form */}
      <form className="space-y-5" onSubmit={handleSubmit(SubmitEventHandler,onError)}>

        {/* Email Field */}
        <div>
          <label className="block text-[10px] tracking-[0.2em] text-[#00ff87]/70 uppercase mb-2 font-['Space_Grotesk']">
            Email Address or username
          </label>
          <input
            {...register("identifier", {
              required: "identifier is required",
           
            })}
            type="text"
            placeholder="user@system.flow or roko"
            onFocus={() => setFocused("text")}
            onBlur={() => setFocused("")}
            className={`w-full bg-[#111] border px-4 py-3 text-sm text-white placeholder-[#333] outline-none transition-all duration-200 font-['Inter'] ${
              focused === "text"
                ? "border-[#00ff87]/60 shadow-[0_0_12px_rgba(0,255,135,0.08)]"
                : "border-[#1f1f1f] hover:border-[#2a2a2a]"
            }`}
          />
        </div>

        {/* Password Field */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-[10px] tracking-[0.2em] text-[#00ff87]/70 uppercase font-['Space_Grotesk']">
              Access Key
            </label>
            <button className="text-[10px] text-[#00ff87]/40 hover:text-[#00ff87] tracking-widest uppercase transition-colors font-['Space_Grotesk']">
              Recover Key
            </button>
          </div>
          <div className="relative">
            <input
              {...register("password", {
                required: "Password is required",
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


        {/* Submit Button */}
        <button type="submit" className="cursor-pointer w-full py-3.5 bg-[#00ff87] text-[#0a0a0a] font-black text-xs tracking-[0.25em] uppercase font-['Space_Grotesk'] hover:bg-[#00e87a] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(0,255,135,0.2)] hover:shadow-[0_0_30px_rgba(0,255,135,0.35)] mt-2">
          Login
        </button>
      </form>
    </div>
  );
}