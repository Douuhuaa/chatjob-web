interface Stage {
    stage: string;
    interviewer: string;
    language: string;
    difficulty: "簡單" | "普通" | "困難";
    content: string;
}

interface Question {
    type: string;
    content: string;
}

export interface Experience {
    id: string;
    company: string;
    department: string;
    position: string;
    date: string;
    stages: Stage[];
    questions: Question[];
    createdAt: string;
}

export const MOCK_EXPERIENCES: Experience[] = [
    {
        id: "550e8400-e29b-41d4-a716-446655440001",
        company: "Google",
        department: "",
        position: "前端工程師",
        // 格式YYYY-MM-DD
        date: "2025-10-30",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "英文",
                difficulty: "簡單",
                content: "主要詢問自我介紹、求職動機、薪資期待與工作地點彈性，並了解過往的工作經驗與離職原因。",
            },
            {
                stage: "第二關",
                interviewer: "資深同事",
                language: "英文",
                difficulty: "普通",
                content:
                    "考察 JavaScript/React 技術能力與實作題，並針對 API 串接、效能優化及程式設計思路進行深入提問。",
            },
            {
                stage: "第三關",
                interviewer: "直屬主管",
                language: "英文",
                difficulty: "困難",
                content: "深入探討專案經驗、團隊合作與領導能力。",
            },
        ],
        questions: [
            {
                type: "技術題",
                content: "解釋 this 在 JavaScript 裡的運作方式。",
            },
            {
                type: "技術題",
                content: "請說明 == 和 === 的差別，並舉例。",
            },
            {
                type: "技術題",
                content: "瀏覽器渲染流程是什麼？從 HTML 解析到畫面出來的過程請簡述。",
            },
            {
                type: "技術題",
                content: "解釋一下 React Hook 的規則，為什麼 Hook 不能放在條件判斷裡？",
            },
            {
                type: "情境題",
                content: "請描述如何使用 React 曾經遇過 PM 要求快速上線但技術債很重，你會怎麼處理？",
            },
        ],
        createdAt: "",
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440002",
        company: "Amazon",
        department: "AWS 部門",
        position: "前端工程師",
        date: "2025-10-12",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "中文",
                difficulty: "簡單",
                content: "主要詢問自我介紹、求職動機、薪資期待與工作地點彈性，並了解過往的工作經驗與離職原因。",
            },
            {
                stage: "第二關",
                interviewer: "資深同事",
                language: "英文",
                difficulty: "普通",
                content:
                    "考察 JavaScript/React 技術能力與實作題，並針對 API 串接、效能優化及程式設計思路進行深入提問。",
            },
        ],
        questions: [],
        createdAt: "",
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440003",
        company: "台達電",
        department: "電源管理部",
        position: "前端工程師",
        date: "2025-09-29",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "中文",
                difficulty: "簡單",
                content: "主要詢問自我介紹、求職動機、薪資期待與工作地點彈性，並了解過往的工作經驗與離職原因。",
            },
        ],
        questions: [
            {
                type: "行為題",
                content: "請描述如何處理專案中遇到的技術難題。",
            },
        ],
        createdAt: "",
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440004",
        company: "Microsoft",
        department: "Office 部門",
        position: "前端工程師",
        date: "2025-11-05",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "中文",
                difficulty: "簡單",
                content: "了解個人背景、工作經驗及職涯規劃。",
            },
            {
                stage: "第二關",
                interviewer: "資深工程師",
                language: "英文",
                difficulty: "普通",
                content: "考察 JavaScript 與 TypeScript 技術能力，並針對前端效能、程式設計思路進行提問。",
            },
            {
                stage: "第三關",
                interviewer: "團隊主管",
                language: "英文",
                difficulty: "困難",
                content: "深入探討專案經驗、團隊合作及技術決策能力。",
            },
        ],
        questions: [
            {
                type: "技術題",
                content: "請說明 React 中 useMemo 與 useCallback 的差異與使用時機。",
            },
            {
                type: "技術題",
                content: "JavaScript 的 event loop 如何運作？微任務與宏任務的差異？",
            },
            {
                type: "情境題",
                content: "如果產品要求你在兩天內完成一個功能，你會如何安排與評估風險？",
            },
        ],
        createdAt: "",
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440005",
        company: "Meta",
        department: "社交平台部",
        position: "前端工程師",
        date: "2025-10-20",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "英文",
                difficulty: "簡單",
                content: "詢問工作經驗、求職動機及團隊合作經歷。",
            },
            {
                stage: "第二關",
                interviewer: "資深工程師",
                language: "英文",
                difficulty: "普通",
                content: "考察前端核心技能、React 框架及性能優化能力。",
            },
            {
                stage: "第三關",
                interviewer: "技術主管",
                language: "英文",
                difficulty: "困難",
                content: "深入討論系統設計、架構決策及跨團隊協作經驗。",
            },
        ],
        questions: [
            {
                type: "技術題",
                content: "解釋 Virtual DOM 的工作原理，為什麼可以提升效能？",
            },
            {
                type: "技術題",
                content: "請舉例說明前端如何進行效能優化（如 bundle size、lazy loading）。",
            },
            {
                type: "情境題",
                content: "如果發現專案中某段 legacy code 非常難維護，你會怎麼處理？",
            },
        ],
        createdAt: "",
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440006",
        company: "台灣大哥大",
        department: "行動網路部",
        position: "前端工程師",
        date: "2025-09-15",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "中文",
                difficulty: "簡單",
                content: "主要了解個人背景、工作經驗與求職動機。",
            },
            {
                stage: "第二關",
                interviewer: "資深工程師",
                language: "中文",
                difficulty: "普通",
                content: "針對 JavaScript/React 技術、API 串接及程式設計思路進行考察。",
            },
        ],
        questions: [
            {
                type: "行為題",
                content: "描述一次你在專案中遇到挑戰並成功解決的經驗。",
            },
            {
                type: "情境題",
                content: "如果你的同事無法在期限內完成任務，你會如何協助或調整專案？",
            },
        ],
        createdAt: "",
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440007",
        company: "聯發科",
        department: "無線通訊部",
        position: "前端工程師",
        date: "2025-10-18",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "中文",
                difficulty: "簡單",
                content: "了解工作經驗與求職動機。",
            },
            {
                stage: "第二關",
                interviewer: "資深工程師",
                language: "中文",
                difficulty: "普通",
                content: "考察 JavaScript/React 技術能力，並詢問前端專案實作經驗。",
            },
        ],
        questions: [
            {
                type: "技術題",
                content: "請說明 JavaScript 中 closure 的概念及使用情境。",
            },
            {
                type: "情境題",
                content: "遇到產品需求急迫，但程式碼品質不佳，你會怎麼處理？",
            },
        ],
        createdAt: "",
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440008",
        company: "Sony",
        department: "影像部門",
        position: "前端工程師",
        date: "2025-11-02",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "英文",
                difficulty: "簡單",
                content: "介紹自我經歷與求職動機。",
            },
            {
                stage: "第二關",
                interviewer: "資深工程師",
                language: "英文",
                difficulty: "普通",
                content: "考察 React 與前端效能優化能力。",
            },
            {
                stage: "第三關",
                interviewer: "團隊主管",
                language: "英文",
                difficulty: "困難",
                content: "深入討論系統設計、專案規劃與跨部門合作經驗。",
            },
        ],
        questions: [
            {
                type: "技術題",
                content: "解釋 React Context 與 Redux 的差異，何時適合使用？",
            },
            {
                type: "情境題",
                content: "如何處理多個前端團隊同時維護一個大型應用的衝突？",
            },
        ],
        createdAt: "",
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440009",
        company: "Google",
        department: "Cloud 部門",
        position: "前端工程師",
        date: "2025-09-25",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "英文",
                difficulty: "簡單",
                content: "自我介紹、求職動機、職涯規劃。",
            },
            {
                stage: "第二關",
                interviewer: "資深工程師",
                language: "英文",
                difficulty: "普通",
                content: "考察 JavaScript、React 技術與系統設計思路。",
            },
        ],
        questions: [
            {
                type: "技術題",
                content: "說明 JavaScript 的 event delegation，為什麼要使用它？",
            },
            {
                type: "情境題",
                content: "遇到 legacy code 無法修改太多，你會如何在現有架構下完成需求？",
            },
        ],
        createdAt: "",
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440010",
        company: "台灣微軟",
        department: "Teams 部門",
        position: "前端工程師",
        date: "2025-10-05",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "中文",
                difficulty: "簡單",
                content: "了解個人背景與職涯目標。",
            },
            {
                stage: "第二關",
                interviewer: "資深工程師",
                language: "英文",
                difficulty: "普通",
                content: "考察 TypeScript、React 技術能力與程式設計思路。",
            },
            {
                stage: "第三關",
                interviewer: "團隊主管",
                language: "英文",
                difficulty: "困難",
                content: "深入探討系統架構與專案管理經驗。",
            },
        ],
        questions: [
            {
                type: "技術題",
                content: "React 的 state 與 props 差異？何時使用 useState vs useReducer？",
            },
            {
                type: "情境題",
                content: "產品要求緊急上線，但測試時間不足，你會如何處理？",
            },
        ],
        createdAt: "",
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440011",
        company: "LINE Taiwan",
        department: "聊天部門",
        position: "前端工程師",
        date: "2025-09-20",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "中文",
                difficulty: "簡單",
                content: "詢問工作經歷與求職動機。",
            },
            {
                stage: "第二關",
                interviewer: "資深工程師",
                language: "中文",
                difficulty: "普通",
                content: "考察前端技能與 React 專案實作經驗。",
            },
        ],
        questions: [
            {
                type: "行為題",
                content: "描述一次你在專案中遇到困難並如何解決。",
            },
            {
                type: "情境題",
                content: "如果需求頻繁變動，你會如何確保程式碼穩定性？",
            },
        ],
        createdAt: "",
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440012",
        company: "Adobe",
        department: "Creative Cloud 部門",
        position: "前端工程師",
        date: "2025-10-28",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "英文",
                difficulty: "簡單",
                content: "自我介紹與求職動機。",
            },
            {
                stage: "第二關",
                interviewer: "資深工程師",
                language: "英文",
                difficulty: "普通",
                content: "考察 JavaScript 與 React 技術能力，包含效能與可維護性。",
            },
            {
                stage: "第三關",
                interviewer: "技術主管",
                language: "英文",
                difficulty: "困難",
                content: "深入討論專案架構與跨部門協作經驗。",
            },
        ],
        questions: [
            {
                type: "技術題",
                content: "請解釋 React 的 Fiber 架構與更新機制。",
            },
            {
                type: "情境題",
                content: "如果發現同事的程式碼存在潛在 bug，你會如何處理？",
            },
        ],
        createdAt: "",
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440013",
        company: "華碩",
        department: "電競產品部",
        position: "前端工程師",
        date: "2025-11-01",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "中文",
                difficulty: "簡單",
                content: "了解求職動機與工作經驗。",
            },
            {
                stage: "第二關",
                interviewer: "資深工程師",
                language: "中文",
                difficulty: "普通",
                content: "考察前端技術能力與專案實作經驗。",
            },
            {
                stage: "第三關",
                interviewer: "團隊主管",
                language: "中文",
                difficulty: "困難",
                content: "深入探討團隊協作與專案決策能力。",
            },
        ],
        questions: [
            {
                type: "技術題",
                content: "請說明前端如何實現模組化與程式碼拆分。",
            },
            {
                type: "情境題",
                content: "在產品緊急上線時，你如何平衡速度與程式碼品質？",
            },
        ],
        createdAt: "",
    },
];
