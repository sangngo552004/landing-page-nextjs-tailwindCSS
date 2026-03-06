import { Be_Vietnam_Pro } from "next/font/google"
import Header from "@/components/layout/Header"
import LogoList from "@/components/layout/LogoList";
import Footer from "@/components/layout/Footer"
import "./globals.css"

const beVietnam = Be_Vietnam_Pro({
    subsets: ["latin", "vietnamese"],
    weight: ["400", "500", "600", "700"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
            <body className={`${beVietnam.className} min-h-screen flex flex-col`}>
                <Header />
                <main className="flex-1">{children}</main>
                <LogoList />
                <Footer />
            </body>
        </html>
    )
}