'use client';

import React from 'react';
import { useTheme } from '@/lib/theme';

export default function TermsPage() {
    const { language } = useTheme();
    const content = language === 'es' ? {
        title: 'Términos y Condiciones',
        updated: 'Última actualización: 19 de enero de 2026',
        sections: [
            {
                title: 'Información general',
                body: [
                    'PawConcept ofrece productos de diseño para mascotas a través de pawconcept.es.',
                    'Al realizar un pedido, aceptas estos términos y condiciones.',
                ],
            },
            {
                title: 'Productos y disponibilidad',
                body: [
                    'Las características, materiales y precios se muestran en cada ficha de producto.',
                    'Podemos actualizar el catálogo o la disponibilidad sin previo aviso.',
                ],
            },
            {
                title: 'Precios y pagos',
                body: [
                    'Los precios incluyen impuestos aplicables, salvo indicación en contrario.',
                    'El pago se realiza a través de los métodos disponibles en el proceso de compra.',
                ],
            },
            {
                title: 'Envíos',
                body: [
                    'Realizamos envíos exclusivamente dentro de España.',
                    'Los plazos son estimados y pueden variar por causas logísticas.',
                ],
            },
            {
                title: 'Derecho de desistimiento',
                body: [
                    'Dispones de 14 días naturales para desistir de la compra desde la recepción del pedido.',
                    'El producto debe devolverse en perfecto estado y con su embalaje original.',
                ],
            },
            {
                title: 'Garantía y devoluciones',
                body: [
                    'Los productos están cubiertos por la garantía legal aplicable en España.',
                    'Para gestionar una devolución o incidencia, escribe a info@pawconcept.eu.',
                ],
            },
            {
                title: 'Propiedad intelectual',
                body: [
                    'Todo el contenido del sitio es propiedad de PawConcept o de sus licenciantes.',
                    'No está permitido el uso no autorizado de marcas, textos o imágenes.',
                ],
            },
            {
                title: 'Legislación aplicable',
                body: [
                    'Estos términos se rigen por la legislación española.',
                    'Cualquier conflicto se someterá a los juzgados y tribunales competentes de España.',
                ],
            },
        ],
    } : {
        title: 'Terms and Conditions',
        updated: 'Last updated: January 19, 2026',
        sections: [
            {
                title: 'General information',
                body: [
                    'PawConcept offers design pet products through pawconcept.es.',
                    'By placing an order, you accept these terms and conditions.',
                ],
            },
            {
                title: 'Products and availability',
                body: [
                    'Product features, materials, and prices are listed on each product page.',
                    'We may update the catalog or availability without prior notice.',
                ],
            },
            {
                title: 'Pricing and payments',
                body: [
                    'Prices include applicable taxes unless stated otherwise.',
                    'Payments are processed through the available methods at checkout.',
                ],
            },
            {
                title: 'Shipping',
                body: [
                    'We ship exclusively within Spain.',
                    'Delivery times are estimates and may vary due to logistics.',
                ],
            },
            {
                title: 'Right of withdrawal',
                body: [
                    'You have 14 calendar days to withdraw from the purchase after delivery.',
                    'Items must be returned in perfect condition and with original packaging.',
                ],
            },
            {
                title: 'Warranty and returns',
                body: [
                    'Products are covered by the legal warranty applicable in Spain.',
                    'To manage a return or incident, email info@pawconcept.eu.',
                ],
            },
            {
                title: 'Intellectual property',
                body: [
                    'All site content is owned by PawConcept or its licensors.',
                    'Unauthorized use of trademarks, texts, or images is not permitted.',
                ],
            },
            {
                title: 'Governing law',
                body: [
                    'These terms are governed by Spanish law.',
                    'Any dispute will be submitted to the competent courts in Spain.',
                ],
            },
        ],
    };

    return (
        <div className="pt-24 pb-20 min-h-screen bg-cream-50 dark:bg-warmGray-900 transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-warmGray-800 dark:text-cream-100 mb-4">
                    {content.title}
                </h1>
                <p className="text-sm text-warmGray-500 dark:text-warmGray-400 mb-10">
                    {content.updated}
                </p>
                <div className="space-y-10">
                    {content.sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="text-xl font-semibold text-warmGray-800 dark:text-cream-100 mb-3">
                                {section.title}
                            </h2>
                            <div className="space-y-2 text-warmGray-700 dark:text-warmGray-300">
                                {section.body.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
