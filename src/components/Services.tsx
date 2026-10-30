export function Services() {
    return (
        <section id="services" className="scroll-mt-24 pt-28 pb-20">
            <div className="container mx-auto px-6">
                <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
                    Servisler
                </h2>

                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        className="rounded-xl border border-flower-pink/30 bg-white/80 p-6 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                        <div
                            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-flower-pink/30 text-3xl">
                            📱
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-leaf-green">
                            Mobil Uygulama Geliştirme
                        </h3>
                        <p className="text-gray-600">
                            Flutter ve Android teknolojileriyle kullanıcı ihtiyaçlarına yönelik
                            mobil uygulamalar geliştiriyorum.
                        </p>
                    </div>

                    <div
                        className="rounded-xl border border-flower-green/30 bg-white/80 p-6 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                        <div
                            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-flower-green/30 text-3xl">
                            🌐
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-leaf-green">
                            .NET Web Geliştirme
                        </h3>
                        <p className="text-gray-600">
                            C# ve .NET ile web uygulamaları geliştiriyor, arayüzleri API ve
                            veritabanı katmanlarıyla bir araya getiriyorum.
                        </p>
                    </div>

                    <div
                        className="rounded-xl border border-flower-purple/30 bg-white/80 p-6 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                        <div
                            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-flower-purple/30 text-3xl">
                            🔌
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-leaf-green">
                            API ve Backend Entegrasyonu
                        </h3>
                        <p className="text-gray-600">
                            REST API’ler geliştiriyor ve mobil uygulamaların backend
                            servisleriyle veri alışverişini sağlıyorum.
                        </p>
                    </div>

                    <div
                        className="rounded-xl border border-flower-yellow/50 bg-white/80 p-6 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                        <div
                            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-flower-yellow/40 text-3xl">
                            🗄️
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-leaf-green">
                            Veritabanı Entegrasyonu
                        </h3>
                        <p className="text-gray-600">
                            Firebase, SQL ve SQLite gibi veritabanlarıyla uygulama verilerinin
                            yönetimi üzerinde çalışıyorum.
                        </p>
                    </div>

                    <div
                        className="rounded-xl border border-flower-pink/30 bg-white/80 p-6 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                        <div
                            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-flower-pink/30 text-3xl">
                            🤝
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-leaf-green">
                            Ekiplerle Ürün Geliştirme
                        </h3>
                        <p className="text-gray-600">
                            Tasarım, mobil ve backend ekipleriyle birlikte çalışarak fikirlerin
                            çalışan ürünlere dönüşmesine katkı sağlıyorum.
                        </p>
                    </div>

                    <div
                        className="rounded-xl border border-flower-purple/30 bg-white/80 p-6 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                        <div
                            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-flower-purple/30 text-3xl">
                            ☁️
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-leaf-green">
                            Bulut Servisleri
                        </h3>
                        <p className="text-gray-600">
                            Projelerin ihtiyaçlarına göre Firebase ve AWS servisleriyle
                            çalışıyorum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}