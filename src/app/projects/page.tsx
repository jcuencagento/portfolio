import MySetup from "@/components/MySetup";
import MySideProjects from "@/components/MySideProjects";
import MyWorkProjects from "@/components/MyWorkProjects";

export default function Projects() {
    return (
        <div className="flex w-full flex-col items-center">
            <div className="my-4 flex w-full flex-col justify-center">
                <h2 className="text-bold m-auto mb-4 text-xl lg:text-2xl">Side fun projects</h2>
                <MySideProjects />
            </div>
            <div className="my-4 flex w-full flex-col justify-center">
                <h2 className="text-bold m-auto mb-4 text-xl lg:text-2xl">Work stuff</h2>
                <MyWorkProjects />
            </div>
            <div className="my-4 flex w-full flex-col justify-center">
                <h2 className="text-bold m-auto mb-4 text-xl lg:text-2xl">Setup</h2>
                <MySetup />
            </div>
        </div>
    );
}
