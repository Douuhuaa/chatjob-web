"use client";

import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import clsx from "clsx";

import SidePanel from "../components/side-panel";
import SearchField from "../components/search-field";

import CloseIcon from "../components/icons/close.svg";
import SubmitIcon from "../components/icons/submit.svg";

// TODO:串接API
const MOCK_COMPANIES = [
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
const MOCK_DEPARTMENTS = [
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
const MOCK_POSITIONS = [
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
const MOCK_QUESTIONS = [
    { key: 1, value: "這個職缺的面試流程是什麼？" },
    { key: 2, value: "這個職位的日常職務與首要任務有哪些？" },
    { key: 3, value: "公司對新員工的短期與長期目標？" },
    { key: 4, value: "這個職位在公司的升遷及發展路徑為何？" },
    { key: 5, value: "公司如何評估這個職位員工的表現？" },
    { key: 6, value: "公司文化與工作氛圍怎麼樣？" },
    { key: 7, value: "團隊目前有多少人？核心價值是什麼？" },
    { key: 8, value: "公司的願景、使命和價值觀是什麼？" },
    { key: 9, value: "公司今年和接下來的目標是什麼？" },
    { key: 10, value: "這個職位需要具備哪些核心能力？" },
];

const MAX_HEIGHT = 160;

export default function AskPage() {
    const [company, setCompany] = useState("");
    const [department, setDepartment] = useState("");
    const [position, setPosition] = useState("");
    const [manualQuestion, setManualQuestion] = useState("");
    const [selectedQuestionKeys, setSelectedQuestionKeys] = useState<number[]>([]);

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const availableQuestions = MOCK_QUESTIONS.filter(
        (option) => !selectedQuestionKeys.includes(option.key),
    );

    const isSubmitDisabled = useMemo(() => {
        const hasQuestion = manualQuestion.trim() !== "" || selectedQuestionKeys.length > 0;
        return company.trim() == "" || position.trim() == "" || !hasQuestion;
    }, [company, position, manualQuestion, selectedQuestionKeys]);

    const handleToggleQuestion = useCallback((key: number) => {
        setSelectedQuestionKeys((prev) =>
            prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
        );
        // TODO:新增動畫效果
    }, []);

    const handleRemoveQuestion = useCallback((key: number) => {
        setSelectedQuestionKeys((prev) => prev.filter((k) => k !== key));
        // TODO:新增動畫效果
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            company,
            department,
            position,
            manualQuestion,
            selectedQuestionKeys,
        });
        // TODO:處理表單提交邏輯
    };

    const selectedQuestions = useMemo(() => {
        // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set
        const keySet = new Set(selectedQuestionKeys);
        return MOCK_QUESTIONS.filter((option) => keySet.has(option.key));
    }, [selectedQuestionKeys]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            const updatedHeight = Math.min(textareaRef.current.scrollHeight, MAX_HEIGHT);
            textareaRef.current.style.height = `${updatedHeight}px`;
        }
    }, [manualQuestion]);

    return (
        <div className="flex h-full">
            <SidePanel />
            <div className="flex flex-1 items-center justify-center">
                <div className="flex w-[704px] flex-col gap-16">
                    <div className="flex flex-col gap-5 text-center">
                        <h1 className="text-3xl font-medium text-gray-800">輸入你的面試相關問題</h1>
                        <p className="text-sm text-gray-400">
                            選公司、選職務，輸入問題或點選熱門問題
                            <br />
                            ChatJOB 秒整理面試心得，立即回覆你！
                        </p>
                    </div>

                    <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit}>
                        <div className="flex w-full gap-5">
                            <SearchField
                                label="公司"
                                placeholder="搜尋公司"
                                value={company}
                                onValueChange={setCompany}
                                options={MOCK_COMPANIES}
                                required={true}
                            />
                            <SearchField
                                label="部門/團隊"
                                placeholder="搜尋部門/團隊"
                                value={department}
                                onValueChange={setDepartment}
                                options={MOCK_DEPARTMENTS}
                            />
                            <SearchField
                                label="職務"
                                placeholder="搜尋職務"
                                required={true}
                                value={position}
                                onValueChange={setPosition}
                                options={MOCK_POSITIONS}
                            />
                        </div>
                        <div
                            className={clsx(
                                "relative flex w-full flex-col rounded-3xl border border-gray-400 bg-white p-3 focus-within:border-teal-500",
                                selectedQuestions.length > 0 && "gap-2",
                            )}
                        >
                            <div className="flex flex-wrap gap-1">
                                {selectedQuestions.length > 0 &&
                                    selectedQuestions.map((option) => (
                                        <span
                                            key={option.key}
                                            className="flex items-center gap-1 rounded-full bg-teal-100 px-2 py-1 text-sm text-teal-600"
                                        >
                                            {option.value}
                                            <button
                                                onClick={() => handleRemoveQuestion(option.key)}
                                                type="button"
                                                className="text-teal-300 hover:text-teal-600"
                                            >
                                                <CloseIcon className="h-5 w-5" />
                                            </button>
                                        </span>
                                    ))}
                            </div>
                            <textarea
                                ref={textareaRef}
                                placeholder="輸入問題"
                                value={manualQuestion}
                                onChange={(e) => setManualQuestion(e.target.value)}
                                className="w-full resize-none bg-transparent pr-10 focus:outline-none"
                                rows={1}
                            />
                            <button
                                type="submit"
                                disabled={isSubmitDisabled}
                                className="absolute bottom-2 right-3 disabled:pointer-events-none"
                            >
                                <SubmitIcon
                                    className={clsx(
                                        "h-8 w-8 rounded-full p-1",
                                        isSubmitDisabled
                                            ? "pointer-events-none bg-gray-100 text-gray-200"
                                            : "cursor-pointer bg-teal-950 text-gray-50 hover:bg-teal-400 active:bg-teal-500",
                                    )}
                                />
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-col gap-1 text-gray-500">
                        <p className="">常問問題</p>
                        <div className="flex w-full flex-nowrap gap-4 overflow-x-auto">
                            {availableQuestions.map((option) => (
                                <button
                                    key={option.key}
                                    onClick={() => handleToggleQuestion(option.key)}
                                    type="button"
                                    className={clsx(
                                        "w-40 flex-shrink-0 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm transition-colors",
                                        "hover:border-teal-300 hover:bg-teal-50 hover:text-teal-400",
                                        "active:border-teal-500 active:bg-teal-50 active:text-teal-500",
                                    )}
                                >
                                    {option.value}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
