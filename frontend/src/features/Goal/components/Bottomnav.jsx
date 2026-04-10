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
  {
    label: "Logs",
    active: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  { label: "", active: false, icon: null }, // spacer for FAB
  {
    label: "Vault",
    active: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
  {
    label: "User",
    active: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
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