"use client";
import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

import aot from "../../public/anime/aot-vertical.webp";
import aot2 from "../../public/anime/aot-horizontal.webp";
import eren from "../../public/anime/eren-vertical.webp";
import eren2 from "../../public/anime/eren-horizontal.webp";
import eren3 from "../../public/anime/eren_vertical.webp";
import erwin from "../../public/anime/erwin-vertical.webp";
import levi from "../../public/anime/levi-vertical.webp";
import levi2 from "../../public/anime/levi-horizontal.webp";

const images = [aot, aot2, eren, eren2, eren3, erwin, levi, levi2];

export default function Misc() {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="col-span-1 row-span-1 transform-gpu rounded-xl bg-purple-300 p-12 text-xl font-bold leading-[4rem] duration-500 hover:scale-95 lg:p-6">
            <Link href="/misc">
                {images.map((img, index) => (
                    <Image
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        priority
                        alt="Anime image"
                        className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                        src={img}
                        style={{
                            opacity: index === imageIndex ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out",
                        }}
                    />
                ))}
            </Link>
        </div>
    );
}
