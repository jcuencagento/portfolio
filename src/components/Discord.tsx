/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

import discord_back from "../../public/discord-back.webp";
import {getDiscordStatus} from "../discord/DiscordAPI";
import discord from "../../public/discord.webp";

export interface LanyardResponse {
    discord_user: {
        id: string;
        username: string;
        discriminator: string;
        avatar: string;
    };
    discord_status: string;
    active_on_discord_web: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    listening_to_spotify: boolean;
    activities: {
        id: string;
        name: string;
        type: number;
        state: string;
        timestamps: {
            end: number;
        };
        emoji: {
            name: string;
        };
        created_at: number;
    }[];
}

export default function Discord() {
    const [myStatus, setMyStatus] = useState<LanyardResponse>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response = await getDiscordStatus();
                const data = await response.json();

                setMyStatus(data.data);
                setLoading(false);
            } catch (error) {
                // Handle error...
                setLoading(false);
            }
        };

        fetchStatus();
    }, []);

    return (
        <div className="row-span-1 grid grid-cols-4 gap-2">
            <div className="col-span-1 p-1">
                <Link href="/misc">
                    <Image
                        key="spotify-offline"
                        priority
                        alt="Spotify offline"
                        className="inset-0 h-full w-full transform-gpu rounded-xl object-cover duration-300 hover:scale-105"
                        src={discord}
                        style={myStatus?.discord_status === "online" ? {} : {filter: "blur(1px)"}}
                    />
                </Link>
            </div>
            <div className="relative col-span-3 m-auto flex h-full w-full items-center justify-center p-1">
                <Image
                    key="spotify-background"
                    priority
                    alt="Background Spotify"
                    className="absolute inset-0 h-full w-full rounded-xl object-cover"
                    src={discord_back}
                    style={{filter: "blur(0.5px)", opacity: "0.65"}}
                />
                <div className="align-center flex flex-col justify-center">
                    {loading ? (
                        <div className="transform-gpu duration-300">
                            <article className="m-auto flex flex-col">
                                <p className="text-xl font-extrabold">Loading...</p>
                                <p className="text-lg font-bold italic">⌛ wait ⏰</p>
                            </article>
                        </div>
                    ) : myStatus?.discord_status === "online" ? (
                        <div className="transform-gpu duration-300">
                            <article className="m-auto flex flex-col">
                                <p className="text-xl font-extrabold">Online...</p>
                                <p className="text-lg font-bold italic">💚🥒🍏</p>
                            </article>
                        </div>
                    ) : (
                        <div className="transform-gpu duration-300">
                            <article className="m-auto flex flex-col">
                                <p className="text-xl font-extrabold text-primary opacity-100">Offline...</p>
                                <p className="text-lg font-bold italic">😡⭕❤️</p>
                            </article>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
