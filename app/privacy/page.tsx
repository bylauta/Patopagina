'use client';

import React from 'react';
import { useTheme } from '@/lib/theme';

export default function PrivacyPage() {
    const { language } = useTheme();
    const content = language === 'es' ? {
        title: 'Política de Privacidad',
        updated: 'Última actualización: 19 de enero de 2026',
        sections: [
            {
                title: 'Responsable del tratamiento',
                body: [
                    'Responsable: PawConcept.',
                    'Correo de contacto: info@pawconcept.eu.',
                    'Esta política se aplica a los datos personales recogidos a través de pawconcept.es.',
                ],
            },
            {
                title: 'Datos que recopilamos',
                body: [
                    'Datos identificativos y de contacto que nos facilitas en formularios o durante el proceso de compra.',
                    'Datos de navegación necesarios para el funcionamiento del sitio y la mejora del servicio.',
                ],
            },
            {
                title: 'Finalidades y legitimación',
                body: [
                    'Gestionar solicitudes, consultas y pedidos (ejecución de un contrato o medidas precontractuales).',
                    'Enviar comunicaciones relacionadas con tu pedido y el servicio (interés legítimo).',
                    'Mejorar la experiencia y el rendimiento del sitio (interés legítimo y/o consentimiento cuando aplique).',
                ],
            },
            {
                title: 'Destinatarios y transferencias',
                body: [
                    'No cedemos datos a terceros salvo obligación legal o proveedores necesarios para la prestación del servicio.',
                    'No se prevén transferencias internacionales fuera del Espacio Económico Europeo.',
                ],
            },
            {
                title: 'Plazos de conservación',
                body: [
                    'Conservamos los datos mientras exista una relación contractual o sea necesario para cumplir obligaciones legales.',
                    'Los datos asociados a comunicaciones comerciales se conservarán hasta que revoques tu consentimiento.',
                ],
            },
            {
                title: 'Derechos de las personas usuarias',
                body: [
                    'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando un correo a info@pawconcept.eu.',
                    'Si consideras que tus derechos no han sido atendidos, puedes reclamar ante la Agencia Española de Protección de Datos (AEPD).',
                ],
            },
            {
                title: 'Seguridad',
                body: [
                    'Aplicamos medidas técnicas y organizativas razonables para proteger tus datos personales.',
                ],
            },
            {
                title: 'Cookies',
                body: [
                    'Utilizamos cookies para mejorar la experiencia de navegación. Puedes consultar más detalles en nuestra política de cookies.',
                ],
            },
        ],
    } : {
        title: 'Privacy Policy',
        updated: 'Last updated: January 19, 2026',
        sections: [
            {
                title: 'Data controller',
                body: [
                    'Controller: PawConcept.',
                    'Contact email: info@pawconcept.eu.',
                    'This policy applies to personal data collected through pawconcept.es.',
                ],
            },
            {
                title: 'Data we collect',
                body: [
                    'Identification and contact data you provide in forms or during checkout.',
                    'Browsing data required for site operation and service improvement.',
                ],
            },
            {
                title: 'Purposes and legal basis',
                body: [
                    'Manage inquiries, requests, and orders (contract performance or pre-contractual measures).',
                    'Send service-related communications (legitimate interest).',
                    'Improve user experience and site performance (legitimate interest and/or consent where applicable).',
                ],
            },
            {
                title: 'Recipients and transfers',
                body: [
                    'We do not share data with third parties unless legally required or necessary service providers.',
                    'No international transfers outside the EEA are expected.',
                ],
            },
            {
                title: 'Retention',
                body: [
                    'Data is kept while there is a contractual relationship or as required by law.',
                    'Marketing data is retained until you withdraw consent.',
                ],
            },
            {
                title: 'Your rights',
                body: [
                    'You may exercise access, rectification, erasure, objection, restriction, and portability rights by emailing info@pawconcept.eu.',
                    'You may also lodge a complaint with the Spanish Data Protection Authority (AEPD).',
                ],
            },
            {
                title: 'Security',
                body: [
                    'We apply reasonable technical and organizational measures to protect personal data.',
                ],
            },
            {
                title: 'Cookies',
                body: [
                    'We use cookies to improve browsing. More details are available in our cookie policy.',
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
