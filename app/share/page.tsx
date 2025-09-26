"use client";

import Link from "next/link";
import { useState } from "react";

import DateSelector from "./components/date-selector";
import Button from "../components/button";
import SidePanel from "../components/side-panel";
import SearchField from "../components/search-field";

// TODO:串接API
const MOCK_COMPANIES = [
    "Google",
    "Facebook",
    "亞馬遜",
    "Apple",
    "微軟",
    "Netflix",
    "特斯拉",
    "英特爾",
    "聯發科",
    "台積電",
];
const MOCK_DEPARTMENTS = [
    "Engineering Team",
    "設計團隊",
    "產品團隊",
    "Marketing Team",
    "客戶成功團隊",
    "Operations Team",
    "成長團隊",
    "Data Team",
    "人資團隊",
    "財務團隊",
];
const MOCK_POSITIONS = [
    "Front-End Engineer",
    "UI/UX 設計師",
    "產品經理",
    "Digital Marketing Specialist",
    "人力資源專員",
    "Data Engineer",
    "Back-End Engineer",
    "Account Manager",
    "營運專員",
    "QA Engineer",
];

export default function SharePage() {
    const [company, setCompany] = useState("");
    const [department, setDepartment] = useState("");
    const [position, setPosition] = useState("");
    const [date, setDate] = useState("");

    return (
        <div className="flex h-full">
            <SidePanel />
            <div className="flex flex-1 items-center justify-center">
                <div className="flex w-[704px] flex-col gap-16">
                    <div className="flex flex-col gap-5 text-center">
                        <h1 className="text-3xl font-medium text-gray-800">分享你的面試心得</h1>
                        <p className="text-sm text-gray-400">
                            你的經驗，只有你自己看得到，並且可以
                            {/* TODO:更新網址 */}
                            <Link href="/" className="text-sky-500 underline">
                                查看已分享的心得
                            </Link>
                            <br />
                            這些內容會由 ChatJOB 記錄並整理，幫助未來使用者快速獲得面試資訊！
                        </p>
                    </div>
                    <form className="flex flex-col items-center gap-5">
                        <div className="flex w-full flex-col gap-2">
                            <span className="text-base font-semibold text-teal-500">基本資料</span>
                            <div className="flex w-full gap-5">
                                <SearchField
                                    label="公司"
                                    placeholder="搜尋公司"
                                    value={company}
                                    onValueChange={setCompany}
                                    options={MOCK_COMPANIES}
                                    required={true}
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

                            <div className="flex w-full gap-5">
                                <SearchField
                                    label="部門/團隊"
                                    placeholder="搜尋部門/團隊"
                                    value={department}
                                    onValueChange={setDepartment}
                                    options={MOCK_DEPARTMENTS}
                                />
                                <DateSelector value={date} onValueChange={setDate} />
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <span className="text-base font-semibold text-teal-500">面試流程</span>
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <span className="text-base font-semibold text-teal-500">
                                具體題目紀錄
                            </span>
                        </div>
                        <div className="flex w-full flex-col gap-2"></div>
                        <div className="flex w-full justify-end gap-2">
                            <Button type="button" variant="secondary">
                                取消
                            </Button>
                            <Button type="submit">分享</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
