'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// import { useCart } from '@/lib/cart';
import { useTheme } from '@/lib/theme';
import { translations } from '@/lib/translations';
// import Cart from './Cart';

import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const { totalItems, openCart } = useCart();
    const { language } = useTheme();
    const t = translations[language];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-warmGray-900/80 backdrop-blur-md border-b border-warmGray-200 dark:border-warmGray-700 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo */}
                        <a
                            href="/"
                            onClick={(e) => {
                                if (window.location.pathname === '/') {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                            className="flex items-center space-x-2 cursor-pointer"
                        >
                            <span className="font-serif text-2xl md:text-3xl font-bold text-warmGray-800 dark:text-cream-100 transition-colors">
                                PawConcept
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6">
                            <Link
                                href="/#productos"
                                className="text-warmGray-700 dark:text-warmGray-300 hover:text-warmGray-900 dark:hover:text-cream-100 transition-smooth text-sm font-medium px-3 py-1 rounded-lg btn-premium"
                            >
                                {t.products}
                            </Link>
                            <Link
                                href="/#sobre-nosotros"
                                className="text-warmGray-700 dark:text-warmGray-300 hover:text-warmGray-900 dark:hover:text-cream-100 transition-smooth text-sm font-medium px-3 py-1 rounded-lg btn-premium"
                            >
                                {t.about}
                            </Link>
                            <Link
                                href="/#contacto"
                                className="text-warmGray-700 dark:text-warmGray-300 hover:text-warmGray-900 dark:hover:text-cream-100 transition-smooth text-sm font-medium px-3 py-1 rounded-lg btn-premium"
                            >
                                {t.contact}
                            </Link>
                        </div>

                        {/* Right Side Controls */}
                        <div className="flex items-center space-x-3">
                            {/* Language Switcher - Desktop */}
                            <div className="hidden md:block">
                                <LanguageSwitcher />
                            </div>

                            {/* User Menu - Commented out for Catalog Mode */}
                            {/* <UserMenu /> */}



                            {/* Cart Button - Commented out for Catalog Mode */}
                            {/* <button
                                onClick={openCart}
                                className="relative p-2 text-warmGray-700 dark:text-warmGray-300 hover:text-warmGray-900 dark:hover:text-cream-100 transition-smooth"
                                aria-label="Abrir carrito"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg>
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-warmGray-800 dark:bg-cream-100 text-white dark:text-warmGray-800 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-scale-in">
                                        {totalItems}
                                    </span>
                                )}
                            </button> */}

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-2 text-warmGray-700 dark:text-warmGray-300 hover:text-warmGray-900 dark:hover:text-cream-100 transition-smooth"
                                aria-label="Menú"
                            >
                                {isMenuOpen ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white dark:bg-warmGray-900 border-t border-warmGray-200 dark:border-warmGray-700 animate-slide-up">
                        <div className="px-4 py-4 space-y-3">
                            <Link
                                href="/#productos"
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 text-warmGray-700 dark:text-warmGray-300 hover:text-warmGray-900 dark:hover:text-cream-100 transition-smooth font-medium"
                            >
                                {t.products}
                            </Link>
                            <Link
                                href="/#sobre-nosotros"
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 text-warmGray-700 dark:text-warmGray-300 hover:text-warmGray-900 dark:hover:text-cream-100 transition-smooth font-medium"
                            >
                                {t.about}
                            </Link>
                            <Link
                                href="/#contacto"
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 text-warmGray-700 dark:text-warmGray-300 hover:text-warmGray-900 dark:hover:text-cream-100 transition-smooth font-medium"
                            >
                                {t.contact}
                            </Link>
                            <div className="pt-3 border-t border-warmGray-200 dark:border-warmGray-700">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Cart Sidebar - Commented out for Catalog Mode */}
            {/* <Cart /> */}
        </>
    );
}



// import UserMenu from './UserMenu';
