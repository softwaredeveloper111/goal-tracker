export default function FAB({ onClick }) {
  return (
    <button
      onClick={onClick}
      className=" cursor-pointer fixed bottom-8 right-8 w-14 h-14 flex items-center justify-center rounded-full bg-[#00ff87] text-[#0a0a0a] shadow-[0_0_25px_rgba(0,255,135,0.4)] hover:shadow-[0_0_40px_rgba(0,255,135,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 z-50"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    </button>
  );
}