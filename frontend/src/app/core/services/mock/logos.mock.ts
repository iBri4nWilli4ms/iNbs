// src/app/core/services/mock-data/logos.mock.ts
import { Logo } from '../../models/logo.model';

export const MOCK_LOGOS: Logo[] = [
    { ID: 1, type: "icon", url: "assets/logos/logo-icon.png", altText: "Logo de TechCorp", corporationID: 1 },
    { ID: 2, type: "text", url: "assets/logos/logo-text.png", altText: "Logo con texto de TechCorp", corporationID: 1 },
    { ID: 3, type: "icon", url: "assets/logos/logo-icon-innosoft.png", altText: "Logo de InnoSoft", corporationID: 1 },
    { ID: 4, type: "text", url: "assets/logos/logo-text-innosoft.png", altText: "Logo con texto de InnoSoft", corporationID: 1 }
];  