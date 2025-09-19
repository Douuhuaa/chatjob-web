"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

import ListIcon from "./icons/list.svg";

export default function UserMenu() {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);

    // 點擊外部關閉選單
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setIsUserMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        setIsUserMenuOpen(false);
        // TODO: Oauth登出
    };

    return (
        <div className="relative px-5 pb-5" ref={userMenuRef}>
            <button
                type="button"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex w-full items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-2 py-1.5 hover:bg-gray-100"
            >
                {/* TODO:Oauth登入、註冊完成後，把這裡改成google的使用者資料 */}
                <div className="h-8 w-8 rounded-full bg-gray-200 text-white"></div>
                <div>
                    <p className="text-sm font-medium text-gray-600">Tina Chiu</p>
                </div>
            </button>

            {isUserMenuOpen && (
                <div className="absolute bottom-full mb-2 w-full rounded-lg border border-gray-200 bg-white p-2 shadow-md">
                    <Link
                        href="/experience/list"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex w-full items-center gap-2 rounded-lg p-2 text-sm text-gray-600 hover:bg-teal-50 active:bg-teal-100/75"
                    >
                        <ListIcon className="h-4 w-4" />
                        <span>已分享的心得</span>
                    </Link>

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-2 rounded-lg p-2 text-sm text-gray-600 hover:bg-teal-50 active:bg-teal-100/75"
                    >
                        <span>登出</span>
                    </button>
                </div>
            )}
        </div>
    );
}
