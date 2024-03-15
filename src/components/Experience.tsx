import Link from "next/link";

import {Button} from "./ui/button";

export default function Experience() {
    return (
        <div className="align-center flex h-4/5 w-full justify-center gap-4 border border-black bg-red-400 text-xl font-bold leading-[4rem] lg:h-3/5">
            <div>hi, This is my experience</div>
            <Link className="m-auto" href="/exp">
                <Button className="flex flex-grow" variant="destructive">
                    Experience
                </Button>
            </Link>
        </div>
    );
}
