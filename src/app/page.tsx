import {Hero} from "../components/Hero";
import {About} from "../components/About";
import {Skills} from "../components/Skills";
import {Projects} from "../components/Projects";
import {Experience} from "../components/Experience";
import {Services} from "../components/Services";
import {Blog} from "../components/Blog";
import {Contact} from "../components/Contact";
import {Certificates} from "../components/Certificates";

export default function HomePage() {
    return (
        <main>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Services/>
            <Certificates/>
            <Blog/>
            <Contact/>
        </main>
    );
}