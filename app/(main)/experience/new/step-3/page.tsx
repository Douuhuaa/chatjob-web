"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import Button from "@/components/button";
import Selector from "@/components/selector";

import AddIcon from "@/components/icons/add.svg";

import { TYPES } from "@/constants/experience-options";

const MAX_HEIGHT = 80;

export default function InterviewQuestionsPage() {
    const router = useRouter();

    const [form, setForm] = useState({ type: "", content: "" });

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const isAddFormDisabled = useMemo(() => {
        return form.type.trim() == "" || form.content.trim() == "";
    }, [form]);

    const handleAddForm = () => {
        // TODO: 儲存value到store

        setForm({ type: "", content: "" });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // TODO: 儲存完整 form 到 context
        // TODO: 跳轉成功頁
    };

    const handleBackClick = () => {
        router.push("/experience/new/step-2");
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            const updatedHeight = Math.min(textareaRef.current.scrollHeight, MAX_HEIGHT);
            textareaRef.current.style.height = `${updatedHeight}px`;
        }
    }, [form.content]);

    return (
        <form className="flex h-full flex-col justify-between" onSubmit={handleSubmit}>
            <div className="flex w-full gap-5">
                <div className="w-1/4">
                    <Selector
                        label="類型"
                        value={form.type}
                        onValueChange={(value) => setForm({ ...form, type: value })}
                        options={TYPES}
                    />
                </div>

                <div className="flex flex-1 flex-col">
                    <label className="text-gray-600">問題</label>
                    <div className="flex gap-2">
                        <textarea
                            ref={textareaRef}
                            placeholder="輸入內容..."
                            value={form.content}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    content: e.target.value,
                                })
                            }
                            className="w-full resize-none rounded-3xl border border-gray-400 bg-white p-3 focus-within:border-teal-500 focus:outline-none"
                            rows={1}
                        />
                        <button
                            type="button"
                            disabled={isAddFormDisabled}
                            onClick={handleAddForm}
                            className="disabled:pointer-events-none"
                        >
                            <AddIcon
                                className={clsx(
                                    "h-8 w-8 rounded-full p-1",
                                    isAddFormDisabled
                                        ? "pointer-events-none bg-gray-100 text-gray-200"
                                        : "cursor-pointer bg-teal-950 text-gray-50 hover:bg-teal-400 active:bg-teal-500",
                                )}
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div>{/* TODO: 新增的每筆資料 */}</div>

            <div className="flex w-full justify-end gap-2">
                <Button type="button" variant="secondary" onClick={handleBackClick}>
                    上一步
                </Button>
                <Button type="submit">分享</Button>
            </div>
        </form>
    );
}
