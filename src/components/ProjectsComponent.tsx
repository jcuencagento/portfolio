import type {StaticImageData} from "next/image";

import Image from "next/image";

import donkeycode from "../../public/donkeycode_project_HD.webp";
import compcvision from "../../public/compcvision_project_HD.webp";

const projectArticle = (name: string, description: string, link: string, image: StaticImageData) => {
    return (
        <article className="flex flex-col items-center rounded-lg bg-secondary/60 p-2 lg:px-6">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-sm font-semibold text-primary/90">{description}</p>
            <a aria-label={name} href={link} rel="noreferrer" target="_blank">
                <Image
                    priority
                    alt={name}
                    className="m-3 h-48 w-auto transform-gpu rounded-2xl duration-300 ease-in-out hover:scale-95"
                    src={image}
                />
            </a>
        </article>
    );
};

export default function ProjectsComponent() {
    return (
        <div className="col-span-1 row-span-1 transform-gpu rounded-xl p-2 font-bold leading-[4rem] duration-500 lg:col-span-2 lg:p-4">
            <div className="m-auto mb-4 flex flex-col justify-around gap-4 lg:flex-row lg:gap-12">
                {projectArticle(
                    "Donkey Code",
                    "Interactive typing and coding test to practice.",
                    "https://donkey-code.vercel.app/",
                    donkeycode,
                )}
                {projectArticle(
                    "ComPC Vision",
                    "Educational project of computer vision + business.",
                    "https://github.com/jcuencagento/compc-vision",
                    compcvision,
                )}
            </div>
        </div>
    );
}
