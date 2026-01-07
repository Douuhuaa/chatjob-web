import NewChatForm from "./_components/new-chat-form";

import { COMPANIES, type Company } from "@/mocks/companies";
import { SUGGEST_CHATS } from "@/mocks/suggest-chats";

// TODO: 串接 API
function getCompanies(): Company[] {
    return COMPANIES;
}

function getSuggestedChats(): string[] {
    return SUGGEST_CHATS;
}

export default function RootPage() {
    const companies = getCompanies();
    const suggestedChats = getSuggestedChats();

    return <NewChatForm companies={companies} chatOptions={suggestedChats} />;
}
