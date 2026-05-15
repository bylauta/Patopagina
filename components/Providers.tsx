'use client';

import React from 'react';
import { ThemeProvider as ThemeContextProvider } from '@/lib/theme';
import { CartProvider as CartContextProvider } from '@/lib/cart';
import AuthProvider from './AuthProvider';
import Navigation from './Navigation';
import Footer from './Footer';
import GDPRNotice from './GDPRNotice';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <ThemeContextProvider>
                <CartContextProvider>
                    <Navigation />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                    <GDPRNotice />
                </CartContextProvider>
            </ThemeContextProvider>
        </AuthProvider>
    );
}
