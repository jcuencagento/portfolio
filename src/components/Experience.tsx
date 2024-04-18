import Link from "next/link";

import {Button} from "./ui/button";

export default function Experience() {
    return (
        <div className="col-span-2 row-span-1 rounded-xl border-4 border-primary p-1 text-xl font-bold leading-[4rem] lg:p-2">
            <div className="grid h-full w-full grid-cols-1 lg:grid-cols-4">
                <div className="col-span-1 mb-2 flex border-4 border-destructive lg:mr-2">
                    <Link className="m-auto" href="/exp">
                        <Button className="flex flex-grow" variant="destructive">
                            Look more into detail
                        </Button>
                    </Link>
                </div>
                <div className="col-span-1 flex border-4 border-destructive lg:col-span-3">
                    <p className="m-auto">ionIDe</p>
                </div>
            </div>
        </div>
    );
}
