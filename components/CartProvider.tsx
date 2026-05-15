'use client';

import React from 'react';
import { CartProvider as CartContextProvider } from '@/lib/cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
    return <CartContextProvider>{children}</CartContextProvider>;
}
