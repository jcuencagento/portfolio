/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client";
import type {StaticImageData} from "next/image";

import Image from "next/image";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

import aesthetic from "../../public/aesthetic.webp";
import donkeycode from "../../public/donkeycode_project_HD.webp";

import {Button} from "./ui/button";

const projectArticle = (name: string, description: string, link: string, image: StaticImageData) => {
    return (
        <article className="col-span-1 flex flex-1 flex-col items-center rounded-lg bg-secondary/60 p-2 lg:px-6">
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
            <div>
                <Button className="flex flex-grow" variant="default">
                    Introduction
                </Button>
            </div>
        </article>
    );
};

export default function ProjectsComponent() {
    const selectLastHalfYear = (data: any[]) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;

        return data.filter((activity: {date: string | number | Date}) => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return date.getFullYear() === currentYear && monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth;
        });
    };

    return (
        <div className="col-span-1 row-span-1 transform-gpu rounded-xl p-2 font-bold leading-[4rem] duration-500 lg:col-span-2 lg:p-4">
            <div className="grid auto-rows-auto grid-cols-1 gap-6 lg:grid-cols-2">
                {projectArticle(
                    "Donkey Code",
                    "Interactive typing and coding test to practice.",
                    "https://donkey-code.vercel.app/",
                    donkeycode,
                )}
                {/* {projectArticle(
                    "ComPC Vision",
                    "Educational project of computer vision + business.",
                    "https://github.com/jcuencagento/compc-vision",
                    compcvision,
                )} */}
                <article className="relative flex flex-1 flex-col items-center rounded-lg p-32 lg:p-1 lg:px-1">
                    <Image
                        key="aesthetic-programming"
                        priority
                        alt="Aesthetic programming"
                        className="absolute inset-0 h-full w-full rounded-xl object-cover"
                        src={aesthetic}
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center">
                        <Link aria-label="More projects" className="m-auto" href="/projects">
                            <Button>Go to Projects</Button>
                        </Link>
                        <Link
                            aria-label="GitHub"
                            className="m-auto mb-1 w-4/5 transform-gpu p-2 duration-300 ease-in-out hover:scale-95 xl:w-full"
                            href="https://github.com/jcuencagento/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <GitHubCalendar
                                hideColorLegend
                                hideTotalCount
                                blockMargin={3}
                                style={{overflow: "hidden", margin: "auto"}}
                                theme={{
                                    light: ["#d2eed8", "#b3ff6a", "#7dff00", "#48bf53", "#11823b"],
                                    dark: ["#def3f6", "#b3ff6a", "#7dff00", "#48bf53", "#11823b"],
                                }}
                                transformData={selectLastHalfYear}
                                username="jcuencagento"
                            />
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
