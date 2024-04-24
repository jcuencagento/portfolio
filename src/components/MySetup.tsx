/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import Link from "next/link";
import {LucideArrowUpRightFromSquare, LucidePiggyBank} from "lucide-react";

import shingeki from "../../public/animes/shingeki.webp";
import jujutsu from "../../public/animes/jujutsu.webp";
import hunter from "../../public/animes/hunter.webp";
import kimetsu from "../../public/animes/kimetsu.webp";

export default function MySetup() {
    const myThings = [
        {
            id: 1,
            name: "Torre",
            imageSrc: shingeki,
            testUrl: "https://letterboxd.com/film/attack-on-titan-chronicle/",
            price: "120$",
        },
        {
            id: 2,
            name: "CPU",
            imageSrc: jujutsu,
            testUrl: "https://letterboxd.com/film/jujutsu-kaisen/",
            price: "120$",
        },
        {
            id: 3,
            name: "Graphs",
            imageSrc: hunter,
            testUrl: "https://letterboxd.com/fantic/list/hunter-x-hunter/",
            price: "120$",
        },
        {
            id: 4,
            name: "Memory",
            imageSrc: kimetsu,
            testUrl: "https://letterboxd.com/film/demon-slayer-kimetsu-no-yaiba/",
            price: "120$",
        },
        {
            id: 5,
            name: "Monitors",
            imageSrc: kimetsu,
            testUrl: "https://letterboxd.com/film/demon-slayer-kimetsu-no-yaiba/",
            price: "120$",
        },
        {
            id: 6,
            name: "Keyboard",
            imageSrc: kimetsu,
            testUrl: "https://letterboxd.com/film/demon-slayer-kimetsu-no-yaiba/",
            price: "120$",
        },
        {
            id: 7,
            name: "Mouse",
            imageSrc: kimetsu,
            testUrl: "https://letterboxd.com/film/demon-slayer-kimetsu-no-yaiba/",
            price: "50$",
        },
        {
            id: 8,
            name: "Whatever",
            imageSrc: kimetsu,
            testUrl: "https://letterboxd.com/film/demon-slayer-kimetsu-no-yaiba/",
            price: "120$",
        },
    ];

    return (
        <div className="flex w-full flex-col">
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
                {myThings.map((thing: any) => (
                    <article key={thing.id} className="col-span-1 flex flex-1 flex-col items-center p-2 lg:h-64">
                        <div className="relative flex h-full w-full flex-col rounded-2xl border-4 border-primary">
                            <Image
                                priority
                                alt={thing.name}
                                className="absolute inset-0 h-full w-full rounded-lg object-cover"
                                src={thing.imageSrc}
                                style={{
                                    maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 70%)",
                                    WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 70%)", // For Safari
                                }}
                            />
                            <div className="py-[9vh]" />
                            <div className="flex flex-row">
                                <div className="ml-4 flex w-full items-center">
                                    <p className="text-base font-bold lg:text-xl">{thing.name}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    {thing.testUrl ? (
                                        <Link href={thing.testUrl} rel="noreferrer" target="_blank">
                                            <div className="transform-gpu duration-300 ease-in-out hover:scale-105">
                                                <LucideArrowUpRightFromSquare height="24" width="24" />
                                            </div>
                                        </Link>
                                    ) : null}
                                </div>
                                <div className="m-auto mr-4 flex w-full flex-row font-semibold items-end justify-end gap-2 p-1">
                                    {thing.price}
                                    <LucidePiggyBank height="24" width="24" />
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
