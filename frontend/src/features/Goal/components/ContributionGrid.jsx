// grid prop = array of opacity values (0-100)
// e.g. [10, 40, 100, 20, 80, ...]
export default function ContributionGrid({ grid = [] }) {
  return (
    <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
      <p className="text-[10px] uppercase tracking-widest text-[#444] mb-3 font-['Space_Grotesk']">
        System Activity Logs
      </p>
      <div className="flex flex-wrap gap-1.5">
        {grid.map((opacity, index) => (
          <div
            key={index}
            className="w-3.5 h-3.5"
            style={{ backgroundColor: `rgba(0, 255, 135, ${opacity / 100})` }}
          />
        ))}
      </div>
    </div>
  );
}