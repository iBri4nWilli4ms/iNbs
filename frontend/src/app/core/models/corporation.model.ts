import { Logo } from "./logo.model";
import { SocialMedia } from "./social-media.model";
import { User } from "./user.model";

export interface Corporation {
    ID?: number;
    name: string; // Nombre de la organización
    description: string; // Descripción de la organización
    contactEmail: string; // Correo de contacto
    phone?: string; // Teléfono de contacto
    website?: string; // Sitio web oficial
    businessHours?: string; // Horario de atención
    industry?: string; // Industria o sector
    foundedDate?: Date; // Fecha de fundación
    mission?: string; // Misión
    vision?: string; // Visión
    certifications?: string[]; // Certificaciones o reconocimientos
    logos?: Logo[]; // Relación con logos
    socialMedias?: SocialMedia[]; // Relación con redes sociales
    users?: User[]; // Lista de usuarios asociados
}