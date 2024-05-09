/* eslint-disable react/no-unknown-property */
import Image from "next/image";

import pixel_gif from "../../public/pixel_gif.gif";

export default function Pixel() {
    return (
        <div className="mt-2 h-[40px] w-[40px]">
            <Image
                alt="Pixel me"
                className="pointer-events-none h-full w-full"
                height="40"
                src={pixel_gif}
                style={{color: "transparent"}}
                width="40"
            />
        </div>
    );
}
