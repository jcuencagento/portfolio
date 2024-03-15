import {Button} from "./ui/button";

export default function Misc() {
    return (
        <div className="align-center flex h-4/5 w-full justify-center gap-4 border border-black bg-yellow-300 text-xl font-bold leading-[4rem] lg:h-3/5">
            <div>hi, This is me misc</div>
            <Button className="flex flex-grow" variant="link">
                Misc
            </Button>
        </div>
    );
}
