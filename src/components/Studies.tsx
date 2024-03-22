import Image from "next/image";

import titulo from "../../public/titulo-fake.jpeg";

import {Button} from "./ui/button";
import {Techs} from "./ui/techs";

export default function Studies() {
    return (
        <div className="row-span-2 transform-gpu rounded-xl bg-red-300 p-2 text-xl font-bold leading-[4rem] duration-500 hover:scale-95 lg:row-span-1">
            <div className="m-auto m-auto mb-4 flex flex-row">
                <Button className="m-auto flex" variant="ghost">
                    Studies
                </Button>
                <Image priority alt="Titulo" className="m-3 h-32 w-auto rounded-lg" src={titulo} />
            </div>
            <div className="flex">
                <Techs />
            </div>
        </div>
    );
}
