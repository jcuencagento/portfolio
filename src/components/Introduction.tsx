import {Button} from "./ui/button";

export default function Introduction() {
    return (
        <div className="align-center flex h-4/5 w-full justify-center border border-black bg-blue-300 text-xl font-bold leading-[4rem] lg:h-3/5">
            <div>hi, Javi Cuenca here</div>
            <Button className="flex flex-grow" variant="default">
                Introduction
            </Button>
        </div>
    );
}
