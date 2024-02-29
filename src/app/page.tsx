import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import Misc from "@/components/Misc";
import ProjectsComponent from "@/components/ProjectsComponent";
import Studies from "@/components/Studies";

export default function HomePage() {
    return (
        <div className="m-auto flex h-full w-4/5 flex-col gap-6 lg:gap-12">
            <Introduction />
            <Studies />
            <Experience />
            <ProjectsComponent />
            <Misc />
        </div>
    );
}
