/* eslint-disable jsx-a11y/media-has-caption */
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
                    className="ty-50 relative m-auto flex h-full w-full transform-gpu items-center justify-center duration-300 ease-in-out hover:scale-95 lg:p-8"
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
                            <div className="transform-gpu duration-300 ease-in-out">
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
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState("");
    const audioRef = React.useRef<HTMLAudioElement>(null);

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

    const handlePlayPreview = (track: any) => {
        if (track.preview_url && audioRef.current) {
            audioRef.current.src = track.preview_url;
            audioRef.current.play();
            setIsPlaying(true);
            setCurrentTrack(track.name);
        }
    };

    const handleStopPreview = (track: any) => {
        if (audioRef.current) {
            if (audioRef.current.src === track.preview_url) {
                audioRef.current.pause();
                setIsPlaying(false);
                setCurrentTrack("");
            } else {
                audioRef.current.src = track.preview_url;
                audioRef.current.play();
                setCurrentTrack(track.name);
            }
        }
    };

    return (
        <div className="flex w-full flex-col">
            {loading ? (
                <SkeletonLoader />
            ) : myTopTracks ? (
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {myTopTracks.slice(0, 16).map((track: any) => (
                        <article
                            key={track.id}
                            className="relative m-auto flex h-24 w-full transform-gpu items-center justify-center rounded-2xl border-4 border-primary shadow-xl duration-300 ease-in-out hover:scale-95 lg:h-40"
                        >
                            <div onClick={() => (!isPlaying ? handlePlayPreview(track) : handleStopPreview(track))}>
                                <Image
                                    key={`image-track-${track.id}`}
                                    priority
                                    alt="Album image"
                                    className="absolute inset-0 h-full w-full rounded-xl object-cover"
                                    height={1000}
                                    src={track.album.images[0].url || spotify_back}
                                    style={{opacity: currentTrack === track.name ? "1" : "0.25"}}
                                    width={1000}
                                />
                                <div className="align-center flex h-full w-full flex-col justify-center p-4">
                                    <div className="transform-gpu duration-300 ease-in-out">
                                        <article className="m-auto flex flex-col">
                                            <p
                                                className="font-extrabold opacity-100"
                                                style={{fontSize: currentTrack === track.name ? "1.8vh" : "1.5vh"}}
                                            >
                                                {track.name}
                                            </p>
                                            <p
                                                className="font-bold italic opacity-100"
                                                style={{fontSize: currentTrack === track.name ? "1.3vh" : "1vh"}}
                                            >
                                                {track.album.artists[0].name}
                                            </p>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                    <audio ref={audioRef} />
                </div>
            ) : (
                <h2>No top tracks today 🥶</h2>
            )}
        </div>
    );
}
