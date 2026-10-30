(()=>{"use strict";module.exports = [
"[project]/src/components/Certificates.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Certificates",
    ()=>Certificates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$certificates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/certificates.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Certificates() {
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const visibleCertificates = showAll ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$certificates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["certificates"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$certificates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["certificates"].slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "certificates",
        className: "scroll-mt-24 pt-28 pb-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto mb-12 flex max-w-6xl items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-bold text-gray-800",
                            children: "Sertifikalarım"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Certificates.tsx",
                            lineNumber: 17,
                            columnNumber: 21
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$certificates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["certificates"].length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowAll(!showAll),
                            className: "rounded-full border border-leaf-green px-8 py-3 font-medium text-leaf-green transition hover:bg-leaf-green hover:text-white",
                            children: showAll ? "Daha Az Göster ↑" : "Tümünü Gör →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Certificates.tsx",
                            lineNumber: 22,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Certificates.tsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-6xl gap-8 md:grid-cols-3",
                    children: visibleCertificates.map((certificate, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "overflow-hidden rounded-xl border bg-white/80 shadow-lg transition hover:-translate-y-1 hover:shadow-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-70 items-center justify-center bg-gradient-to-br from-flower-green/50 to-flower-yellow/60",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        src: `/certificates/${certificate.file}`,
                                        title: certificate.title,
                                        className: "h-full w-full rounded-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Certificates.tsx",
                                        lineNumber: 39,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Certificates.tsx",
                                    lineNumber: 37,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-3 text-xl font-semibold text-gray-800",
                                            children: certificate.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Certificates.tsx",
                                            lineNumber: 47,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-4 text-gray-600",
                                            children: [
                                                "Eğitmen: ",
                                                certificate.instructor
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Certificates.tsx",
                                            lineNumber: 51,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `/certificates/${certificate.file}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "font-medium text-leaf-green transition hover:text-soil-brown",
                                            children: "Sertifikayı Görüntüle →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Certificates.tsx",
                                            lineNumber: 55,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Certificates.tsx",
                                    lineNumber: 46,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/Certificates.tsx",
                            lineNumber: 33,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Certificates.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Certificates.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Certificates.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/data/certificates.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "certificates",
    ()=>certificates
]);
const certificates = [
    {
        title: "Asp.Net Core MultiShop Mikroservis E-Ticaret Kursu",
        instructor: "Murat Yücedağ",
        file: "Asp.Net-Core-Microservis.pdf"
    },
    {
        title: "C# ile Sıfırdan İlk İşe | C# Eğitimi - Sıfırdan Zirveye",
        instructor: "Görkemli Yazılım",
        file: "CSharp-Eğitimi.pdf"
    },
    {
        title: "Deep Learning Onramp",
        instructor: "Matlab",
        file: "Deep-Learning-Onramp.pdf"
    },
    {
        title: "DevOps CI/CD: GitLab, GitHub Actions, Jenkins, Azure Pipelines",
        instructor: "Fayik Veznedaroğlu",
        file: "DevOps-CI-CD.pdf"
    },
    {
        title: "Entity Framework Core - A Full Tour",
        instructor: "Trevoir Williams",
        file: "Entity-Framework-Core.pdf"
    },
    {
        title: "Versiyon Kontrolleri: Git ve GitHub",
        instructor: "BTK Akademi",
        file: "Git-ve-GitHub.pdf"
    },
    {
        title: "Image Processing Onramp",
        instructor: "Matlab",
        file: "Image-Processing-Onramp.pdf"
    },
    {
        title: "Machine Learning Onramp",
        instructor: "Matlab",
        file: "Machine-Learning-Onramp.pdf"
    },
    {
        title: "MATLAB Onramp",
        instructor: "Matlab",
        file: "MATLAB-Onramp.pdf"
    }
];
}),
];})()

//# sourceMappingURL=src_161-jrpfvs56p._.js.map