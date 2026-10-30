import Link from "next/link";
import {projects} from "../data/projects";
import {ProjectCard} from "./ProjectCard";

export function Projects() {
    return (
        <section id="projects" className="scroll-mt-24 pt-28 pb-20">
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-12 flex max-w-6xl items-center justify-between">
                    <h2 className="text-4xl font-bold text-gray-800">Projelerim</h2>

                    <Link
                        href="/projects"
                        className="rounded-full border border-leaf-green px-4 py-2 text-leaf-green transition hover:bg-leaf-green hover:text-white"
                    >
                        Tümünü Gör
                    </Link>
                </div>

                <div className="mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-3">
                    {projects.slice(0, 6).map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index}/>
                    ))}
                </div>
            </div>
        </section>
    );
}