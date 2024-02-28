import type {Metadata} from "next";

import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {title: "Javier Cuenca Gento", description: "Portfolio Javier Cuenca Gento"};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className="dark container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-background px-4 font-sans antialiased">
                <header className="text-xl font-bold leading-[4rem]">
                    <Link href="/">Javier Cuenca Gento</Link>
                </header>
                <main className="py-8">{children}</main>
                <footer className="text-center leading-[4rem] opacity-70">Javier Cuenca Gento © {new Date().getFullYear()}</footer>
            </body>
        </html>
    );
}
