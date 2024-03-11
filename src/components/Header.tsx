/* eslint-disable react/button-has-type */
"use client";

import Link from "next/link";
import {BookOpenCheckIcon, FolderGit2Icon, HomeIcon, UserSearchIcon} from "lucide-react";
import {usePathname} from "next/navigation";

import ThemeSwitch from "./ui/theme-switch";

export default function Header() {
    const pathname = usePathname();
    const renderIcon = () => {
        switch (pathname) {
            case "/exp":
                return <BookOpenCheckIcon className="mr-2 h-6 w-6 lg:mr-4" />;
            case "/projects":
                return <FolderGit2Icon className="mr-2 h-6 w-6 lg:mr-4" />;
            case "/misc":
                return <UserSearchIcon className="mr-2 h-6 w-6 lg:mr-4" />;
            default:
                return <HomeIcon className="mr-2 h-6 w-6 lg:mr-4" />;
        }
    };

    return (
        <header className="mb-2 flex text-xl font-bold leading-[4rem] lg:mb-6">
            <div className="m-auto flex items-center justify-center text-base text-primary lg:text-2xl">
                {renderIcon()}
                <Link className="m-auto" href="/">
                    Javier Cuenca Gento
                </Link>
            </div>
            <div className="m-auto">
                <ThemeSwitch />
            </div>
        </header>
    );
}
