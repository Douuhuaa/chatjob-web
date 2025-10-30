"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

import Button from "components/button";

import { MOCK_EXPERIENCES, type Experience } from "@/constants/mock-experiences";
import clsx from "clsx";

export default function ExperienceDetailPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;

    const [list, setList] = useState<Experience[]>();

    const current = useMemo(() => {
        return list.find((exp) => exp.id === id) ?? null;
    }, [list, id]);

    useEffect(() => {
        // TODO: call API
        setList(MOCK_EXPERIENCES);
    }, []);

    if (!list) {
        return <div className="flex h-full flex-1 items-center justify-center">{/* TODO: 沒有 list 的畫面 */}</div>;
    }

    return (
        <div className="flex w-[704px] flex-col py-24">
            <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-medium text-gray-800">
                        {current.company} — {current.position}
                    </h1>
                    <p>{current.createdAt}</p>
                </div>
                <Button variant="secondary" onClick={() => router.push("/list/list")}>
                    返回
                </Button>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <h2 className="font-semibold text-teal-500">基本資訊</h2>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                            <p className="text-gray-400">公司</p>
                            <p>{current.company}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">職務</p>
                            <p>{current.position}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">面試時間</p>
                            <p>{current.date}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">部門</p>
                            <p>{current.department}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="font-semibold text-teal-500">面試關卡</h2>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                        {current.stages.map((item, index) => (
                            <div
                                key={`${item.stage}-${index}`}
                                className="rounded-lg border border-gray-200 p-3 text-sm text-gray-600"
                            >
                                <div className="flex items-center justify-between">
                                    <p className="font-medium">{item.stage}</p>
                                    <span
                                        className={clsx("rounded px-2 py-0.5 text-xs text-gray-50", {
                                            "bg-teal-400": item.difficulty == "簡單",
                                            "bg-teal-500": item.difficulty == "普通",
                                            "bg-teal-600": item.difficulty == "困難",
                                        })}
                                    >
                                        {item.difficulty}
                                    </span>
                                </div>
                                <div className="mb-2 text-xs text-gray-400">
                                    {item.interviewer} · {item.language}
                                </div>
                                {item.content && <p className="whitespace-pre-wrap">{item.content}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="font-semibold text-teal-500">面試問題</h2>
                    {current.questions.length === 0 ? (
                        <p className="text-sm text-gray-500">無紀錄</p>
                    ) : (
                        <div className="flex flex-col gap-2">
                            {current.questions.map((item, index) => (
                                <div
                                    key={`${item.type}-${index}`}
                                    className="flex items-center gap-2 text-sm text-gray-600"
                                >
                                    <span className="shrink-0 rounded-full bg-teal-50 p-1 text-teal-600">
                                        {item.type}
                                    </span>
                                    <span className="whitespace-pre-wrap">{item.content}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
