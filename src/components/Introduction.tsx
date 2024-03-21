import Image from "next/image";

import me from "../../public/Nieve.webp";

import {Button} from "./ui/button";

export default function Introduction() {
    return (
        <div className="col-span-1 row-span-1 transform-gpu rounded-xl bg-blue-300 p-4 text-xl font-bold leading-[4rem] duration-500 hover:scale-95 lg:col-span-2">
            <div className="mb-2 flex flex-col gap-2 p-2">
                <article className="m-auto flex gap-6">
                    <div className="flex flex-col">
                        <p className="m-auto ml-8 text-3xl font-bold text-primary 2xl:text-6xl">
                            hi <span className="wave transform-gpu">🤘</span>
                        </p>
                        <p className="m-auto ml-1 text-2xl font-bold text-primary 2xl:text-4xl">Javi Cuenca here</p>
                    </div>
                    <Image
                        priority
                        alt="Myself"
                        className="rounded-full shadow-lg"
                        src={me}
                        style={{
                            width: "10vh",
                            height: "10vh",
                        }}
                    />
                </article>
                <p className="m-auto text-lg font-semibold text-primary lg:text-xl">Telecommunications engineer and software developer</p>
                <p className="m-auto text-lg font-bold italic text-primary lg:text-xl">+5 years coding, +2 professionaly</p>
            </div>
            <Button className="flex flex-grow" variant="default">
                Introduction
            </Button>
        </div>
    );
}
