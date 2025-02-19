// src/app/core/services/mock-data/tech-stack.mock.ts
import { TechStackItem } from "./techstack.model";

export const MOCK_TECH_STACK: TechStackItem[] = [
    {
        name: "Angular",
        description: "Framework frontend para construir aplicaciones web.",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/angular.svg", // Ícono de Angular
        url: "https://angular.io"
    },
    {
        name: "TypeScript",
        description: "Lenguaje de programación que extiende JavaScript.",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg", // Ícono de TypeScript
        url: "https://www.typescriptlang.org"
    },
    {
        name: "Node.js",
        description: "Entorno de ejecución para JavaScript del lado del servidor.",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/nodedotjs.svg", // Ícono de Node.js
        url: "https://nodejs.org"
    },
    {
        name: "MongoDB",
        description: "Base de datos NoSQL orientada a documentos.",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg", // Ícono de MongoDB
        url: "https://www.mongodb.com"
    }

];