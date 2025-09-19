"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import AskIcon from "./icons/ask.svg";
import Logo from "./icons/logo.svg";
import ShareIcon from "./icons/share.svg";

const navLinks = [
  {
    label: "提問",
    href: "/ask",
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

    return (
        <div className="flex h-full w-[260px] flex-col rounded-2xl bg-white px-5 py-4 shadow-lg">
            <Link href="/" className="mb-10 flex items-center gap-2 text-gray-700">
                <Logo />
                <p className="text-base">ChatJOB</p>
            </Link>

            <nav className="flex flex-col gap-1">
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    const Icon = link.icon;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-teal-50/50 active:bg-teal-50 ${
                                isActive ? "font-medium text-teal-500" : "text-gray-600"
                            }`}
                        >
                            <Icon className="h-6 w-6" />
                            <span>{link.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-2 py-1.5">
                <div className="h-8 w-8 rounded-full bg-gray-200 text-white"></div>
                <div>
                    <p className="text-sm font-medium text-gray-600">Tina Chiu</p>
                </div>
            </div>
        </div>
    );
}
