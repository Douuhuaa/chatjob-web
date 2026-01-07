import ChatItemLink from "./item";

import { MOCK_CHATS, type Chat } from "@/constants/mock-chats";

// TODO: 串 API
async function getChats(): Promise<Chat[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_CHATS);
        }, 500);
    });
}

export default async function ChatList() {
    const chats = await getChats();

    return (
        <>
            <p className="px-2 pb-2 text-sm font-light text-gray-400">提問紀錄</p>
            <div className="flex flex-col">
                {chats.map((chat) => (
                    <ChatItemLink key={chat.id} chat={chat} />
                ))}
            </div>
        </>
    );
}
