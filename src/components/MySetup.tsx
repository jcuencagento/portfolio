/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import Link from "next/link";
import {LucideArrowUpRightFromSquare, LucidePiggyBank} from "lucide-react";

import torre from "../../public/setup/torre.webp";
import cpu from "../../public/setup/cpu.webp";
import amd from "../../public/setup/amd.webp";
import ram from "../../public/setup/ram.webp";
import monitor from "../../public/setup/monitor.webp";
import keyboard from "../../public/setup/keyboard.webp";
import mouse from "../../public/setup/mouse.webp";
import headphones from "../../public/setup/headphones.webp";

export default function MySetup() {
    const myThings = [
        {
            id: 1,
            name: "Arcanite",
            imageSrc: torre,
            testUrl: "https://forgeon.es/?page_id=1194",
            price: "120$",
        },
        {
            id: 2,
            name: "Intel i7 12700k",
            imageSrc: cpu,
            testUrl:
                "https://www.intel.la/content/www/xl/es/products/sku/134591/intel-core-i712700-processor-25m-cache-up-to-4-90-ghz/specifications.html",
            price: "320$",
        },
        {
            id: 3,
            name: "AMD RX 6600",
            imageSrc: amd,
            testUrl: "https://www.amd.com/es/graphics/amd-radeon-rx-6600-series",
            price: "220$",
        },
        {
            id: 4,
            name: "Corsair 32GB",
            imageSrc: ram,
            testUrl:
                "https://www.corsair.com/es/es/p/memory/cmw16gx4m2c3200c16/vengeancea-rgb-pro-16gb-2-x-8gb-ddr4-dram-3200mhz-c16-memory-kit-a-black-cmw16gx4m2c3200c16",
            price: "90$",
        },
        {
            id: 5,
            name: "LG 4K",
            imageSrc: monitor,
            testUrl:
                "https://www.tiendalgonline.com/monitores-ultrafine-4k5k/27UL500W-W-EEU.html?gad_source=1&gclid=CjwKCAjwoa2xBhACEiwA1sb1BG515KtkWBS8QOZ5GHITe2r4BoUUuTuEN88EgZNM0bSKrQMC9XOachoCYAoQAvD_BwE&gclsrc=aw.ds",
            price: "190$",
        },
        {
            id: 6,
            name: "Clutch",
            imageSrc: keyboard,
            testUrl: "https://www.pccomponentes.com/forgeon-clutch-teclado-gaming-rgb-60-switch-red",
            price: "65$",
        },
        {
            id: 7,
            name: "Darrowspike",
            imageSrc: mouse,
            testUrl: "https://www.pccomponentes.com/forgeon-darrowspike-rgb-raton-gaming-inalambrico-19000-dpi-negro",
            price: "40$",
        },
        {
            id: 8,
            name: "Barracuda",
            imageSrc: headphones,
            testUrl: "https://www.razer.com/es-es/gaming-headsets/razer-barracuda-x",
            price: "100$",
        },
    ];

    return (
        <div className="flex w-full flex-col">
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
                {myThings.map((thing: any) => (
                    <article key={thing.id} className="col-span-1 flex h-40 flex-1 flex-col items-center justify-between p-2 lg:h-64">
                        <div className="relative flex h-full w-full flex-col justify-between rounded-2xl border-4 border-primary">
                            <Image
                                priority
                                alt={thing.name}
                                className="absolute inset-0 h-full w-full rounded-lg object-cover"
                                src={thing.imageSrc}
                                style={{
                                    maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 70%)",
                                    WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 70%)", // For Safari
                                }}
                            />
                            <div className="pt-1" />
                            <div className="mx-1 mb-2 grid grid-cols-6 px-1.5">
                                <div className="col-span-3 m-auto flex w-full items-center">
                                    <p className="m-auto flex text-base font-bold lg:text-lg">{thing.name}</p>
                                </div>
                                <div className="col-span-1 m-auto flex items-center">
                                    {thing.testUrl ? (
                                        <Link href={thing.testUrl} rel="noreferrer" target="_blank">
                                            <div className="transform-gpu duration-300 ease-in-out hover:scale-105">
                                                <LucideArrowUpRightFromSquare height="24" width="24" />
                                            </div>
                                        </Link>
                                    ) : null}
                                </div>
                                <div className="col-span-2 m-auto flex w-full flex-row items-end justify-end gap-1 font-semibold">
                                    {thing.price}
                                    <LucidePiggyBank height="24" width="24" />
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
