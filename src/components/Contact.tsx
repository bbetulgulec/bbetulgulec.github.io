import {BookOpen, Mail, Phone} from "lucide-react";
import {FaGithub} from "react-icons/fa";
export function Contact() {
    return (
        <section id="contact" className="scroll-mt-24 pt-28 pb-20">
            <div className="container mx-auto px-6">
                <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
                    İletişime Geç
                </h2>

                <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-flower-pink/40">
                                <Mail size={22} className="text-leaf-green"/>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">E-posta</p>
                                <a
                                    href="mailto:betulgulecofficial@gmail.com"
                                    className="text-gray-800 transition hover:text-leaf-green"
                                >
                                    betulgulecofficial@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-flower-green/40">
                                <Phone size={22} className="text-leaf-green"/>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Telefon</p>
                                <a
                                    href="tel:+905540042401"
                                    className="text-gray-800 transition hover:text-leaf-green"
                                >
                                    +90 554 004 24 01
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-flower-purple/40">
                                <FaGithub size={22} className="text-leaf-green"/>                            </div>
                            <div>
                                <p className="text-sm text-gray-500">GitHub</p>
                                <a
                                    href="https://github.com/bbetulgulec"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-800 transition hover:text-leaf-green"
                                >
                                    github.com/bbetulgulec
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-flower-yellow/60">
                                <BookOpen size={22} className="text-leaf-green"/>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Medium</p>
                                <a
                                    href="https://medium.com/@betulgulecofficial"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-800 transition hover:text-leaf-green"
                                >
                                    Medium profilim
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="/cv/betul-gulec-cv-tr.pdf"
                                download
                                className="inline-flex items-center rounded-lg bg-leaf-green px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700"
                            >
                                CV Türkçe
                            </a>

                            <a
                                href="/cv/betul-gulec-cv-en.pdf"
                                download
                                className="inline-flex items-center rounded-lg border-2 border-leaf-green px-5 py-3 font-semibold text-leaf-green transition hover:bg-leaf-green hover:text-white"
                            >
                                CV English
                            </a>
                        </div>
                    </div>

                    <form
                        action="https://formsubmit.co/betulgulecofficial@gmail.com"
                        method="POST"
                        className="space-y-4 rounded-xl border border-flower-green/30 bg-white/80 p-6 shadow-lg"
                    >
                        <input
                            type="hidden"
                            name="_subject"
                            value="Portfolyo sitesinden yeni mesaj"
                        />

                        <input
                            type="text"
                            name="name"
                            placeholder="Adınız"
                            required
                            className="w-full rounded-lg border border-flower-green/30 bg-white px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-leaf-green"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="E-posta adresiniz"
                            required
                            className="w-full rounded-lg border border-flower-green/30 bg-white px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-leaf-green"
                        />

                        <textarea
                            name="message"
                            placeholder="Mesajınız"
                            rows={4}
                            required
                            className="w-full resize-y rounded-lg border border-flower-green/30 bg-white px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-leaf-green"
                        />

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-leaf-green px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                        >
                            Mesaj Gönder
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}