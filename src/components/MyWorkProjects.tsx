/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import Link from "next/link";

import donkeycode from "../../public/projects/donkeycode_project_HD.webp";
import compcvision from "../../public/projects/compcvision_project_HD.webp";

export default function MyWorkProjects() {
    const workStuff = [
        {
            id: 1,
            name: "Donkey Code",
            imageSrc: donkeycode,
            testUrl: "https://donkey-code.vercel.app/",
            githubUrl: "https://github.com/jcuencagento/donkey-code",
            stack: ["TypeScript", "NextJS", "PostgreSQL", "Shadcn UI", "Railway"],
        },
        {
            id: 2,
            name: "Computer PC Vision",
            imageSrc: compcvision,
            githubUrl: "https://github.com/jcuencagento/compc-vision",
            stack: ["JavaScript", "Vanilla", "Python", "Docker"],
        },
    ];

    return (
        <div className="flex w-full flex-col">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {workStuff.map((proj: any) => (
                    <article
                        key={proj.id}
                        className="relative m-auto flex h-full w-full transform-gpu items-center justify-center rounded-2xl rounded-2xl border-4 border-4 border-primary border-primary shadow-xl duration-300 ease-in-out hover:scale-95 lg:p-8"
                    >
                        <Link href={proj.letterboxdUrl || "/misc"} rel="noreferrer" target="_blank">
                            <Image
                                key={`image-movie-${proj.id}`}
                                priority
                                alt="Album image"
                                className="absolute inset-0 h-full w-full rounded-xl object-cover"
                                height={1000}
                                src={proj.imageSrc}
                                width={1000}
                            />
                            <div className="align-center flex h-full w-full flex-col justify-center p-4 py-28">
                                <div className="transform-gpu duration-300 ease-in-out">
                                    <article className="m-auto flex flex-col">
                                        <p className="text-base font-extrabold opacity-100 lg:text-lg">{proj.name}</p>
                                    </article>
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
