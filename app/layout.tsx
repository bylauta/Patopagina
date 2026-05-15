import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-serif",
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: "PawConcept - Arquitectura a escala para su miembro más leal",
    description: "Diseños minimalistas que elevan su hogar mientras brindan el refugio que su compañero merece. Fabricación artesanal española.",
    keywords: ["casas de perro", "diseño minimalista", "arquitectura canina", "lujo para mascotas", "dog house premium", "PawConcept"],
    authors: [{ name: "PawConcept" }],
    icons: {
        icon: '/favicon.png',
    },
    openGraph: {
        title: "PawConcept - Arquitectura Canina Minimalista",
        description: "Casas de perro de diseño arquitectónico. Fabricación artesanal española.",
        type: "website",
        locale: "es_ES",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className={`${cormorant.variable} ${montserrat.variable}`} suppressHydrationWarning>
            <body className="antialiased">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html >
    );
}
