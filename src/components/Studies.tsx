import Image from "next/image";
import {GiSpain} from "react-icons/gi";

import titulo from "../../public/titulo-fake.jpeg";

import {Techs} from "./ui/techs";

export default function Studies() {
    return (
        <div className="row-span-2 rounded-xl bg-red-300 p-2 lg:row-span-1">
            <div className="m-auto m-auto mb-4 flex flex-col">
                <p className="m-auto p-2 text-lg font-bold">
                    Telecommunications engineer at <span>UC3M</span>
                </p>
                <div className="m-auto flex flex-col gap-2 lg:flex-row">
                    <div className="mt-4 flex flex-col">
                        <div className="flex flex-1 flex-col">
                            <p>- Networks</p>
                            <p>- Software</p>
                            <p>- High frequency</p>
                        </div>
                        <div className="mb-4 flex justify-center">
                            <p className="m-auto mr-1 flex text-sm">2017-2023 @ Madrid</p>
                            <GiSpain className="m-auto ml-1" />
                        </div>
                    </div>
                    <Image priority alt="Titulo" className="m-2 mr-0 h-auto w-auto rounded-lg lg:h-32" src={titulo} />
                </div>
            </div>
            <div className="flex">
                <Techs />
            </div>
        </div>
    );
}
