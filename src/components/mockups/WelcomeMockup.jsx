const WelcomeMockup = () => {
  return (
    <div className="relative w-[280px] mx-auto rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-4 mb-8 mt-4">
      <div className="flex items-start gap-3">
        <div className="h-8 w-8 flex-shrink-0 rounded-full bg-brand-primary/10 flex items-center justify-center">
          <img src="/logo.svg" alt="Bot Avatar" className="w-4 h-4 object-contain brightness-0 opacity-80" />
        </div>
        <div className="flex-1 mt-0.5">
          <p className="font-semibold text-gray-800 text-[13px] leading-none">chatquartz Bot</p>
          <p className="text-gray-500 mt-2 text-[12px] leading-relaxed">
            👋 Welcome! Hola! Bonjour! How can I assist you today?
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMockup;
