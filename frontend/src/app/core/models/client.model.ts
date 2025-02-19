// src/app/core/models/client.model.ts
export interface Client {
    ID?: number;
    name: string;
    email: string;
    phone?: string; // Opcional
    address?: string; // Opcional
    createdAt?: Date; // Opcional
    updatedAt?: Date; // Opcional
}