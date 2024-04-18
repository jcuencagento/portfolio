import DonkeyCodeVideo from "@/components/DonkeyCodeVideo";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import Misc from "@/components/Misc";
import ProjectsComponent from "@/components/ProjectsComponent";
import Random from "@/components/Random";
import Studies from "@/components/Studies";

export default function HomePage() {
    return (
        <div className="grid auto-rows-auto grid-cols-1 gap-6 lg:grid-cols-3">
            <Random />
            <Introduction />
            <Experience />
            <Misc />
            <ProjectsComponent />
            <Studies />
            <DonkeyCodeVideo />
            <Random />
        </div>
    );
}
