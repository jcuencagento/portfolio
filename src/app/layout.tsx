import type {Metadata} from "next";

import "@/app/globals.css";
import Image from "next/image";
import dotenv from "dotenv";

import {ThemeProvider} from "@/components/ui/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import gradientImg from "../../public/gradient.webp";

dotenv.config();
const info = {
    name: "jcuencagento - dev",
    description: "Telecom Engineer",
    url: "https://jcuencagento.dev",
};

export const metadata: Metadata = {
    title: {
        template: `%s | ${info.name}`,
        default: info.name,
    },
    description: info.description,
    authors: {
        name: info.name,
    },
    creator: info.name,
    keywords: ["Next.js", "TypeScript", "React", "Web Development", "Portfolio", "Website"],
    metadataBase: new URL(info.url),
    alternates: {
        canonical: "/",
        languages: {
            "en-US": "/en-US",
            "es-ES": "/es-ES",
        },
    },
    openGraph: {
        title: info.name,
        description: info.description,
        url: info.url,
        siteName: info.name,
        images: [
            {
                url: "https://www.klipartz.com/en/sticker-png-towap", // Must be an absolute URL
                width: 800,
                height: 600,
            },
            {
                url: "https://www.klipartz.com/en/sticker-png-towap", // Must be an absolute URL
                width: 1800,
                height: 1600,
                alt: "My custom alt",
            },
        ],
        locale: "es_ES",
        type: "website",
    },
};

interface ChildrenProps {
    readonly children: React.ReactNode;
}

export default function RootLayout({children}: ChildrenProps) {
    return (
        <html suppressHydrationWarning lang="en">
            <body>
                <ThemeProvider disableTransitionOnChange enableSystem attribute="class" defaultTheme="system">
                    <div className="container mx-auto flex min-h-screen max-w-screen-xl flex-col px-4 py-5">
                        <Header />
                        <div className="flex max-w-full flex-1 items-center justify-center">{children}</div>
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
