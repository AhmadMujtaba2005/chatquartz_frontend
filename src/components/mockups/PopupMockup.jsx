const PopupMockup = () => {
  return (
    <div className="relative w-[280px] mx-auto rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-4 mb-8 mt-4">
      <div className="flex items-start gap-3">
        <div className="h-8 w-8 flex-shrink-0 rounded-full bg-brand-primary/10 flex items-center justify-center text-xs font-semibold text-brand-primary">
          CG
        </div>
        <div className="flex-1 mt-0.5">
          <p className="font-semibold text-gray-800 text-[13px] leading-none">Chris Greyson</p>
          <p className="text-gray-500 mt-2 text-[12px] leading-relaxed">
            I'm online. I see you're interested in our product — happy to help you get started!
          </p>
        </div>
      </div>
      <div className="absolute -bottom-2 -right-2 h-7 w-7 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-md text-[11px] font-bold border-2 border-white">
        2
      </div>
    </div>
  );
};

export default PopupMockup;
