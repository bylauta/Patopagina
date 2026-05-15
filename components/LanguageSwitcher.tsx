'use client';

import React from 'react';
import { useTheme } from '@/lib/theme';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useTheme();

    return (
        <div className="flex items-center gap-1 bg-warmGray-100 dark:bg-warmGray-700 rounded-full p-1">
            <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${language === 'es'
                        ? 'bg-warmGray-800 dark:bg-cream-100 text-white dark:text-warmGray-800'
                        : 'text-warmGray-600 dark:text-warmGray-300 hover:text-warmGray-800 dark:hover:text-cream-100'
                    }`}
            >
                ES
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${language === 'en'
                        ? 'bg-warmGray-800 dark:bg-cream-100 text-white dark:text-warmGray-800'
                        : 'text-warmGray-600 dark:text-warmGray-300 hover:text-warmGray-800 dark:hover:text-cream-100'
                    }`}
            >
                EN
            </button>
        </div>
    );
}
