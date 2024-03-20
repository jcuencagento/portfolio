import {Button} from "./ui/button";

export default function Random() {
    return (
        <div className="row-span-1 rounded-xl border border-black bg-orange-300 p-4 text-xl font-bold leading-[4rem]">
            <div>hi, This is me random</div>
            <Button className="flex flex-grow" variant="link">
                Random
            </Button>
        </div>
    );
}
