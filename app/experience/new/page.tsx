"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "components/button";
import SearchField from "components/search-field";

import DateSelector from "../../../components/date-selector";

import { MOCK_COMPANIES, MOCK_DEPARTMENTS, MOCK_POSITIONS } from "constants/mock-data";

export default function ExperiencePage() {
    const [company, setCompany] = useState("");
    const [department, setDepartment] = useState("");
    const [position, setPosition] = useState("");
    const [date, setDate] = useState({ year: null, month: null });

    const router = useRouter();

    const handleNextClick = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({
            company,
            department,
            position,
            date,
        });

        // TODO: 儲存到 context

        router.push("/experience/new/step2");
    };

    return (
        <form className="flex flex-col items-center gap-16" onSubmit={handleNextClick}>
            <div className="w-full">
                <div className="grid grid-cols-2 gap-5">
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
                    <SearchField
                        label="部門/團隊"
                        placeholder="搜尋部門/團隊"
                        value={department}
                        onValueChange={setDepartment}
                        options={MOCK_DEPARTMENTS}
                    />
                    <DateSelector value={date} onValueChange={setDate} />
                </div>

                <div>{/* TODO: 面試進度 */}</div>
            </div>

            <div className="self-end">
                <Button type="submit">下一步</Button>
            </div>
        </form>
    );
}
