import Link from "next/link";

const Navbar = () => {
    return (
        /* Main Navbar Header */
        <header className="w-full p-6 sm:p-9">
            <div className="flex items-center justify-between">

                {/* Left: Brand Logo Section */}
                <div className="flex-1 flex items-center justify-start">
                    <Link href="/" className="flex items-center">
                        <img src="/logo.svg" alt="Logo" className="h-10 w-auto brightness-0 block" />
                    </Link>
                </div>

                {/* Center: Navigation Menu Pills */}
                <nav className="flex items-center px-8 py-1.5 rounded-full bg-white shadow-md border border-[#AAC8FD]/30">
                    <ul className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700">
                        <li>
                            <Link href="#" className="block px-6 py-1.5 rounded-full hover:bg-[#2B64FD] hover:text-white hover:shadow-sm transition-all duration-300 ease-out">Pricing</Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-6 py-1.5 rounded-full hover:bg-[#2B64FD] hover:text-white hover:shadow-sm transition-all duration-300 ease-out">Marketing</Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-6 py-1.5 rounded-full hover:bg-[#2B64FD] hover:text-white hover:shadow-sm transition-all duration-300 ease-out">Support</Link>
                        </li>
                        <li>
                            <Link href="/features" className="block px-7 py-1.5 rounded-full hover:bg-[#2B64FD] hover:text-white hover:shadow-sm transition-all duration-300 ease-out">Features</Link>
                        </li>
                    </ul>
                </nav>

                {/* Right: Action Button Section */}
                <div className="flex-1 flex items-center justify-end">
                    <button className="group flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#2B64FD] hover:bg-[#1E56F0] text-white text-sm font-semibold shadow-sm hover:shadow-lg hover:shadow-[#2B64FD]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out cursor-pointer">
                        <span>Try Now</span>
                        <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-2">→</span>
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Navbar