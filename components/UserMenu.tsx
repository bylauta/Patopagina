'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useTheme } from '@/lib/theme';

export default function UserMenu() {
    const { data: session } = useSession();
    const { language } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    if (!session) {
        return (
            <Link
                href="/login"
                className="p-2 text-warmGray-700 hover:text-warmGray-900 transition-smooth"
                aria-label="Iniciar Sesión"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </Link>
        );
    }

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-warmGray-50 transition-smooth border border-transparent hover:border-warmGray-200"
            >
                <div className="w-8 h-8 rounded-full bg-warmGray-800 text-white flex items-center justify-center text-sm font-medium">
                    {session.user?.name?.[0] || 'U'}
                </div>
                <span className="hidden lg:block text-sm font-medium text-warmGray-700">
                    {session.user?.name?.split(' ')[0]}
                </span>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-soft py-2 border border-warmGray-100 animate-in fade-in zoom-in-95 duration-200 origin-top-right z-50">
                    <div className="px-4 py-3 border-b border-warmGray-100">
                        <p className="text-xs text-warmGray-500">Conectado como</p>
                        <p className="text-sm font-medium text-warmGray-900 truncate">{session.user?.email}</p>
                    </div>

                    <Link
                        href="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-warmGray-700 hover:bg-warmGray-50 transition-colors"
                    >
                        {language === 'es' ? 'Mi Panel' : 'Dashboard'}
                    </Link>

                    <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                        {language === 'es' ? 'Cerrar Sesión' : 'Sign Out'}
                    </button>
                </div>
            )}
        </div>
    );
}
