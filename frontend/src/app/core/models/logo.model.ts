export interface Logo {
    ID?: number;
    type: 'icon' | 'text'; // Tipo de logo: "icon" (solo logo) o "text" (logo con texto)
    url: string; // URL del logo
    altText?: string; // Texto alternativo para accesibilidad
    description?: string; // Descripción opcional del logo
    corporationID: number; // Relación con la corporación
}