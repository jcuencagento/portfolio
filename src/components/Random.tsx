"use client";
import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

import aot_vert from "../../public/random/aot-vertical.webp";
import aot2 from "../../public/random/aot-horizontal.webp";
import eren_vert from "../../public/random/eren-vertical.webp";
import eren2 from "../../public/random/eren-horizontal.webp";
import eren3_vert from "../../public/random/eren_vertical.webp";
import levi_vert from "../../public/random/levi-vertical.webp";
import levi2 from "../../public/random/levi-horizontal.webp";
import dune2 from "../../public/random/dune2.webp";
import goodfellas from "../../public/random/goodfellas.webp";
import haliburton from "../../public/random/haliburton.webp";
import monsters from "../../public/random/monsters.webp";
import nirvana from "../../public/random/nirvana.webp";
import reservoir from "../../public/random/reservoir.webp";
import scarface from "../../public/random/scarface.webp";
import slipknot from "../../public/random/slipknot.webp";
import spiderman from "../../public/random/spiderman.webp";

const images = [
    aot_vert,
    dune2,
    aot2,
    goodfellas,
    haliburton,
    eren_vert,
    monsters,
    nirvana,
    eren2,
    reservoir,
    scarface,
    eren3_vert,
    slipknot,
    levi_vert,
    levi2,
    spiderman,
];

export default function Random() {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * images.length);

            setImageIndex(randomIndex);
        }, 7500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="col-span-1 row-span-1 transform-gpu rounded-xl p-16 text-xl font-bold leading-[4rem] duration-500 hover:scale-95 lg:p-4">
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
