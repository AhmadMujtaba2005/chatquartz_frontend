const FollowUpMockup = () => {
  return (
    <div className="relative w-[280px] mx-auto rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden mb-8 mt-4 flex flex-col">
      <div className="bg-[#111827] px-4 py-3 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
        <span className="text-white text-[13px] font-medium leading-none mt-0.5">Leave a message</span>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <p className="text-[12px] text-gray-500 leading-relaxed">We&apos;re currently offline. Leave your email and we&apos;ll get back to you.</p>
        <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1 pl-3 shadow-sm">
          <input
            type="email"
            placeholder="Your email..."
            className="flex-1 bg-transparent text-[12px] outline-none text-gray-800 placeholder-gray-400"
            disabled
          />
          <button className="bg-brand-primary text-white p-1.5 rounded-md shadow-sm flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowUpMockup;
