"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import Button from "@/components/button";
import Selector from "@/components/selector";

import AddIcon from "@/components/icons/add.svg";

import { MOCK_STAGES, MOCK_ROLES, MOCK_LANGUAGES, MOCK_DIFFICULTIES } from "@/constants/mock-experience-options";

const MAX_HEIGHT = 80;

export default function ExperienceSecondStepPage() {
    const [form, setForm] = useState({
        stage: "",
        interviewer: "",
        language: "",
        difficulty: "",
        content: "",
    });

    const router = useRouter();

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const isAddFormDisabled = useMemo(() => {
        return (
            form.stage.trim() == "" ||
            form.interviewer.trim() == "" ||
            form.language.trim() == "" ||
            form.difficulty.trim() == "" ||
            form.content.trim() == ""
        );
    }, [form]);

    const handleAddForm = () => {
        // TODO: 儲存value到store

        setForm({
            stage: "",
            interviewer: "",
            language: "",
            difficulty: "",
            content: "",
        });
    };

    const handleNextClick = (e: React.FormEvent) => {
        e.preventDefault();

        // TODO: 儲存完整 form 到 context

        router.push("/experience/new/step3");
    };

    const handleBackClick = () => {
        router.push("/experience/new");
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            const updatedHeight = Math.min(textareaRef.current.scrollHeight, MAX_HEIGHT);
            textareaRef.current.style.height = `${updatedHeight}px`;
        }
    }, [form.content]);

    return (
        <form className="flex h-full flex-col justify-between" onSubmit={handleNextClick}>
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-4 gap-5">
                    <Selector
                        label="關卡"
                        value={form.stage}
                        onValueChange={(value) => setForm({ ...form, stage: value })}
                        options={MOCK_STAGES}
                    />
                    <Selector
                        label="面試官"
                        value={form.interviewer}
                        onValueChange={(value) =>
                            setForm({
                                ...form,
                                interviewer: value,
                            })
                        }
                        options={MOCK_ROLES}
                    />
                    <Selector
                        label="語言"
                        value={form.language}
                        onValueChange={(value) =>
                            setForm({
                                ...form,
                                language: value,
                            })
                        }
                        options={MOCK_LANGUAGES}
                    />
                    <Selector
                        label="難度"
                        value={form.difficulty}
                        onValueChange={(value) =>
                            setForm({
                                ...form,
                                difficulty: value,
                            })
                        }
                        options={MOCK_DIFFICULTIES}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-600">流程摘要 / 面試情境描述</label>
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
                <Button type="submit">下一步</Button>
            </div>
        </form>
    );
}
