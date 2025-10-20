import {Layout} from "nextra-theme-docs";
import {Head} from "nextra/components";
import {getPageMap} from "nextra/page-map";
import type {ReactNode} from "react";
import {Source_Code_Pro} from "next/font/google";
import "nextra-theme-docs/style.css";
import "./globals.css";

import {Navbar, Footer} from "@/components/PageLayout";
import {LanguageProvider} from "@/contexts/LanguageContext";

const sourceCodePro = Source_Code_Pro({
    variable: "--font-source-code-pro",
    subsets: ["latin"],
});

export default async function RootLayout({
                                             children,
                                         }: {
    children: ReactNode;
}) {
    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
        <Head/>
        <body
            className={`${sourceCodePro.variable} ${sourceCodePro.className} antialiased`}
        >
        <LanguageProvider>
            <Navbar/>
            <Layout
                pageMap={await getPageMap()}
                editLink={null}
                darkMode={false}
                sidebar={{autoCollapse: true}}
                nextThemes={{forcedTheme: "dark", defaultTheme: "dark"}}
                feedback={
                    {
                        content: "Question or suggestion? Contact me",
                        link: 'https://<your-domain>/contact'
                    }
                }
            >
                {children}
            </Layout>
            <Footer/>
        </LanguageProvider>
        </body>
        </html>
    );
}
