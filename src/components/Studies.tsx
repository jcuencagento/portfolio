import {Button} from "./ui/button";

export default function Studies() {
    return (
        <div className="row-span-2 transform-gpu rounded-xl bg-red-300 p-4 text-xl font-bold leading-[4rem] duration-500 hover:scale-95 lg:row-span-1">
            <div>hi, This are my studies</div>
            <Button className="flex flex-grow" variant="ghost">
                Studies
            </Button>
        </div>
    );
}
