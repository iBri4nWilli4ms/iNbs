import { Corporation } from "./corporation.model";
import { User } from "./user.model";

// src/app/core/models/social-media.model.ts
export interface SocialMedia {
    ID?: number;
    platform: 'linkedin' | 'github' | 'twitter' | 'website'; // Valores permitidos
}


export interface UserSocialMediaAccount {
    userID: number;       // Relación con el usuario
    platformID: number;   // Referencia a SocialMediaPlatform.id
    URL: string;          // URL específica para el usuario en dicha plataforma
}

export interface CorporationSocialMediaAccount {
    corporationID: number; // Relación con la corporación
    platformID: number;    // Referencia a SocialMediaPlatform.id
    URL: string;           // URL específica para la corporación en dicha plataforma
}
