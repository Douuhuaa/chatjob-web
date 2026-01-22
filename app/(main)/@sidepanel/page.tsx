import ChatList from "./_components/chat-list";
import SidePanel from "./_components/side-panel";

import { CHATS, type Chat } from "@/mocks/chats";

// TODO: 串接 API
async function getChats(): Promise<Chat[]> {
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });

    return CHATS;
}

export default async function SidePanelPage() {
    const chats = await getChats();

    return (
        <SidePanel chats={chats}>
            <p className="px-2 pb-2 text-sm font-light text-gray-400">提問紀錄</p>
            <ChatList chats={chats} />
        </SidePanel>
    );
}
