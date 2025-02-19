// src/app/core/models/task.model.ts
import { Project } from './project.model';

export interface Task {
    ID?: number;
    title: string;
    description?: string; // Opcional
    status: 'todo' | 'in_progress' | 'done'; // Estados posibles
    projectID: number; // Relación con el proyecto
    createdAt?: Date; // Opcional
    updatedAt?: Date; // Opcional
}