/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import ionIDe from "../../public/projects/ionide.webp";

import projectArticle from "./ProjectArticle";

export default function MyWorkProjects() {
    const ionIDe_work = {
        name: "ionIDe",
        githubUrl: undefined,
        testUrl: "https://ionide.es",
        imageSrc: ionIDe,
        stack: ["TypeScript", "PostgreSQL"],
    };

    return (
        <div className="m-auto flex w-full flex-col lg:w-4/5">
            {projectArticle(ionIDe_work.name, ionIDe_work.testUrl, ionIDe_work.githubUrl, ionIDe_work.imageSrc, ionIDe_work.stack)}
        </div>
    );
}
