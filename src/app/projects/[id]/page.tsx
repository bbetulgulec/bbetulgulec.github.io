import Link from "next/link";
import {notFound} from "next/navigation";
import {projects} from "../../../data/projects";
import {projectDetails} from "../../../data/projectDetails";

export function generateStaticParams() {
    return projects
        .filter((project) => projectDetails[project.id])
        .map((project) => ({
            id: project.id,
        }));
}
const columnsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const imageSizeClass = {
    small: "max-w-[180px] max-h-64",
    medium: "max-w-xs max-h-96",
    large: "max-w-full max-h-[600px]",
};

const tagColors = [
    "bg-flower-pink/25 text-pink-700",
    "bg-flower-purple/25 text-purple-700",
    "bg-flower-yellow/50 text-amber-800",
    "bg-flower-green/20 text-green-800",
];

export default async function ProjectDetailPage({
                                                    params,
                                                }: {
    params: Promise<{ id: string }>;
}) {
    const {id} = await params;
    const project = projects.find((item) => item.id === id);
    const detail = projectDetails[id];

    if (!project || !detail) {
        notFound();
    }

    return (
        <main className="garden-pattern mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-12">
            <Link
                href="/projects"
                className="mb-8 inline-flex items-center gap-2 text-flower-purple transition hover:text-purple-700"
            >
                <span aria-hidden="true">←</span>
                Tüm projelere dön
            </Link>

            <header className="mb-10 rounded-3xl border-2 border-flower-pink/40 bg-white/90 p-6 shadow-sm sm:p-10">
                <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                    <div>
                        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-purple-700">
                            Proje Detayı
                        </p>

                        <h1 className="text-3xl font-bold text-gray-800 sm:text-5xl">
                            {project.title}
                        </h1>
                    </div>

                    <span
                        className="rounded-full border border-flower-purple/50 bg-flower-purple/20 px-4 py-2 font-medium text-purple-700">
                        {project.type}
                    </span>
                </div>

                <p className="mb-6 max-w-5xl text-base leading-8 text-gray-600 sm:text-lg">
                    {detail.intro}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology, index) => (
                        <span
                            key={technology}
                            className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                                tagColors[index % tagColors.length]
                            }`}
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </header>

            <div className="space-y-8">
                {detail.sections.map((section, index) => (
                    <section
                        key={`${section.title}-${index}`}
                        className="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm sm:p-8"
                    >
                        <h2 className="mb-5 bg-gradient-to-r from-flower-pink to-flower-purple bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                            {section.title}
                        </h2>

                        {section.type === "text" && (
                            <div className="max-w-5xl space-y-4">
                                {section.paragraphs.map((paragraph, paragraphIndex) => (
                                    <p
                                        key={paragraphIndex}
                                        className="leading-8 text-gray-600"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        )}

                        {section.type === "list" && (
                            <ul className="grid gap-3 text-gray-700 sm:grid-cols-2">
                                {section.items.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 rounded-xl bg-flower-pink/10 px-4 py-3"
                                    >
                                        <span className="font-bold text-flower-purple">
                                            ✓
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {section.type === "images" && (
                            <div
                                className={`grid ${
                                    columnsClass[section.columns ?? 2]
                                } gap-5`}
                            >
                                {section.images.map((image) => (
                                    <div
                                        key={image.src}
                                        className="flex min-h-48 items-center justify-center overflow-hidden rounded-2xl border border-flower-purple/20 bg-white/80 p-3"
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            loading="lazy"
                                            className={`h-auto w-full rounded-lg object-contain ${
                                                imageSizeClass[
                                                image.size ??
                                                section.imageSize ??
                                                "medium"
                                                    ]
                                            }`}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.type === "video" && (
                            <video
                                src={section.src}
                                controls
                                className="w-full rounded-2xl border border-flower-pink/30"
                            />
                        )}
                    </section>
                ))}
            </div>
        </main>
    );
}