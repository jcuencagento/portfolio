import {Button} from "./ui/button";

export default function Misc() {
    return (
        <div className="col-span-1 row-span-1 rounded-xl  bg-purple-300 p-4 text-xl font-bold leading-[4rem]">
            <div>hi, This is me misc</div>
            <Button className="flex flex-grow" variant="link">
                Misc
            </Button>
        </div>
    );
}
