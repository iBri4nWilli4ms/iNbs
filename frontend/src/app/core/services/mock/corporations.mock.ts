// src/app/core/services/mock-data/corporations.mock.ts
import { Corporation } from '../../models/corporation.model';
import { Logo } from '../../models/logo.model';
import { SocialMedia } from '../../models/social-media.model';

export const MOCK_CORPORATIONS: Corporation[] = [
    {
        ID: 1,
        name: "iNbs",
        description: "Una empresa líder en desarrollo de software.",
        contactEmail: "contact@techcorp.com",
        phone: "+1234567890",
        website: "https://techcorp.com",
        businessHours: "Lun-Vie: 9AM - 6PM",
        industry: "Tecnología",
        foundedDate: new Date("2010-01-01"),
        mission: "Transformar el mundo a través de la tecnología.",
        vision: "Ser líderes globales en innovación tecnológica.",
        certifications: ["ISO 9001", "Great Place to Work"],
        users: [],
    }
];