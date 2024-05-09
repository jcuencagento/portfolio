import NowListening from "./NowListening";
import Discord from "./Discord";
import Letterboxd from "./Letterboxd";

export default function Misc() {
    return (
        <div className="col-span-1 row-span-1 transform-gpu rounded-2xl p-2 text-xl font-bold leading-[4rem] duration-500 lg:p-2">
            <div className="grid h-full w-full grid-rows-3 gap-3">
                <NowListening />
                <Letterboxd />
                <Discord />
            </div>
        </div>
    );
}
