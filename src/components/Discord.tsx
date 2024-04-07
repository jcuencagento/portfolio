/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="row-span-1 grid grid-cols-4">
            <div className="col-span-1 p-1">
                <Link href="/misc">
                    <Image
                        key="spotify-offline"
                        priority
                        alt="Spotify offline"
                        className="blink inset-0 h-full w-full transform-gpu transform-gpu rounded-xl object-cover"
                        src={discord}
                        style={myStatus?.discord_status === "online" ? {} : {filter: "blur(2px)"}}
                    />
                </Link>
            </div>
            <div className="col-span-3 m-auto p-1">
                {loading ? (
                    <p>Loading...</p>
                ) : myStatus?.discord_status === "online" ? (
                    <p>Online right now... 💚🍏🥒</p>
                ) : (
                    <p>Offline right now... 🔴❤️😡</p>
                )}
            </div>
        </div>
    );
}
