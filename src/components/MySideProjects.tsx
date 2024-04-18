/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import Link from "next/link";

import donkeycode from "../../public/projects/donkeycode_project_HD.webp";
import compcvision from "../../public/projects/compcvision_project_HD.webp";
import codemefast from "../../public/projects/codemefast_project_HD.webp";

import projectArticle from "./ProjectArticle";

export default function MySideProjects() {
    const sideProjects = [
        {
            id: 1,
            name: "Donkey Code",
            imageSrc: donkeycode,
            testUrl: "https://donkey-code.vercel.app/",
            githubUrl: "https://github.com/jcuencagento/donkey-code",
            stack: ["TypeScript", "NextJS", "PostgreSQL", "Tailwind", "Railway"],
        },
        {
            id: 2,
            name: "Computer PC Vision",
            imageSrc: compcvision,
            githubUrl: "https://github.com/jcuencagento/compc-vision",
            stack: ["JavaScript", "Python", "Docker"],
        },
        {
            id: 3,
            name: "Code Me Fast",
            imageSrc: donkeycode,
            testUrl: "https://donkey-code.vercel.app/",
            githubUrl: "https://github.com/jcuencagento/donkey-code",
            stack: ["TypeScript", "NextJS", "PostgreSQL", "Shadcn UI", "Railway"],
        },
        {
            id: 4,
            name: "Code Me Fast",
            imageSrc: codemefast,
            testUrl: "https://code-me-fast.vercel.app/",
            githubUrl: "https://github.com/jcuencagento/code-me-fast",
            stack: ["JavaScript", "React", "Tailwind", "Shadcn UI"],
        },
    ];

    return (
        <div className="flex w-full flex-col">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {sideProjects.map((proj: any) => (
                    <>{projectArticle(proj.name, proj.description, proj.testUrl, proj.imageSrc, proj.stack)}</>
                ))}
            </div>
        </div>
    );
}
