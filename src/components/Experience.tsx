import Link from "next/link";

import {Button} from "./ui/button";

export default function Experience() {
    return (
        <div className="col-span-2 row-span-1 rounded-xl border border-black bg-yellow-300 p-4 text-xl font-bold leading-[4rem]">
            <div>hi, This is my experience</div>
            <Link className="m-auto" href="/exp">
                <Button className="flex flex-grow" variant="destructive">
                    Experience
                </Button>
            </Link>
        </div>
    );
}
