import { Inter } from "next/font/google";
import "@/styles/globals.css";

// 字體會自動 prefetch、優化加載(優於 import, link 載入)
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="zh-Hant-TW" className={inter.className}>
            <body>{children}</body>
        </html>
    );
}
