import Image from "next/image";
import {GiSpain} from "react-icons/gi";

import titulo from "../../public/titulo-fake.jpeg";

import {Techs} from "./ui/techs";

export default function Studies() {
    return (
        <div className="row-span-2 rounded-xl p-0 lg:row-span-1">
            <div className="relative m-auto mb-0 flex h-full flex-col">
                <Image
                    key="spotify-background"
                    priority
                    alt="Background Spotify"
                    className="absolute inset-0 h-full w-full rounded-xl object-cover"
                    src={titulo}
                    style={{
                        maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 80%)",
                        WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 80%)", // For Safari
                    }}
                />
                <h2 className="m-auto p-2 text-lg font-bold text-black">
                    Telecommunications engineer at <span>UC3M</span>
                </h2>
                <div className="m-auto flex flex-col gap-2 lg:flex-row">
                    <div className="mt-4 flex flex-col">
                        <div className="flex flex-1 flex-col">
                            <p>- Networks</p>
                            <p>- Software</p>
                            <p>- High frequency</p>
                        </div>
                        <div className="mb-4 flex justify-center">
                            <p className="m-auto mr-1 flex text-sm">2017-2023 @ Madrid</p>
                            <GiSpain className="m-auto ml-1" />
                        </div>
                    </div>
                </div>
                <Techs />
            </div>
        </div>
    );
}
