interface ChatItem {
    company: string;
    department: string;
    position: string;
}

export interface Chat {
    id: string;
    chat: ChatItem;
}

export const MOCK_CHATS = [
    {
        id: "550e8400-e29b-41d4-a716-446655440000",
        chat: {
            company: "台積電",
            department: "研發部",
            position: "前端工程師",
        },
    },
    {
        id: "6f1e2c3a-7b4d-45a0-b1c2-123456789abc",
        chat: {
            company: "鴻海",
            department: "軟體開發部",
            position: "軟體工程師",
        },
    },
    {
        id: "3d12a7b8-4f56-41c9-9876-abcdef123456",
        chat: {
            company: "聯發科韌體",
            department: "韌體部",
            position: "前端工程師",
        },
    },
    {
        id: "9a0b1c2d-3e4f-5678-9012-3456789abcde",
        chat: {
            company: "Google",
            department: "",
            position: "前端工程師",
        },
    },
    {
        id: "7c8d9e0f-1234-5678-9abc-def012345678",
        chat: {
            company: "趨勢",
            department: "",
            position: "前端工程師",
        },
    },
    {
        id: "1a2b3c4d-5678-9101-1121-314151617181",
        chat: {
            company: "Meta",
            department: "社群平台部",
            position: "前端工程師",
        },
    },
    {
        id: "2b3c4d5e-6789-1011-1213-415161718192",
        chat: {
            company: "微軟",
            department: "",
            position: "軟體工程師",
        },
    },
    {
        id: "3c4d5e6f-7891-0111-2131-516171819202",
        chat: {
            company: "Amazon",
            department: "AWS 部門",
            position: "前端工程師",
        },
    },
    {
        id: "4d5e6f7g-8910-1121-3141-617181920212",
        chat: {
            company: "聯發科",
            department: "AI 研發部",
            position: "軟體工程師",
        },
    },
    {
        id: "5e6f7g8h-9101-1221-4151-718192021222",
        chat: {
            company: "台達電",
            department: "電源管理部",
            position: "前端工程師",
        },
    },
    {
        id: "6f7g8h9i-0112-2232-5262-819202122232",
        chat: {
            company: "Apple",
            department: "iOS 開發部",
            position: "前端工程師",
        },
    },
    {
        id: "7g8h9i0j-1223-3342-6372-920212223242",
        chat: {
            company: "Sony",
            department: "遊戲軟體部",
            position: "軟體工程師",
        },
    },
    {
        id: "8h9i0j1k-2334-4452-7482-021223232452",
        chat: {
            company: "華碩",
            department: "硬體整合部",
            position: "前端工程師",
        },
    },
    {
        id: "9i0j1k2l-3445-5562-8592-122232324562",
        chat: {
            company: "聯想",
            department: "軟體研發部",
            position: "軟體工程師",
        },
    },
    {
        id: "0j1k2l3m-4556-6672-9602-223232345672",
        chat: {
            company: "特斯拉",
            department: "自動駕駛部",
            position: "前端工程師",
        },
    },
    {
        id: "1k2l3m4n-5667-7782-0612-324232456782",
        chat: {
            company: "騰訊",
            department: "雲遊戲部",
            position: "軟體工程師",
        },
    },
    {
        id: "2l3m4n5o-6778-8892-1722-425232567892",
        chat: {
            company: "百度",
            department: "AI 研發部",
            position: "前端工程師",
        },
    },
    {
        id: "3m4n5o6p-7889-9902-2832-526232678902",
        chat: {
            company: "阿里巴巴",
            department: "電商前端部",
            position: "軟體工程師",
        },
    },
    {
        id: "4n5o6p7q-8990-1012-3942-627232789012",
        chat: {
            company: "字節跳動",
            department: "",
            position: "前端工程師",
        },
    },
    {
        id: "5o6p7q8r-9001-1122-4052-728232890122",
        chat: {
            company: "NVIDIA",
            department: "GPU 軟體部",
            position: "軟體工程師",
        },
    },
];
