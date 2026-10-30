import type {Project} from "../data/projects";
import Link from "next/link";

type ProjectCardProps = {
    project: Project;
    index: number;
};

const borderColors = [
    "border-flower-pink",
    "border-flower-green",
    "border-flower-purple",
    "border-soil-brown",
    "border-flower-yellow",
    "border-leaf-green",
];

const tagColors = [
    "bg-flower-pink/20 text-pink-700",
    "bg-flower-purple/20 text-purple-700",
    "bg-flower-green/30 text-green-800",
    "bg-flower-yellow/50 text-amber-800",
];

export function ProjectCard({project, index}: ProjectCardProps) {
    const card = (
        <article
            className={`group h-[280px] overflow-hidden rounded-2xl border-4 ${
                borderColors[index % borderColors.length]
            } bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl`}
        >
            <div className="p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold text-leaf-green">
                        {project.title}
                    </h3>

                    <span
                        className="shrink-0 rounded-full border border-soil-brown/40 bg-soil-brown/10 px-3 py-1 text-sm font-medium text-soil-brown">
                        {project.type}
                    </span>
                </div>

                <p className="mb-4 line-clamp-3 leading-relaxed text-gray-600">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology, tagIndex) => (
                        <span
                            key={technology}
                            className={`rounded-full px-3 py-1 text-sm ${tagColors[tagIndex % tagColors.length]}`}
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );

    if (project.id === "simai") {
        return card;
    }

    return (
        <Link href={`/projects/${project.id}`} className="block">
            {card}
        </Link>
    );
}