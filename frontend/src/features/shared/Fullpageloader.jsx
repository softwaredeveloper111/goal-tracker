export default function FullPageLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <Loader />
    </div>
  );
}

function Loader() {
  return (
    <div className="w-10 h-10 rounded-full border-4 border-[#00ff87]/20 border-t-[#00ff87] animate-spin" />
  );
}