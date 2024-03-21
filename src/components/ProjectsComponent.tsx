import Image from "next/image";
import Link from "next/link";

import donkeycode from "../../public/donkeycode_project_HD.webp";

import {Button} from "./ui/button";

export default function ProjectsComponent() {
    return (
        <div className="col-span-1 row-span-1 rounded-xl  bg-green-300 p-4 text-xl font-bold leading-[4rem] lg:col-span-2">
            <div>hi, These are my projects</div>
            <Link href="/projects">
                <Button className="flex" variant="secondary">
                    Projects
                </Button>
            </Link>
            <div className="flex flex-col items-center gap-4">
                <p className="text-xl font-semibold">Donkey Code</p>
                <p className="text-lg font-semibold text-primary/90">Interactive typing and coding test and practice.</p>
                <a aria-label="Donkey Code link" href="https://donkey-code.vercel.app/" rel="noreferrer" target="_blank">
                    <Image priority alt="Donkey Code" className="h-64 w-auto rounded-2xl" src={donkeycode} />
                </a>
            </div>
        </div>
    );
}
