"use client";

import { useState, useEffect } from 'react';

const TypewriterEffect = ({ sentences, typingSpeed = 40, deletingSpeed = 20, pauseDuration = 2500 }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed);

    useEffect(() => {
        let timer;
        const handleType = () => {
            const i = loopNum % sentences.length;
            const fullText = sentences[i];

            setText((prev) => 
                isDeleting
                    ? fullText.substring(0, prev.length - 1)
                    : fullText.substring(0, prev.length + 1)
            );

            setTypingSpeedState(isDeleting ? deletingSpeed : typingSpeed);

            if (!isDeleting && text === fullText) {
                timer = setTimeout(() => setIsDeleting(true), pauseDuration);
                return;
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum((prev) => prev + 1);
                timer = setTimeout(handleType, 500); // small pause before typing next
                return;
            }
            
            timer = setTimeout(handleType, typingSpeedState);
        };

        timer = setTimeout(handleType, typingSpeedState);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, sentences, typingSpeed, deletingSpeed, pauseDuration, typingSpeedState]);

    return (
        <span className="inline-flex items-center min-h-[48px] sm:min-h-[48px] justify-center text-center">
            <span>{text}</span>
            <span className="inline-block w-[2px] h-[1em] bg-brand-primary ml-1 animate-pulse"></span>
        </span>
    );
};

export default TypewriterEffect;
