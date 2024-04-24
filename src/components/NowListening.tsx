/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {LucideCloud, LucideCloudOff} from "lucide-react";

import spotify_back from "../../public/spotify-back.webp";
import {getNowPlayingItem} from "../spotify/SpotifyAPI";
import offline from "../../public/spotify-off.webp";

export default function NowListening() {
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
            <div className="col-span-1 p-1">
                {now ? (
                    <a href={now.songUrl} rel="noreferrer" target="_blank">
                        <Image
                            key="spotify-offline"
                            priority
                            alt="Spotify offline"
                            className="inset-0 h-full w-full transform-gpu rounded-xl object-cover duration-300 ease-in-out hover:scale-105"
                            height={100}
                            src={now.albumImageUrl}
                            width={100}
                        />
                    </a>
                ) : (
                    <a href="https://open.spotify.com/user/thekingeorge" rel="noreferrer" target="_blank">
                        <Image
                            key="spotify-offline"
                            priority
                            alt="Spotify offline"
                            className="inset-0 h-full w-full transform-gpu rounded-xl object-cover duration-300 ease-in-out hover:scale-105"
                            height={100}
                            src={offline}
                            style={{filter: "blur(1px)"}}
                            width={100}
                        />
                    </a>
                )}
                {now ? (
                    <div className="absolute left-1 top-1 rounded-full bg-green-400/90 p-1">
                        <LucideCloud height={28} width={28} />
                    </div>
                ) : (
                    !loading && (
                        <div className="absolute left-1 top-1 rounded-full bg-gray-400/90 p-1">
                            <LucideCloudOff height={28} width={28} />
                        </div>
                    )
                )}
            </div>
            <div className="relative col-span-3 m-auto flex h-full w-full items-center justify-center rounded-2xl p-1">
                {now ? (
                    <>
                        <Image
                            key="spotify-background"
                            priority
                            alt="Background Spotify"
                            className="absolute inset-0 h-full w-full rounded-xl object-cover"
                            src={spotify_back}
                            style={{filter: "blur(0.25px)", opacity: "0.75"}}
                        />
                        <div className="align-center flex flex-col justify-center">
                            {loading ? (
                                <div className="transform-gpu duration-300 ease-in-out">
                                    <article className="m-auto flex flex-col">
                                        <p className="text-xl font-extrabold text-transparent">Loading...</p>
                                        <p className="text-lg font-bold italic text-transparent">⌛ wait ⏰</p>
                                    </article>
                                </div>
                            ) : now ? (
                                <div className="transform-gpu duration-300 ease-in-out">
                                    <article className="m-auto flex flex-col">
                                        <p className="text-xl font-extrabold">{now.title}</p>
                                        <p className="text-lg font-bold italic">{now.artist}</p>
                                    </article>
                                </div>
                            ) : (
                                <div className="transform-gpu duration-300 ease-in-out">
                                    <article className="m-auto flex flex-col">
                                        <p className="text-xl font-extrabold text-transparent">Offline...</p>
                                    </article>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <Link href="/misc">
                        <Image
                            key="spotify-background"
                            priority
                            alt="Background Spotify"
                            className="absolute inset-0 h-full w-full rounded-xl object-cover"
                            src={spotify_back}
                            style={{filter: "blur(0.25px)", opacity: "0.75"}}
                        />
                        <div className="align-center flex flex-col justify-center">
                            {loading ? (
                                <div className="transform-gpu duration-300 ease-in-out">
                                    <article className="m-auto flex flex-col">
                                        <p className="text-xl font-extrabold text-transparent">Loading...</p>
                                        <p className="text-lg font-bold italic text-transparent">⌛ wait ⏰</p>
                                    </article>
                                </div>
                            ) : (
                                <div className="transform-gpu duration-300 ease-in-out">
                                    <article className="m-auto flex flex-col">
                                        <p className="text-xl font-extrabold text-transparent">Offline...</p>
                                    </article>
                                </div>
                            )}
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}
