"use client";

import { useMemo, useState } from "react";
import Dialog from "@/components/dialog";
import SearchInput from "@/components/search-input";
import { type Chat } from "@/mocks/chats";
import ChatList from "./chat-list";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    chats: Chat[];
}

export default function SearchDialog({ isOpen, onClose, chats }: Props) {
    const [value, setValue] = useState("");

    const filteredChats = useMemo(() => {
        if (!value || value.trim() === "") {
            return chats;
        }

        const result: Chat[] = [];
        const validValue = value.trim().toLowerCase();

        for (const chat of chats) {
            const companyMatches = chat.record.company.toLowerCase().includes(validValue);
            const positionMatches = chat.record.position.toLowerCase().includes(validValue);

            if (companyMatches || positionMatches) {
                result.push(chat);
            }
        }

        return result;
    }, [chats, value]);

    return (
        <Dialog isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-xl">
                <SearchInput value={value} onValueChange={setValue} placeholder="在所有提問紀錄中搜尋..." />

                <div className="mt-2 h-64 overflow-y-auto">
                    <ChatList chats={filteredChats} onClick={onClose} />
                </div>
            </div>
        </Dialog>
    );
}
