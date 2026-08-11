import Image from "next/image";
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
                    { n: "User #1646", d: "19/07/26", m: "can i get a discount i cant pay...", active: true, ch: "whatsapp" },
                    { n: "User #97536", d: "15/07/26", m: "House of Wellness ka address...", active: false, ch: "messenger" },
                    { n: "User #82357", d: "24/06/26", m: "book my session with dr yasir", active: false, ch: "email" },
                    { n: "User #85890", d: "24/06/26", m: "I need an urgent session...", active: false, ch: "instagram" },
                ].map((c, i) => (
                    <div key={i} className={`p-1.5 rounded flex gap-1.5 items-start ${c.active ? 'bg-[#FAF5FF] border-l-2 border-[#7C3AED]' : 'border-l-2 border-transparent hover:bg-gray-50/50 cursor-pointer'}`}>
                        <div className="relative h-5 w-5 mt-0.5">
                            <div className="h-full w-full rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-500">
                                <User className="w-3 h-3" />
                            </div>
                            <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-[1.5px] border-white flex items-center justify-center ${c.ch === 'whatsapp' ? 'bg-green-500' :
                                    c.ch === 'messenger' ? 'bg-blue-500' :
                                        c.ch === 'instagram' ? 'bg-pink-500' : 'bg-gray-600'
                                }`}></div>
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="flex justify-between items-center mb-[2px]">
                                <span className="font-bold text-gray-900 text-[7px] truncate">{c.n}</span>
                                <span className="text-[6px] text-[#7C3AED]">{c.d}</span>
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
                <div className="self-start bg-[#F3E8FF] text-[#4C1D95] rounded-md rounded-tl-sm px-2 py-1.5 text-[6px] max-w-[90%] border border-[#E9D5FF] shadow-sm">
                    Our most senior and experienced practitioners are...
                </div>
                <div className="self-end bg-gray-100 text-gray-700 rounded-md rounded-tr-sm px-2 py-1.5 text-[6px] max-w-[80%] border border-gray-200/50 shadow-sm">
                    can i get a discount i cant pay this much
                </div>
                <div className="self-start bg-[#F3E8FF] text-[#4C1D95] rounded-md rounded-tl-sm px-2 py-1.5 text-[6px] max-w-[80%] border border-[#E9D5FF] shadow-sm">
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
            <div className="bg-[#7C3AED] px-3 py-2.5 flex justify-between items-center text-white">
                <span className="text-[9px] font-bold">Help Center</span>
                <span className="text-[9px] opacity-70">✕</span>
            </div>
            <div className="p-2.5 bg-gray-50 flex-1 overflow-hidden flex flex-col gap-2.5">
                <div className="bg-white rounded border border-gray-200 px-2 py-1.5 flex items-center gap-1.5 shadow-sm">
                    <Search className="h-2.5 w-2.5 text-gray-400" />
                    <span className="text-[6px] text-gray-400">Search for articles...</span>
                </div>
                <div className="flex-1 overflow-hidden space-y-1.5">
                    <div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm border-l-2 border-l-[#7C3AED]">
                        <h4 className="text-[7px] font-bold text-gray-800 mb-1">What&apos;s new with Dialogflow?</h4>
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
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#7C3AED] rounded-full shadow-lg flex items-center justify-center z-10 cursor-pointer hover:bg-[#6D28D9] transition-colors hover:scale-110">
            <Image src="/logo.svg" alt="chatQuartz" width={20} height={20} className="w-5 h-5 object-contain brightness-0 invert" />
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
                    { n: "User #1646", d: "19/07/26", m: "can i get a discount i cant pay...", active: true },
                    { n: "User #97536", d: "15/07/26", m: "House of Wellness ka address...", active: false },
                    { n: "User #82357", d: "24/06/26", m: "book my session with dr yasir", active: false },
                    { n: "User #85890", d: "24/06/26", m: "I need an urgent session...", active: false },
                ].map((c, i) => (
                    <div key={i} className={`p-1.5 rounded flex gap-1.5 items-start ${c.active ? 'bg-[#FAF5FF] border-l-2 border-[#7C3AED]' : 'border-l-2 border-transparent hover:bg-gray-50/50 cursor-pointer'}`}>
                        <div className="h-5 w-5 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-500 mt-0.5">
                            <User className="w-3 h-3" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="flex justify-between items-center mb-[2px]">
                                <span className="font-bold text-gray-900 text-[7px] truncate">{c.n}</span>
                                <span className="text-[6px] text-[#7C3AED]">{c.d}</span>
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
                <div className="self-start bg-[#F3E8FF] text-[#4C1D95] rounded-md rounded-tl-sm px-2 py-1.5 text-[6px] max-w-[90%] border border-[#E9D5FF] shadow-sm">
                    Our most senior and experienced practitioners are...
                </div>
                <div className="self-end bg-gray-100 text-gray-700 rounded-md rounded-tr-sm px-2 py-1.5 text-[6px] max-w-[80%] border border-gray-200/50 shadow-sm">
                    can i get a discount i cant pay this much
                </div>
                <div className="self-start bg-[#F3E8FF] text-[#4C1D95] rounded-md rounded-tl-sm px-2 py-1.5 text-[6px] max-w-[80%] border border-[#E9D5FF] shadow-sm">
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
                        <span className="text-[6px] font-medium text-gray-400 pb-0.5 hover:text-gray-600 cursor-pointer">Emojis</span>
                        <span className="text-[6px] font-bold text-[#7C3AED] border-b-2 border-[#7C3AED] pb-0.5">Templates</span>
                    </div>
                    <Search className="h-2.5 w-2.5 text-gray-400" />
                </div>
                <div className="flex flex-col gap-1 pt-1">
                    {[
                        { k: "hello", v: "Hello how are you?" },
                        { k: "link", v: "Here is the payment link" },
                        { k: "bye", v: "Thank you for reaching out!" }
                    ].map(r => (
                        <div key={r.k} className="flex gap-1.5 items-center p-1 rounded bg-gray-50 hover:bg-[#FAF5FF] cursor-pointer group/item transition-colors">
                            <span className="text-[#7C3AED] font-mono font-bold text-[5px] bg-white border border-[#E9D5FF] px-1 rounded">/{r.k}</span>
                            <span className="text-[6px] text-gray-600 truncate font-medium">{r.v}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Input */}
            <div className="p-2 border-t border-gray-100 bg-white">
                <div className="border border-[#7C3AED]/40 rounded p-1.5 flex items-center bg-white shadow-sm ring-1 ring-[#7C3AED]/10">
                    <span className="text-[6px] flex-1 text-gray-400 px-1">Write a message...</span>
                    <Paperclip className="w-2.5 h-2.5 text-gray-400 mx-1 cursor-pointer hover:text-gray-600" />
                    <Smile className="w-2.5 h-2.5 text-[#7C3AED] mx-0.5 cursor-pointer drop-shadow-sm" />
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
    <div className="w-[280px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden text-left font-sans flex-shrink-0 flex flex-col">
        {/* Header */}
        <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <span className="text-[10px] font-bold text-gray-900">Users list</span>
            <div className="px-1.5 py-0.5 bg-brand-primary text-white text-[6px] font-bold rounded-sm flex items-center gap-1 shadow-sm">
                <User className="w-2 h-2" />
                Add user
            </div>
        </div>

        {/* Tabs */}
        <div className="px-3 border-b border-gray-100 flex gap-3 text-[7px] font-medium text-gray-500 overflow-hidden">
            <span className="py-1.5 border-b-2 border-transparent">All (12)</span>
            <span className="py-1.5 border-b-2 border-transparent">Users (8)</span>
            <span className="py-1.5 border-b-2 border-brand-primary text-brand-primary font-bold">Agents (4)</span>
        </div>

        {/* Table Header */}
        <div className="px-3 py-1.5 bg-gray-50 border-b border-gray-100 grid grid-cols-[1.5fr_1fr_1fr] gap-2 text-[6px] font-bold text-gray-500 uppercase">
            <span>Full name</span>
            <span>Type</span>
            <span>Status</span>
        </div>

        {/* Rows */}
        <div className="flex flex-col">
            <div className="px-3 py-2 border-b border-gray-50 grid grid-cols-[1.5fr_1fr_1fr] gap-2 items-center hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-1.5 overflow-hidden">
                    <div className="w-4 h-4 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-[6px] font-bold flex-shrink-0">D</div>
                    <span className="text-[7px] font-bold text-gray-800 truncate">David Smith</span>
                </div>
                <span className="text-[6px] font-medium text-gray-600">ADMIN</span>
                <span className="text-[6px] font-medium text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Online</span>
            </div>

            <div className="px-3 py-2 border-b border-gray-50 grid grid-cols-[1.5fr_1fr_1fr] gap-2 items-center hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-1.5 overflow-hidden">
                    <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[6px] font-bold flex-shrink-0">S</div>
                    <span className="text-[7px] font-bold text-gray-800 truncate">Sarah Jane</span>
                </div>
                <span className="text-[6px] font-medium text-gray-600">AGENT</span>
                <span className="text-[6px] font-medium text-gray-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>Offline</span>
            </div>

            <div className="px-3 py-2 grid grid-cols-[1.5fr_1fr_1fr] gap-2 items-center hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-1.5 overflow-hidden">
                    <div className="w-4 h-4 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-[6px] font-bold flex-shrink-0">M</div>
                    <span className="text-[7px] font-bold text-gray-800 truncate">Mike Ross</span>
                </div>
                <span className="text-[6px] font-medium text-gray-600">AGENT</span>
                <span className="text-[6px] font-medium text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Online</span>
            </div>
        </div>
    </div>
);
