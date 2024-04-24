/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

import letterboxd_back from "../../public/letterboxd-back.webp";
/* Fav Movies */
import shawshank from "../../public/cinema/shawshank.webp";
import infinitywar from "../../public/cinema/infinitywar.webp";
import inglourious from "../../public/cinema/inglourious.webp";
import parasite from "../../public/cinema/parasite.webp";
/* Next Movies */
import deadpoolwolverine from "../../public/cinema/deadpoolwolverine.webp";
import taxidriver from "../../public/cinema/taxidriver.webp";
import fargo from "../../public/cinema/fargo.webp";
import angrymen from "../../public/cinema/angrymen.webp";

function SkeletonLoader() {
    return (
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            {[...Array(4)].map((_, index) => (
                <article
                    key={index}
                    className="relative m-auto flex h-40 w-full transform-gpu items-center justify-center duration-300 ease-in-out hover:scale-95 lg:h-72"
                >
                    <Link href="/misc">
                        <Image
                            key={`image-skeletonmovie-${index}`}
                            priority
                            alt="Album image"
                            className="absolute inset-0 h-full w-full rounded-xl object-cover"
                            height={1000}
                            src={letterboxd_back}
                            style={{filter: "blur(1px)", opacity: "0.65"}}
                            width={1000}
                        />
                        <div className="align-center flex h-full w-full flex-col justify-center p-4 py-8">
                            <div className="transform-gpu duration-300 ease-in-out">
                                <article className="m-auto flex flex-col">
                                    <p className="text-base font-extrabold opacity-100 lg:text-lg">Loading...</p>
                                    <p className="text-sm font-bold italic opacity-100 lg:text-base">⌛</p>
                                </article>
                            </div>
                        </div>
                    </Link>
                </article>
            ))}
        </div>
    );
}

export default function MyMovies() {
    const favMovies = [
        {
            id: 1,
            name: "The Shawshank Redemption",
            imageSrc: shawshank,
            letterboxdUrl: "https://letterboxd.com/film/the-shawshank-redemption/",
            director: "Frank Darabont",
            year: "1994",
        },
        {
            id: 2,
            name: "Inglorious Basterds",
            imageSrc: inglourious,
            letterboxdUrl: "https://letterboxd.com/film/inglourious-basterds/",
            director: "Quentin Tarantino",
            year: "2009",
        },
        {
            id: 3,
            name: "Infinity War",
            imageSrc: infinitywar,
            letterboxdUrl: "https://letterboxd.com/film/avengers-infinity-war/",
            director: "Russo Brothers",
            year: "2018",
        },
        {
            id: 4,
            name: "Parasite",
            imageSrc: parasite,
            letterboxdUrl: "https://letterboxd.com/film/parasite-2019/",
            director: "Bong Joon-ho",
            year: "2019",
        },
    ];

    const nextMovies = [
        {
            id: 1,
            name: "Deadpool & Wolverine",
            imageSrc: deadpoolwolverine,
            letterboxdUrl: "https://letterboxd.com/film/deadpool-wolverine/",
            director: "Shawn Levy",
            year: "2024",
        },
        {
            id: 2,
            name: "Taxi Driver",
            imageSrc: taxidriver,
            letterboxdUrl: "https://letterboxd.com/film/taxi-driver/",
            director: "Martin Scorsese",
            year: "1976",
        },
        {
            id: 3,
            name: "Fargo",
            imageSrc: fargo,
            letterboxdUrl: "https://letterboxd.com/film/fargo/",
            director: "Joel Coen",
            year: "1996",
        },
        {
            id: 4,
            name: "12 Angry Men",
            imageSrc: angrymen,
            letterboxdUrl: "https://letterboxd.com/film/12-angry-men/",
            director: "Sidney Lumet",
            year: "1957",
        },
    ];

    const [myMoviesToSee, setMyMoviesToSee] = useState<any>(nextMovies);
    const [loading, setLoading] = useState(false);

    /* Use Letterbox if possible
    useEffect(() => {
        const fetchTopTracks = async () => {
            try {
                const response = await topTracks();
                const data = await response.json();

                setMyMoviesToSee(data.items);
                setLoading(false);
            } catch (error) {
                // Handle error...
                setLoading(false);
            }
        };

        fetchTopTracks();
    }, []);
    */

    return (
        <div className="flex w-full flex-col">
            <h2 className="m-auto mb-2">Some Fav Movies</h2>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                {favMovies.map((movie: any) => (
                    <article
                        key={movie.id}
                        className="relative m-auto flex h-40 w-full transform-gpu items-center justify-center rounded-2xl border-4 border-primary shadow-xl duration-500 ease-in-out hover:scale-95 lg:h-72"
                    >
                        <Link href={movie.letterboxdUrl || "/misc"} rel="noreferrer" target="_blank">
                            <Image
                                key={`image-movie-${movie.id}`}
                                priority
                                alt="Album image"
                                className="absolute inset-0 h-full w-full rounded-xl object-cover"
                                height={1000}
                                src={movie.imageSrc}
                                width={1000}
                            />
                            <div className="align-center flex h-full w-full flex-col justify-center p-4 py-8">
                                <div className="transform-gpu duration-300 ease-in-out">
                                    <article className="m-auto flex flex-col">
                                        <p className="text-base font-extrabold opacity-100 lg:text-lg">{movie.name}</p>
                                        <p className="text-sm font-bold italic opacity-100 lg:text-base">
                                            {movie.director} - {movie.year}
                                        </p>
                                    </article>
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
            <h2 className="m-auto mb-2 mt-4 lg:mt-8">Next Movies to see...</h2>
            {loading ? (
                <SkeletonLoader />
            ) : myMoviesToSee ? (
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                    {myMoviesToSee.map((movie: any) => (
                        <article
                            key={movie.id}
                            className="relative m-auto flex h-40 w-full transform-gpu items-center justify-center rounded-2xl duration-500 ease-in-out hover:scale-95 lg:h-72"
                        >
                            <Link href={movie.letterboxdUrl || "/misc"} rel="noreferrer" target="_blank">
                                <Image
                                    key={`image-movie-${movie.id}`}
                                    priority
                                    alt="Album image"
                                    className="absolute inset-0 h-full w-full rounded-2xl border-4 border-primary object-cover shadow-xl"
                                    height={1000}
                                    src={movie.imageSrc}
                                    width={1000}
                                />
                                <div className="align-center relative inset-0 flex flex-col justify-center p-4 py-8">
                                    <article className="m-auto flex flex-col">
                                        <p className="text-base font-extrabold opacity-100 lg:text-lg">{movie.name}</p>
                                        <p className="text-sm font-bold italic opacity-100 lg:text-base">
                                            {movie.director} - {movie.year}
                                        </p>
                                    </article>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            ) : (
                <h2>No movies to see then 🥶</h2>
            )}
        </div>
    );
}
