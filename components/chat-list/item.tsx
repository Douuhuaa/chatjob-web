"use client";

import Link from "next/link";
import clsx from "clsx";

import { useParams } from "next/navigation";

import { type Chat } from "@/constants/mock-chats";

export default function ChatItemLink({ chat }: { chat: Chat }) {
    const params = useParams();

    return (
        <Link
            href={`/question/${chat.id}`}
            className={clsx("truncate rounded-lg p-2 text-sm hover:bg-teal-50 active:bg-teal-100/75", {
                "font-medium text-teal-500": params.id == chat.id,
                "text-gray-600": params.id != chat.id,
            })}
        >
            <span>
                {chat.record.company}｜{chat.record.position}
            </span>
        </Link>
    );
}
