import type {StaticImageData} from "next/image";

import Image from "next/image";

import {IconNextJS, IconTailwindcss, IconTypescript, IconPostgres, IconPython} from "@/components/icons";

export default function projectArticle(name: string, description: string, testUrl: string, image: StaticImageData, stack: string[]) {
    return (
        <article className="col-span-1 flex flex-1 flex-col items-center rounded-lg bg-secondary/60 p-2 lg:px-6">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-sm font-semibold text-primary/90">{description}</p>
            {testUrl ? (
                <a aria-label={name} href={testUrl} rel="noreferrer" target="_blank">
                    <Image
                        priority
                        alt={name}
                        className="m-3 h-48 w-auto transform-gpu rounded-2xl duration-300 ease-in-out hover:scale-95"
                        src={image}
                    />
                </a>
            ) : (
                <Image priority alt={name} className="m-3 h-48 w-auto rounded-2xl" src={image} />
            )}
            <div className="flex w-4/5 flex-row justify-end gap-2">
                {stack.includes("TypeScript") && <IconTypescript height="32" width="32" />}
                {stack.includes("Tailwind") && <IconTailwindcss height="32" width="32" />}
                {stack.includes("NextJS") && <IconNextJS height="32" width="32" />}
                {stack.includes("Python") && <IconPython height="32" width="32" />}
                {stack.includes("PostgresSQL") && <IconPostgres height="32" width="32" />}
            </div>
        </article>
    );
}
