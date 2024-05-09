/* eslint-disable react/no-unknown-property */
import Image from "next/image";

import pixel_gif from "../../public/pixel_gif.gif";

export default function Pixel() {
    return (
        <div className="mt-1 h-[45px] w-[45px]">
            <Image
                alt="Pixel me"
                className="pointer-events-none h-full w-full"
                height="45"
                src={pixel_gif}
                style={{color: "transparent"}}
                width="45"
            />
        </div>
    );
}
