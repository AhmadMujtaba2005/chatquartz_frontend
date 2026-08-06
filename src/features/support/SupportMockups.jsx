import { Search, User, Clock, Trash, Paperclip, Smile } from "lucide-react";

export const Feature1Mockup = () => (
    <div className="w-[380px] h-[240px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex overflow-hidden text-left font-sans flex-shrink-0">
        {/* Inbox List */}
        <div className="w-[100px] border-r border-gray-100 flex flex-col bg-gray-50/30 flex-shrink-0">
            <div className="p-2 border-b border-gray-100 flex items-center justify-between">
                <span className="font-bold text-gray-700 text-[8px]">Inbox (5) ˅</span>
                <Search className="w-2.5 h-2.5 text-gray-400" />
            </div>
            <div className="flex-1 overflow-hidden p-1.5 space-y-1">
                {[
                    {n: "User #1646", d: "19/07/26", m: "can i get a discount i cant pay...", active: true},
                    {n: "User #97536", d: "15/07/26", m: "House of Wellness ka address...", active: false},
                    {n: "User #82357", d: "24/06/26", m: "book my session with dr yasir", active: false},
                    {n: "User #85890", d: "24/06/26", m: "I need an urgent session...", active: false},
                ].map((c, i) => (
                    <div key={i} className={`p-1.5 rounded flex gap-1.5 items-start ${c.active ? 'bg-[#F4F7FF] border-l-2 border-[#2B64FD]' : 'border-l-2 border-transparent hover:bg-gray-50/50 cursor-pointer'}`}>
                        <div className="h-5 w-5 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-500 mt-0.5">
                            <User className="w-3 h-3" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="flex justify-between items-center mb-[2px]">
                                <span className="font-bold text-gray-900 text-[7px] truncate">{c.n}</span>
                                <span className="text-[6px] text-[#2B64FD]">{c.d}</span>
                            </div>
                            <p className="text-[6px] text-gray-500 truncate leading-tight">{c.m}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden">
            {/* Header */}
            <div className="h-9 px-3 border-b border-gray-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800 text-[9px]">User #1646</span>
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex gap-2.5 text-gray-400">
                    <Clock className="w-3 h-3 hover:text-gray-600 cursor-pointer" />
                    <Trash className="w-3 h-3 hover:text-gray-600 cursor-pointer" />
                </div>
            </div>
            {/* Chat Messages */}
            <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden bg-gray-50/20">
                <div className="self-end bg-gray-100 text-gray-700 rounded-md rounded-tr-sm px-2 py-1.5 text-[6px] max-w-[80%] border border-gray-200/50 shadow-sm">
                    who is the best doctor available?
                </div>
                <div className="self-start bg-[#F0F7FF] text-[#1E3A8A] rounded-md rounded-tl-sm px-2 py-1.5 text-[6px] max-w-[90%] border border-[#BFDBFE] shadow-sm">
                    Our most senior and experienced practitioners are...
                </div>
                <div className="self-end bg-gray-100 text-gray-700 rounded-md rounded-tr-sm px-2 py-1.5 text-[6px] max-w-[80%] border border-gray-200/50 shadow-sm">
                    can i get a discount i cant pay this much
                </div>
                <div className="self-start bg-[#F0F7FF] text-[#1E3A8A] rounded-md rounded-tl-sm px-2 py-1.5 text-[6px] max-w-[80%] border border-[#BFDBFE] shadow-sm">
                    Would you like to connect with one of our team...
                </div>
                <div className="self-end bg-gray-100 text-gray-700 rounded-md rounded-tr-sm px-2 py-1.5 text-[6px] max-w-[80%] border border-gray-200/50 shadow-sm">
                    Yes, connect me
                </div>
            </div>
            {/* Input */}
            <div className="p-2 border-t border-gray-100 bg-white">
                <div className="border border-gray-200 rounded p-1.5 flex items-center bg-gray-50/50 hover:bg-white transition-colors">
                    <span className="text-[6px] flex-1 text-gray-400 px-1">Write a message...</span>
                    <Paperclip className="w-2.5 h-2.5 text-gray-400 mx-1 cursor-pointer hover:text-gray-600" />
                    <Smile className="w-2.5 h-2.5 text-gray-400 mx-0.5 cursor-pointer hover:text-gray-600" />
                </div>
            </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-[85px] border-l border-gray-100 bg-white flex flex-col flex-shrink-0">
            <div className="p-2 border-b border-gray-100 flex items-center gap-2 bg-gray-50/50">
                <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <User className="w-3 h-3" />
                </div>
                <span className="font-bold text-gray-800 text-[7px]">User #1646</span>
            </div>
            <div className="p-2 flex flex-col gap-2 text-[6px]">
                <div className="flex items-center"><span className="text-gray-400 uppercase w-12">Conv ID</span><span className="text-gray-800 font-medium">82</span></div>
                <div className="flex items-center"><span className="text-gray-400 uppercase w-12">User ID</span><span className="text-gray-800 font-medium">79</span></div>
                <div className="flex items-center"><span className="text-gray-400 uppercase w-12">Browser</span><span className="text-gray-800 font-medium truncate">Chrome</span></div>
                <div className="flex items-center"><span className="text-gray-400 uppercase w-12">Language</span><span className="text-gray-800 font-medium">EN</span></div>
                <div className="flex items-center"><span className="text-gray-400 uppercase w-12">Location</span><span className="text-gray-800 font-medium truncate">Pakistan</span></div>
            </div>
        </div>
    </div>
);

export const Feature2Mockup = () => (
    <div className="relative">
        {/* Chat Widget Wrapper */}
        <div className="w-[180px] h-[240px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col overflow-hidden mb-6 mr-3 z-10 font-sans text-left">
            <div className="bg-[#2B64FD] px-3 py-2.5 flex justify-between items-center text-white">
                <span className="text-[9px] font-bold">Help Center</span>
                <span className="text-[9px] opacity-70">✕</span>
            </div>
            <div className="p-2.5 bg-gray-50 flex-1 overflow-hidden flex flex-col gap-2.5">
                <div className="bg-white rounded border border-gray-200 px-2 py-1.5 flex items-center gap-1.5 shadow-sm">
                    <Search className="h-2.5 w-2.5 text-gray-400" />
                    <span className="text-[6px] text-gray-400">Search for articles...</span>
                </div>
                <div className="flex-1 overflow-hidden space-y-1.5">
                    <div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm border-l-2 border-l-[#2B64FD]">
                        <h4 className="text-[7px] font-bold text-gray-800 mb-1">What's new with Dialogflow?</h4>
                        <p className="text-[6px] text-gray-500 line-clamp-2 leading-relaxed">Dialogflow API V2 is the new iteration replacing V1...</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm border-l-2 border-l-transparent">
                        <h4 className="text-[7px] font-bold text-gray-800 mb-1">Which API version am I using?</h4>
                        <p className="text-[6px] text-gray-500 line-clamp-2 leading-relaxed">Check your current version in the agent settings...</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Floating chat bubble icon */}
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#2B64FD] rounded-full shadow-lg flex items-center justify-center z-10 cursor-pointer hover:bg-[#1E56F0] transition-colors hover:scale-110">
            <img src="/logo.svg" alt="chatQuartz" className="w-5 h-5 object-contain brightness-0 invert" />
        </div>
    </div>
);

export const Feature3Mockup = () => (
    <div className="w-[380px] h-[240px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex overflow-hidden text-left font-sans flex-shrink-0">
        {/* Inbox List */}
        <div className="w-[100px] border-r border-gray-100 flex flex-col bg-gray-50/30 flex-shrink-0">
            <div className="p-2 border-b border-gray-100 flex items-center justify-between">
                <span className="font-bold text-gray-700 text-[8px]">Inbox (5) ˅</span>
                <Search className="w-2.5 h-2.5 text-gray-400" />
            </div>
            <div className="flex-1 overflow-hidden p-1.5 space-y-1">
                {[
                    {n: "User #1646", d: "19/07/26", m: "can i get a discount i cant pay...", active: true},
                    {n: "User #97536", d: "15/07/26", m: "House of Wellness ka address...", active: false},
                    {n: "User #82357", d: "24/06/26", m: "book my session with dr yasir", active: false},
                    {n: "User #85890", d: "24/06/26", m: "I need an urgent session...", active: false},
                ].map((c, i) => (
                    <div key={i} className={`p-1.5 rounded flex gap-1.5 items-start ${c.active ? 'bg-[#F4F7FF] border-l-2 border-[#2B64FD]' : 'border-l-2 border-transparent hover:bg-gray-50/50 cursor-pointer'}`}>
                        <div className="h-5 w-5 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-500 mt-0.5">
                            <User className="w-3 h-3" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="flex justify-between items-center mb-[2px]">
                                <span className="font-bold text-gray-900 text-[7px] truncate">{c.n}</span>
                                <span className="text-[6px] text-[#2B64FD]">{c.d}</span>
                            </div>
                            <p className="text-[6px] text-gray-500 truncate leading-tight">{c.m}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Main Chat Area with Floating Emoji Picker */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden relative">
            {/* Header */}
            <div className="h-9 px-3 border-b border-gray-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800 text-[9px]">User #1646</span>
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex gap-2.5 text-gray-400">
                    <Clock className="w-3 h-3 hover:text-gray-600 cursor-pointer" />
                    <Trash className="w-3 h-3 hover:text-gray-600 cursor-pointer" />
                </div>
            </div>
            {/* Chat Messages */}
            <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden bg-gray-50/20 opacity-40">
                <div className="self-end bg-gray-100 text-gray-700 rounded-md rounded-tr-sm px-2 py-1.5 text-[6px] max-w-[80%] border border-gray-200/50 shadow-sm">
                    who is the best doctor available?
                </div>
                <div className="self-start bg-[#F0F7FF] text-[#1E3A8A] rounded-md rounded-tl-sm px-2 py-1.5 text-[6px] max-w-[90%] border border-[#BFDBFE] shadow-sm">
                    Our most senior and experienced practitioners are...
                </div>
                <div className="self-end bg-gray-100 text-gray-700 rounded-md rounded-tr-sm px-2 py-1.5 text-[6px] max-w-[80%] border border-gray-200/50 shadow-sm">
                    can i get a discount i cant pay this much
                </div>
                <div className="self-start bg-[#F0F7FF] text-[#1E3A8A] rounded-md rounded-tl-sm px-2 py-1.5 text-[6px] max-w-[80%] border border-[#BFDBFE] shadow-sm">
                    Would you like to connect with one of our team...
                </div>
                <div className="self-end bg-gray-100 text-gray-700 rounded-md rounded-tr-sm px-2 py-1.5 text-[6px] max-w-[80%] border border-gray-200/50 shadow-sm">
                    Yes, connect me
                </div>
            </div>

            {/* Floating Emoji/Template Picker */}
            <div className="absolute bottom-11 left-4 bg-white rounded-lg border border-gray-200 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.15)] p-2 w-[160px] z-10 flex flex-col gap-1.5 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-gray-100 pb-1.5">
                    <div className="flex gap-2">
                        <span className="text-[6px] font-bold text-[#2B64FD] border-b-2 border-[#2B64FD] pb-0.5">Emojis</span>
                        <span className="text-[6px] font-medium text-gray-400 pb-0.5 hover:text-gray-600 cursor-pointer">Templates</span>
                    </div>
                    <Search className="h-2.5 w-2.5 text-gray-400" />
                </div>
                <div className="grid grid-cols-7 gap-1 pt-1">
                    {["😀","😂","🥰","😎","🤔","🙌","🔥","✨","👍","🎉","❤️","💡","👀","🚀"].map((e, i) => (
                        <div key={i} className="text-[10px] hover:bg-gray-100 rounded text-center cursor-pointer p-0.5 transition-colors">{e}</div>
                    ))}
                </div>
            </div>

            {/* Input */}
            <div className="p-2 border-t border-gray-100 bg-white">
                <div className="border border-[#2B64FD]/40 rounded p-1.5 flex items-center bg-white shadow-sm ring-1 ring-[#2B64FD]/10">
                    <span className="text-[6px] flex-1 text-gray-400 px-1">Write a message...</span>
                    <Paperclip className="w-2.5 h-2.5 text-gray-400 mx-1 cursor-pointer hover:text-gray-600" />
                    <Smile className="w-2.5 h-2.5 text-[#2B64FD] mx-0.5 cursor-pointer drop-shadow-sm" />
                </div>
            </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-[85px] border-l border-gray-100 bg-white flex flex-col flex-shrink-0">
            <div className="p-2 border-b border-gray-100 flex items-center gap-2 bg-gray-50/50">
                <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <User className="w-3 h-3" />
                </div>
                <span className="font-bold text-gray-800 text-[7px]">User #1646</span>
            </div>
            <div className="p-2 flex flex-col gap-2 text-[6px]">
                <div className="flex items-center"><span className="text-gray-400 uppercase w-12">Conv ID</span><span className="text-gray-800 font-medium">82</span></div>
                <div className="flex items-center"><span className="text-gray-400 uppercase w-12">User ID</span><span className="text-gray-800 font-medium">79</span></div>
                <div className="flex items-center"><span className="text-gray-400 uppercase w-12">Browser</span><span className="text-gray-800 font-medium truncate">Chrome</span></div>
                <div className="flex items-center"><span className="text-gray-400 uppercase w-12">Language</span><span className="text-gray-800 font-medium">EN</span></div>
                <div className="flex items-center"><span className="text-gray-400 uppercase w-12">Location</span><span className="text-gray-800 font-medium truncate">Pakistan</span></div>
            </div>
        </div>
    </div>
);

export const Feature4Mockup = () => (
    <div className="w-[240px] p-3 flex flex-col gap-2.5 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden text-left font-sans flex-shrink-0">
        <div className="flex justify-between items-center mb-1 px-1">
            <span className="text-[8px] font-bold text-gray-900">Saved replies</span>
            <Search className="h-3 w-3 text-gray-400" />
        </div>
        <div className="flex flex-col gap-1.5">
            {[
                {k: "hello", v: "Hello how are you?"},
                {k: "buy", v: "Please buy this item first!"},
                {k: "key", v: "You need the Licence Key..."},
                {k: "bug", v: "Please report this bug..."},
            ].map(r => (
                <div key={r.k} className="flex gap-2 items-center p-2 bg-white rounded-lg border border-gray-100 cursor-pointer group/item transition-colors shadow-sm hover:shadow-md hover:border-blue-100">
                    <span className="text-[#2B64FD] font-mono font-bold bg-[#F4F7FF] px-1.5 py-0.5 rounded text-[6px] w-8 text-center group-hover/item:bg-[#2B64FD] group-hover/item:text-white transition-colors">/{r.k}</span>
                    <span className="text-[7px] text-gray-600 truncate font-medium">{r.v}</span>
                </div>
            ))}
        </div>
    </div>
);
