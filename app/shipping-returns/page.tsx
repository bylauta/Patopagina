'use client';

import React from 'react';
import { useTheme } from '@/lib/theme';

export default function ShippingReturnsPage() {
    const { language } = useTheme();
    const content = language === 'es' ? {
        title: 'Envíos y Devoluciones',
        updated: 'Última actualización: 19 de enero de 2026',
        sections: [
            {
                title: 'Ámbito de envío',
                body: [
                    'Realizamos envíos exclusivamente dentro de España.',
                    'Si necesitas una entrega especial, consúltanos en info@pawconcept.eu.',
                ],
            },
            {
                title: 'Costes y plazos',
                body: [
                    'El envío es gratuito en España, salvo indicación contraria en la ficha del producto.',
                    'Los plazos de entrega son estimados y se comunicarán durante el proceso de compra.',
                ],
            },
            {
                title: 'Seguimiento y entrega',
                body: [
                    'Te informaremos del estado del pedido por correo electrónico.',
                    'Si detectas cualquier incidencia en la entrega, contáctanos lo antes posible.',
                ],
            },
            {
                title: 'Devoluciones',
                body: [
                    'Dispones de 14 días naturales para devolver tu pedido desde la recepción.',
                    'El producto debe devolverse sin usar y en su embalaje original.',
                ],
            },
            {
                title: 'Reembolsos',
                body: [
                    'Una vez recibida y revisada la devolución, procesaremos el reembolso por el mismo método de pago.',
                    'Los tiempos de reembolso pueden variar según la entidad financiera.',
                ],
            },
            {
                title: 'Contacto',
                body: [
                    'Para gestionar cambios, devoluciones o incidencias, escribe a info@pawconcept.eu.',
                ],
            },
        ],
    } : {
        title: 'Shipping and Returns',
        updated: 'Last updated: January 19, 2026',
        sections: [
            {
                title: 'Shipping scope',
                body: [
                    'We ship exclusively within Spain.',
                    'If you need a special delivery, contact us at info@pawconcept.eu.',
                ],
            },
            {
                title: 'Costs and delivery times',
                body: [
                    'Shipping is free within Spain unless otherwise stated on the product page.',
                    'Estimated delivery times are shown during checkout.',
                ],
            },
            {
                title: 'Tracking and delivery',
                body: [
                    'We will update you by email about your order status.',
                    'If you notice any delivery issues, contact us as soon as possible.',
                ],
            },
            {
                title: 'Returns',
                body: [
                    'You have 14 calendar days to return your order from the delivery date.',
                    'Items must be unused and returned in their original packaging.',
                ],
            },
            {
                title: 'Refunds',
                body: [
                    'Once the return is received and inspected, we will issue a refund to the original payment method.',
                    'Refund times may vary depending on your financial institution.',
                ],
            },
            {
                title: 'Contact',
                body: [
                    'To manage returns or incidents, email info@pawconcept.eu.',
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
