export type ProjectDetailSection =
    | {
    type: "text";
    title: string;
    paragraphs: string[];
}
    | {
    type: "list";
    title: string;
    items: string[];
}
    | {
    type: "images";
    title: string;
    columns?: 1 | 2 | 3 | 4;
    imageSize?: "small" | "medium" | "large";
    images: {
        src: string;
        alt: string;
        size?: "small" | "medium" | "large";
    }[];
}
    | {
    type: "video";
    title: string;
    src: string;
};

export type ProjectDetail = {
    intro: string;
    sections: ProjectDetailSection[];
};

export const projectDetails: Partial<Record<string, ProjectDetail>> = {
    kalorimetre: {
        intro:
            "Mobil Programlama dersi kapsamında, Android Studio,Firebase ve Java kullanarak takım arkadaşlarımla geliştirdiğimiz kalori takip uygulaması.",

        sections: [
            {
                type: "text",
                title: "Proje Hakkında",
                paragraphs: [
                    "Uygulama; kullanıcıların hesap oluşturmasına, giriş yapmasına ve kişisel bilgilerini girmesine olanak tanır. Günlük kalori alımını ve beslenme alışkanlıklarını takip etmelerine yardımcı olmak amacıyla geliştirildi.",
                    "Uygulamadaki veritabanı, tüketilen yiyeceklerin kalori bilgilerinin kaydedilmesini ve geçmiş verilerin takip edilmesini sağlar. Günlük kalori hedefi grafiklerle görüntülenebilir. Arayüzde karanlık tema desteği de bulunur.",
                ],
            },
            {
                type: "list",
                title: "Öne Çıkan Özellikler",
                items: [
                    "Hesap oluşturma ve giriş yapma",
                    "Kişisel bilgileri kaydetme",
                    "Günlük kalori alımını takip etme",
                    "Kalori hedefini grafiklerle görüntüleme",
                    "Tüketilen yiyecekleri ve kalori miktarlarını kaydetme",
                    "Geçmiş verileri inceleme",
                    "Karanlık tema",
                    "Android desteği",
                ],
            },
            {
                type: "list",
                title: "Teknolojiler",
                items: [
                    "Java",
                    "Android Studio JellyFish",
                    "XML",
                    "Firebase Realtime Database",
                    "Firebase Authentication",
                ],
            },
            {
                type: "images",
                title: "Uygulama Ekranları",
                columns: 3,
                imageSize: "small",
                images: [
                    {
                        src: "/images/projects/kalorimetre/1.jpeg",
                        alt: "1",
                    },
                    {
                        src: "/images/projects/kalorimetre/2.jpeg",
                        alt: "2",
                    },
                    {
                        src: "/images/projects/kalorimetre/3.jpeg",
                        alt: "3",
                    },
                    {
                        src: "/images/projects/kalorimetre/4.jpeg",
                        alt: "4",
                    },
                    {
                        src: "/images/projects/kalorimetre/5.jpeg",
                        alt: "5",
                    },
                    {
                        src: "/images/projects/kalorimetre/6.jpeg",
                        alt: "6",
                    },
                    {
                        src: "/images/projects/kalorimetre/7.jpeg",
                        alt: "7",
                    },
                ],
            },
        ],
    },
    library: {
        intro:
            "Talha Kabakus danışmanlığında, Eren Sönmez ve Uğursah Aslantürk ile birlikte geliştirdiğimiz Spring Web MVC tabanlı kütüphane otomasyon sistemi.",

        sections: [
            {
                type: "text",
                title: "Proje Hakkında",
                paragraphs: [
                    "Proje, kütüphane hizmetlerini dijital ortama taşıyarak kullanıcıların hesap oluşturmasına, kitapları incelemesine, favorilerine eklemesine ve kitap kiralamasına olanak tanır.",
                    "Kitap bilgileri üçüncü parti bir kitap API’sinden dinamik olarak alınır. Kütüphane görevlileri için geliştirilen yönetici paneli ise üyelik ve işlem takibini kolaylaştırır.",
                ],
            },
            {
                type: "list",
                title: "Öne Çıkan Özellikler",
                items: [
                    "Kullanıcı hesabı oluşturma ve kütüphane sistemine erişim",
                    "Kitapları inceleme",
                    "Kitapları favorilere ekleme",
                    "Kitap kiralama",
                    "Kitap bilgilerinin harici API’den alınması",
                    "Yönetici panelinden üyelik ve işlemleri takip etme",
                ],
            },
            {
                type: "text",
                title: "Teknik Altyapı",
                paragraphs: [
                    "Uygulama Spring Web MVC ile yapılandırıldı. Kullanıcı, kitap ve kiralama verileri MSSQL veritabanında tutuldu ve JDBC aracılığıyla uygulamaya bağlandı.",
                    "Servisler Docker ile konteynerleştirildi. Birim testlerinde JUnit, uygulama kayıtlarında ise Log4j kullanıldı.",
                ],
            },
            {
                type: "list",
                title: "Kullanılan Teknolojiler",
                items: [
                    "Java",
                    "Spring Web MVC",
                    "MSSQL",
                    "JDBC",
                    "Docker",
                    "JUnit",
                    "Log4j",
                    "Üçüncü parti kitap API’si",
                ],
            },
            {
                type: "text",
                title: "Ekip Çalışması",
                paragraphs: [
                    "Projeyi ekip arkadaşlarım Eren Sönmez ve Uğursah Aslantürk ile birlikte, Talha Kabakus danışmanlığında geliştirdik. Çalışma boyunca gerçek hayata yönelik bir uygulamanın tasarım, geliştirme, test ve dağıtım adımlarını ekip olarak deneyimledik.",
                ],
            },
            {
                type: "images",
                title: "Uygulama Ekranları",
                columns: 2,
                imageSize: "large",
                images: [
                    {
                        src: "/images/projects/library/k1.jpeg",
                        alt: "1",
                    },
                    {
                        src: "/images/projects/library/k2.jpeg",
                        alt: "2",
                    },
                    {
                        src: "/images/projects/library/k3.jpeg",
                        alt: "3",
                    },
                    {
                        src: "/images/projects/library/k4.jpeg",
                        alt: "4",
                    },
                    {
                        src: "/images/projects/library/k5.jpeg",
                        alt: "5",
                    },
                    {
                        src: "/images/projects/library/k6.jpeg",
                        alt: "6",
                    },
                    {
                        src: "/images/projects/library/k7.jpeg",
                        alt: "7",
                    },
                    {
                        src: "/images/projects/library/k8.jpeg",
                        alt: "7",
                    },
                    {
                        src: "/images/projects/library/k9.jpeg",
                        alt: "7",
                    },
                ],
            },
        ],
    },
    braintumor: {
        intro:
            "Derin Öğrenme dersi kapsamında, Pakize Erdogmus danışmanlığında geliştirdiğimiz MRI görüntülerinden beyin tümörü sınıflandırma projesi.",

        sections: [
            {
                type: "text",
                title: "Proje Hakkında",
                paragraphs: [
                    "Projede, MRI görüntülerinden beyin tümörlerini sınıflandırmak amacıyla CNN ve transfer öğrenme yöntemlerini uyguladık. Kaggle’daki Brain MRI Images for Brain Tumor Detection veri setini kullandık.",
                    "GoogLeNet, VGG16, MobileNet ve ResNet50 mimarilerini, ekibimizin geliştirdiği daha hafif MyCNN modeliyle karşılaştırdık.",
                ],
            },
            {
                type: "list",
                title: "Karşılaştırılan Modeller",
                items: [
                    "GoogLeNet",
                    "VGG16",
                    "MobileNet",
                    "ResNet50",
                    "Ekibimizin geliştirdiği MyCNN",
                ],
            },
            {
                type: "text",
                title: "Benim Katkım",
                paragraphs: [
                    "Projede GoogLeNet modelinin eğitimini üstlendim. Ekip olarak model eğitim parametrelerini ve sonuçları değerlendirerek detaylı bir rapor hazırladık.",
                ],
            },
            {
                type: "list",
                title: "Değerlendirme ve Raporlama",
                items: [
                    "Accuracy",
                    "Precision",
                    "Recall",
                    "F1-score",
                    "Eğitim grafikleri",
                    "Confusion matrix",
                ],
            },
            {
                type: "text",
                title: "Ekip ve Danışman",
                paragraphs: [
                    "Projeyi Zafer Işıklı, Betül Güleç, Enes Şahin ve Bilal Tatar ile birlikte, Pakize Erdogmus danışmanlığında geliştirdik.",
                ],
            },
            {
                type: "video",
                title: "Proje Videosu",
                src: "/videos/brain-tumor-demo.mp4",
            },
        ],
    },
    emotionmusic: {
        intro:
            "Bitirme projem kapsamında, kullanıcının yüz ifadesinden duygu tahmini yapan ve ruh hâline uygun müzikler öneren uçtan uca bir Android mobil uygulaması geliştirdim.",

        sections: [
            {
                type: "text",
                title: "Proje Hakkında",
                paragraphs: [
                    "Proje; görüntü işleme, derin öğrenme, ses analizi ve mobil uygulama geliştirme bileşenlerini bir araya getiriyor. Android uygulaması kullanıcının yüz ifadesinden ruh hâlini tahmin ediyor ve bu ruh hâline uygun müzikler öneriyor.",
                    "Müzikler yerel sunucudaki Python tabanlı REST API aracılığıyla yönetiliyor. API, YouTube Music API üzerinden belirli aralıklarla müzik bilgilerini alıyor ve SQLite veritabanına kaydediyor. Kayıt kontrolü aynı şarkının tekrar eklenmesini önlüyor.",
                ],
            },
            {
                type: "text",
                title: "Duygu Tanıma",
                paragraphs: [
                    "FER-2013 veri setiyle CNN ve ResNet50V2 modellerini eğittim. Duygu tahmini, Android uygulamasına entegre edilerek kullanıcının fotoğrafı üzerinden gerçekleştiriliyor.",
                ],
            },
            {
                type: "text",
                title: "Müzik Sınıflandırma",
                paragraphs: [
                    "Müzik verilerinden log-mel spektrogramlar oluşturdum. Müziklerin ruh hâlini sınıflandırmak için VGG16 tabanlı CNN ile Random Forest modelini birleştiren hibrit bir yaklaşım kullandım.",
                ],
            },
            {
                type: "text",
                title: "Android Uygulaması",
                paragraphs: [
                    "Uygulamayı Java ve XML ile geliştirdim. Kullanıcılar hesaplarıyla giriş yapabiliyor ve favori şarkılarını kaydedip daha sonra görüntüleyebiliyor. Kullanıcı bilgileri ve favoriler SQLite veritabanında tutuluyor.",
                ],
            },
            {
                type: "list",
                title: "Kullanılan Teknolojiler",
                items: [
                    "Android, Java ve XML",
                    "Python ve REST API",
                    "SQLite",
                    "FER-2013",
                    "CNN ve ResNet50V2",
                    "VGG16 ve Random Forest",
                    "Log-mel spektrogram",
                    "YouTube Music API",
                ],
            },
            {
                type: "video",
                title: "Demo Videosu",
                src: "/videos/emotion-app-demo.mp4",
            },
        ],
    },
    rateflag: {
        intro:
            "Flutter ile geliştirilen Rate Flag, kullanıcıların içerikleri puanlamasına ve Green Flag veya Red Flag olarak değerlendirmesine olanak tanıyan bir mobil uygulamadır. Puanlama ve filtreleme özellikleriyle kullanıcıların içerikleri inceleyip daha bilinçli kararlar vermesine yardımcı olur.",

        sections: [
            {
                type: "text",
                title: "Proje Hakkında",
                paragraphs: [
                    "Rate Flag, topluluk değerlendirmelerini görünür kılmayı ve kullanıcılar tarafından olumlu bulunan içerikleri öne çıkarmayı amaçlar. Kullanıcılar içeriklere puan verebilir, Green Flag veya Red Flag değerlendirmesi yapabilir ve içeriklerin detaylarını inceleyebilir.",
                    "Uygulama, Android ve iOS cihazlara uyum sağlayacak şekilde Flutter ile geliştirildi. Durum yönetiminde Bloc/Cubit yaklaşımı, uygulama altyapısında Firebase kullanıldı.",
                ],
            },
            {
                type: "list",
                title: "Öne Çıkan Özellikler",
                items: [
                    "İçeriklere puan verme",
                    "Green Flag ve Red Flag değerlendirmeleri",
                    "İçeriklerde arama ve filtreleme",
                    "Detaylı içerik inceleme ekranları",
                    "İnternet bağlantısı durumunu kontrol etme",
                    "Açık ve koyu tema desteği",
                    "Android ve iOS desteği",
                ],
            },
            {
                type: "list",
                title: "Teknolojiler",
                items: [
                    "Flutter",
                    "Dart",
                    "Flutter Bloc ve Cubit",
                    "Firebase Core",
                    "Firebase",
                    "Connectivity Plus",
                    "Lottie Animations",
                ],
            },
            {
                type: "text",
                title: "UI / UX",
                paragraphs: [
                    "Uygulamada sade ve okunabilir bir arayüz hedeflendi. Farklı ekran boyutlarına uyum sağlayan tasarım yaklaşımı Android ve iOS cihazlarda tutarlı bir deneyim sunar.",
                    "Lottie animasyonları kullanıcı deneyimini destekler. Yükleniyor, hata ve boş içerik durumları için ayrı arayüz durumları kullanılır; navigasyon da kullanıcıyı uygulama içinde yönlendirecek şekilde tasarlanmıştır.",
                ],
            },
            {
                type: "images",
                title: "Uygulama Ekranları",
                columns: 2,
                imageSize: "medium",
                images: [
                    {
                        src: "/images/projects/rateflag/1.jpeg",
                        alt: "Rate Flag ana ekranı",
                    },
                    {
                        src: "/images/projects/rateflag/2.jpeg",
                        alt: "Rate Flag arama ve filtreleme ekranı",
                    },
                    {
                        src: "/images/projects/rateflag/3.jpeg",
                        alt: "Rate Flag içerik detay ekranı",
                    },
                    {
                        src: "/images/projects/rateflag/4.jpeg",
                        alt: "Rate Flag ana ekranı",
                    },
                    {
                        src: "/images/projects/rateflag/5.jpeg",
                        alt: "Rate Flag arama ve filtreleme ekranı",
                    },
                    {
                        src: "/images/projects/rateflag/6.jpeg",
                        alt: "Rate Flag içerik detay ekranı",
                    },
                    {
                        src: "/images/projects/rateflag/7.jpeg",
                        alt: "Rate Flag ana ekranı",
                    },
                    {
                        src: "/images/projects/rateflag/8.jpeg",
                        alt: "Rate Flag arama ve filtreleme ekranı",
                    },
                    {
                        src: "/images/projects/rateflag/9.jpeg",
                        alt: "Rate Flag içerik detay ekranı",
                    },
                    {
                        src: "/images/projects/rateflag/10.jpeg",
                        alt: "Rate Flag ana ekranı",
                    },
                    {
                        src: "/images/projects/rateflag/11.jpeg",
                        alt: "Rate Flag arama ve filtreleme ekranı",
                    },
                  
                ],
            },
        ],
    },
    connectinno: {
        intro:
            "Connectinno, diyetisyen, yoga eğitmeni ve fitness koçu gibi farklı yapay zekâ personaları üzerinden kullanıcıya rehberlik sunan bir Flutter mobil uygulamasıdır. Google Gemini (Vertex AI) entegrasyonu, persona’ya göre kişiselleştirilmiş sohbet yanıtları sağlar.",

        sections: [
            {
                type: "text",
                title: "Proje Hakkında",
                paragraphs: [
                    "Uygulama, kullanıcıların farklı uzmanlık alanlarına sahip yapay zekâ personalarıyla sohbet etmesini sağlar. Persona’ların sistem talimatları Firebase Remote Config üzerinden yönetilir.",
                    "Sohbet mesajları Hive kullanılarak cihazda saklanır; böylece kullanıcılar sohbet geçmişlerine yeniden erişebilir. Uygulama mimarisi Data, Domain ve Presentation katmanlarına ayrılmıştır.",
                ],
            },
            {
                type: "list",
                title: "Öne Çıkan Özellikler",
                items: [
                    "Diyetisyen, yoga eğitmeni ve fitness koçu gibi AI personaları",
                    "Google Gemini (Vertex AI) ile kişiselleştirilmiş sohbet",
                    "Firebase Remote Config üzerinden yönetilen persona talimatları",
                    "Hive ile cihazda saklanan sohbet geçmişi",
                    "Yanıt hazırlanırken Lottie animasyonlu yazıyor göstergesi",
                    "BLoC/Cubit ile durum yönetimi",
                    "Data, Domain ve Presentation katmanlarından oluşan Clean Architecture",
                    "Hata takibi için özel AppLogger",
                ],
            },
            {
                type: "list",
                title: "Teknolojiler",
                items: [
                    "Flutter",
                    "Dart",
                    "Flutter BLoC / Cubit",
                    "Firebase Core",
                    "Firebase Remote Config",
                    "Google Gemini (Vertex AI)",
                    "Hive",
                    "Lottie",
                ],
            },
            {
                type: "images",
                title: "Uygulama Tanıtımı",
                columns: 1,
                imageSize: "large",
                images: [
                    {
                        src: "/gif/demo.gif",
                        alt: "Connectinno uygulamasında AI persona ile sohbet demosu",
                    },
                ],
            },
            
        ],
    },
};