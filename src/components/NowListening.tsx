/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="row-span-1 grid grid-cols-4">
            <div className="col-span-1 p-1">
                {now ? (
                    <a href={now.songUrl} rel="noreferrer" target="_blank">
                        <Image
                            key="spotify-offline"
                            priority
                            alt="Spotify offline"
                            className="inset-0 h-full w-full rounded-xl object-cover"
                            height={100}
                            src={now.albumImageUrl}
                            width={100}
                        />
                    </a>
                ) : (
                    <a href="/misc">
                        <Image
                            key="spotify-offline"
                            priority
                            alt="Spotify offline"
                            className="inset-0 h-full w-full rounded-xl object-cover"
                            src={offline}
                            style={{filter: "blur(2px)"}}
                        />
                    </a>
                )}
            </div>
            <div className="col-span-3 m-auto p-1">
                {loading ? (
                    <p>Loading...</p>
                ) : now ? (
                    <Link
                        aria-label="Spotify song"
                        className="inset-0 h-full w-full rounded-xl object-cover"
                        href={now.songUrl}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <div className="transform-gpu duration-300 hover:scale-95">
                            <article className="m-auto flex flex-col">
                                <p className="text-lg font-bold">{now.title}</p>
                                <p className="text-base italic">{now.artist}</p>
                            </article>
                        </div>
                    </Link>
                ) : (
                    <p>Offline right now</p>
                )}
            </div>
        </div>
    );
}
