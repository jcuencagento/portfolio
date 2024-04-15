/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

import letterboxd_back from "../../public/letterboxd-back.webp";
import {getNowPlayingItem} from "../spotify/SpotifyAPI";
import letterbox from "../../public/letterbox.webp";

export default function Letterboxd() {
    const [now, setNow] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGetNowPlayingItem = async () => {
            try {
                const response = await getNowPlayingItem();

                setNow(response);
                setLoading(false);
            } catch (error) {
                // Handle error...
                setLoading(false);
            }
        };

        fetchGetNowPlayingItem();
    }, []);

    return (
        <div className="row-span-1 grid grid-cols-4 gap-2">
            <div className="relative col-span-3 m-auto flex h-full w-full items-center justify-center p-1">
                <Image
                    key="spotify-background"
                    priority
                    alt="Background Spotify"
                    className="absolute inset-0 h-full w-full rounded-xl object-cover"
                    src={letterboxd_back}
                    style={{filter: "blur(0.5px)", opacity: "0.5"}}
                />
                <div className="align-center flex flex-col justify-center">
                    {loading ? (
                        <div className="transform-gpu duration-300 ease-in-out">
                            <article className="m-auto flex flex-col">
                                <p className="text-xl font-extrabold">Loading...</p>
                                <p className="text-lg font-bold italic">⌛ wait ⏰</p>
                            </article>
                        </div>
                    ) : now ? (
                        <div className="transform-gpu duration-300 ease-in-out">
                            <article className="m-auto flex flex-col">
                                <p className="text-xl font-extrabold">Next movie</p>
                                <p className="text-lg font-bold italic">blah blah blah</p>
                            </article>
                        </div>
                    ) : (
                        <Link href="/misc">
                            <div className="transform-gpu duration-300 ease-in-out hover:scale-105">
                                <article className="m-auto flex flex-col">
                                    <p className="text-xl font-extrabold">Next movie</p>
                                    <p className="text-lg font-bold italic">blah blah blah</p>
                                </article>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            <div className="col-span-1 p-1">
                <a href="https://letterboxd.com/jabicuencag/" rel="noreferrer" target="_blank">
                    <Image
                        key="letterboxd"
                        priority
                        alt="Letterboxd"
                        className="inset-0 h-full w-full transform-gpu rounded-xl object-cover duration-300 ease-in-out hover:scale-105"
                        height={100}
                        src={letterbox}
                        width={100}
                    />
                </a>
            </div>
        </div>
    );
}
