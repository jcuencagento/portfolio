/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

import spotify_back from "../../public/spotify-back.webp";
import {topTracks} from "../spotify/SpotifyAPI";

function SkeletonLoader() {
    return (
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {[...Array(16)].map((_, index) => (
                <article
                    key={index}
                    className="relative m-auto flex h-full w-full transform-gpu items-center justify-center duration-300 hover:scale-95 hover:opacity-50 lg:p-8"
                >
                    <Link href="/misc" rel="noreferrer" target="_blank">
                        <Image
                            key={`image-skeletontrack-${index}`}
                            priority
                            alt="Album image"
                            className="absolute inset-0 h-full w-full rounded-xl object-cover"
                            height={1000}
                            src={spotify_back}
                            style={{filter: "blur(1px)", opacity: "0.65"}}
                            width={1000}
                        />
                        <div className="align-center flex h-full w-full flex-col justify-center p-4">
                            <div className="transform-gpu duration-300">
                                <article className="m-auto flex flex-col">
                                    <p className="text-base font-extrabold opacity-100 lg:text-lg">Loading</p>
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

export default function TopTracks() {
    const [myTopTracks, setMyTopTracks] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopTracks = async () => {
            try {
                const response = await topTracks();
                const data = await response.json();

                setMyTopTracks(data.items);
                setLoading(false);
            } catch (error) {
                // Handle error...
                setLoading(false);
            }
        };

        fetchTopTracks();
    }, []);

    return (
        <div className="flex w-full flex-col">
            {loading ? (
                <SkeletonLoader />
            ) : myTopTracks ? (
                <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
                    {myTopTracks.slice(0, 16).map((track: any) => (
                        <article
                            key={track.id}
                            className="relative m-auto flex h-full w-full transform-gpu items-center justify-center shadow-xl duration-300 hover:scale-95 hover:opacity-50 lg:p-8"
                        >
                            <Link href={track.external_urls.spotify || "/misc"} rel="noreferrer" target="_blank">
                                <Image
                                    key={`image-track-${track.id}`}
                                    priority
                                    alt="Album image"
                                    className="absolute inset-0 h-full w-full rounded-xl object-cover"
                                    height={1000}
                                    src={track.album.images[0].url || spotify_back}
                                    width={1000}
                                />
                                <div className="align-center flex h-full w-full flex-col justify-center p-4">
                                    <div className="transform-gpu duration-300">
                                        <article className="m-auto flex flex-col">
                                            <p className="text-base font-extrabold opacity-100 lg:text-lg">{track.name}</p>
                                            <p className="text-sm font-bold italic opacity-100 lg:text-base">
                                                {track.album.artists[0].name}
                                            </p>
                                        </article>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            ) : (
                <h2>No top tracks today 🥶</h2>
            )}
        </div>
    );
}
