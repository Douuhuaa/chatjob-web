import NewChatForm from "@/components/new-chat-form";

import { COMPANIES, type Company } from "@/mocks/companies";
import { SUGGESTED_QUESTIONS } from "@/mocks/suggested-questions";

// TODO: 串接 API
async function getCompanies(): Promise<Company[]> {
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });

    return COMPANIES;
}

async function getChatOptions(): Promise<string[]> {
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });

    return SUGGESTED_QUESTIONS;
}

export default async function RootPage() {
    const companies = await getCompanies();
    const chatOptions = await getChatOptions();

    return <NewChatForm companies={companies} chatOptions={chatOptions} />;
}
