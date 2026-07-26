"use client";

import React from "react";

const RevealOnScroll = ({ children, className = "" }) => {
    return (
        <div className={`popup-element ${className}`}>
            {children}
        </div>
    );
};

export default RevealOnScroll;
