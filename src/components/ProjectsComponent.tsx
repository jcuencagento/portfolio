/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client";

import Image from "next/image";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import {LucideFolderGit2} from "lucide-react";

import aesthetic from "../../public/aesthetic.webp";

import {Button} from "./ui/button";

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
        <div className="col-span-2 row-span-1 transform-gpu rounded-xl p-2 font-bold leading-[4rem] duration-500 lg:col-span-1 lg:p-4">
            <article className="relative flex flex-1 flex-col items-center rounded-lg p-32 lg:p-40">
                <Image
                    key="aesthetic-programming"
                    priority
                    alt="Aesthetic programming"
                    className="absolute inset-0 h-full w-full rounded-xl object-cover"
                    src={aesthetic}
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center">
                    <Link aria-label="More projects" className="m-auto" href="/projects">
                        <Button className="flex flex-row gap-2">
                            <LucideFolderGit2 height={12} width={12} /> <p>More Projects</p>
                        </Button>
                    </Link>
                    <Link
                        aria-label="GitHub"
                        className="m-auto mb-1 w-full transform-gpu p-2 duration-300 ease-in-out ease-in-out"
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
    );
}
