"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis, useLenis } from 'lenis/react';

function ScrollReset() {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: false, duration: 1.2 });
        }
    }, [pathname, lenis]);

    return null;
}

const SmoothScroll = ({ children }) => {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.08,
                duration: 1.5,
                syncTouch: false,
            }}
        >
            <ScrollReset />
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;
