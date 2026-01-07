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
        <SidePanel>
            <ChatList chats={chats} />
        </SidePanel>
    );
}
