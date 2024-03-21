import Link from "next/link";

import {Button} from "./ui/button";

export default function Experience() {
    return (
        <div className="col-span-1 row-span-1 transform-gpu rounded-xl bg-yellow-300 p-16 text-xl font-bold leading-[4rem] duration-500 hover:scale-95 lg:col-span-2 lg:p-8">
            <div>hi, This is my experience</div>
            <Link className="m-auto" href="/exp">
                <Button className="flex flex-grow" variant="destructive">
                    Experience
                </Button>
            </Link>
        </div>
    );
}
