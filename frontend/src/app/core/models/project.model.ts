// src/app/core/models/project.model.ts
import { Client } from './client.model';
import { Task } from './task.model';
import { Technology } from './technology.model';

export interface Project {
    ID?: number;
    title: string;
    description?: string; // Opcional
    status: 'pending' | 'in_progress' | 'completed'; // Estados posibles
    clientID: number; // Relación con el cliente
    technologies?: Technology[]; // Tecnologías utilizadas en el proyecto
    tasks?: Task[];
    client?: Client; // Relación con el cliente
    createdAt?: Date; // Opcional
    updatedAt?: Date; // Opcional
}