import ChatList from "@/components/chat-list";
import SidePanel from "@/components/side-panel";

import { MOCK_CHATS, type Chat } from "@/constants/mock-chats";

// TODO: 串接 API
async function getChats(): Promise<Chat[]> {
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });

    return MOCK_CHATS;
}

export default async function SidePanelPage() {
    const chats = await getChats();

    return (
        <SidePanel>
            <ChatList chats={chats} />
        </SidePanel>
    );
}
