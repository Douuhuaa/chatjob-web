import { Inter } from "next/font/google";
import { Suspense } from "react";

import ChatList from "@/components/chat-list";
import SidePanel from "@/components/side-panel";
import UserMenu from "@/components/user-menu";

import "@/styles/globals.css";

// 字體會自動 prefetch、優化加載(優於 import, link 載入)
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="zh-Hant-TW" className={inter.className}>
            <body>
                <div className="flex h-full w-[260px] flex-col justify-between rounded-2xl bg-white shadow-lg">
                    <SidePanel>
                        <Suspense fallback={null}>
                            <ChatList />
                        </Suspense>
                    </SidePanel>

                    <UserMenu />
                </div>

                <div className="flex flex-1 justify-center">{children}</div>
            </body>
        </html>
    );
}
