import {projects} from "../../data/projects";
import {ProjectCard} from "../../components/ProjectCard";

export default function ProjectsPage() {
    return (
        <main>
            <section className="scroll-mt-24 pt-28 pb-20">
                <div className="container mx-auto px-6">
                    <h1 className="mb-12 text-center text-4xl font-bold text-gray-800">
                        Tüm Projelerim
                    </h1>

                    <div className="mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-3">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index}/>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}