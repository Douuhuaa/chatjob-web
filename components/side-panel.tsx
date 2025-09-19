"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useParams } from "next/navigation";
import clsx from "clsx";

import ExperienceIcon from "./icons/experience.svg";
import Logo from "./icons/logo.svg";
import QuestionIcon from "./icons/question.svg";

import { MOCK_CHATS, type Chat } from "@/constants/mock-chats";

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

    const [chats, setChats] = useState<Chat[]>();

    useEffect(() => {
        // TODO: call API
        setChats(MOCK_CHATS);
    }, []);

    return (
        <div className="overflow-y-auto">
            <div className="sticky top-0 z-10 flex flex-col gap-5 bg-white p-5">
                <Link href="/" className="flex items-center gap-2 text-gray-700">
                    <Logo />
                    <span className="text-base">ChatJOB</span>
                </Link>

                <nav>
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
            </div>

            <div className="px-5 pb-5">
                <label className="px-2 pb-2 text-sm font-light text-gray-400">提問紀錄</label>

                <div className="flex flex-col">
                    {chats &&
                        chats.map((item) => (
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
                                    {item.chat.company}｜{item.chat.position}
                                </span>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
}
