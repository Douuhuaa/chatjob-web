"use client";

import Link from "next/link";

import { MOCK_EXPERIENCES } from "constants/mock-data";

import SortIcon from "/components/icons/sort.svg";

export default function ExperienceListPage() {
    return (
        <div className="flex h-full flex-1 items-center justify-center">
            <div className="flex h-full flex-1 items-center justify-center">
                <div className="flex w-[704px] flex-col gap-16">
                    <div className="flex flex-col gap-5 text-center">
                        <h1 className="text-3xl font-medium text-gray-800">你已分享的面試心得</h1>
                        <p className="whitespace-pre-line text-sm text-gray-400">
                            這裡顯示您過去分享的面試經驗，只有您自己看得到。
                            <br />
                            這些內容會由 ChatJOB 記錄並整理，幫助未來使用者快速獲得面試資訊。
                        </p>
                    </div>
                    <div>
                        <div className="mb-2 grid grid-cols-4 text-center font-semibold text-teal-500">
                            <p>公司</p>
                            <p>職務</p>
                            <span className="flex items-center justify-center gap-1">
                                <p>面試時間</p>
                                <SortIcon className="h-4 w-4" />
                            </span>
                            <span className="flex items-center justify-center gap-1">
                                <p>分享時間</p>
                                <SortIcon className="h-4 w-4" />
                            </span>
                        </div>

                        {MOCK_EXPERIENCES.map((experience) => (
                            <Link
                                key={experience.id}
                                href={`/experience/list/${experience.id}`}
                                className="grid cursor-pointer grid-cols-4 border-b border-gray-300 py-2 text-center text-sm text-gray-600 hover:text-teal-400"
                            >
                                <p>{experience.company}</p>
                                <p>{experience.position}</p>
                                <p>{experience.date}</p>
                                <p>{experience.createdAt}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
