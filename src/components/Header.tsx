/* eslint-disable react/button-has-type */
"use client";

import {BookOpenCheckIcon, FolderGit2Icon, UserSearchIcon} from "lucide-react";
import {BiHomeAlt2} from "react-icons/bi";
import {usePathname} from "next/navigation";

import ThemeSwitch from "./ui/theme-switch";
import Dropdown from "./ui/dropdown";

export default function Header() {
    const pathname = usePathname();
    const renderIcon = () => {
        switch (pathname) {
            case "/exp":
                return <BookOpenCheckIcon className="mr-2 h-7 w-7 lg:mr-4" />;
            case "/projects":
                return <FolderGit2Icon className="mr-2 h-7 w-7 lg:mr-4" />;
            case "/misc":
                return <UserSearchIcon className="mr-2 h-7 w-7 lg:mr-4" />;
            default:
                return <BiHomeAlt2 className="mr-2 h-7 w-7 lg:mr-4" />;
        }
    };

    return (
        <header className="mb-2 flex text-xl font-bold leading-[4rem] lg:mb-6">
            <div className="m-auto flex items-center justify-center text-base text-primary lg:text-2xl">
                {renderIcon()}
                <Dropdown />
            </div>
            <div className="m-auto w-20">
                <ThemeSwitch />
            </div>
        </header>
    );
}
