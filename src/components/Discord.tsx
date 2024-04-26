/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import {LucideCloud, LucideCloudOff} from "lucide-react";
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
                setLoading(false);
            }
        };

        fetchStatus();
    }, []);

    return (
        <div className="row-span-1 grid grid-cols-4 gap-2">
            <div className="col-span-1 p-1">
                <Link href="https://discordapp.com/users/689464587963334747" rel="noreferrer" target="_blank">
                    <Image
                        key="discord"
                        priority
                        alt="Discord status"
                        className="inset-0 h-full w-full transform-gpu rounded-xl object-cover duration-300 ease-in-out hover:scale-105"
                        src={discord}
                        style={myStatus?.discord_status === "online" ? {} : {filter: "blur(1px)"}}
                    />
                    {myStatus?.discord_status === "online" ? (
                        <div className="absolute bottom-1 left-1 rounded-full bg-green-400/90 p-1">
                            <LucideCloud height={28} width={28} />
                        </div>
                    ) : (
                        !loading && (
                            <div className="absolute bottom-1 left-1 rounded-full bg-gray-400/90 p-1">
                                <LucideCloudOff height={28} width={28} />
                            </div>
                        )
                    )}
                </Link>
            </div>
            <div className="relative col-span-3 m-auto flex h-full w-full items-center justify-center rounded-2xl p-1">
                <Link href="/projects">
                    <Image
                        key="spotify-background"
                        priority
                        alt="Background Spotify"
                        className="absolute inset-0 h-full w-full rounded-xl object-cover"
                        src={discord_back}
                        style={{filter: "blur(0.25px)", opacity: "0.75"}}
                    />
                    <div className="align-center relative inset-0 m-auto flex flex-col justify-center">
                        {loading ? (
                            <div>
                                <article className="m-auto flex flex-col">
                                    <p className="text-xl font-extrabold text-transparent">Loading...</p>
                                    <p className="text-lg font-bold italic text-transparent">⌛ wait ⏰</p>
                                </article>
                            </div>
                        ) : myStatus?.discord_status === "online" ? (
                            <div>
                                <article className="m-auto flex flex-col">
                                    <p className="text-xl font-extrabold text-transparent">Online...</p>
                                </article>
                            </div>
                        ) : (
                            <div>
                                <article className="m-auto flex flex-col">
                                    <p className="text-xl font-extrabold text-primary text-transparent">Offline...</p>
                                </article>
                            </div>
                        )}
                    </div>
                </Link>
            </div>
        </div>
    );
}
