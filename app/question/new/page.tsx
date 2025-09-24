"use client";

import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import clsx from "clsx";

import SearchField from "@/components/search-field";

import CloseIcon from "@/components/icons/close.svg";
import SubmitIcon from "@/components/icons/submit.svg";

import { MOCK_COMPANIES, MOCK_DEPARTMENTS, MOCK_POSITIONS, MOCK_QUESTIONS } from "@/constants/mock-data";

const MAX_HEIGHT = 160;

export default function QuestionNewPage() {
    const [company, setCompany] = useState("");
    const [department, setDepartment] = useState("");
    const [position, setPosition] = useState("");
    const [manualQuestion, setManualQuestion] = useState("");
    const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const availableQuestions = MOCK_QUESTIONS.filter((question) => !selectedQuestions.includes(question));

    const isSubmitDisabled = useMemo(() => {
        const hasQuestion = manualQuestion.trim() !== "" || selectedQuestions.length > 0;
        return company.trim() == "" || position.trim() == "" || !hasQuestion;
    }, [company, position, manualQuestion, selectedQuestions]);

    const handleToggleQuestion = useCallback((question: string) => {
        setSelectedQuestions((prev) =>
            prev.includes(question) ? prev.filter((q) => q !== question) : [...prev, question],
        );
        // TODO:新增動畫效果
    }, []);

    const handleRemoveQuestion = useCallback((question: string) => {
        setSelectedQuestions((prev) => prev.filter((q) => q !== question));
        // TODO:新增動畫效果
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // TODO: call API
        // TODO: 新增提問紀錄並且直接導連到該提問詳情

        setCompany("");
        setDepartment("");
        setPosition("");
        setManualQuestion("");
        setSelectedQuestions([]);
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            const updatedHeight = Math.min(textareaRef.current.scrollHeight, MAX_HEIGHT);
            textareaRef.current.style.height = `${updatedHeight}px`;
        }
    }, [manualQuestion]);

    return (
        <div className="flex w-[704px] flex-col justify-between">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5 text-center">
                    <h1 className="text-3xl font-medium text-gray-800">輸入你的面試相關問題</h1>
                    <p className="text-sm text-gray-400">
                        選公司、選職務，輸入問題或點選熱門問題
                        <br />
                        ChatJOB 秒整理面試心得，立即回覆你！
                    </p>
                </div>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="flex gap-5">
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
                                selectedQuestions.map((question, index) => (
                                    <span
                                        key={index}
                                        className="flex items-center gap-1 rounded-full bg-teal-100 px-2 py-1 text-sm text-teal-600"
                                    >
                                        {question}

                                        <button
                                            type="button"
                                            onClick={() => handleRemoveQuestion(question)}
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
                                className={clsx("h-8 w-8 rounded-full p-1", {
                                    "pointer-events-none bg-gray-100 text-gray-200": isSubmitDisabled,
                                    "cursor-pointer bg-teal-950 text-gray-50 hover:bg-teal-400 active:bg-teal-500": !isSubmitDisabled,
                                })}
                            />
                        </button>
                    </div>
                </form>
            </div>

            <div className="flex flex-col gap-1">
                <p className="text-gray-600">常問問題</p>

                <div className="flex w-full flex-nowrap gap-4 overflow-x-auto text-gray-500">
                    {availableQuestions.map((question, index) => (
                        <button
                            key={index}
                            onClick={() => handleToggleQuestion(question)}
                            type="button"
                            className={clsx(
                                "w-40 flex-shrink-0 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm transition-colors",
                                "hover:border-teal-300 hover:bg-teal-50 hover:text-teal-400",
                                "active:border-teal-500 active:bg-teal-50 active:text-teal-500",
                            )}
                        >
                            {question}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
