import Image from "next/image";
import Link from "next/link";

import donkeycode from "../../public/donkeycode_project_HD.webp";

import {Button} from "./ui/button";

export default function ProjectsComponent() {
    return (
        <div className="flex h-auto w-full flex-col items-center justify-center gap-4 border border-black bg-green-300 p-6 text-xl font-bold">
            <div>hi, These are my projects</div>
            <Link href="/projects">
                <Button className="flex" variant="secondary">
                    Projects
                </Button>
            </Link>
            <div className="flex flex-col items-center gap-4">
                <p className="text-xl font-semibold">Donkey Code</p>
                <p className="text-lg font-semibold text-primary/90">Interactive typing and coding test and practice.</p>
                <a aria-label="Donkey Code" href="https://donkey-code.vercel.app/" rel="noreferrer" target="_blank">
                    <Image priority alt="Gradient background" className="h-90 w-auto" src={donkeycode} />
                </a>
            </div>
        </div>
    );
}
