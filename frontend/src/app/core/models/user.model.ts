// src/app/core/models/user.model.ts
export interface User {
    ID?: number;
    name: string;
    email: string;
    phone?: string; // Opcional
    description?: string; // Breve descripción personal
    createdAt?: Date; // Opcional
    updatedAt?: Date; // Opcional
}


// src/app/core/models/user-technology.model.ts
import { Technology } from './technology.model';

export interface UserSkill {
    ID?: number;
    userID: number; // Relación con el usuario
    technologyID: number; // Relación con la tecnología
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert'; // Valores permitidos
    user?: User; // Objeto usuario (opcional)
    technology?: Technology; // Objeto tecnología (opcional)
}