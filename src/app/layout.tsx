import type {Metadata} from "next";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {title: "Javier Cuenca Gento", description: "Portfolio Javier Cuenca Gento"};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className="dark container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-background px-4 font-sans antialiased">
                <Header />
                <main className="py-8">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
