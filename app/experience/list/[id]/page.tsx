"use client";

import { useMemo } from "react";
import { useRouter, useParams } from "next/navigation";

import Button from "components/button";

import { MOCK_EXPERIENCES } from "constants/mock-data";
import clsx from "clsx";

export default function ExperienceDetailPage() {
    const router = useRouter();
    const params = useParams();
    const experienceId = params.id;

    const experience = useMemo(() => {
        return MOCK_EXPERIENCES.find((exp) => exp.id === experienceId);
    }, [experienceId]);

    if (!experience) {
        return (
            <div className="flex h-full flex-1 items-center justify-center">
                {/* TODO: 沒有 experience 的畫面 */}
            </div>
        );
    }

    return (
        <div className="flex h-full flex-1 flex-col">
            <div className="flex-1 overflow-y-auto p-10">
                <div className="mx-auto w-[704px]">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-3xl font-medium text-gray-800">
                                    {experience.company} — {experience.position}
                                </h1>
                                <p>{experience.createdAt}</p>
                            </div>
                            <Button variant="secondary" onClick={() => router.push("/experience/list")}>
                                返回
                            </Button>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="font-semibold text-teal-500">基本資訊</h2>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                                <div>
                                    <p className="text-gray-400">公司</p>
                                    <p>{experience.company}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">職務</p>
                                    <p>{experience.position}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">面試時間</p>
                                    <p>{experience.date}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">部門</p>
                                    <p>{experience.department}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h2 className="font-semibold text-teal-500">面試關卡</h2>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                                {experience.stages.map((stage, index) => (
                                    <div
                                        key={`${stage.stage}-${index}`}
                                        className="rounded-lg border border-gray-200 p-3 text-sm text-gray-600"
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="font-medium">{stage.stage}</p>
                                            <span
                                                className={clsx("rounded px-2 py-0.5 text-xs text-gray-50", {
                                                    "bg-teal-400": stage.difficulty == "簡單",
                                                    "bg-teal-500": stage.difficulty == "普通",
                                                    "bg-teal-600": stage.difficulty == "困難",
                                                })}
                                            >
                                                {stage.difficulty}
                                            </span>
                                        </div>
                                        <div className="mb-2 text-xs text-gray-400">
                                            {stage.interviewer} · {stage.language}
                                        </div>
                                        {stage.content && <p className="whitespace-pre-wrap">{stage.content}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h2 className="font-semibold text-teal-500">面試問題</h2>
                            {experience.questions.length === 0 ? (
                                <p className="text-sm text-gray-500">無紀錄</p>
                            ) : (
                                <div className="flex flex-col gap-2">
                                    {experience.questions.map((q, index) => (
                                        <div
                                            key={`${q.type}-${index}`}
                                            className="flex items-center gap-2 text-sm text-gray-600"
                                        >
                                            <span className="shrink-0 rounded-full bg-teal-50 p-1 text-teal-600">
                                                {q.type}
                                            </span>
                                            <span className="whitespace-pre-wrap">{q.content}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
