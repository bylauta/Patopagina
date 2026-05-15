import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Format price in EUR with proper European formatting
 */
export function formatPrice(amount: number, locale: string = 'es-ES'): string {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

/**
 * Format dimensions for display
 */
export function formatDimensions(width: number, height: number, depth: number): string {
    return `${width} × ${height} × ${depth} cm`;
}
