"use client";
import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

import NowListening from "./NowListening";
import {Button} from "./ui/button";

export default function Misc() {
    return (
        <div className="col-span-1 row-span-1 transform-gpu rounded-2xl p-4 text-xl font-bold leading-[4rem] duration-500">
            <div className="grid h-full w-full grid-rows-3">
                <NowListening />
                <Link aria-label="More projects" className="grid-row-1 m-auto p-2" href="/misc">
                    <Button>Misc whatevers</Button>
                </Link>
                <div className="grid-row-1 m-auto p-2">
                    <p>future Discord component..</p>
                </div>
            </div>
        </div>
    );
}
