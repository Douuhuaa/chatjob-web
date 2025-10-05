// TODO: 串接API後移除此檔案

export const MOCK_COMPANIES = [
    "Google",
    "Facebook",
    "亞馬遜",
    "Apple",
    "微軟",
    "Netflix",
    "特斯拉",
    "英特爾",
    "聯發科",
    "台積電",
];

export const MOCK_DEPARTMENTS = [
    "Engineering Team",
    "設計團隊",
    "產品團隊",
    "Marketing Team",
    "客戶成功團隊",
    "Operations Team",
    "成長團隊",
    "Data Team",
    "人資團隊",
    "財務團隊",
];

export const MOCK_POSITIONS = [
    "Front-End Engineer",
    "UI/UX 設計師",
    "產品經理",
    "Digital Marketing Specialist",
    "人力資源專員",
    "Data Engineer",
    "Back-End Engineer",
    "Account Manager",
    "營運專員",
    "QA Engineer",
];

export const MOCK_QUESTIONS = [
    "這個職缺的面試流程是什麼？",
    "這個職位的日常職務與首要任務有哪些？",
    "公司對新員工的短期與長期目標？",
    "這個職位在公司的升遷及發展路徑為何？",
    "公司如何評估這個職位員工的表現？",
    "公司文化與工作氛圍怎麼樣？",
    "團隊目前有多少人？核心價值是什麼？",
    "公司的願景、使命和價值觀是什麼？",
    "公司今年和接下來的目標是什麼？",
    "這個職位需要具備哪些核心能力？",
];

