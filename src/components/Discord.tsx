/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React, {useState, useEffect} from "react";

import {getDiscordStatus} from "../discord/DiscordAPI";

export default function Discord() {
    const [myStatus, setMyStatus] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response = await getDiscordStatus();
                const data = await response.json();
                console.log(data);
                setMyStatus(data.data.discord_status);
                setLoading(false);
            } catch (error) {
                // Handle error...
                setLoading(false);
            }
        };

        fetchStatus();
    }, []);

    return <div className="flex flex-col">{loading ? <p>Loading...</p> : <h2>I am {myStatus} 🥶</h2>}</div>;
}
