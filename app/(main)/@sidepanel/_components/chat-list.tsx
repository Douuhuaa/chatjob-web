"use client";

import Link from "next/link";
import clsx from "clsx";

import { useParams } from "next/navigation";

import { type Chat } from "@/mocks/chats";

interface Props {
    chats: Chat[];
}

export default function ChatList({ chats }: Props) {
    const params = useParams();

    return (
        <>
            <p className="px-2 pb-2 text-sm font-light text-gray-400">提問紀錄</p>
            <div className="flex flex-col">
                {chats.map((chat) => (
                    <Link
                        key={chat.id}
                        href={`/chat/${chat.id}`}
                        className={clsx("truncate rounded-lg p-2 text-sm hover:bg-teal-50 active:bg-teal-100/75", {
                            "font-medium text-teal-500": params.id == chat.id,
                            "text-gray-600": params.id != chat.id,
                        })}
                    >
                        <span>
                            {chat.record.company}｜{chat.record.position}
                        </span>
                    </Link>
                ))}
            </div>
        </>
    );
}
