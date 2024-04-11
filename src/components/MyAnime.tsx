/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import Link from "next/link";

import shawshank from "../../public/cinema/shawshank.webp";
import infinitywar from "../../public/cinema/infinitywar.webp";
import inglourious from "../../public/cinema/inglourious.webp";
import parasite from "../../public/cinema/parasite.webp";

export default function MyAnime() {
    const favAnimes = [
        {
            id: 1,
            name: "Shingeki No Kyojin",
            imageSrc: shawshank,
            letterboxdUrl: "https://letterboxd.com/film/attack-on-titan-chronicle/",
            study: "Wit / Mappa",
            years: "2013-2023",
        },
        {
            id: 2,
            name: "Jujutsu Kaisen",
            imageSrc: inglourious,
            letterboxdUrl: "https://letterboxd.com/film/jujutsu-kaisen/",
            studio: "Mappa",
            years: "2020-",
        },
        {
            id: 3,
            name: "Hunter x Hunter",
            imageSrc: infinitywar,
            letterboxdUrl: "https://letterboxd.com/fantic/list/hunter-x-hunter/",
            studio: "Madhouse",
            years: "2011-",
        },
        {
            id: 4,
            name: "Kimetsu No Yaiba",
            imageSrc: parasite,
            letterboxdUrl: "https://letterboxd.com/film/demon-slayer-kimetsu-no-yaiba/",
            studio: "Ufotable",
            years: "2019-",
        },
    ];

    return (
        <div className="flex w-full flex-col">
            <div className="grid grid-cols-1 gap-4">
                {favAnimes.slice(0, 4).map((anime: any) => (
                    <article
                        key={anime.id}
                        className="relative m-auto flex h-full w-full transform-gpu items-center justify-center duration-300 hover:scale-95 hover:opacity-50 lg:p-8"
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
                                <div className="transform-gpu duration-300">
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