export const MOCK_RECORDS = [
    {
        id: "550e8400-e29b-41d4-a716-446655440000",
        question: {
            company: "台積電",
            department: "",
            position: "前端工程師",
            manualQuestion:
                "幫我彙整以下問題的答案：\n\n1. VIS 前端工程師面試常見的技術考題有哪些？（HTML、CSS、JavaScript、React、前端效能優化相關）\n2. 會不會考演算法或資料結構？難度大概在哪個程度？\n3. 面試會不會問到跟半導體產業相關的知識？（例如：產業背景、製程用語、行業知識）\n4. 前端團隊的技術棧大多是什麼？（React、Vue、Angular？還是公司內部框架？）\n5. 面試流程大概幾關？（HR 初試、線上測驗、主管面談、技術面試、英文面試等）\n6. 公司文化和工程師的工作氛圍如何？會不會偏傳統、流程多，還是偏敏捷？\n7. 加班情況和工時彈性如何？\n8. 前端工程師在 VIS 的職涯發展路徑是什麼？（例如：有沒有機會轉全端、帶團隊、往產品方向發展）\n9. 薪資待遇大概落在哪個範圍？跟台積電、聯發科相比如何？\n10. 有沒有什麼在面試前應該特別準備的重點（例如：專案作品集、白板題、英文自我介紹、行為面試問題）？\n\n請幫我整理成重點清單，並提供準備建議。",
            selectedQuestions: [
                "這個職缺的面試流程是什麼？",
                "公司對新員工的短期與長期目標？",
                "公司文化與工作氛圍怎麼樣？",
            ],
            createdAt: "2023-10-01",
        },
        response: {
            answer: "1. VIS 前端工程師面試常見的技術考題包括 HTML、CSS、JavaScript 基礎知識，React 框架使用，前端效能優化技巧等。\n2. 會考一些基本的演算法和資料結構，難度大約在 LeetCode Easy 到 Medium 的程度。\n3. 面試流程通常有 HR 初試、線上測驗、技術面試和主管面談等幾個環節。\n4. 前端團隊主要使用 React 作為技術棧，也會用到一些內部開發的框架和工具。\n5. 面試一般分為四關：HR 初試、線上測驗、技術面試和主管面談。\n6. 公司文化偏向開放和協作，工作氛圍較為輕鬆，但也注重效率和結果。\n7. 加班情況視專案需求而定，工時相對彈性。\n8. 前端工程師在 VIS 有明確的職涯發展路徑，可以往全端開發、技術專家或管理方向發展。\n9. 薪資待遇在業界屬於中上水平，與台積電、聯發科相當。\n10. 面試前建議準備好專案作品集，熟悉常見的白板題，並練習英文自我介紹和行為面試問題。",
            createdAt: "2023-10-02",
        },
    },
    {
        id: "6f1e2c3a-7b4d-45a0-b1c2-123456789abc",
        question: {
            company: "鴻海",
            department: "",
            position: "軟體工程師",
            manualQuestion: "",
            selectedQuestions: [
                "這個職位的日常職務與首要任務有哪些？",
                "公司如何評估這個職位員工的表現？",
            ],
            createdAt: "2023-10-05",
        },
        response: {
            answer: "1. 軟體工程師的日常職務包括撰寫和維護程式碼、參與需求討論、進行單元測試和系統測試等。\n2. 公司通常通過定期的績效評估來評估員工的表現，評估標準包括工作質量、效率、團隊合作等。",
            createdAt: "2023-10-06",
        },
    },
    {
        id: "3d12a7b8-4f56-41c9-9876-abcdef123456",
        question: {
            company: "聯發科韌體",
            department: "",
            position: "前端工程師",
            manualQuestion:
                "整理面試常考問題，我想著重在韌體或硬體相關前端開發，包含嵌入式 UI、WebView、前端與韌體串接、效能優化、記憶體管理、跨平台顯示問題、系統整合測試，請提供相關的題目範例和解題思路。",
            selectedQuestions: [],
            createdAt: "2023-10-10",
        },
        response: {
            answer: "以下是一些針對韌體或硬體相關前端開發的面試常考問題範例：\n1. 嵌入式 UI 開發中，如何優化前端效能以適應硬體限制？\n2. 在 WebView 中，如何處理與韌體的資料交換？請舉例說明。\n3. 當前端需要與低階硬體進行通訊時，通常會使用哪些協議或技術？\n4. 如何在跨平台顯示中確保 UI 的一致性？有哪些常見的挑戰？\n5. 請描述你在系統整合測試中遇到的挑戰，以及你是如何解決的。\n\n解題思路建議：\n1. 強調效能優化技巧，如減少 DOM 操作、使用輕量級框架等。\n2. 熟悉常用的資料交換格式（如 JSON、XML）和通訊協議（如 HTTP、WebSocket）。\n3. 了解常見的跨平台開發工具和框架，如 React Native、Flutter 等。\n4. 展示你在實際專案中解決問題的經驗，強調你的分析和解決能力。",
            createdAt: "2023-10-11",
        },
    },
    {
        id: "9a0b1c2d-3e4f-5678-9012-3456789abcde",
        question: {
            company: "Google",
            department: "",
            position: "前端工程師",
            manualQuestion:
                "彙整以下問題：\n1. Google 前端工程師面試常見的技術考題有哪些？（HTML、CSS、JavaScript、React、前端效能優化相關）\n2. 會不會考演算法或資料結構？難度大概在哪個程度？\n3. 面試流程大概幾關？（HR 初試、線上測驗、主管面談、技術面試、英文面試等）\n4. 公司文化和工程師的工作氛圍如何？會不會偏傳統、流程多，還是偏敏捷？\n5. 加班情況和工時彈性如何？\n6. 前端工程師在 Google 的職涯發展路徑是什麼？（例如：有沒有機會轉全端、帶團隊、往產品方向發展）\n7. 薪資待遇大概落在哪個範圍？跟其他大型科技公司相比如何？\n8. 有沒有什麼在面試前應該特別準備的重點（例如：專案作品集、白板題、英文自我介紹、行為面試問題）？",
            selectedQuestions: [],
            createdAt: "2023-10-15",
        },
        response: {
            answer: "1. Google 前端工程師面試常見的技術考題包括 HTML、CSS、JavaScript 基礎知識，React 框架使用，前端效能優化技巧等。\n2. 會考一些基本的演算法和資料結構，難度大約在 LeetCode Medium 到 Hard 的程度。\n3. 面試流程通常有 HR 初試、線上測驗、技術面試和主管面談等幾個環節。\n4. 公司文化偏向創新和挑戰，工作氛圍較為快節奏且注重結果。\n5. 加班情況視專案需求而定，但整體工時較為彈性。\n6. 前端工程師在 Google 有多樣的職涯發展路徑，可以往全端開發、技術專家或管理方向發展。\n7. 薪資待遇在業界屬於頂尖水平，與其他大型科技公司相比具有競爭力。\n8. 面試前建議準備好專案作品集，熟悉常見的白板題，並練習英文自我介紹和行為面試問題。",
            createdAt: "2023-10-16",
        },
    },
    {
        id: "7c8d9e0f-1234-5678-9abc-def012345678",
        question: {
            company: "趨勢",
            department: "",
            position: "前端工程師",
            manualQuestion: "",
            selectedQuestions: [
                "公司的願景、使命和價值觀是什麼？",
                "公司今年和接下來的目標是什麼？",
                "這個職位在公司的升遷及發展路徑為何？",
            ],
            createdAt: "2023-10-20",
        },
        response: {
            answer: "1. 公司的願景是成為全球領先的科技創新企業，使命是通過技術改善人們的生活，核心價值觀包括創新、協作和客戶至上。\n2. 今年公司的主要目標是擴展市場份額和提升產品質量，接下來的目標包括進一步加強研發能力和提升客戶滿意度。\n3. 這個職位在公司的升遷及發展路徑包括從初級工程師到高級工程師，再到技術主管或專案經理等多種方向。",
            createdAt: "2023-10-21",
        },
    },
];

