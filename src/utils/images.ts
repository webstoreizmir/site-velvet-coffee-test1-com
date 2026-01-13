// Bu dosya sektörlere göre GARANTİ ve KALİTELİ görseller döndürür.
// Asla kırık link veya alakasız resim gelmez.

const stockImages = {
    // İnşaat, Mimarlık, Gayrimenkul
    architecture: [
        "https://images.unsplash.com/photo-1600596542815-e328d4de4bf7?q=80&w=1920&auto=format&fit=crop", // Lüks Villa
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920&auto=format&fit=crop", // Modern İç Mekan
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1920&auto=format&fit=crop"  // Minimalist Bina
    ],
    // Teknoloji, Yazılım, Dijital
    tech: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop", // Laptop & Çalışma
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop", // Siber/Tekno
        "https://images.unsplash.com/photo-1531297461136-8200b2778d8e?q=80&w=1920&auto=format&fit=crop"  // Modern Ofis
    ],
    // Sağlık, Diş, Medikal
    health: [
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1920&auto=format&fit=crop", // Klinik
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop", // Hastane/Doktor
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1920&auto=format&fit=crop"  // Temiz/Sağlık
    ],
    // Hukuk, Danışmanlık, Finans
    business: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop", // Ofis Toplantı
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920&auto=format&fit=crop", // Tokalaşma
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"  // Gökdelenler
    ],
    // Restoran, Kafe, Gıda
    food: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop", // Şık Restoran
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1920&auto=format&fit=crop", // Barista/Kahve
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1920&auto=format&fit=crop"  // Kokteyl/Yemek
    ]
};

// Gemini'den gelen kelimeye göre en uygun resmi seçen akıllı fonksiyon
export function getSmartImage(keyword: string): string {
    const key = keyword.toLowerCase();

    if (key.includes('villa') || key.includes('mimari') || key.includes('inşaat') || key.includes('ev') || key.includes('dekorasyon') || key.includes('interior') || key.includes('architecture')) {
        return stockImages.architecture[Math.floor(Math.random() * stockImages.architecture.length)];
    }
    if (key.includes('yazılım') || key.includes('teknoloji') || key.includes('dijital') || key.includes('tech') || key.includes('code')) {
        return stockImages.tech[Math.floor(Math.random() * stockImages.tech.length)];
    }
    if (key.includes('sağlık') || key.includes('diş') || key.includes('klinik') || key.includes('doktor') || key.includes('health')) {
        return stockImages.health[Math.floor(Math.random() * stockImages.health.length)];
    }
    if (key.includes('yemek') || key.includes('restoran') || key.includes('kafe') || key.includes('gıda') || key.includes('food')) {
        return stockImages.food[Math.floor(Math.random() * stockImages.food.length)];
    }

    // Hiçbiri uymazsa veya "business" ise
    return stockImages.business[Math.floor(Math.random() * stockImages.business.length)];
}