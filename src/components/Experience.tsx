import Link from "next/link";

import {Button} from "./ui/button";

export default function Experience() {
    return (
        <div className="align-center flex justify-center text-xl font-bold leading-[4rem]">
            <Link className="m-auto" href="/exp">
                <Button className="flex flex-grow" variant="destructive">
                    Experience
                </Button>
            </Link>
        </div>
    );
}
