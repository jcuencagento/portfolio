"use client";

import {HomeIcon, BookOpenCheckIcon, FolderGit2Icon, UserSearchIcon} from "lucide-react";
import {usePathname} from "next/navigation";

import ThemeSwitch from "./ui/theme-switch";
import NavBar from "./NavBar";

export default function Header() {
    const pathname = usePathname();
    const renderIcon = () => {
        switch (pathname) {
            case "/exp":
                return <BookOpenCheckIcon className="mr-4 h-7 w-7 lg:mr-6" />;
            case "/projects":
                return <FolderGit2Icon className="mr-4 h-7 w-7 lg:mr-6" />;
            case "/misc":
                return <UserSearchIcon className="mr-4 h-7 w-7 lg:mr-6" />;
            default:
                return <HomeIcon className="mr-4 h-7 w-7 lg:mr-6" />;
        }
    };

    return (
        <header className="mb-2 flex text-xl font-bold leading-[4rem] lg:mb-6">
            <div className="m-auto mr-0 flex items-center justify-center text-primary">{renderIcon()}</div>
            <NavBar />
            <div className="m-auto w-20">
                <ThemeSwitch />
            </div>
        </header>
    );
}
