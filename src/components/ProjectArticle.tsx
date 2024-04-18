"use client";
import type {StaticImageData} from "next/image";

import Image from "next/image";
import Link from "next/link";
import {LucideArrowUpRightFromSquare} from "lucide-react";

import {IconNextJS, IconTailwindcss, IconTypescript, IconPostgres, IconPython, IconGit, IconReactJS} from "@/components/icons";

export default function projectArticle(name: string, testUrl: string, githubUrl: string, image: StaticImageData, stack: string[]) {
    return (
        <article className="col-span-1 flex flex-1 flex-col items-center p-2 lg:px-6">
            <div className="relative flex h-full w-full flex-col rounded-2xl border-4 border-primary">
                <Image
                    priority
                    alt={name}
                    className="absolute inset-0 h-full w-full rounded-lg object-cover"
                    src={image}
                    style={{
                        maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 80%)",
                        WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 80%)", // For Safari
                    }}
                />
                <div className="py-44" />
                <div className="flex flex-row">
                    <div className="ml-4 flex w-full items-center">
                        <p className="text-base font-bold lg:text-xl">{name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        {testUrl ? (
                            <Link href={testUrl} rel="noreferrer" target="_blank">
                                <div className="transform-gpu ease-in-out hover:scale-105">
                                    <LucideArrowUpRightFromSquare height="32" width="32" />
                                </div>
                            </Link>
                        ) : null}
                        <Link href={githubUrl} rel="noreferrer" target="_blank">
                            <div className="transform-gpu ease-in-out hover:scale-105">
                                <IconGit height="32" width="32" />
                            </div>
                        </Link>
                    </div>
                    <div className="m-auto mb-2 mr-4 flex w-full flex-row items-end justify-end gap-2 p-1">
                        {stack.includes("TypeScript") && <IconTypescript height="32" width="32" />}
                        {stack.includes("Tailwind") && <IconTailwindcss height="32" width="32" />}
                        {stack.includes("NextJS") && <IconNextJS height="32" width="32" />}
                        {stack.includes("Python") && <IconPython height="32" width="32" />}
                        {stack.includes("PostgreSQL") && <IconPostgres height="32" width="32" />}
                        {stack.includes("React") && <IconReactJS height="32" width="32" />}
                    </div>
                </div>
            </div>
        </article>
    );
}
