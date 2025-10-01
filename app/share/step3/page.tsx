"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import Button from "components/button";

import Layout from "../components/layout";
import Selector from "../components/selector";

import AddIcon from "/components/icons/add.svg";

import { MOCK_TYPES } from "constants/mock-data";

const MAX_HEIGHT = 80;

export default function SharePage() {
    const router = useRouter();

    const [question, setQuestion] = useState({ type: "", content: "" });

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const isAddQuestionDisabled = useMemo(() => {
        return question.type.trim() == "" || question.content.trim() == "";
    }, [question]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({
            question,
        });

        // TODO: 跳出成功 dialog 並且清空表單
    };

    const handleBackClick = () => {
        router.push("/share/step2");
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            const updatedHeight = Math.min(textareaRef.current.scrollHeight, MAX_HEIGHT);
            textareaRef.current.style.height = `${updatedHeight}px`;
        }
    }, [question.content]);

    const buttons = (
        <>
            <Button type="button" variant="secondary" onClick={handleBackClick}>
                上一步
            </Button>
            <Button type="submit">分享</Button>
        </>
    );

    return (
        <Layout step={3} buttons={buttons} onSubmit={handleSubmit}>
            <div className="flex w-full gap-5">
                <div className="w-1/4">
                    <Selector
                        label="類型"
                        value={question.type}
                        onValueChange={(value) => setQuestion({ ...question, type: value })}
                        options={MOCK_TYPES}
                    />
                </div>

                <div className="flex flex-1 flex-col">
                    <label className="text-gray-600">問題</label>
                    <div className="flex gap-2">
                        <textarea
                            ref={textareaRef}
                            placeholder="輸入內容..."
                            onChange={(e) =>
                                setQuestion({
                                    ...question,
                                    content: e.target.value,
                                })
                            }
                            className="w-full resize-none rounded-3xl border border-gray-400 bg-white p-3 focus-within:border-teal-500 focus:outline-none"
                            rows={1}
                        />
                        <button
                            type="button"
                            disabled={isAddQuestionDisabled}
                            className="disabled:pointer-events-none"
                        >
                            <AddIcon
                                className={clsx(
                                    "h-8 w-8 rounded-full p-1",
                                    isAddQuestionDisabled
                                        ? "pointer-events-none bg-gray-100 text-gray-200"
                                        : "cursor-pointer bg-teal-950 text-gray-50 hover:bg-teal-400 active:bg-teal-500",
                                )}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
