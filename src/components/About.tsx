import Image from "next/image";
export function About() {
    return (
        <section id="about" className="scroll-mt-24 pt-28 pb-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Benim Hakkımda</h2>
                <div className="mx-auto grid max-w-7xl items-center gap-1 px-6 md:grid-cols-2">
                    <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">
                            Bilgisayar Mühendisliği mezunuyum; mobil ve web uygulama geliştirme üzerine çalışıyorum.
                            Mobil tarafta Flutter ve React Native ile çapraz platform projeler üretirken, Kotlin ve Java
                            ile de Android tarafında yer alıyorum. Web projelerimde ise C# (.NET) ve Java çözümleriyle
                            ilerliyorum. RESTful API'ler, istemci-sunucu iletişimi ve Firebase servisleriyle uygulama
                            katmanını güçlendirirken, SQL veritabanı yönetimi ve AWS bulut altyapısıyla uçtan uca sağlam
                            sistemler kuruyorum.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Geliştirme sürecinde performans, sürdürülebilir mimari ve kullanıcı deneyimini
                            birlikte ele alıyorum.Modüler kod yapısı, tutarlı API-veritabanı
                            entegrasyonu ve güncel yapay zeka (AI) araçlarını süreçlerime dahil ederek uçtan uca
                            çözümler üretiyor; modern yazılım pratikleriyle kendimi sürekli geliştiriyorum.
                            Yeni teknolojileri ve modern yazılım geliştirme pratiklerini takip ederek teknik yetkinliğimi
                            geliştirmeyi sürdürüyorum.
                        </p>
                        <div className="flex space-x-2">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-flower-pink">10+</div>
                                <div className="text-sm text-gray-600">Proje</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-flower-green">4</div>
                                <div className="text-sm text-gray-600">Öğrenme Hayatı</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-flower-purple">100%</div>
                                <div className="text-sm text-gray-600">Müşteri Memnuniyeti</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            className="w-80 h-80 mx-auto bg-gradient-to-br from-flower-pink to-flower-purple rounded-full animate-float"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl">
                            <Image
                                src="/images/betul.png"
                                alt="Betül Güleç"
                                width={180}
                                height={180}
                                className="relative z-10 rounded-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}