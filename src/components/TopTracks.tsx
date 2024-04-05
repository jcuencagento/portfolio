/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React, {useState, useEffect} from "react";

import {topTracks} from "../spotify/SpotifyAPI";

export default function TopTracks() {
    const [myTopTracks, setMyTopTracks] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopTracks = async () => {
            try {
                const response = await topTracks();
                const data = await response.json();

                console.log(data.items);
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
        <div className="flex flex-col">
            {loading ? (
                <p>Loading...</p>
            ) : myTopTracks ? (
                <ul>
                    {myTopTracks.map((track: any) => (
                        <li key={track.id}>
                            <a href={track.external_urls.spotify} rel="noreferrer" target="_blank">
                                {track.name} by {track.artists[0].name}
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <h2>No top tracks today 🥶</h2>
            )}
        </div>
    );
}