export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    materials: string[];
    features: string[];
    modelColor: string;
    image?: string;
}

const productsData = {
    es: [
        {
            id: 'nordic-cube',
            name: 'The Nordic Cube',
            description: 'No es una caseta, es una pieza de diseño. Estructura optimizada para el flujo de aire y aislamiento térmico.',
            price: 895,
            dimensions: { width: 80, height: 75, depth: 80 },
            materials: ['Roble Escandinavo', 'Acero Microperforado', 'Aislamiento Natural'],
            features: ['Ventilación optimizada', 'Aislamiento térmico superior', 'Acabado resistente al agua', 'Diseño modular'],
            modelColor: '#D4C4A8',
            image: '/images/nordic-cube.png',
        },
        {
            id: 'minimalist-haven',
            name: 'The Minimalist Haven',
            description: 'Líneas puras y funcionalidad excepcional. Un refugio que complementa la estética de su hogar contemporáneo.',
            price: 1150,
            dimensions: { width: 90, height: 80, depth: 85 },
            materials: ['Nogal Europeo', 'Vidrio Templado', 'Textil Premium'],
            features: ['Paneles de vidrio templado', 'Interior con cojín premium', 'Estructura reforzada', 'Fácil limpieza'],
            modelColor: '#B8A588',
            image: '/images/minimalist-haven.png',
        },
        {
            id: 'alpine-retreat',
            name: 'The Alpine Retreat',
            description: 'Inspirado en la arquitectura alpina moderna. Combina tradición artesanal con innovación contemporánea.',
            price: 1350,
            dimensions: { width: 100, height: 85, depth: 90 },
            materials: ['Pino Alpino', 'Piedra Natural', 'Cobre Envejecido'],
            features: ['Techo inclinado con aislamiento', 'Base de piedra natural', 'Detalles en cobre', 'Resistencia extrema'],
            modelColor: '#E8DCC8',
            image: '/images/alpine-retreat.png',
        },
    ],
    en: [
        {
            id: 'nordic-cube',
            name: 'The Nordic Cube',
            description: 'Not just a kennel, a design piece. Structure optimized for airflow and thermal insulation.',
            price: 895,
            dimensions: { width: 80, height: 75, depth: 80 },
            materials: ['Scandinavian Oak', 'Perforated Steel', 'Natural Insulation'],
            features: ['Optimized ventilation', 'Superior thermal insulation', 'Water-resistant finish', 'Modular design'],
            modelColor: '#D4C4A8',
            image: '/images/nordic-cube.png',
        },
        {
            id: 'minimalist-haven',
            name: 'The Minimalist Haven',
            description: 'Pure lines and exceptional functionality. A shelter that complements the aesthetic of your contemporary home.',
            price: 1150,
            dimensions: { width: 90, height: 80, depth: 85 },
            materials: ['European Walnut', 'Tempered Glass', 'Premium Textile'],
            features: ['Tempered glass panels', 'Premium interior cushion', 'Reinforced structure', 'Easy cleaning'],
            modelColor: '#B8A588',
            image: '/images/minimalist-haven.png',
        },
        {
            id: 'alpine-retreat',
            name: 'The Alpine Retreat',
            description: 'Inspired by modern alpine architecture. Combines artisan tradition with contemporary innovation.',
            price: 1350,
            dimensions: { width: 100, height: 85, depth: 90 },
            materials: ['Alpine Pine', 'Natural Stone', 'Aged Copper'],
            features: ['Sloped insulated roof', 'Natural stone base', 'Copper details', 'Extreme durability'],
            modelColor: '#E8DCC8',
            image: '/images/alpine-retreat.png',
        },
    ]
};

export function getProducts(language: 'es' | 'en' = 'es'): Product[] {
    return productsData[language];
}

export function getProductById(id: string, language: 'es' | 'en' = 'es'): Product | undefined {
    return productsData[language].find(product => product.id === id);
}

// Default export for backward compatibility if needed, though strictly we should use getProducts(lang)
export const products = productsData.es;
