'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/theme';
import { translations } from '@/lib/translations';

export default function GDPRNotice() {
    const { language } = useTheme();
    const t = translations[language];
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white/95 dark:bg-warmGray-900/95 backdrop-blur-sm p-4 rounded-2xl shadow-soft-lg border border-warmGray-200 dark:border-warmGray-700 z-50 animate-slide-up transition-colors duration-300">
            <p className="text-xs text-warmGray-700 dark:text-warmGray-300 mb-2">
                {t.gdprText}
            </p>
            <button
                onClick={() => setIsVisible(false)}
                className="text-xs font-medium text-warmGray-800 dark:text-cream-100 hover:text-warmGray-900 dark:hover:text-white underline"
            >
                {t.accept}
            </button>
        </div>
    );
}
