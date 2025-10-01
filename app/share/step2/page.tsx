"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import Button from "components/button";

import Layout from "../components/layout";
import Selector from "../components/selector";

import AddIcon from "/components/icons/add.svg";

import {
    MOCK_STAGES,
    MOCK_INTERVIEWERS,
    MOCK_LANGUAGES,
    MOCK_DIFFICULTIES,
} from "constants/mock-data";

const MAX_HEIGHT = 80;

export default function SharePage() {
    const [process, setProcess] = useState({
        stage: "",
        interviewer: "",
        language: "",
        difficulty: "",
        content: "",
    });

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

    const handleNextClick = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({
            process,
        });

        router.push("/share/step3");
    };

    const handleBackClick = () => {
        router.push("/share");
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            const updatedHeight = Math.min(textareaRef.current.scrollHeight, MAX_HEIGHT);
            textareaRef.current.style.height = `${updatedHeight}px`;
        }
    }, [process.content]);

    const buttons = (
        <>
            <Button type="button" variant="secondary" onClick={handleBackClick}>
                上一步
            </Button>
            <Button type="submit" onClick={handleNextClick}>
                下一步
            </Button>
        </>
    );

    return (
        <Layout step={2} buttons={buttons}>
            <div className="flex w-full gap-5">
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
            <div className="flex w-full flex-col">
                <label className="text-gray-600">流程摘要 / 面試情境描述</label>
                <div className="flex gap-2">
                    <textarea
                        ref={textareaRef}
                        placeholder="輸入內容..."
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
        </Layout>
    );
}
