const Navbar = () => {
    return (
        /* Main Navbar Header */
        <header className="w-full p-7">
            <div className="flex items-center justify-between">

                {/* Left: Brand Logo Section */}
                <div className="flex-1 flex items-center justify-start">
                    <a href="/" className="flex items-center">
                        <img src="/logo.svg" alt="Logo" className="h-9 w-auto brightness-0 block" />
                    </a>
                </div>

                {/* Center: Navigation Menu Pills */}
                <nav className="flex items-center px-4 py-1.5 rounded-full bg-white shadow-md border border-[#AAC8FD]/30">
                    <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-700">
                        <li>
                            <a href="#" className="block px-4 py-1.5 rounded-full hover:bg-[#2B64FD] hover:text-white hover:shadow-sm transition-all duration-300 ease-out">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-1.5 rounded-full hover:bg-[#2B64FD] hover:text-white hover:shadow-sm transition-all duration-300 ease-out">Marketing</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-1.5 rounded-full hover:bg-[#2B64FD] hover:text-white hover:shadow-sm transition-all duration-300 ease-out">Support</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-1.5 rounded-full hover:bg-[#2B64FD] hover:text-white hover:shadow-sm transition-all duration-300 ease-out">Features</a>
                        </li>
                    </ul>
                </nav>

                {/* Right: Action Button Section */}
                <div className="flex-1 flex items-center justify-end">
                    <button className="px-5 py-2 rounded-md bg-[#2B64FD] border border-[#2B64FD] hover:bg-white text-white hover:text-black text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 cursor-pointer">
                        Try Now →
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Navbar