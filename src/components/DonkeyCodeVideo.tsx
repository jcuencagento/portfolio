/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client";
import Link from "next/link";

import {Video} from "./ui/video";

export default function DonkeyCodeVideo() {
    return (
        <div className="col-span-2 row-span-1 transform-gpu rounded-xl p-2 font-bold leading-[4rem] duration-500 lg:col-span-2 lg:p-4">
            <Link href="https://donkey-code.vercel.app" rel="noreferrer" target="_blank">
                <article className="relative m-0 flex h-48 w-full rounded-xl lg:h-[28rem]">
                    <Video />
                </article>
            </Link>
        </div>
    );
}
