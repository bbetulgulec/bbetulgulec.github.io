import type {Metadata} from "next";
import type {ReactNode} from "react";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {ScrollReveal} from "../components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
    title: "Betül Güleç | Mobil and .NET Developer",
    description: "Betül Güleç'in yazılım portfolyosu",
    icons: {
        icon: "images/betul.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="tr">
        <body>
        <Navbar/>
        {children}
        <ScrollReveal/>
        <Footer/>
        </body>
        </html>
    );
}