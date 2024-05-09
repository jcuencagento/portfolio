import Image from "next/image";
import {GiSpain} from "react-icons/gi";
import Link from "next/link";

import titulo from "../../public/titulo-fake.webp";

export default function Studies() {
    return (
        <div className="col-span-2 row-span-2 h-96 rounded-xl p-2 lg:row-span-1 lg:p-10">
            <Link className="relative m-auto mb-0 flex h-full transform-gpu flex-col duration-500 hover:scale-105" href="/exp">
                <Image
                    key="spotify-background"
                    priority
                    alt="Background Spotify"
                    className="absolute inset-0 h-full w-full rounded-xl object-cover"
                    src={titulo}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-transparent">
                    <h2 className="m-auto p-2 text-lg font-bold">
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
                </div>
            </Link>
        </div>
    );
}
