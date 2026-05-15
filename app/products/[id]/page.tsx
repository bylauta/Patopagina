
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useTheme } from '@/lib/theme';
import { translations } from '@/lib/translations';
import { getProductById } from '@/lib/products';
import Product3DViewer from '@/components/Product3DViewer';
import { formatPrice, formatDimensions } from '@/lib/utils';
import Link from 'next/link';

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { language } = useTheme();
    const t = translations[language];
    const id = params.id as string;
    const product = getProductById(id, language);
    const whatsappNumber = '34640888571';
    const whatsappMessage = language === 'es'
        ? `Hola estoy interesado en: ${product?.name || ''}`
        : `Hello, I'm interested in: ${product?.name || ''}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    const [is3DMode, setIs3DMode] = useState(false);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cream-50 dark:bg-warmGray-900">
                <div className="text-center">
                    <h1 className="text-2xl font-serif text-warmGray-800 dark:text-cream-100 mb-4">{t.productNotFound || "Producto no encontrado"}</h1>
                    <Link href="/" className="text-warmGray-600 dark:text-warmGray-400 hover:underline">
                        {t.backToHome || "Volver al inicio"}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 min-h-screen bg-cream-50 dark:bg-warmGray-900 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    href="/#productos"
                    className="inline-flex items-center text-warmGray-600 dark:text-warmGray-400 hover:text-warmGray-900 dark:hover:text-cream-100 mb-8 transition-colors group btn-premium px-4 py-2 rounded-lg"
                >
                    <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {t.backToCollection || (language === 'es' ? "Volver a la colección" : "Back to collection")}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Visuals */}
                    <div className="space-y-6">
                        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full bg-white dark:bg-warmGray-800 rounded-3xl overflow-hidden shadow-soft-lg">
                            {is3DMode ? (
                                <Product3DViewer
                                    color={product.modelColor}
                                    autoRotate={false}
                                />
                            ) : (
                                <div className="relative h-full w-full">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-wood-natural/20 to-transparent" />
                                    {product.image ? (
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-warmGray-300 dark:text-warmGray-600">
                                            <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Mode Toggle Button */}
                            <button
                                onClick={() => setIs3DMode(!is3DMode)}
                                className="absolute bottom-6 right-6 p-4 bg-white/90 dark:bg-warmGray-800/90 backdrop-blur-sm rounded-full shadow-lg transition-transform duration-300 group z-10 border border-warmGray-100 dark:border-warmGray-700 btn-premium"
                                aria-label={is3DMode ? "Ver foto" : "Ver en 3D"}
                            >
                                {is3DMode ? (
                                    <svg className="w-6 h-6 text-warmGray-700 dark:text-cream-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6 text-warmGray-700 dark:text-cream-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                    </svg>
                                )}
                                <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-warmGray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    {is3DMode ? (language === 'es' ? "Ver Foto" : "View Photo") : (language === 'es' ? "Ver 3D" : "View 3D")}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div>
                        <div className="mb-8">
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-warmGray-800 dark:text-cream-100 mb-4">
                                {product.name}
                            </h1>
                            <p className="text-2xl font-light text-warmGray-600 dark:text-warmGray-300">
                                {formatPrice(product.price)}
                            </p>
                        </div>

                        <div className="prose prose-lg dark:prose-invert mb-10 text-warmGray-600 dark:text-warmGray-300 font-light leading-relaxed">
                            <p>{product.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div>
                                <h3 className="text-sm uppercase tracking-wider font-semibold text-warmGray-400 dark:text-warmGray-500 mb-3">
                                    {t.dimensions || (language === 'es' ? "Dimensiones" : "Dimensions")}
                                </h3>
                                <p className="text-warmGray-800 dark:text-cream-100 font-medium">
                                    {formatDimensions(product.dimensions.width, product.dimensions.height, product.dimensions.depth)}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-sm uppercase tracking-wider font-semibold text-warmGray-400 dark:text-warmGray-500 mb-3">
                                    {t.materials || (language === 'es' ? "Materiales" : "Materials")}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.materials.map((material) => (
                                        <span key={material} className="text-warmGray-800 dark:text-cream-100">
                                            {material}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm uppercase tracking-wider font-semibold text-warmGray-400 dark:text-warmGray-500 mb-4">
                                {t.features || "Características"}
                            </h3>
                            <ul className="space-y-3">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start text-warmGray-700 dark:text-warmGray-300">
                                        <svg className="w-5 h-5 text-wood-medium mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-light">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-12 pt-8 border-t border-warmGray-200 dark:border-warmGray-700">
                            <p className="text-warmGray-600 dark:text-warmGray-400 mb-4 text-sm">
                                {language === 'es'
                                    ? "¿Interesado en este diseño? Contáctenos para personalizar su pedido."
                                    : "Interested in this design? Contact us to customize your order."}
                            </p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block w-full text-center px-8 py-4 bg-warmGray-800 dark:bg-cream-100 text-white dark:text-warmGray-900 rounded-xl font-medium tracking-wide hover:shadow-soft-lg transition-all duration-300 btn-premium"
                            >
                                {t.contactTeam || (language === 'es' ? "Consultar Disponibilidad" : "Inquire Availability")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
