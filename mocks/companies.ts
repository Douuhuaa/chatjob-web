interface Department {
    name: string;
    positions: string[];
}

export interface Company {
    name: string;
    departments: Department[];
    positions: string[];
}

export const COMPANIES = [
    {
        name: "台積電",
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
        name: "鴻海",
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
        name: "聯發科",
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
        name: "Google",
        departments: [
            { name: "Search 部門", positions: ["前端工程師", "後端工程師"] },
            { name: "行銷部", positions: ["行銷專員", "品牌企劃"] },
        ],
        positions: ["前端工程師", "後端工程師", "產品經理", "UX 設計師", "行銷專員", "客服專員", "行政助理"],
    },
    {
        name: "Meta",
        departments: [
            { name: "社群平台部", positions: ["前端工程師", "產品經理"] },
            { name: "客服部", positions: ["客服專員", "客戶經理"] },
        ],
        positions: ["前端工程師", "產品經理", "資料分析師", "客服專員", "行銷專員", "行政助理", "UX 設計師"],
    },
    {
        name: "微軟 (Microsoft)",
        departments: [
            { name: "雲端事業部 (Azure)", positions: ["雲端架構師", "後端工程師", "技術顧問"] },
            { name: "研發中心", positions: ["軟體工程師", "AI 研究員", "產品經理"] },
            { name: "銷售部", positions: ["客戶經理", "業務代表"] },
        ],
        positions: [
            "雲端架構師",
            "後端工程師",
            "技術顧問",
            "軟體工程師",
            "AI 研究員",
            "產品經理",
            "客戶經理",
            "業務代表",
            "行銷專員",
            "行政助理",
        ],
    },
    {
        name: "LINE",
        departments: [
            { name: "工程部", positions: ["前端工程師", "後端工程師", "QA 工程師", "iOS 工程師", "Android 工程師"] },
            { name: "資料團隊", positions: ["資料科學家", "資料工程師"] },
            { name: "LINE Pay", positions: ["產品經理", "業務開發"] },
        ],
        positions: [
            "前端工程師",
            "後端工程師",
            "QA 工程師",
            "iOS 工程師",
            "Android 工程師",
            "資料科學家",
            "資料工程師",
            "產品經理",
            "業務開發",
            "UI/UX 設計師",
        ],
    },
    {
        name: "台達電",
        departments: [
            { name: "自動化事業群", positions: ["韌體工程師", "機構工程師", "電控工程師"] },
            { name: "電源系統部", positions: ["電力電子工程師", "硬體研發工程師"] },
            { name: "資訊處 (IT)", positions: ["系統分析師", "前端工程師", "後端工程師"] },
        ],
        positions: [
            "韌體工程師",
            "機構工程師",
            "電控工程師",
            "電力電子工程師",
            "硬體研發工程師",
            "系統分析師",
            "前端工程師",
            "後端工程師",
            "專案經理",
            "業務工程師",
        ],
    },
    {
        name: "蝦皮購物 (Shopee)",
        departments: [
            { name: "產品研發", positions: ["後端工程師 (Go)", "前端工程師", "SRE 工程師"] },
            { name: "商業營運", positions: ["品類經理", "行銷企劃", "商業分析師"] },
            { name: "客戶服務", positions: ["客服專員", "客服組長"] },
        ],
        positions: [
            "後端工程師 (Go)",
            "前端工程師",
            "SRE 工程師",
            "產品經理",
            "品類經理",
            "行銷企劃",
            "商業分析師",
            "客服專員",
            "客服組長",
            "數據分析師",
        ],
    },
    {
        name: "華碩 (ASUS)",
        departments: [
            { name: "手機事業處", positions: ["Android 軟體工程師", "硬體研發工程師", "天線工程師"] },
            { name: "電腦事業處", positions: ["機構工程師", "散熱工程師", "產品經理"] },
            { name: "AIoT 中心", positions: ["AI 工程師", "雲端軟體工程師"] },
        ],
        positions: [
            "Android 軟體工程師",
            "硬體研發工程師",
            "天線工程師",
            "機構工程師",
            "散熱工程師",
            "產品經理",
            "AI 工程師",
            "雲端軟體工程師",
            "採購專員",
        ],
    },
    {
        name: "富邦金控",
        departments: [
            { name: "資訊處", positions: ["Java 開發工程師", "系統分析師", "資安工程師"] },
            { name: "數位金融部", positions: ["產品經理", "UI/UX 設計師", "數據分析師"] },
            { name: "投資部", positions: ["投資研究員", "交易員"] },
        ],
        positions: [
            "Java 開發工程師",
            "系統分析師",
            "資安工程師",
            "產品經理",
            "UI/UX 設計師",
            "數據分析師",
            "投資研究員",
            "交易員",
            "理財專員",
            "行政人員",
        ],
    },
];