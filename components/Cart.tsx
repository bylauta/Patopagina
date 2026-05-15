'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { useTheme } from '@/lib/theme';
import { translations } from '@/lib/translations';
import { formatPrice } from '@/lib/utils';

export default function Cart() {
    const { items, removeItem, updateQuantity, totalPrice, isOpen, closeCart } = useCart();
    const { language } = useTheme();
    const t = translations[language];

    if (!isOpen) return null;

    // Calculate total items
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 animate-fade-in"
                onClick={closeCart}
            />

            {/* Cart Panel */}
            <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-warmGray-900 shadow-soft-lg z-50 animate-slide-up flex flex-col transition-colors duration-300">
                <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-warmGray-900 shadow-xl transition-colors duration-300">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                            <h2 className="text-lg font-medium text-warmGray-900 dark:text-cream-100" id="slide-over-title">
                                {t.cart} ({totalItems})
                            </h2>
                            <div className="ml-3 flex h-7 items-center">
                                <button
                                    type="button"
                                    className="relative -m-2 p-2 text-warmGray-400 dark:text-warmGray-500 hover:text-warmGray-500 dark:hover:text-warmGray-300 transition-colors"
                                    onClick={closeCart}
                                >
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Close panel</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="flow-root">
                                {items.length === 0 ? (
                                    <p className="text-center text-warmGray-500 dark:text-warmGray-400 py-10 transition-colors">
                                        {t.cartEmpty}
                                    </p>
                                ) : (
                                    <ul role="list" className="-my-6 divide-y divide-warmGray-200 dark:divide-warmGray-700">
                                        {items.map((item) => (
                                            <li key={`${item.product.id}-${item.product.modelColor}`} className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-warmGray-200 dark:border-warmGray-700 bg-cream-50 dark:bg-warmGray-800 transition-colors">
                                                    {/* Placeholder image/viewer for cart */}
                                                    <div className="w-full h-full flex items-center justify-center bg-cream-100 dark:bg-warmGray-800 text-2xl transition-colors"
                                                        style={{ backgroundColor: item.product.modelColor, opacity: 0.8 }}>
                                                        🏠
                                                    </div>
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-warmGray-900 dark:text-cream-100 transition-colors">
                                                            <h3>
                                                                <a href="#">{item.product.name}</a>
                                                            </h3>
                                                            <p className="ml-4">{formatPrice(item.product.price)}</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-warmGray-500 dark:text-warmGray-400 transition-colors">{item.product.materials[0]}</p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <div className="flex items-center gap-2">
                                                            <button
                                                                onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                                                                className="w-6 h-6 rounded-full border border-warmGray-300 dark:border-warmGray-600 flex items-center justify-center text-warmGray-600 dark:text-warmGray-300 hover:bg-warmGray-100 dark:hover:bg-warmGray-800 transition-colors"
                                                            >
                                                                -
                                                            </button>
                                                            <p className="text-warmGray-500 dark:text-warmGray-400 transition-colors">Qty {item.quantity}</p>
                                                            <button
                                                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                                className="w-6 h-6 rounded-full border border-warmGray-300 dark:border-warmGray-600 flex items-center justify-center text-warmGray-600 dark:text-warmGray-300 hover:bg-warmGray-100 dark:hover:bg-warmGray-800 transition-colors"
                                                            >
                                                                +
                                                            </button>
                                                        </div>

                                                        <div className="flex">
                                                            <button
                                                                type="button"
                                                                onClick={() => removeItem(item.product.id)}
                                                                className="font-medium text-warmGray-800 dark:text-cream-200 hover:text-warmGray-600 dark:hover:text-cream-50 transition-colors"
                                                            >
                                                                {t.remove}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-warmGray-200 dark:border-warmGray-700 px-4 py-6 sm:px-6 bg-cream-50 dark:bg-warmGray-900 transition-colors">
                        <div className="flex justify-between text-base font-medium text-warmGray-900 dark:text-cream-100 transition-colors">
                            <p>{t.subtotal}</p>
                            <p>{formatPrice(totalPrice)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-warmGray-500 dark:text-warmGray-400 transition-colors">
                            {t.shippingCalculated}
                        </p>
                        <div className="mt-6">
                            <Link
                                href="/checkout"
                                onClick={closeCart}
                                className="flex items-center justify-center rounded-xl border border-transparent bg-warmGray-900 dark:bg-cream-100 px-6 py-3 text-base font-medium text-white dark:text-warmGray-900 shadow-sm hover:bg-warmGray-800 dark:hover:bg-white transition-all duration-300"
                            >
                                {t.checkout}
                            </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-warmGray-500 dark:text-warmGray-400 transition-colors">
                            <p>
                                {t.or}{' '}
                                <button
                                    type="button"
                                    className="font-medium text-warmGray-800 dark:text-cream-200 hover:text-warmGray-600 dark:hover:text-cream-50 transition-colors"
                                    onClick={closeCart}
                                >
                                    {t.continueShopping}
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
