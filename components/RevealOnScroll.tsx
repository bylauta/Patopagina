'use client';

import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // Delay in seconds
}

export default function RevealOnScroll({ children, className = '', delay = 0 }: RevealOnScrollProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
                rootMargin: '0px 0px -50px 0px', // Trigger slighly before bottom
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const delayStyle = delay ? { transitionDelay: `${delay}s` } : {};

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 transform ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                } ${className}`}
            style={delayStyle}
        >
            {children}
        </div>
    );
}
