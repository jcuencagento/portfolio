import Image from "next/image";

import me from "../../public/Nieve.webp";
import intro from "../../public/intro.webp";

export default function Introduction() {
    return (
        <div className="col-span-2 row-span-1 transform-gpu select-none rounded-xl p-32 text-xl font-bold leading-[4rem] duration-500 hover:cursor-grab lg:col-span-2 lg:h-80">
            <Image
                key="intro-background"
                alt="Intro background"
                className="-z-1 absolute inset-0 h-full w-full rounded-xl object-cover"
                src={intro}
                style={{filter: "blur(1.5px)", opacity: "0.4"}}
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 mb-2 flex flex-col gap-2 p-2">
                <article className="m-auto flex justify-between gap-8 lg:gap-16">
                    <div className="flex flex-col rounded-2xl p-1 px-2">
                        <p className="m-auto ml-8 text-3xl font-extrabold text-primary/90 2xl:text-6xl">
                            hi <span className="wave transform-gpu">🤘</span>
                        </p>
                        <p className="m-auto ml-1 text-2xl font-extrabold text-primary/90 2xl:text-4xl">Javi Cuenca here</p>
                    </div>
                    <Image
                        priority
                        alt="Myself"
                        className="transform-gpu rounded-full border-4 border-primary shadow-lg duration-300 ease-in-out hover:rotate-6 hover:scale-105"
                        src={me}
                        style={{
                            width: "10vh",
                            height: "10vh",
                        }}
                    />
                </article>
                <div className="m-auto mb-0 mt-0 flex flex-col rounded-2xl px-2 lg:mb-2 lg:mt-2">
                    <p className="m-auto mb-0 p-1 text-lg font-extrabold text-primary/90 lg:text-xl">
                        Telecommunications engineer and software developer
                    </p>
                    <p className="m-auto mb-0 mt-0 p-1 text-lg font-extrabold italic text-primary/90 lg:text-2xl  ">
                        +5 years coding +2 professionally
                    </p>
                </div>
            </div>
        </div>
    );
}
