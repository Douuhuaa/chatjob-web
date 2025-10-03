"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import clsx from "clsx";

import AskIcon from "./icons/ask.svg";
import Logo from "./icons/logo.svg";
import ShareIcon from "./icons/share.svg";

import { MOCK_RECORDS } from "constants/mock-data";

const navLinks = [
    {
        label: "提問",
        href: "/question/new",
        icon: AskIcon,
    },
    {
        label: "分享面試心得",
        href: "/share",
        icon: ShareIcon,
    },
];

export default function SidePanel() {
    const pathname = usePathname();
    const params = useParams();

    return (
        <div className="flex h-full w-[260px] flex-col rounded-2xl bg-white px-5 py-4 shadow-lg">
            <Link href="/question/new" className="mb-10 flex items-center gap-2 text-gray-700">
                <Logo />
                <span className="text-base">ChatJOB</span>
            </Link>

            <nav className="mb-10 flex flex-col gap-1">
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    const Icon = link.icon;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-teal-50 active:bg-teal-100/75 ${
                                isActive ? "font-medium text-teal-500" : "text-gray-600"
                            }`}
                        >
                            <Icon className="h-6 w-6" />
                            <span>{link.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {MOCK_RECORDS.length > 0 && (
                <div className="flex flex-col gap-1">
                    <label className="px-2 py-1.5 text-sm text-gray-400">提問紀錄</label>

                    {MOCK_RECORDS.map((item: any) => (
                        <Link
                            key={item.id}
                            href={`/question/${item.id}`}
                            className={clsx(
                                "truncate rounded-lg px-2 py-1.5 text-left text-sm text-gray-600 hover:bg-teal-50 active:bg-teal-100/75",
                                params.id == item.id && "bg-teal-100/75 font-medium text-teal-500",
                            )}
                        >
                            <span>
                                {item.question.company}｜{item.question.position}
                            </span>
                        </Link>
                    ))}
                </div>
            )}

            <div className="mt-auto flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-2 py-1.5">
                {/* TODO:Oauth登入、註冊完成後，把這裡改成google的使用者資料 */}
                <div className="h-8 w-8 rounded-full bg-gray-200 text-white"></div>
                <div>
                    <p className="text-sm font-medium text-gray-600">Tina Chiu</p>
                </div>
            </div>
        </div>
    );
}
