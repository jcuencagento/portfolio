/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React, {useState, useEffect} from "react";

import {topTracks} from "../spotify/SpotifyAPI";

export default function TopTracks() {
    const [tracks, setTracks] = useState<any[]>([]);

    useEffect(() => {
        const fetchTopTracks = async () => {
            try {
                const response = await topTracks();
                const data = await response.json();

                console.log(data.items);
                setTracks(data.items);
            } catch (error) {
                //Something will be done...
            }
        };

        fetchTopTracks();
    }, []);

    if (tracks && tracks.length > 0) {
        return (
            <div>
                <h2>Top Tracks</h2>
                <ul>
                    {tracks.map((track: any) => (
                        <li key={track.id}>
                            {track.name} by {track.artists[0].name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div>
            <h2>No top tracks today 🥶</h2>
        </div>
    );
}
