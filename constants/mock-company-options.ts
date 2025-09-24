interface Department {
    name: string;
    positions: string[];
}

export interface Company {
    company: string;
    departments: Department[];
    positions: string[];
}

export const MOCK_COMPANIES = [
    {
        company: "台積電",
        departments: [
            { name: "研發部", positions: ["前端工程師", "軟體工程師", "資料分析師", "產品經理"] },
            { name: "製造部", positions: ["製程工程師", "設備工程師", "品保專員"] },
            { name: "人事部", positions: ["人事專員", "行政助理"] },
        ],
        positions: [
            "前端工程師",
            "軟體工程師",
            "資料分析師",
            "產品經理",
            "製程工程師",
            "設備工程師",
            "品保專員",
            "人事專員",
            "行政助理",
            "行銷專員",
            "客服專員",
        ],
    },
    {
        company: "鴻海",
        departments: [
            { name: "軟體開發部", positions: ["軟體工程師", "後端工程師"] },
            { name: "行銷部", positions: ["行銷專員", "品牌企劃"] },
            { name: "客服中心", positions: ["客服專員", "客戶經理"] },
        ],
        positions: [
            "軟體工程師",
            "後端工程師",
            "硬體工程師",
            "韌體工程師",
            "資料分析師",
            "行銷專員",
            "客服專員",
            "行政助理",
        ],
    },
    {
        company: "聯發科",
        departments: [
            { name: "韌體部", positions: ["前端工程師", "韌體工程師"] },
            { name: "AI 研發部", positions: ["軟體工程師", "AI 工程師"] },
            { name: "人事部", positions: ["人事專員", "行政助理"] },
        ],
        positions: [
            "前端工程師",
            "軟體工程師",
            "韌體工程師",
            "AI 工程師",
            "產品經理",
            "資料科學家",
            "人事專員",
            "行政助理",
        ],
    },
    {
        company: "Google",
        departments: [
            { name: "Search 部門", positions: ["前端工程師", "後端工程師"] },
            { name: "行銷部", positions: ["行銷專員", "品牌企劃"] },
        ],
        positions: ["前端工程師", "後端工程師", "產品經理", "UX 設計師", "行銷專員", "客服專員", "行政助理"],
    },
    {
        company: "Meta",
        departments: [
            { name: "社群平台部", positions: ["前端工程師", "產品經理"] },
            { name: "客服部", positions: ["客服專員", "客戶經理"] },
        ],
        positions: ["前端工程師", "產品經理", "資料分析師", "客服專員", "行銷專員", "行政助理", "UX 設計師"],
    },
];

export const MOCK_QUESTIONS = [
    "我想知道公司的上班時間是？",
    "公司提供哪些休假福利？",
    "如何申請遠端工作或彈性工時？",
    "公司的午餐或零食有提供嗎？",
    "是否有員工旅遊或團隊活動？",
    "公司有提供教育訓練或補助嗎？",
    "交通補助或停車位怎麼申請？",
    "如何報名內部社團或俱樂部？",
    "公司的考核或升遷制度是什麼？",
    "新進員工需要多久適應期？",
];
