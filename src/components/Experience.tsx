import Link from "next/link";
import Image from "next/image";
import {LucideAmbulance, LucideBriefcase} from "lucide-react";

import work from "../../public/work.webp";
import ionide from "../../public/projects/ionide.webp";

import {Button} from "./ui/button";

export default function Experience() {
    return (
        <div className="col-span-2 row-span-1 rounded-xl text-xl font-bold leading-[4rem]">
            <div className="grid h-full w-full grid-cols-1 lg:grid-cols-5">
                <div className="relative col-span-1 mt-2 flex lg:col-span-3 lg:ml-2 lg:mt-0">
                    <div className="relative h-48 w-full lg:h-full">
                        <Image
                            priority
                            alt="Work image"
                            className="absolute inset-0 h-full w-full rounded-lg object-fill"
                            src={ionide}
                            style={{filter: "blur(0.5px)", opacity: "0.75"}}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Link href="https://ionide.es/" rel="noreferrer" target="_blank">
                                <Button className="flex flex-row gap-2" variant="link">
                                    <LucideAmbulance height={18} width={18} />
                                    <p className="text-lg">ionIDe</p>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative col-span-1 mt-2 flex lg:col-span-2 lg:ml-2 lg:mt-0">
                    <div className="relative h-40 w-full lg:h-full">
                        <Image
                            priority
                            alt="Work image"
                            className="absolute inset-0 h-full w-full rounded-lg object-cover"
                            src={work}
                            style={{filter: "blur(0.5px)", opacity: "0.75"}}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Link href="/exp">
                                <Button className="flex flex-row gap-2" variant="destructive">
                                    <LucideBriefcase height={14} width={14} />
                                    <p>Complete experience...</p>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
