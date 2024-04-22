/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import ionIDe from "../../public/projects/ionide.webp";

import projectArticle from "./ProjectArticle";

export default function MyWorkProjects() {
    const ionIDe_work = {
        name: "ionIDe Telematics S.L.",
        testUrl: "https://ionide.es",
        imageSrc: ionIDe,
        stack: ["TypeScript", "PostgreSQL"],
    };

    return (
        <div className="m-auto flex w-4/5 flex-col">
            {projectArticle(ionIDe_work.name, ionIDe_work.testUrl, ionIDe_work.githubUrl, ionIDe_work.imageSrc, ionIDe_work.stack)}
        </div>
    );
}
