import {Button} from "./ui/button";

export default function Studies() {
    return (
        <div className="row-span-2 rounded-xl border border-black bg-red-300 p-4 text-xl font-bold leading-[4rem] lg:row-span-1">
            <div>hi, This is my studies</div>
            <Button className="flex flex-grow" variant="ghost">
                Studies
            </Button>
        </div>
    );
}
