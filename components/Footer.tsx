'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/lib/theme';
import { translations } from '@/lib/translations';

export default function Footer() {
    const { language } = useTheme();
    const t = translations[language];

    return (
        <footer className="bg-warmGray-800 dark:bg-warmGray-950 text-cream-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-serif text-2xl font-bold mb-4">PawConcept</h3>
                        <p className="text-cream-200 text-sm leading-relaxed mb-4">
                            {t.footerDescription}
                        </p>
                        <p className="text-cream-300 text-xs">
                            {t.copyright}
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-cream-50">{t.navigation}</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/#productos" className="text-cream-200 hover:text-cream-50 transition-smooth">
                                    {t.products}
                                </Link>
                            </li>
                            <li>
                                <Link href="/#sobre-nosotros" className="text-cream-200 hover:text-cream-50 transition-smooth">
                                    {t.about}
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contacto" className="text-cream-200 hover:text-cream-50 transition-smooth">
                                    {t.contact}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold mb-4 text-cream-50">{t.legal}</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy" className="text-cream-200 hover:text-cream-50 transition-smooth">
                                    {t.privacyPolicy}
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-cream-200 hover:text-cream-50 transition-smooth">
                                    {t.terms}
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping-returns" className="text-cream-200 hover:text-cream-50 transition-smooth">
                                    {t.shippingReturns}
                                </Link>
                            </li>
                            <li>
                                <span className="text-cream-300 text-xs">RGPD Compliant</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-warmGray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-cream-300">
                        <p>{t.madeWithLove}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
