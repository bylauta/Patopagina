'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { useTheme } from '@/lib/theme';
import { translations } from '@/lib/translations';
import { formatPrice } from '@/lib/utils';

export default function CheckoutPage() {
    const { items, totalPrice } = useCart();
    const { language } = useTheme();
    const t = translations[language];

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
        country: 'ES',
        phone: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(t.paymentMethod + ': Stripe Integration Pending');
        console.log('Form data:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen pt-32 pb-20 bg-cream-50">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <svg
                        className="w-24 h-24 mx-auto text-warmGray-300 mb-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                    </svg>
                    <h1 className="font-serif text-3xl font-bold text-warmGray-800 mb-4">
                        {t.emptyCart}
                    </h1>
                    <p className="text-warmGray-600 mb-8">
                        {t.collectionDescription}
                    </p>
                    <Link
                        href="/"
                        className="inline-block px-8 py-4 bg-warmGray-800 text-white rounded-2xl font-semibold hover:bg-warmGray-900 transition-smooth"
                    >
                        {t.continueShopping}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 bg-cream-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-warmGray-800 mb-12">
                    {t.checkout}
                </h1>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Checkout Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Contact Information */}
                            <div className="bg-white rounded-3xl p-8 shadow-soft">
                                <h2 className="font-serif text-2xl font-bold text-warmGray-800 mb-6">
                                    {t.contactInfo}
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-warmGray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-warmGray-300 focus:border-warmGray-600 focus:ring-2 focus:ring-warmGray-200 outline-none transition-smooth"
                                            placeholder="su@email.com"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-warmGray-700 mb-2">
                                                {language === 'es' ? 'Nombre' : 'First Name'}
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-warmGray-300 focus:border-warmGray-600 focus:ring-2 focus:ring-warmGray-200 outline-none transition-smooth"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-warmGray-700 mb-2">
                                                {language === 'es' ? 'Apellido' : 'Last Name'}
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-warmGray-300 focus:border-warmGray-600 focus:ring-2 focus:ring-warmGray-200 outline-none transition-smooth"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-warmGray-700 mb-2">
                                            {language === 'es' ? 'Teléfono' : 'Phone'}
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-warmGray-300 focus:border-warmGray-600 focus:ring-2 focus:ring-warmGray-200 outline-none transition-smooth"
                                            placeholder="+34 600 000 000"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Information */}
                            <div className="bg-white rounded-3xl p-8 shadow-soft">
                                <h2 className="font-serif text-2xl font-bold text-warmGray-800 mb-6">
                                    {t.shippingAddress}
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-warmGray-700 mb-2">
                                            {language === 'es' ? 'Dirección' : 'Address'}
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            required
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-warmGray-300 focus:border-warmGray-600 focus:ring-2 focus:ring-warmGray-200 outline-none transition-smooth"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-warmGray-700 mb-2">
                                                {language === 'es' ? 'Ciudad' : 'City'}
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                required
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-warmGray-300 focus:border-warmGray-600 focus:ring-2 focus:ring-warmGray-200 outline-none transition-smooth"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-warmGray-700 mb-2">
                                                {language === 'es' ? 'Código Postal' : 'Postal Code'}
                                            </label>
                                            <input
                                                type="text"
                                                name="postalCode"
                                                required
                                                value={formData.postalCode}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-warmGray-300 focus:border-warmGray-600 focus:ring-2 focus:ring-warmGray-200 outline-none transition-smooth"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-warmGray-700 mb-2">
                                            {language === 'es' ? 'País' : 'Country'}
                                        </label>
                                        <select
                                            name="country"
                                            required
                                            value={formData.country}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-warmGray-300 focus:border-warmGray-600 focus:ring-2 focus:ring-warmGray-200 outline-none transition-smooth"
                                        >
                                            <option value="ES">España</option>
                                            <option value="DE">Deutschland</option>
                                            <option value="FR">France</option>
                                            <option value="IT">Italia</option>
                                            <option value="PT">Portugal</option>
                                            <option value="NL">Nederland</option>
                                            <option value="BE">België</option>
                                            <option value="SE">Sverige</option>
                                            <option value="NO">Norge</option>
                                            <option value="DK">Danmark</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Section */}
                            <div className="bg-white rounded-3xl p-8 shadow-soft">
                                <h2 className="font-serif text-2xl font-bold text-warmGray-800 mb-6">
                                    {t.paymentMethod}
                                </h2>
                                <div className="bg-cream-100 rounded-2xl p-6 mb-6">
                                    <p className="text-sm text-warmGray-700 mb-4">
                                        Integration with Stripe pending. Available payment methods:
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-3 py-1 bg-white rounded-lg text-xs font-medium">💳 Card</span>
                                        <span className="px-3 py-1 bg-white rounded-lg text-xs font-medium">🍎 Apple Pay</span>
                                        <span className="px-3 py-1 bg-white rounded-lg text-xs font-medium">📱 Google Pay</span>
                                        <span className="px-3 py-1 bg-white rounded-lg text-xs font-medium">🏦 iDEAL</span>
                                        <span className="px-3 py-1 bg-white rounded-lg text-xs font-medium">💰 Klarna</span>
                                    </div>
                                </div>

                                {/* Stripe Elements would go here */}
                                <div className="border-2 border-dashed border-warmGray-300 rounded-2xl p-8 text-center text-warmGray-500">
                                    [Stripe Payment Element]
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-4 bg-warmGray-800 text-white rounded-2xl font-semibold hover:bg-warmGray-900 hover:shadow-soft-lg transition-all duration-300"
                            >
                                {t.completeOrder}
                            </button>

                            <p className="text-xs text-center text-warmGray-600">
                                {t.securePayment}
                            </p>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div>
                        <div className="bg-white rounded-3xl p-8 shadow-soft sticky top-24">
                            <h2 className="font-serif text-2xl font-bold text-warmGray-800 mb-6">
                                {t.orderSummary}
                            </h2>

                            <div className="space-y-4 mb-6">
                                {items.map(item => (
                                    <div key={item.product.id} className="flex gap-4">
                                        <div
                                            className="w-20 h-20 rounded-xl flex-shrink-0"
                                            style={{ backgroundColor: item.product.modelColor }}
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-warmGray-800">
                                                {item.product.name}
                                            </h3>
                                            <p className="text-sm text-warmGray-600">
                                                {t.quantity}: {item.quantity}
                                            </p>
                                            <p className="text-sm font-medium text-warmGray-800 mt-1">
                                                {formatPrice(item.product.price * item.quantity)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-warmGray-200 pt-6 space-y-3">
                                <div className="flex justify-between text-warmGray-700">
                                    <span>{t.subtotal}</span>
                                    <span>{formatPrice(totalPrice)}</span>
                                </div>
                                <div className="flex justify-between text-warmGray-700">
                                    <span>{t.shipping}</span>
                                    <span className="text-green-600 font-medium">{t.free}</span>
                                </div>
                                <div className="flex justify-between text-warmGray-700">
                                    <span>{t.vat}</span>
                                    <span>{formatPrice(totalPrice * 0.21)}</span>
                                </div>
                                <div className="border-t border-warmGray-200 pt-3 flex justify-between items-center">
                                    <span className="font-semibold text-warmGray-800 text-lg">{t.total}</span>
                                    <span className="font-serif text-3xl font-bold text-warmGray-800">
                                        {formatPrice(totalPrice * 1.21)}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 bg-cream-100 rounded-2xl p-4">
                                <p className="text-xs text-warmGray-700 leading-relaxed">
                                    ✓ {t.freeShipping}<br />
                                    ✓ {t.warranty}<br />
                                    ✓ {t.trustReturn}<br />
                                    ✓ {t.handcrafted}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
