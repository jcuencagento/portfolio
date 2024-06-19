import Image from "next/image";
import Link from "next/link";

import titulo from "../../public/JavierCuencaGento.webp";

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
            </Link>
        </div>
    );
}
