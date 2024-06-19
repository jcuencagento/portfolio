import Image from "next/image";

import titulo from "../../../public/JavierCuencaGento.jpg";

export default function Degree() {
    return (
        <div className="mx-auto flex h-full w-full items-center justify-center">
            <Image key="my-degree" priority alt="Degree certificate" className="h-full w-full rounded-xl object-cover" src={titulo} />
        </div>
    );
}
