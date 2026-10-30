export function Blog() {
    return (
        <section id="blog" className="scroll-mt-24 pt-28 pb-20">
            <div className="container mx-auto px-6">
                <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
                    Yayınladıklarım
                </h2>

                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
                    <article
                        className="overflow-hidden rounded-xl border border-flower-green/30 bg-white/80 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                        <div
                            className="flex h-40 items-center justify-center bg-gradient-to-br from-flower-green/50 to-flower-yellow/60 text-5xl">
                            🌿
                        </div>
                        <div className="p-6">
                            <p className="mb-2 text-sm text-gray-500">Web Projesi</p>
                            <h3 className="mb-3 text-xl font-semibold text-leaf-green">
                                Mevsim Manav
                            </h3>
                            <p className="mb-4 text-gray-600">
                                .NET ile geliştirdiğim web projemi ve kullandığım teknolojileri
                                inceleyin.
                            </p>
                            <a
                                href="https://www.mevsimmanav.com.tr/"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-leaf-green transition hover:text-soil-brown"
                            >
                                Projeyi Görüntüle →
                            </a>
                        </div>
                    </article>

                    <article
                        className="overflow-hidden rounded-xl border border-flower-pink/40 bg-white/80 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                        <div
                            className="flex h-40 items-center justify-center bg-gradient-to-br from-flower-pink/50 to-flower-purple/50 text-5xl">
                            📱
                        </div>
                        <div className="p-6">
                            <p className="mb-2 text-sm text-gray-500">Mobil Uygulama</p>
                            <h3 className="mb-3 text-xl font-semibold text-leaf-green">
                                App Store’daki Uygulamam
                            </h3>
                            <p className="mb-4 text-gray-600">
                                Yayınlanan mobil uygulamama göz atın ve özelliklerini keşfedin.
                            </p>
                            <a
                                href="https://medium.com/@betulgulecofficial"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-leaf-green transition hover:text-soil-brown"
                            >
                                App Store’da Görüntüle →
                            </a>
                        </div>
                    </article>

                    <article
                        className="overflow-hidden rounded-xl border border-flower-purple/40 bg-white/80 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                        <div
                            className="flex h-40 items-center justify-center bg-gradient-to-br from-flower-purple/50 to-flower-pink/50 text-5xl">
                            ✍️
                        </div>
                        <div className="p-6">
                            <p className="mb-2 text-sm text-gray-500">Yazı</p>
                            <h3 className="mb-3 text-xl font-semibold text-leaf-green">
                                Medium’daki Yazım
                            </h3>
                            <p className="mb-4 text-gray-600">
                                Yazılım geliştirme deneyimlerimi ve öğrendiklerimi paylaştığım
                                yazıyı okuyun.
                            </p>
                            <a
                                href="https://medium.com/@betulgulecofficial"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-leaf-green transition hover:text-soil-brown"
                            >
                                Medium’da Oku →
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}