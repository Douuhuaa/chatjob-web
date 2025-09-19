"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

import ExperienceIcon from "./icons/experience.svg";
import ListIcon from "./icons/list.svg";
import Logo from "./icons/logo.svg";
import QuestionIcon from "./icons/question.svg";

import { MOCK_RECORDS } from "../constants/mock-data";

const navLinks = [
    {
        label: "提問",
        href: "/question/new",
        icon: QuestionIcon,
    },
    {
        label: "分享面試心得",
        href: "/experience/new",
        icon: ExperienceIcon,
    },
];

export default function SidePanel() {
    const pathname = usePathname();
    const params = useParams();
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
        console.log("登出");
        // TODO: Oauth登出
    };

    return (
        <div className="relative flex h-full w-[260px] flex-col rounded-2xl bg-white px-5 py-4 shadow-lg">
            <Link href="/" className="mb-10 flex items-center gap-2 text-gray-700">
                <Logo />
                <span className="text-base">ChatJOB</span>
            </Link>

            <nav className="mb-10 flex flex-col">
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    const Icon = link.icon;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                "flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-teal-50 active:bg-teal-100/75",
                                {
                                    "font-medium text-teal-500": isActive,
                                    "text-gray-600": !isActive,
                                },
                            )}
                        >
                            <Icon className="h-6 w-6" />
                            <span>{link.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {MOCK_RECORDS.length > 0 && (
                // TODO: 修改overflow-y-auto讓整個side panel都可以控制滾動這區
                <div className="flex flex-col overflow-y-auto">
                    <label className="p-2 text-sm font-light text-gray-400">提問紀錄</label>

                    <div className="flex flex-col">
                        {MOCK_RECORDS.map((item: any) => (
                            <Link
                                key={item.id}
                                href={`/question/${item.id}`}
                                className={clsx(
                                    "truncate rounded-lg p-2 text-sm hover:bg-teal-50 active:bg-teal-100/75",
                                    {
                                        "font-medium text-teal-500": params.id == item.id,
                                        "text-gray-600": params.id != item.id,
                                    },
                                )}
                            >
                                <span>
                                    {item.question.company}｜{item.question.position}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            <div className="absolute bottom-0 left-0 w-full rounded-b-2xl bg-white p-2" ref={userMenuRef}>
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
                    <div className="absolute bottom-full w-full rounded-lg border border-gray-200 bg-white p-2 shadow-md">
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
        </div>
    );
}
