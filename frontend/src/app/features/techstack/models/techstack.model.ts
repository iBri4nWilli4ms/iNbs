// src/app/core/models/tech-stack.model.ts
export interface TechStackItem {
    name: string; // Nombre de la herramienta o tecnología
    description: string; // Breve descripción de la herramienta
    icon?: string; // URL del ícono asociado (opcional)
    url?: string; // Enlace a la documentación o sitio oficial (opcional)
}