export const MOCK_STAGES = [
    "第一關",
    "第二關",
    "第三關",
    "第四關",
    "第五關",
    "第六關",
    "第七關",
    "第八關",
    "第九關",
    "第十關",
];

export const MOCK_INTERVIEWERS = [
    "人資專員",
    "資深同事",
    "直屬主管",
    "部門主管",
    "高階主管",
    "執行長",
    "董事長",
];

export const MOCK_LANGUAGES = ["中文", "英文"];

export const MOCK_DIFFICULTIES = ["簡單", "普通", "困難"];

export const MOCK_TYPES = ["行為題", "情境題", "技術題"];

export const MOCK_EXPERIENCES = [
    {
        id: "550e8400-e29b-41d4-a716-446655440001",
        company: "Google",
        department: "Engineering",
        position: "Software Engineer",
        date: "2025-10-01",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "中文",
                difficulty: "簡單",
                content:
                    "主要詢問自我介紹、求職動機、薪資期待與工作地點彈性，並了解過往的工作經驗與離職原因。",
            },
            {
                stage: "第二關",
                interviewer: "資深同事",
                language: "中文",
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
                content:
                    "請描述如何使用 React 曾經遇過 PM 要求快速上線但技術債很重，你會怎麼處理？",
            },
        ],
        createdAt: "2025-10-05",
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440002",
        company: "Facebook",
        department: "Engineering",
        position: "Software Engineer",
        date: "2025-01-20",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "中文",
                difficulty: "簡單",
                content:
                    "主要詢問自我介紹、求職動機、薪資期待與工作地點彈性，並了解過往的工作經驗與離職原因。",
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
        createdAt: "2025-01-28",
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440003",
        company: "Amazon",
        department: "Engineering",
        position: "Software Engineer",
        date: "2025-03-17",
        stages: [
            {
                stage: "第一關",
                interviewer: "人資專員",
                language: "中文",
                difficulty: "簡單",
                content:
                    "主要詢問自我介紹、求職動機、薪資期待與工作地點彈性，並了解過往的工作經驗與離職原因。",
            },
        ],
        questions: [
            {
                type: "行為題",
                content: "請描述如何處理專案中遇到的技術難題。",
            },
        ],
        createdAt: "2025-04-17",
    },
];
