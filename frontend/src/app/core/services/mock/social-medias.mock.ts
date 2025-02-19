import { CorporationSocialMediaAccount, SocialMedia, UserSocialMediaAccount } from "../../models/social-media.model";

export const MOCK_SOCIAL_MEDIAS: SocialMedia[] = [
    { ID: 1, platform: "linkedin" },
    { ID: 2, platform: "github" },
    { ID: 3, platform: "twitter" },
    { ID: 4, platform: "website" }
];



export const MOCK_USER_SOCIAL_MEDIA_ACCOUNTS: UserSocialMediaAccount[] = [
    { userID: 1, platformID: 1, URL: "https://linkedin.com/in/juan-perez" }, // Juan Pérez - LinkedIn
    { userID: 1, platformID: 2, URL: "https://github.com/juanperez" },       // Juan Pérez - GitHub
    { userID: 2, platformID: 3, URL: "https://twitter.com/marialopez" }      // María López - Twitter
];


export const MOCK_CORPORATION_SOCIAL_MEDIA_ACCOUNTS: CorporationSocialMediaAccount[] = [
    { corporationID: 1, platformID: 1, URL: "https://linkedin.com/company/techcorp" }, // TechCorp - LinkedIn
    { corporationID: 1, platformID: 2, URL: "https://github.com/techcorp" },           // TechCorp - GitHub
    { corporationID: 2, platformID: 3, URL: "https://twitter.com/innosoft" }           // InnoSoft - Twitter
];