"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import ListIcon from "@/components/icons/list.svg";
import Logo from "@/components/icons/logo.svg";
import QuestionIcon from "@/components/icons/question.svg";
import SearchIcon from "@/components/icons/search.svg";
import ShareIcon from "@/components/icons/share.svg";

const navItems = [
    {
        label: "提問",
        icon: QuestionIcon,
        type: "link",
        href: "/",
    },
    {
        label: "搜尋提問",
        icon: SearchIcon,
        type: "action",
    },
    {
        label: "分享面試心得",
        icon: ShareIcon,
        type: "link",
        href: "/experience/new",
    },
    {
        label: "面試心得",
        icon: ListIcon,
        type: "link",
        href: "/experience",
    },
];

export default function SidePanel({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="overflow-y-auto">
            <div className="sticky top-0 z-10 flex flex-col gap-5 bg-white p-5">
                <Link href="/" className="flex items-center gap-2 text-gray-700">
                    <Logo />
                    <span className="text-base">ChatJOB</span>
                </Link>

                <nav>
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        if (item.type == "action") {
                            return (
                                <button
                                    key={item.label}
                                    type="button"
                                    className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-gray-600 hover:bg-teal-50 active:bg-teal-100/75"
                                    onClick={() => {}}
                                >
                                    <Icon className="h-6 w-6" />
                                    <span>{item.label}</span>
                                </button>
                            );
                        }

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-teal-50 active:bg-teal-100/75",
                                    {
                                        "font-medium text-teal-500": pathname == item.href,
                                        "text-gray-600": pathname != item.href,
                                    },
                                )}
                            >
                                <Icon className="h-6 w-6" />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="px-5 pb-5">{children}</div>
        </div>
    );
}
