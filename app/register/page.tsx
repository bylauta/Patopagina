'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
    const router = useRouter();
    const [data, setData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                router.push('/login?registered=true');
            } else {
                const text = await res.text();
                setError(text);
            }
        } catch (err) {
            setError('Error al registrar usuario');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cream-50 pt-20 pb-20 px-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-soft p-8">
                <h2 className="font-serif text-3xl font-bold text-center text-warmGray-800 mb-2">Crear Cuenta</h2>
                <p className="text-center text-warmGray-500 mb-8">Únase a PawConcept</p>

                {error && (
                    <div className="bg-red-50 text-red-500 text-sm p-3 rounded-xl mb-6 text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-warmGray-700 mb-1">Nombre</label>
                        <input
                            type="text"
                            required
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-warmGray-300 focus:border-warmGray-600 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-warmGray-700 mb-1">Email</label>
                        <input
                            type="email"
                            required
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-warmGray-300 focus:border-warmGray-600 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-warmGray-700 mb-1">Contraseña</label>
                        <input
                            type="password"
                            required
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-warmGray-300 focus:border-warmGray-600 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-warmGray-800 text-white rounded-xl font-semibold hover:bg-warmGray-900 transition-colors mt-4"
                    >
                        Registrarse
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-warmGray-500">
                    ¿Ya tiene cuenta?{' '}
                    <Link href="/login" className="text-warmGray-900 font-semibold hover:underline">
                        Iniciar Sesión
                    </Link>
                </p>
            </div>
        </div>
    );
}
