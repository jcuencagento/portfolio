import {Button} from "./ui/button";

export default function Introduction() {
    return (
        <div className="col-span-2 row-span-1 rounded-xl border border-black bg-blue-300 p-4 text-xl font-bold leading-[4rem]">
            <div className="flex flex-col gap-4">
                <p className="m-auto text-3xl font-bold text-primary lg:text-4xl">hi, Javi Cuenca here</p>
                <p className="m-auto text-lg font-semibold text-primary lg:text-xl">Telecommunications engineer and software developer</p>
            </div>
            <Button className="flex flex-grow" variant="default">
                Introduction
            </Button>
        </div>
    );
}
