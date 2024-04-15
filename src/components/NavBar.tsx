"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {motion} from "framer-motion";

const navItems = [
    {name: "🤘", href: "/"},
    {name: "exp", href: "/exp"},
    {name: "projs", href: "/projects"},
    {name: "misc", href: "/misc"},
];

function NavBar() {
    const path = usePathname();

    return (
        <div className="flex shrink-0 items-center">
            <nav className="flex gap-0 rounded-3xl px-1 py-2 lg:gap-2">
                {navItems.map(({name, href}) => (
                    <div key={name + href}>
                        <Link
                            className={
                                "relative transform-gpu rounded-full px-3 py-2 transition-all " +
                                (path == href ? "cursor-default" : "ty-50")
                            }
                            href={href}
                        >
                            {path == href && (
                                <motion.div
                                    className="absolute inset-0 bg-[#f5f5f5]/50 backdrop-blur-sm dark:bg-black/50"
                                    layoutId="active"
                                    style={{
                                        borderRadius: 9999,
                                    }}
                                    transition={{type: "spring", duration: "0.6"}}
                                />
                            )}
                            <span className="relative z-10">{name}</span>
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    );
}

export default NavBar;
