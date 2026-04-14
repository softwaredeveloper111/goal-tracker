const navItems = [
  {
    label: "Dash",
    active: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  
  { label: "", active: false, icon: null }, // spacer for FAB
 
  {
    label: "Goal",
    active: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
       
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
];

export default function BottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full h-16 bg-[#0e0e0e]/90 backdrop-blur-xl border-t border-[#1a1a1a] flex justify-around items-center px-4 z-40">
      {navItems.map((item, index) =>
        item.icon === null ? (
          <div key={index} className="w-10" /> // spacer for FAB
        ) : (
          <a
            key={index}
            href="#"
            className={`flex flex-col items-center gap-1 transition-colors ${
              item.active ? "text-[#00ff87]" : "text-[#444] hover:text-[#00ff87]"
            }`}
          >
            {item.icon}
            <span className="text-[9px] uppercase tracking-widest font-['Space_Grotesk']">
              {item.label}
            </span>
          </a>
        )
      )}
    </div>
  );
}