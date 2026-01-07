import { Inter } from "next/font/google";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="zh-Hant-TW" className={inter.className}>
            <body className="flex h-screen bg-gray-50 p-5">{children}</body>
        </html>
    );
}
