'use client';

import React, { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
    }, [status, router]);

    if (status === 'loading') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cream-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-warmGray-800"></div>
            </div>
        );
    }

    if (!session) return null;

    return (
        <div className="min-h-screen pt-24 pb-20 bg-cream-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="font-serif text-4xl font-bold text-warmGray-800">
                        Bienvenido, {session.user?.name}
                    </h1>
                    <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="px-6 py-2 bg-white border border-warmGray-200 rounded-xl text-warmGray-600 hover:bg-warmGray-50 transition-colors"
                    >
                        Cerrar Sesión
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* User Info */}
                    <div className="bg-white rounded-3xl p-8 shadow-soft h-fit">
                        <h2 className="font-serif text-xl font-bold text-warmGray-800 mb-6">Mi Perfil</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-warmGray-500 uppercase">Email</label>
                                <p className="text-warmGray-800">{session.user?.email}</p>
                            </div>
                            <div className="pt-4 border-t border-warmGray-100">
                                <p className="text-sm text-warmGray-500">
                                    Miembro desde: {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Orders */}
                    <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-soft">
                        <h2 className="font-serif text-xl font-bold text-warmGray-800 mb-6">Mis Pedidos</h2>

                        {orders.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-warmGray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-warmGray-800 mb-2">No hay pedidos recientes</h3>
                                <p className="text-warmGray-500 mb-6">Aún no ha realizado ninguna compra.</p>
                                <Link
                                    href="/"
                                    className="inline-block px-6 py-3 bg-warmGray-800 text-white rounded-xl font-medium hover:bg-warmGray-900 transition-colors"
                                >
                                    Explorar Colección
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {/* Order list would go here */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
