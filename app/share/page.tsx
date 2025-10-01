"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "components/button";
import SearchField from "components/search-field";

import DateSelector from "./components/date-selector";
import Layout from "./components/layout";

import { MOCK_COMPANIES, MOCK_DEPARTMENTS, MOCK_POSITIONS } from "constants/mock-data";

export default function SharePage() {
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

        router.push("/share/step2");
    };

    const buttons = (
        <Button type="submit" onClick={handleNextClick}>
            下一步
        </Button>
    );

    return (
        <Layout step={1} buttons={buttons}>
            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
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
        </Layout>
    );
}
