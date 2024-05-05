import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.scss";
import {ThemeProvider} from "@/components/ui/theme/theme-provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Clone Simplize",
    description: "use next js and Lightweight",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>

            <div>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider></div>
            </body>
            </html>
        </>
    );
}
