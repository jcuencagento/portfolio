import {LucidePin} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import map from "../../public/spain.webp";

import {Techs} from "./ui/techs";

const madrid_url =
    "https://www.google.com/maps/place/Comunidad+de+Madrid,+Madrid/@40.5253357,-4.1456538,10z/data=!3m1!4b1!4m6!3m5!1s0xd41817a40e033b9:0x10340f3be4bc880!8m2!3d40.4167088!4d-3.5812692!16zL20vMGo0eGc?hl=es-ES&entry=ttu";

export default function Map() {
    return (
        <div className="col-span-2 row-span-1 m-auto flex w-full flex-col gap-8 rounded-xl p-2 font-semibold leading-[4rem] lg:col-span-1 lg:p-4">
            <Techs />
            <div>
                <Link href={madrid_url} rel="noreferrer" target="_blank">
                    <Image
                        priority
                        alt="Map of Madrid with blue location dot in the middle"
                        className="transform-gpu rounded-2xl object-cover duration-300 ease-in-out hover:scale-105"
                        height={400}
                        quality={100}
                        src={map}
                        width={800}
                    />
                </Link>
                <p className="text-quaternary mt-2 flex items-center justify-end space-x-2 pt-2 text-base md:text-right">
                    <LucidePin size={12} />
                    <span>Madrid, Spain</span>
                </p>
            </div>
        </div>
    );
}
