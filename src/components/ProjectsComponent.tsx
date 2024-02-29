import {Button} from "./ui/button";

export default function ProjectsComponent() {
    return (
        <header className="align-center flex justify-center text-xl font-bold leading-[4rem]">
            <Button className="flex flex-grow" variant="secondary">
                Projects
            </Button>
        </header>
    );
}
