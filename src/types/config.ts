export interface SiteConfig {
    metadata: {
        title: string;
        description: string;
    };
    theme: {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
        };
        fonts: {
            heading: string;
            body: string;
        };
        style: string;
    };
    images: {
        hero_keyword: string;
        about_keyword: string;
        feature_keywords: string[];
    };
    content: {
        hero: {
            headline: string;
            subheadline: string;
            ctaButtonText: string;
        };
        about: {
            title: string;
            description: string;
            stats: Array<{ label: string; value: string }>;
        };
        services: Array<{
            title: string;
            description: string;
            icon: string;
        }>;
        // YENİ EKLENENLER
        process: Array<{
            step: string;
            title: string;
            description: string;
        }>;
        faq: Array<{
            question: string;
            answer: string;
        }>;
        // BİTİŞ
        testimonials: Array<{
            name: string;
            comment: string;
            role: string;
        }>;
        contact: {
            address: string;
            phone: string;
            email: string;
            map_query: string;
        };
    };
}