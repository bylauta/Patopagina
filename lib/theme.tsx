'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface ThemeContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('es');
    const [mounted, setMounted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Load language from localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('pawconcept-language') as Language;
        if (savedLanguage) setLanguage(savedLanguage);
        setMounted(true);

        // Force 'light' class always
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    }, []);

    // Save language to localStorage
    useEffect(() => {
        if (mounted) {
            localStorage.setItem('pawconcept-language', language);
        }
    }, [language, mounted]);

    // Handle language change with animation trigger
    const handleSetLanguage = (lang: Language) => {
        if (lang === language) return;
        setIsAnimating(true);
        setTimeout(() => {
            setLanguage(lang);
            setTimeout(() => {
                setIsAnimating(false);
            }, 50);
        }, 300); // Wait for fade out before changing language
    };

    const value: ThemeContextType = {
        language,
        setLanguage: handleSetLanguage,
    };

    return (
        <ThemeContext.Provider value={value}>
            <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}
