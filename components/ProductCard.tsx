'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';
// import { useCart } from '@/lib/cart';
import { useTheme } from '@/lib/theme';
import { translations } from '@/lib/translations';
import { formatPrice, formatDimensions } from '@/lib/utils';
import Product3DViewer from './Product3DViewer';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    // const { addItem } = useCart();
    const { language } = useTheme();
    const t = translations[language];
    const [is3DMode, setIs3DMode] = useState(false);
    // const [isAdding, setIsAdding] = useState(false);

    /* const handleAddToCart = () => {
        setIsAdding(true);
        addItem(product);

        // Reset animation after a delay
        setTimeout(() => {
            setIsAdding(false);
        }, 600);
    }; */

    return (
        <div className="group relative bg-white dark:bg-warmGray-800 rounded-3xl overflow-hidden border border-warmGray-100 dark:border-warmGray-700 shadow-soft hover:shadow-soft-xl dark:shadow-none dark:hover:bg-warmGray-750 transition-all duration-500">
            <div className="h-[400px] w-full bg-cream-50 dark:bg-warmGray-900/50 relative overflow-hidden">
                {is3DMode ? (
                    <Product3DViewer
                        color={product.modelColor}
                        autoRotate={true}
                    />
                ) : (
                    <div className="relative h-full w-full">
                        <Image
                            src={product.image || '/dog-hero.png'}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                    </div>
                )}
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

            {/* Product Details */}
            <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="font-serif text-2xl font-bold text-warmGray-800 dark:text-cream-100 mb-1">
                            {product.name}
                        </h3>
                        <p className="text-sm text-warmGray-500 dark:text-warmGray-400">
                            {formatDimensions(product.dimensions.width, product.dimensions.height, product.dimensions.depth)}
                        </p>
                    </div>
                    <p className="font-medium text-lg text-warmGray-800 dark:text-cream-100 bg-cream-100 dark:bg-warmGray-700 px-4 py-1 rounded-full">
                        {formatPrice(product.price)}
                    </p>
                </div>

                <p className="text-warmGray-600 dark:text-warmGray-300 text-sm leading-relaxed mb-6">
                    {product.description}
                </p>

                {/* Dimensions */}
                <div className="mb-4 pb-4 border-b border-warmGray-200 dark:border-warmGray-700">
                    <p className="text-sm text-warmGray-500 dark:text-warmGray-400 mb-1">{t.dimensions}</p>
                    <p className="text-warmGray-800 dark:text-cream-100 font-medium">
                        {formatDimensions(product.dimensions.width, product.dimensions.height, product.dimensions.depth)}
                    </p>
                </div>

                {/* Materials */}
                <div className="mb-6">
                    <p className="text-sm text-warmGray-500 dark:text-warmGray-400 mb-2">{t.materials}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {product.materials.map((material) => (
                            <span
                                key={material}
                                className="text-xs font-medium text-warmGray-500 dark:text-warmGray-400 bg-white dark:bg-warmGray-900 border border-warmGray-200 dark:border-warmGray-600 px-3 py-1 rounded-full"
                            >
                                {material}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                    <p className="text-sm text-warmGray-500 dark:text-warmGray-400 mb-2">{t.features}</p>
                    <ul className="space-y-1">
                        {product.features.map((feature, index) => (
                            <li key={index} className="flex items-start text-sm text-warmGray-700 dark:text-warmGray-300">
                                <svg
                                    className="w-4 h-4 text-warmGray-600 dark:text-warmGray-400 mr-2 mt-0.5 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Add to Cart Button */}
                {/* View Details Button */}
                <Link
                    href={`/products/${product.id}`}
                    className="w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-warmGray-800 dark:bg-cream-100 text-white dark:text-warmGray-900 hover:shadow-soft-lg btn-premium"
                >
                    {language === 'es' ? 'Ver Detalles' : 'View Details'}
                </Link>

                {/* Additional Info */}
                <p className="text-xs text-center text-warmGray-500 mt-4">
                    {t.freeShipping} • {t.warranty}
                </p>
            </div>
        </div>
    );
}
