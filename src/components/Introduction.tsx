import {Button} from "./ui/button";

export default function Introduction() {
    return (
        <div className="align-center flex h-4/5 justify-center text-xl font-bold leading-[4rem] lg:h-2/5">
            <Button className="flex flex-grow" variant="default">
                Introduction
            </Button>
        </div>
    );
}
