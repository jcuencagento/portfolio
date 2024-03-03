import Link from "next/link";

import ThemeSwitch from "./theme-switch";

export default function Header() {
    return (
        <header className="flex text-xl font-bold leading-[4rem]">
            <Link href="/">Javier Cuenca Gento</Link>
            <div className="ml-auto">
                <ThemeSwitch />
            </div>
        </header>
    );
}
