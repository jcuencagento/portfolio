import type {Metadata} from "next";

import "@/app/globals.css";
import Image from "next/image";

import {ThemeProvider} from "@/components/ui/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import gradientImg from "../../public/gradient.webp";

const info = {
    name: "Javier Cuenca Gento",
    description: "Telecom Engineer",
};

export const metadata: Metadata = {
    title: info.name,
    description: info.description,
    authors: {
        name: info.name,
    },
    creator: info.name,
};

interface ChildrenProps {
    readonly children: React.ReactNode;
}

export default function RootLayout({children}: ChildrenProps) {
    return (
        <html suppressHydrationWarning lang="en">
            <body>
                <ThemeProvider disableTransitionOnChange enableSystem attribute="class" defaultTheme="system">
                    <div className="container mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-5">
                        <Header />
                        <div className="flex-1">{children}</div>
                        <Footer />
                        <Image
                            priority
                            alt="Gradient background"
                            className="absolute left-0 top-0 -z-10 w-full -translate-x-1/2 object-cover md:left-1/2 lg:scale-100"
                            src={gradientImg}
                        />
                    </div>
                    <noscript>
                        <p className="mx-auto bg-yellow-100 p-2 text-center">
                            JavaScript is disabled. Some functionalities might not work properly.
                        </p>
                    </noscript>
                </ThemeProvider>
            </body>
            <link href="/favicons/favicon-light.ico" media="(prefers-color-scheme: light)" rel="icon" />
            <link href="/favicons/favicon-dark.ico" media="(prefers-color-scheme: dark)" rel="icon" />
        </html>
    );
}
