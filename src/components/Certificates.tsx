"use client";

import {useState} from "react";
import {certificates} from "../data/certificates";

export function Certificates() {
    const [showAll, setShowAll] = useState(false);

    const visibleCertificates = showAll
        ? certificates
        : certificates.slice(0, 3);

    return (
        <section id="certificates" className="scroll-mt-24 pt-28 pb-20">
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-12 flex max-w-6xl items-center justify-between">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Sertifikalarım
                    </h2>

                    {certificates.length > 3 && (
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="rounded-full border border-leaf-green px-8 py-3 font-medium text-leaf-green transition hover:bg-leaf-green hover:text-white"
                        >
                            {showAll ? "Daha Az Göster ↑" : "Tümünü Gör →"}
                        </button>
                    )}
                </div>
                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">

                    {visibleCertificates.map((certificate, index) => (
                        <article
                            key={index}
                            className="overflow-hidden rounded-xl border bg-white/80 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div
                                className="flex h-70 items-center justify-center bg-gradient-to-br from-flower-green/50 to-flower-yellow/60">
                                <iframe
                                    src={`/certificates/${certificate.file}`}
                                    title={certificate.title}
                                    className="h-full w-full rounded-lg"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                                    {certificate.title}
                                </h3>

                                <p className="mb-4 text-gray-600">
                                    Eğitmen: {certificate.instructor}
                                </p>

                                <a
                                    href={`/certificates/${certificate.file}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-leaf-green transition hover:text-soil-brown"
                                >
                                    Sertifikayı Görüntüle →
                                </a>
                            </div>
                        </article>
                    ))}

                </div>
                
            </div>
        </section>
    );
}
