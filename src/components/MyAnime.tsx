/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import Link from "next/link";

import shingeki from "../../public/animes/shingeki.webp";
import jujutsu from "../../public/animes/jujutsu.webp";
import hunter from "../../public/animes/hunter.webp";
import kimetsu from "../../public/animes/kimetsu.webp";

export default function MyAnime() {
    const favAnimes = [
        {
            id: 1,
            name: "Shingeki No Kyojin",
            imageSrc: shingeki,
            letterboxdUrl: "https://letterboxd.com/film/attack-on-titan-chronicle/",
            study: "Wit / Mappa",
            years: "2013-2023",
        },
        {
            id: 2,
            name: "Jujutsu Kaisen",
            imageSrc: jujutsu,
            letterboxdUrl: "https://letterboxd.com/film/jujutsu-kaisen/",
            studio: "Mappa",
            years: "2020-",
        },
        {
            id: 3,
            name: "Hunter x Hunter",
            imageSrc: hunter,
            letterboxdUrl: "https://letterboxd.com/fantic/list/hunter-x-hunter/",
            studio: "Madhouse",
            years: "2011-",
        },
        {
            id: 4,
            name: "Kimetsu No Yaiba",
            imageSrc: kimetsu,
            letterboxdUrl: "https://letterboxd.com/film/demon-slayer-kimetsu-no-yaiba/",
            studio: "Ufotable",
            years: "2019-",
        },
    ];

    return (
        <div className="flex w-full flex-col">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {favAnimes.map((anime: any) => (
                    <article
                        key={anime.id}
                        className="relative m-auto flex h-40 w-full transform-gpu items-center justify-center rounded-2xl border-4 border-primary shadow-xl duration-500 ease-in-out ease-in-out hover:scale-95 lg:h-72"
                    >
                        <Link href={anime.letterboxdUrl || "/misc"} rel="noreferrer" target="_blank">
                            <Image
                                key={`image-movie-${anime.id}`}
                                priority
                                alt="Album image"
                                className="absolute inset-0 h-full w-full rounded-xl object-cover"
                                height={1000}
                                src={anime.imageSrc}
                                width={1000}
                            />
                            <div className="align-center flex h-full w-full flex-col justify-center p-4 py-14">
                                <div className="transform-gpu duration-300 ease-in-out">
                                    <article className="m-auto flex flex-col">
                                        <p className="text-base font-extrabold opacity-100 lg:text-lg">{anime.name}</p>
                                        <p className="text-sm font-bold italic opacity-100 lg:text-base">
                                            {anime.studio} in {anime.years}
                                        </p>
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
