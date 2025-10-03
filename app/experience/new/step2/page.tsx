"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import Button from "components/button";

import Selector from "../../../../components/selector";

import AddIcon from "/components/icons/add.svg";

import {
    MOCK_STAGES,
    MOCK_INTERVIEWERS,
    MOCK_LANGUAGES,
    MOCK_DIFFICULTIES,
} from "constants/mock-data";

const MAX_HEIGHT = 80;

export default function ExperienceSecondStepPage() {
    const [process, setProcess] = useState({
        stage: "",
        interviewer: "",
        language: "",
        difficulty: "",
        content: "",
    });
    // TODO: 新增 state 儲存所有 process

    const router = useRouter();

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const isAddProcessDisabled = useMemo(() => {
        return (
            process.stage.trim() == "" ||
            process.interviewer.trim() == "" ||
            process.language.trim() == "" ||
            process.difficulty.trim() == "" ||
            process.content.trim() == ""
        );
    }, [process]);

    const handleAddProcess = () => {
        console.log({
            process,
        });

        // TODO: 把 process 加到所有 process 的 state 裡面

        setProcess({
            stage: "",
            interviewer: "",
            language: "",
            difficulty: "",
            content: "",
        });
    };

    const handleNextClick = (e: React.FormEvent) => {
        e.preventDefault();

        // TODO: 儲存完整 process 到 context

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
    }, [process.content]);

    return (
        <form className="flex flex-col items-center gap-16" onSubmit={handleNextClick}>
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-4 gap-5">
                    <Selector
                        label="關卡"
                        value={process.stage}
                        onValueChange={(value) => setProcess({ ...process, stage: value })}
                        options={MOCK_STAGES}
                    />
                    <Selector
                        label="面試官"
                        value={process.interviewer}
                        onValueChange={(value) =>
                            setProcess({
                                ...process,
                                interviewer: value,
                            })
                        }
                        options={MOCK_INTERVIEWERS}
                    />
                    <Selector
                        label="語言"
                        value={process.language}
                        onValueChange={(value) =>
                            setProcess({
                                ...process,
                                language: value,
                            })
                        }
                        options={MOCK_LANGUAGES}
                    />
                    <Selector
                        label="難度"
                        value={process.difficulty}
                        onValueChange={(value) =>
                            setProcess({
                                ...process,
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
                            value={process.content}
                            onChange={(e) =>
                                setProcess({
                                    ...process,
                                    content: e.target.value,
                                })
                            }
                            className="w-full resize-none rounded-3xl border border-gray-400 bg-white p-3 focus-within:border-teal-500 focus:outline-none"
                            rows={1}
                        />
                        <button
                            type="button"
                            disabled={isAddProcessDisabled}
                            onClick={handleAddProcess}
                            className="disabled:pointer-events-none"
                        >
                            <AddIcon
                                className={clsx(
                                    "h-8 w-8 rounded-full p-1",
                                    isAddProcessDisabled
                                        ? "pointer-events-none bg-gray-100 text-gray-200"
                                        : "cursor-pointer bg-teal-950 text-gray-50 hover:bg-teal-400 active:bg-teal-500",
                                )}
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex w-full justify-end gap-2">
                <Button type="button" variant="secondary" onClick={handleBackClick}>
                    上一步
                </Button>
                <Button type="submit">下一步</Button>
            </div>
        </form>
    );
}
