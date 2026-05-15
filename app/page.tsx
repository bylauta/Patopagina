'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/lib/theme';
import { translations } from '@/lib/translations';
import { getProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function HomePage() {
    const { language } = useTheme();
    const t = translations[language];
    const products = getProducts(language);
    const whatsappNumber = '34640888571';
    const whatsappMessage = language === 'es'
        ? 'Hola me gustaria recibir mas informacion'
        : 'Hello, I would like more information';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="pt-16 md:pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-cream-50 via-cream-100 to-wood-light dark:from-warmGray-900 dark:via-warmGray-800 dark:to-warmGray-900 overflow-hidden transition-colors duration-500">
                <div className="absolute inset-0 opacity-5 dark:opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-wood-natural dark:bg-warmGray-500 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-warmGray-400 dark:bg-wood-dark rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <RevealOnScroll className="text-center lg:text-left z-10">
                            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-warmGray-800 dark:text-cream-100 mb-6 leading-tight transition-colors">
                                {t.heroTitle}<br />
                                <span className="text-warmGray-600 dark:text-warmGray-400">{t.heroSubtitle}</span>
                            </h1>

                            <p className="text-lg md:text-xl text-warmGray-700 dark:text-warmGray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors">
                                {t.heroDescription}
                                <span className="block mt-2 font-medium text-warmGray-900 dark:text-cream-50">{t.heroCraftsmanship}</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                <a
                                    href="#productos"
                                    className="px-8 py-4 bg-warmGray-800 dark:bg-cream-100 text-white dark:text-warmGray-900 rounded-2xl font-semibold hover:shadow-soft-lg transition-all duration-300 btn-premium"
                                >
                                    {t.exploreCollection}
                                </a>
                                <a
                                    href="#sobre-nosotros"
                                    className="px-8 py-4 bg-white dark:bg-transparent text-warmGray-800 dark:text-cream-100 rounded-2xl font-semibold hover:shadow-soft dark:hover:bg-warmGray-800 transition-all duration-300 border border-warmGray-300 dark:border-warmGray-600 btn-premium"
                                >
                                    {t.ourStory}
                                </a>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-warmGray-600 dark:text-warmGray-400 transition-colors">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-warmGray-800 dark:text-cream-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{t.trustShipping}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-warmGray-800 dark:text-cream-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <span>{t.trustWarranty}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-warmGray-800 dark:text-cream-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{t.trustOrigin}</span>
                                </div>
                            </div>
                        </RevealOnScroll>

                        {/* Right: Image */}
                        <RevealOnScroll className="relative h-[500px] lg:h-[700px] w-full hidden md:block" delay={0.2}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-wood-natural/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4" />
                            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/dog-hero.png"
                                    alt="Golden Retriever en casa PawConcept"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="productos" className="py-20 bg-cream-50 dark:bg-warmGray-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-16">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-warmGray-800 dark:text-cream-100 mb-4 transition-colors">
                            {t.ourCollection}
                        </h2>
                        <p className="text-lg text-warmGray-600 dark:text-warmGray-400 max-w-2xl mx-auto transition-colors">
                            {t.collectionDescription}
                        </p>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <RevealOnScroll
                                key={product.id}
                                delay={index * 0.1}
                            >
                                <ProductCard product={product} />
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="sobre-nosotros" className="py-20 bg-white dark:bg-warmGray-800 transition-colors duration-500">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <RevealOnScroll>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-warmGray-800 dark:text-cream-100 mb-6 transition-colors">
                                {t.aboutTitle}
                            </h2>
                            <div className="space-y-4 text-warmGray-700 dark:text-warmGray-300 leading-relaxed transition-colors">
                                <p>{t.aboutP1}</p>
                                <p>{t.aboutP2}</p>
                                <p className="font-medium text-warmGray-900 dark:text-white">
                                    {t.aboutP3}
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-6">
                                <div>
                                    <p className="font-serif text-3xl font-bold text-warmGray-800 dark:text-cream-100 transition-colors">500+</p>
                                    <p className="text-sm text-warmGray-600 dark:text-warmGray-400 transition-colors">{t.happyHomes}</p>
                                </div>
                                <div>
                                    <p className="font-serif text-3xl font-bold text-warmGray-800 dark:text-cream-100 transition-colors">100%</p>
                                    <p className="text-sm text-warmGray-600 dark:text-warmGray-400 transition-colors">{t.handcrafted}</p>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll className="relative h-[400px] w-full" delay={0.2}>
                            <div className="absolute inset-0 bg-gradient-to-br from-wood-light to-wood-natural rounded-3xl shadow-soft-lg overflow-hidden">
                                <Image
                                    src="/images/workshop.png"
                                    alt="Taller artesanal PawConcept"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-warmGray-800 dark:bg-warmGray-950 text-white transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">
                            {t.whyChoose}
                        </h2>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-3 gap-8">
                        <RevealOnScroll className="text-center p-8" delay={0.1}>
                            <div className="w-16 h-16 bg-wood-natural rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-warmGray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-4">{t.premiumDesign}</h3>
                            <p className="text-cream-200 leading-relaxed">
                                {t.premiumDesc}
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll className="text-center p-8" delay={0.2}>
                            <div className="w-16 h-16 bg-wood-natural rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-warmGray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-4">{t.animalWelfare}</h3>
                            <p className="text-cream-200 leading-relaxed">
                                {t.animalWelfareDesc}
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll className="text-center p-8" delay={0.3}>
                            <div className="w-16 h-16 bg-wood-natural rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-warmGray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-4">{t.sustainability}</h3>
                            <p className="text-cream-200 leading-relaxed">
                                {t.sustainabilityDesc}
                            </p>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contacto" className="py-20 bg-gradient-to-br from-cream-100 to-wood-light dark:from-warmGray-900 dark:to-warmGray-800 transition-colors duration-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <RevealOnScroll>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-warmGray-800 dark:text-cream-100 mb-6 transition-colors">
                            {t.ctaTitle}
                        </h2>
                        <p className="text-lg text-warmGray-700 dark:text-warmGray-300 mb-8 transition-colors">
                            {t.ctaDescription}
                        </p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block px-8 py-4 bg-warmGray-800 dark:bg-cream-100 text-white dark:text-warmGray-900 rounded-2xl font-semibold hover:shadow-soft-lg transition-all duration-300 btn-premium"
                        >
                            {t.contactTeam}
                        </a>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
}
