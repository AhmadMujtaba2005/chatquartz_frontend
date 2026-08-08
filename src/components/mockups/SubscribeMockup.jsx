const SubscribeMockup = () => {
  return (
    <div className="relative w-[280px] mx-auto mb-14 mt-5 flex flex-col gap-3">

      {/* Selected Row */}
      <div className="bg-white rounded-xl shadow-[0_8px_20px_rgba(124,58,237,0.12)] border border-brand-primary/30 p-3 flex items-center gap-3 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-primary"></div>
        <div className="h-8 w-8 flex-shrink-0 rounded-full bg-brand-primary/5 flex items-center justify-center text-[11px] font-bold text-brand-primary ml-1">
          SJ
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <p className="text-[13px] font-medium text-gray-800 truncate leading-tight">Sarah Jenkins</p>
          <p className="text-[11px] text-gray-500 truncate mt-0.5">sarah.j@example.com</p>
        </div>
        <div className="px-2 py-1 bg-[#ECFDF5] text-[#10B981] text-[9px] font-bold rounded flex items-center justify-center tracking-wide mr-1">
          SUBSCRIBED
        </div>
      </div>

      {/* Unselected Row */}
      <div className="bg-white/60 rounded-xl border border-gray-100 p-3 flex items-center gap-3 opacity-60">
        <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-[11px] font-bold text-gray-400 ml-1">
          MK
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <p className="text-[13px] font-medium text-gray-500 truncate leading-tight">Mike Kowalski</p>
          <p className="text-[11px] text-gray-400 truncate mt-0.5">mike@example.com</p>
        </div>
      </div>

    </div>
  );
};

export default SubscribeMockup;
