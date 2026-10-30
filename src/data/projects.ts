export type Project = {
    id: string;
    title: string;
    type: string;
    description: string;
    technologies: string[];
};

export const projects: Project[] = [
    {
        id: "kalorimetre",
        title: "KaloriMetre",
        type: "Mobil",
        description:
            "Java ile geliştirdiğimiz kalori takip uygulaması, kullanıcıların günlük kalori alımlarını ve beslenme alışkanlıklarını takip etmesini sağlar. Firebase ile yiyecek kayıtları, günlük grafikler ve karanlık tema özellikleri sunar.",
        technologies: ["Java", "XML", "Firebase"],
    },
    {
        id: "library",
        title: "Akıllı Kütüphane Web Sitesi",
        type: "Web",
        description:
            "Ekibimizle Spring Web MVC kullanarak geliştirdiğimiz kütüphane otomasyon sistemi; kitapları inceleme, favorilere ekleme ve kiralama işlemlerini sunar. Harici kitap API’si ve yönetici paneli içerir.",
        technologies: ["Java", "Spring Web MVC", "MSSQL", "JDBC", "Docker"],
    },
    {
        id: "braintumor",
        title: "Beyin Tümörlerinin Sınıflandırılması",
        type: "Yapay Zeka",
        description:
            "MRI görüntülerinden beyin tümörlerini sınıflandırmak için CNN ve transfer öğrenme yöntemlerini uyguladık. Farklı modelleri karşılaştırdık; ben GoogLeNet modelini eğittim.",
        technologies: ["CNN", "GoogLeNet", "VGG16", "MobileNet", "ResNet50"],
    },
    {
        id: "emotionmusic",
        title: "Duygu Analizi ve Müzik Uygulaması",
        type: "Mobil",
        description:
            "Android uygulaması kullanıcının yüz ifadesinden duygu tahmini yapıp ruh hâline uygun müzikler önerir. Görüntü ve müzik sınıflandırma modellerini Python REST API’si ve SQLite ile entegre ettim.",
        technologies: ["Android", "Java", "Python", "CNN", "SQLite"],
    },
    {
        id: "rateflag",
        title: "Rate Flag",
        type: "Mobil",
        description:
            "Kullanıcıların içerikleri puanlayıp olumlu veya olumsuz değerlendirebildiği Flutter uygulaması. Puanlama, filtreleme ve detaylı inceleme özellikleri sunar.",
        technologies: ["Flutter", "Dart", "BLoC", "Cubit", "Firebase"],
    },
    {
        id: "simai",
        title: "SimAI Mobil Uygulaması",
        type: "Mobil",
        description:
            "2025 yılında şirket bünyesinde geliştirilen SimAI mobil uygulamasına katkı sağladım. Flutter ve Dio ile backend iletişimi, Firebase servisleri ve MobilBox Pay entegrasyonu üzerinde çalıştım.",
        technologies: ["Flutter", "Dio", "Firebase", "MobilBox Pay"],
    },
    {
        id: "connectinno",
        title: "Connectinno",
        type: "Mobil",
        description:
            "Farklı yapay zekâ uzman persona’larıyla sohbet sunan Flutter uygulaması. Gemini Vertex AI ile kişiselleştirilmiş yanıtlar verir; sohbet geçmişi Hive ile cihazda saklanır.",
        technologies: ["Flutter", "BLoC", "Firebase", "Vertex AI", "Hive"],
    },
    {
        id: "mevsimmanav",
        title: "Mevsim Manav",
        type: "Web",
        description:
            "Kullanıcıların mevsimlik ürünleri inceleyip sipariş verebildiği web uygulaması. Ürün listeleme, filtreleme, sepet ve sipariş süreçlerini içerir.",
        technologies: ["C#", ".NET", "SQL Server", "REST API"],
    },
];