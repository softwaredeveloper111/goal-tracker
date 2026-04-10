import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* Background glow blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] rounded-full bg-[#00ff87]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] rounded-full bg-[#00ff87]/5 blur-[100px] pointer-events-none" />

      {/* Logo */}
      <div className="mb-10 flex flex-col items-center gap-2 z-10">
        <div className="w-12 h-12 border border-[#00ff87]/40 flex items-center justify-center bg-[#00ff87]/10">
         <i className="ri-target-line text-[#00ff87] text-3xl"></i>
        </div>
        <span className="text-2xl font-black tracking-[0.15em] text-[#00ff87] uppercase font-['Space_Grotesk']">
          GoalTracker
        </span>
        <span className="text-[10px] tracking-[0.25em] text-[#00ff87]/40 uppercase">
          Architect Your Progress
        </span>
      </div>

      {/* Mobile Tab Switcher — only visible on small screens */}
      <div className="flex md:hidden w-full max-w-sm mb-6 border border-[#1f1f1f] z-10">
        <button
          onClick={() => setActiveTab("login")}
          className={`flex-1 py-3 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-200 font-['Space_Grotesk'] ${
            activeTab === "login"
              ? "bg-[#00ff87] text-[#0a0a0a]"
              : "bg-transparent text-[#555] hover:text-[#00ff87]"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab("register")}
          className={`flex-1 py-3 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-200 font-['Space_Grotesk'] ${
            activeTab === "register"
              ? "bg-[#00ff87] text-[#0a0a0a]"
              : "bg-transparent text-[#555] hover:text-[#00ff87]"
          }`}
        >
          Register
        </button>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-4xl z-10 flex border border-[#1a1a1a] bg-[#0e0e0e]">

        {/* Login Side */}
        <div className={`w-full md:w-1/2 ${activeTab === "register" ? "hidden md:block" : "block"}`}>
          <LoginForm />
        </div>

        {/* Divider — desktop only */}
        <div className="hidden md:flex flex-col items-center justify-center w-px bg-[#1a1a1a] relative">
          <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#00ff87]/20 to-transparent" />
        </div>

        {/* Register Side */}
        <div className={`w-full md:w-1/2 ${activeTab === "login" ? "hidden md:block" : "block"}`}>
          <RegisterForm />
        </div>
      </div>

      {/* Footer */}
      <p className="mt-8 text-[10px] text-[#333] tracking-[0.2em] uppercase z-10">
        © 2026 GoalTracker · v1.0.0 @Sourav Giri
      </p>
    </div>
  );
}