export function Experience() {
    return (
        <section id="experience" className="scroll-mt-24 pt-28 pb-20">
            <div className="container mx-auto px-6">
                <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
                    Work Experience
                </h2>

                <div className="mx-auto max-w-4xl space-y-8">

                    <div className="relative border-l-2 border-soil-brown pl-8">
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-soil-brown"/>

                        <div
                            className="rounded-lg border border-soil-brown/30 bg-white/80 p-6 shadow-lg transition hover:shadow-xl">
                            <div className="mb-2 flex items-start justify-between">
                                <h3 className="text-xl font-semibold text-soil-brown">
                                    Mobil Geliştirici
                                </h3>
                                <span className="text-sm text-gray-500">2025 - 2026</span>
                            </div>

                            <p className="mb-2 font-medium text-gray-700">
                                Neon Apps
                            </p>

                            <p className="text-gray-600">
                                NeonApps’te Flutter ile birden fazla mobil uygulama projesinde görev aldım. Müşterilerle
                                gereksinimleri netleştirmek ve geliştirme sürecini planlamak için iletişim kurdum;
                                backend, frontend ve tasarım ekipleriyle koordineli çalışarak uygulamaların
                                geliştirilmesine katkı sağladım. Mobil tarafta ağırlıklı olarak BLoC mimarisini
                                kullandım, teknik planlama ve kod inceleme süreçlerine de katıldım.
                            </p>
                        </div>
                    </div>                    <div className="relative border-l-2 border-flower-green pl-8">
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-flower-green"/>
                        <div
                            className="rounded-lg border border-flower-green/30 bg-white/80 p-6 shadow-lg transition hover:shadow-xl">
                            <div className="mb-2 flex items-start justify-between">
                                <h3 className="text-xl font-semibold text-leaf-green">
                                    Stajer
                                </h3>
                                <span className="text-sm text-gray-500">2025 - 2025</span>
                            </div>
                            <p className="mb-2 font-medium text-gray-700">
                                Galaksity Akıllı Șehir Teknolojiler A.Ș.
                            </p>
                            <p className="text-gray-600">
                                Node.js, Express.js ve Sequelize kullanarak şirket içi haberleşme mobil uygulamasının
                                RESTful API’lerini geliştirdim. Postman ile API isteklerini test ettim; mobil ekiple
                                sprint planlama ve özellik geliştirme süreçlerinde iş birliği yaptım.
                            </p>
                        </div>
                    </div>

                    <div className="relative border-l-2 border-flower-purple pl-8">
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-flower-purple"/>
                        <div
                            className="rounded-lg border border-flower-purple/30 bg-white/80 p-6 shadow-lg transition hover:shadow-xl">
                            <div className="mb-2 flex items-start justify-between">
                                <h3 className="text-xl font-semibold text-purple-700">
                                    Stajer
                                </h3>
                                <span className="text-sm text-gray-500">2024 - 2024</span>
                            </div>
                            <p className="mb-2 font-medium text-gray-700">
                               Eyüp Sultan Belediyesi - Bilgi İşlem Departmanı
                            </p>
                            <p className="text-gray-600">
                                Flutter ile belediyelere yönelik bir mobil uygulamanın geliştirilmesine katkı sağladım.
                                Gerçek zamanlı senkronizasyon, alarm ve acil durum özellikleri üzerinde çalışırken
                                Firebase ve MongoDB entegrasyonlarıyla uygulamanın veri akışını destekledim.
                                
                            </p>
                        </div>
                    </div>

                    <div className="relative border-l-2 border-flower-pink pl-8">
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-flower-pink"/>
                        <div
                            className="rounded-lg border border-flower-pink/40 bg-white/80 p-6 shadow-lg transition hover:shadow-xl">
                            <div className="mb-2 flex items-start justify-between">
                                <h3 className="text-xl font-semibold text-pink-700">
                                    Ar-Ge Departman Başkanı
                                </h3>
                                <span className="text-sm text-gray-500">2022 - 2023</span>
                            </div>
                            <p className="mb-2 font-medium text-gray-700">
                                Düzce Üniversitesi PASS Topluluğu
                            </p>
                            <p className="text-gray-600">
                                Teknofest hazırlıkları kapsamında PASS topluluğundaki farklı ekiplerin çalışmalarını
                                koordine ettim. Teknik planlama ve ortak proje iş akışlarının düzenlenmesinin yanı sıra
                                yazılım geliştirme, teknik sorunların çözümü ve inovasyon odaklı Ar-Ge çalışmalarına
                                katkı sağladım.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}