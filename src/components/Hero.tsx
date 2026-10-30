export function Hero() {
    return (
        <section id="home" className="scroll-mt-24 pt-28 pb-20">
            <div className="container mx-auto px-6 text-center">
                {/* Animated Flower */}
                <div className="flower-container mx-auto mb-8 animate-bloom scale-150">
                    <div className="petal w-20 h-20 animate-sway"></div>
                    <div className="petal w-20 h-20 animate-sway" style={{animationDelay: "0.1s"}}></div>
                    <div className="petal w-20 h-20 animate-sway" style={{animationDelay: "0.2s"}}></div>
                    <div className="petal w-20 h-20 animate-sway" style={{animationDelay: "0.3s"}}></div>
                    <div className="petal w-20 h-20 animate-sway" style={{animationDelay: "0.4s"}}></div>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-flower-yellow rounded-full shadow-lg"></div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
                    Hi, I'm <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-flower-pink to-flower-purple">Betül Güleç</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">Mobile Developer || .Net Developer</p>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
                    Mobil uygulamalar ve .NET web projeleri geliştiriyorum. Her projede yeni şeyler
                    öğreniyor, fikirleri insanların severek kullanacağı uygulamalara dönüştürmeye çalışıyorum. 🌸
                </p>
                <div className="space-x-4">
                    <a href="#projects"
                       className="iinline-block border-2 border-leaf-green text-leaf-green px-8 py-3 rounded-full hover:bg-leaf-green hover:text-white transition transform hover:scale-105">
                        Projelerimi Görüntüle           
                    </a>
                    <a href="#contact"
                       className="inline-block border-2 border-leaf-green text-leaf-green px-8 py-3 rounded-full hover:bg-leaf-green hover:text-white transition transform hover:scale-105">
                        Benimle İletişime Geç
                    </a>
                </div>
            </div>
        </section>
    )
}