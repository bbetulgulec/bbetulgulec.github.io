module.exports = [
(()=>{"use strict";return[
"[project]/src/app/projects/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projectDetails$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projectDetails.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const columnsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
};
const imageSizeClass = {
    small: "max-w-[180px] max-h-64",
    medium: "max-w-xs max-h-96",
    large: "max-w-full max-h-[600px]"
};
const tagColors = [
    "bg-flower-pink/25 text-pink-700",
    "bg-flower-purple/25 text-purple-700",
    "bg-flower-yellow/50 text-amber-800",
    "bg-flower-green/20 text-green-800"
];
async function ProjectDetailPage({ params }) {
    const { id } = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((item)=>item.id === id);
    const detail = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projectDetails$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectDetails"][id];
    if (!project || !detail) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "garden-pattern mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/projects",
                className: "mb-8 inline-flex items-center gap-2 text-flower-purple transition hover:text-purple-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    "Tüm projelere dön"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/projects/[id]/page.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-10 rounded-3xl border-2 border-flower-pink/40 bg-white/90 p-6 shadow-sm sm:p-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5 flex flex-wrap items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-sm font-medium uppercase tracking-wider text-purple-700",
                                        children: "Proje Detayı"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold text-gray-800 sm:text-5xl",
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-flower-purple/50 bg-flower-purple/20 px-4 py-2 font-medium text-purple-700",
                                children: project.type
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6 max-w-5xl text-base leading-8 text-gray-600 sm:text-lg",
                        children: detail.intro
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: project.technologies.map((technology, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `rounded-full px-3 py-1.5 text-sm font-medium ${tagColors[index % tagColors.length]}`,
                                children: technology
                            }, technology, false, {
                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                lineNumber: 73,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/projects/[id]/page.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: detail.sections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm sm:p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-5 bg-gradient-to-r from-flower-pink to-flower-purple bg-clip-text text-2xl font-bold text-transparent sm:text-3xl",
                                children: section.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                lineNumber: 91,
                                columnNumber: 25
                            }, this),
                            section.type === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-5xl space-y-4",
                                children: section.paragraphs.map((paragraph, paragraphIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "leading-8 text-gray-600",
                                        children: paragraph
                                    }, paragraphIndex, false, {
                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                lineNumber: 96,
                                columnNumber: 29
                            }, this),
                            section.type === "list" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "grid gap-3 text-gray-700 sm:grid-cols-2",
                                children: section.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-3 rounded-xl bg-flower-pink/10 px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-flower-purple",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, item, true, {
                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                lineNumber: 109,
                                columnNumber: 29
                            }, this),
                            section.type === "images" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `grid ${columnsClass[section.columns ?? 2]} gap-5`,
                                children: section.images.map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex min-h-48 items-center justify-center overflow-hidden rounded-2xl border border-flower-purple/20 bg-white/80 p-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: image.src,
                                            alt: image.alt,
                                            loading: "lazy",
                                            className: `h-auto w-full rounded-lg object-contain ${imageSizeClass[image.size ?? section.imageSize ?? "medium"]}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/[id]/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 41
                                        }, this)
                                    }, image.src, false, {
                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                lineNumber: 125,
                                columnNumber: 29
                            }, this),
                            section.type === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: section.src,
                                controls: true,
                                className: "w-full rounded-2xl border border-flower-pink/30"
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                lineNumber: 153,
                                columnNumber: 29
                            }, this)
                        ]
                    }, `${section.title}-${index}`, true, {
                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                        lineNumber: 87,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[id]/page.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/projects/[id]/page.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/data/projectDetails.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectDetails",
    ()=>projectDetails
]);
const projectDetails = {
    kalorimetre: {
        intro: "Mobil Programlama dersi kapsamında, Android Studio,Firebase ve Java kullanarak takım arkadaşlarımla geliştirdiğimiz kalori takip uygulaması.",
        sections: [
            {
                type: "text",
                title: "Proje Hakkında",
                paragraphs: [
                    "Uygulama; kullanıcıların hesap oluşturmasına, giriş yapmasına ve kişisel bilgilerini girmesine olanak tanır. Günlük kalori alımını ve beslenme alışkanlıklarını takip etmelerine yardımcı olmak amacıyla geliştirildi.",
                    "Uygulamadaki veritabanı, tüketilen yiyeceklerin kalori bilgilerinin kaydedilmesini ve geçmiş verilerin takip edilmesini sağlar. Günlük kalori hedefi grafiklerle görüntülenebilir. Arayüzde karanlık tema desteği de bulunur."
                ]
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
                    "Android desteği"
                ]
            },
            {
                type: "list",
                title: "Teknolojiler",
                items: [
                    "Java",
                    "Android Studio JellyFish",
                    "XML",
                    "Firebase Realtime Database",
                    "Firebase Authentication"
                ]
            },
            {
                type: "images",
                title: "Uygulama Ekranları",
                columns: 3,
                imageSize: "small",
                images: [
                    {
                        src: "/images/projects/kalorimetre/1.jpeg",
                        alt: "1"
                    },
                    {
                        src: "/images/projects/kalorimetre/2.jpeg",
                        alt: "2"
                    },
                    {
                        src: "/images/projects/kalorimetre/3.jpeg",
                        alt: "3"
                    },
                    {
                        src: "/images/projects/kalorimetre/4.jpeg",
                        alt: "4"
                    },
                    {
                        src: "/images/projects/kalorimetre/5.jpeg",
                        alt: "5"
                    },
                    {
                        src: "/images/projects/kalorimetre/6.jpeg",
                        alt: "6"
                    },
                    {
                        src: "/images/projects/kalorimetre/7.jpeg",
                        alt: "7"
                    }
                ]
            }
        ]
    },
    library: {
        intro: "Talha Kabakus danışmanlığında, Eren Sönmez ve Uğursah Aslantürk ile birlikte geliştirdiğimiz Spring Web MVC tabanlı kütüphane otomasyon sistemi.",
        sections: [
            {
                type: "text",
                title: "Proje Hakkında",
                paragraphs: [
                    "Proje, kütüphane hizmetlerini dijital ortama taşıyarak kullanıcıların hesap oluşturmasına, kitapları incelemesine, favorilerine eklemesine ve kitap kiralamasına olanak tanır.",
                    "Kitap bilgileri üçüncü parti bir kitap API’sinden dinamik olarak alınır. Kütüphane görevlileri için geliştirilen yönetici paneli ise üyelik ve işlem takibini kolaylaştırır."
                ]
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
                    "Yönetici panelinden üyelik ve işlemleri takip etme"
                ]
            },
            {
                type: "text",
                title: "Teknik Altyapı",
                paragraphs: [
                    "Uygulama Spring Web MVC ile yapılandırıldı. Kullanıcı, kitap ve kiralama verileri MSSQL veritabanında tutuldu ve JDBC aracılığıyla uygulamaya bağlandı.",
                    "Servisler Docker ile konteynerleştirildi. Birim testlerinde JUnit, uygulama kayıtlarında ise Log4j kullanıldı."
                ]
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
                    "Üçüncü parti kitap API’si"
                ]
            },
            {
                type: "text",
                title: "Ekip Çalışması",
                paragraphs: [
                    "Projeyi ekip arkadaşlarım Eren Sönmez ve Uğursah Aslantürk ile birlikte, Talha Kabakus danışmanlığında geliştirdik. Çalışma boyunca gerçek hayata yönelik bir uygulamanın tasarım, geliştirme, test ve dağıtım adımlarını ekip olarak deneyimledik."
                ]
            },
            {
                type: "images",
                title: "Uygulama Ekranları",
                columns: 2,
                imageSize: "large",
                images: [
                    {
                        src: "/images/projects/library/k1.jpeg",
                        alt: "1"
                    },
                    {
                        src: "/images/projects/library/k2.jpeg",
                        alt: "2"
                    },
                    {
                        src: "/images/projects/library/k3.jpeg",
                        alt: "3"
                    },
                    {
                        src: "/images/projects/library/k4.jpeg",
                        alt: "4"
                    },
                    {
                        src: "/images/projects/library/k5.jpeg",
                        alt: "5"
                    },
                    {
                        src: "/images/projects/library/k6.jpeg",
                        alt: "6"
                    },
                    {
                        src: "/images/projects/library/k7.jpeg",
                        alt: "7"
                    },
                    {
                        src: "/images/projects/library/k8.jpeg",
                        alt: "7"
                    },
                    {
                        src: "/images/projects/library/k9.jpeg",
                        alt: "7"
                    }
                ]
            }
        ]
    },
    braintumor: {
        intro: "Derin Öğrenme dersi kapsamında, Pakize Erdogmus danışmanlığında geliştirdiğimiz MRI görüntülerinden beyin tümörü sınıflandırma projesi.",
        sections: [
            {
                type: "text",
                title: "Proje Hakkında",
                paragraphs: [
                    "Projede, MRI görüntülerinden beyin tümörlerini sınıflandırmak amacıyla CNN ve transfer öğrenme yöntemlerini uyguladık. Kaggle’daki Brain MRI Images for Brain Tumor Detection veri setini kullandık.",
                    "GoogLeNet, VGG16, MobileNet ve ResNet50 mimarilerini, ekibimizin geliştirdiği daha hafif MyCNN modeliyle karşılaştırdık."
                ]
            },
            {
                type: "list",
                title: "Karşılaştırılan Modeller",
                items: [
                    "GoogLeNet",
                    "VGG16",
                    "MobileNet",
                    "ResNet50",
                    "Ekibimizin geliştirdiği MyCNN"
                ]
            },
            {
                type: "text",
                title: "Benim Katkım",
                paragraphs: [
                    "Projede GoogLeNet modelinin eğitimini üstlendim. Ekip olarak model eğitim parametrelerini ve sonuçları değerlendirerek detaylı bir rapor hazırladık."
                ]
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
                    "Confusion matrix"
                ]
            },
            {
                type: "text",
                title: "Ekip ve Danışman",
                paragraphs: [
                    "Projeyi Zafer Işıklı, Betül Güleç, Enes Şahin ve Bilal Tatar ile birlikte, Pakize Erdogmus danışmanlığında geliştirdik."
                ]
            },
            {
                type: "video",
                title: "Proje Videosu",
                src: "/videos/brain-tumor-demo.mp4"
            }
        ]
    },
    emotionmusic: {
        intro: "Bitirme projem kapsamında, kullanıcının yüz ifadesinden duygu tahmini yapan ve ruh hâline uygun müzikler öneren uçtan uca bir Android mobil uygulaması geliştirdim.",
        sections: [
            {
                type: "text",
                title: "Proje Hakkında",
                paragraphs: [
                    "Proje; görüntü işleme, derin öğrenme, ses analizi ve mobil uygulama geliştirme bileşenlerini bir araya getiriyor. Android uygulaması kullanıcının yüz ifadesinden ruh hâlini tahmin ediyor ve bu ruh hâline uygun müzikler öneriyor.",
                    "Müzikler yerel sunucudaki Python tabanlı REST API aracılığıyla yönetiliyor. API, YouTube Music API üzerinden belirli aralıklarla müzik bilgilerini alıyor ve SQLite veritabanına kaydediyor. Kayıt kontrolü aynı şarkının tekrar eklenmesini önlüyor."
                ]
            },
            {
                type: "text",
                title: "Duygu Tanıma",
                paragraphs: [
                    "FER-2013 veri setiyle CNN ve ResNet50V2 modellerini eğittim. Duygu tahmini, Android uygulamasına entegre edilerek kullanıcının fotoğrafı üzerinden gerçekleştiriliyor."
                ]
            },
            {
                type: "text",
                title: "Müzik Sınıflandırma",
                paragraphs: [
                    "Müzik verilerinden log-mel spektrogramlar oluşturdum. Müziklerin ruh hâlini sınıflandırmak için VGG16 tabanlı CNN ile Random Forest modelini birleştiren hibrit bir yaklaşım kullandım."
                ]
            },
            {
                type: "text",
                title: "Android Uygulaması",
                paragraphs: [
                    "Uygulamayı Java ve XML ile geliştirdim. Kullanıcılar hesaplarıyla giriş yapabiliyor ve favori şarkılarını kaydedip daha sonra görüntüleyebiliyor. Kullanıcı bilgileri ve favoriler SQLite veritabanında tutuluyor."
                ]
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
                    "YouTube Music API"
                ]
            },
            {
                type: "video",
                title: "Demo Videosu",
                src: "/videos/emotion-app-demo.mp4"
            }
        ]
    },
    rateflag: {
        intro: "Flutter ile geliştirilen Rate Flag, kullanıcıların içerikleri puanlamasına ve Green Flag veya Red Flag olarak değerlendirmesine olanak tanıyan bir mobil uygulamadır. Puanlama ve filtreleme özellikleriyle kullanıcıların içerikleri inceleyip daha bilinçli kararlar vermesine yardımcı olur.",
        sections: [
            {
                type: "text",
                title: "Proje Hakkında",
                paragraphs: [
                    "Rate Flag, topluluk değerlendirmelerini görünür kılmayı ve kullanıcılar tarafından olumlu bulunan içerikleri öne çıkarmayı amaçlar. Kullanıcılar içeriklere puan verebilir, Green Flag veya Red Flag değerlendirmesi yapabilir ve içeriklerin detaylarını inceleyebilir.",
                    "Uygulama, Android ve iOS cihazlara uyum sağlayacak şekilde Flutter ile geliştirildi. Durum yönetiminde Bloc/Cubit yaklaşımı, uygulama altyapısında Firebase kullanıldı."
                ]
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
                    "Android ve iOS desteği"
                ]
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
                    "Lottie Animations"
                ]
            },
            {
                type: "text",
                title: "UI / UX",
                paragraphs: [
                    "Uygulamada sade ve okunabilir bir arayüz hedeflendi. Farklı ekran boyutlarına uyum sağlayan tasarım yaklaşımı Android ve iOS cihazlarda tutarlı bir deneyim sunar.",
                    "Lottie animasyonları kullanıcı deneyimini destekler. Yükleniyor, hata ve boş içerik durumları için ayrı arayüz durumları kullanılır; navigasyon da kullanıcıyı uygulama içinde yönlendirecek şekilde tasarlanmıştır."
                ]
            },
            {
                type: "images",
                title: "Uygulama Ekranları",
                columns: 2,
                imageSize: "medium",
                images: [
                    {
                        src: "/images/projects/rateflag/1.jpeg",
                        alt: "Rate Flag ana ekranı"
                    },
                    {
                        src: "/images/projects/rateflag/2.jpeg",
                        alt: "Rate Flag arama ve filtreleme ekranı"
                    },
                    {
                        src: "/images/projects/rateflag/3.jpeg",
                        alt: "Rate Flag içerik detay ekranı"
                    },
                    {
                        src: "/images/projects/rateflag/4.jpeg",
                        alt: "Rate Flag ana ekranı"
                    },
                    {
                        src: "/images/projects/rateflag/5.jpeg",
                        alt: "Rate Flag arama ve filtreleme ekranı"
                    },
                    {
                        src: "/images/projects/rateflag/6.jpeg",
                        alt: "Rate Flag içerik detay ekranı"
                    },
                    {
                        src: "/images/projects/rateflag/7.jpeg",
                        alt: "Rate Flag ana ekranı"
                    },
                    {
                        src: "/images/projects/rateflag/8.jpeg",
                        alt: "Rate Flag arama ve filtreleme ekranı"
                    },
                    {
                        src: "/images/projects/rateflag/9.jpeg",
                        alt: "Rate Flag içerik detay ekranı"
                    },
                    {
                        src: "/images/projects/rateflag/10.jpeg",
                        alt: "Rate Flag ana ekranı"
                    },
                    {
                        src: "/images/projects/rateflag/11.jpeg",
                        alt: "Rate Flag arama ve filtreleme ekranı"
                    }
                ]
            }
        ]
    },
    connectinno: {
        intro: "Connectinno, diyetisyen, yoga eğitmeni ve fitness koçu gibi farklı yapay zekâ personaları üzerinden kullanıcıya rehberlik sunan bir Flutter mobil uygulamasıdır. Google Gemini (Vertex AI) entegrasyonu, persona’ya göre kişiselleştirilmiş sohbet yanıtları sağlar.",
        sections: [
            {
                type: "text",
                title: "Proje Hakkında",
                paragraphs: [
                    "Uygulama, kullanıcıların farklı uzmanlık alanlarına sahip yapay zekâ personalarıyla sohbet etmesini sağlar. Persona’ların sistem talimatları Firebase Remote Config üzerinden yönetilir.",
                    "Sohbet mesajları Hive kullanılarak cihazda saklanır; böylece kullanıcılar sohbet geçmişlerine yeniden erişebilir. Uygulama mimarisi Data, Domain ve Presentation katmanlarına ayrılmıştır."
                ]
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
                    "Hata takibi için özel AppLogger"
                ]
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
                    "Lottie"
                ]
            },
            {
                type: "images",
                title: "Uygulama Tanıtımı",
                columns: 1,
                imageSize: "large",
                images: [
                    {
                        src: "/gif/demo.gif",
                        alt: "Connectinno uygulamasında AI persona ile sohbet demosu"
                    }
                ]
            }
        ]
    }
};
}),
"[project]/src/data/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: "kalorimetre",
        title: "KaloriMetre",
        type: "Mobil",
        description: "Java ile geliştirdiğimiz kalori takip uygulaması, kullanıcıların günlük kalori alımlarını ve beslenme alışkanlıklarını takip etmesini sağlar. Firebase ile yiyecek kayıtları, günlük grafikler ve karanlık tema özellikleri sunar.",
        technologies: [
            "Java",
            "XML",
            "Firebase"
        ]
    },
    {
        id: "library",
        title: "Akıllı Kütüphane Web Sitesi",
        type: "Web",
        description: "Ekibimizle Spring Web MVC kullanarak geliştirdiğimiz kütüphane otomasyon sistemi; kitapları inceleme, favorilere ekleme ve kiralama işlemlerini sunar. Harici kitap API’si ve yönetici paneli içerir.",
        technologies: [
            "Java",
            "Spring Web MVC",
            "MSSQL",
            "JDBC",
            "Docker"
        ]
    },
    {
        id: "braintumor",
        title: "Beyin Tümörlerinin Sınıflandırılması",
        type: "Yapay Zeka",
        description: "MRI görüntülerinden beyin tümörlerini sınıflandırmak için CNN ve transfer öğrenme yöntemlerini uyguladık. Farklı modelleri karşılaştırdık; ben GoogLeNet modelini eğittim.",
        technologies: [
            "CNN",
            "GoogLeNet",
            "VGG16",
            "MobileNet",
            "ResNet50"
        ]
    },
    {
        id: "emotionmusic",
        title: "Duygu Analizi ve Müzik Uygulaması",
        type: "Mobil",
        description: "Android uygulaması kullanıcının yüz ifadesinden duygu tahmini yapıp ruh hâline uygun müzikler önerir. Görüntü ve müzik sınıflandırma modellerini Python REST API’si ve SQLite ile entegre ettim.",
        technologies: [
            "Android",
            "Java",
            "Python",
            "CNN",
            "SQLite"
        ]
    },
    {
        id: "rateflag",
        title: "Rate Flag",
        type: "Mobil",
        description: "Kullanıcıların içerikleri puanlayıp olumlu veya olumsuz değerlendirebildiği Flutter uygulaması. Puanlama, filtreleme ve detaylı inceleme özellikleri sunar.",
        technologies: [
            "Flutter",
            "Dart",
            "BLoC",
            "Cubit",
            "Firebase"
        ]
    },
    {
        id: "simai",
        title: "SimAI Mobil Uygulaması",
        type: "Mobil",
        description: "2025 yılında şirket bünyesinde geliştirilen SimAI mobil uygulamasına katkı sağladım. Flutter ve Dio ile backend iletişimi, Firebase servisleri ve MobilBox Pay entegrasyonu üzerinde çalıştım.",
        technologies: [
            "Flutter",
            "Dio",
            "Firebase",
            "MobilBox Pay"
        ]
    },
    {
        id: "connectinno",
        title: "Connectinno",
        type: "Mobil",
        description: "Farklı yapay zekâ uzman persona’larıyla sohbet sunan Flutter uygulaması. Gemini Vertex AI ile kişiselleştirilmiş yanıtlar verir; sohbet geçmişi Hive ile cihazda saklanır.",
        technologies: [
            "Flutter",
            "BLoC",
            "Firebase",
            "Vertex AI",
            "Hive"
        ]
    },
    {
        id: "mevsimmanav",
        title: "Mevsim Manav",
        type: "Web",
        description: "Kullanıcıların mevsimlik ürünleri inceleyip sipariş verebildiği web uygulaması. Ürün listeleme, filtreleme, sepet ve sipariş süreçlerini içerir.",
        technologies: [
            "C#",
            ".NET",
            "SQL Server",
            "REST API"
        ]
    }
];
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/projects/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/projects/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05suklhh6rdjp._.js.map