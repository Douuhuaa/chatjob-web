"use client";

import clsx from "clsx";
import { useState, useRef, useMemo } from "react";

import SidePanel from "components/side-panel";
import SubmitIcon from "/components/icons/submit.svg";

import { useParams } from "next/navigation";
import { MOCK_RECORDS } from "constants/mock-data";

export default function QuestionDetailPage() {
    const params = useParams();
    const recordId = params.id;

    const record = MOCK_RECORDS.find((c) => c.id === recordId);

    const [manualQuestion, setManualQuestion] = useState("");

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const isSubmitDisabled = useMemo(() => {
        return manualQuestion.trim() == "";
    }, [manualQuestion]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({
            manualQuestion,
        });

        setManualQuestion("");
    };

    if (!record) {
        return (
            <div className="flex h-full">
                <SidePanel />
                {/* TODO: 沒有 record 的畫面 */}
            </div>
        );
    }

    return (
        <div className="flex h-full">
            <SidePanel />
            <div className="flex flex-1 flex-col">
                <div className="flex-1 overflow-y-auto p-10">
                    <div className="mx-auto w-[704px]">
                        <div className="flex flex-col gap-5 whitespace-pre-line">
                            <div className="flex w-[480px] flex-col gap-3 self-end text-gray-600">
                                <div className="w-fit max-w-full self-end rounded-3xl border border-gray-300 bg-gray-100 px-3 py-2">
                                    公司：{record.question.company}
                                </div>

                                {record.question.department && (
                                    <div className="w-fit max-w-full self-end rounded-3xl border border-gray-300 bg-gray-100 px-3 py-2">
                                        部門/團隊：{record.question.department}
                                    </div>
                                )}

                                <div className="w-fit max-w-full self-end rounded-3xl border border-gray-300 bg-gray-100 px-3 py-2">
                                    職務：{record.question.position}
                                </div>

                                <div className="flex w-fit max-w-full flex-col gap-2 self-end whitespace-pre-line rounded-3xl border border-gray-300 bg-gray-100 px-3 py-2">
                                    {record.question.selectedQuestions.length > 0 && (
                                        <div className="inline-flex w-fit flex-wrap gap-1">
                                            {record.question.selectedQuestions.map(
                                                (question, index) => (
                                                    <span
                                                        key={index}
                                                        className="flex items-center gap-1 rounded-full bg-teal-100 px-2 py-1 text-sm text-teal-600"
                                                    >
                                                        {question}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    )}
                                    {record.question.manualQuestion && (
                                        <div>{record.question.manualQuestion}</div>
                                    )}
                                </div>
                            </div>

                            {/* TODO: AI 訊息樣式 */}
                            <div className="flex flex-col gap-3 self-start text-gray-600">
                                <div>{record.response.answer}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-10 pt-4">
                    <div className="mx-auto w-[704px]">
                        <div className="relative flex flex-col rounded-3xl border border-gray-400 bg-white p-3 focus-within:border-teal-500">
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
                                onClick={handleSubmit}
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
                    </div>
                </div>
            </div>
        </div>
    );
}
