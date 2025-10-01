"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";

import Button from "@/components/button";
import DateSelector from "@/components/date-selector";
import SearchField from "@/components/search-field";
import Selector from "@/components/selector";

import StarIcon from "@/components/icons/star.svg";

import { MOCK_COMPANIES, type Company } from "@/constants/mock-company-options";
import { MOCK_RESULTS, MOCK_DURATIONS } from "@/constants/mock-experience-options";

export default function ExperiencePage() {
    const [form, setForm] = useState({
        company: "",
        department: "",
        position: "",
        date: { year: null, month: null },
        isChecked: false,
        interview: {
            rating: 3,
            result: "",
            pendingTime: "",
        },
    });
    const [allCompanies, setAllCompanies] = useState<Company[]>([]);
    const [companyOptions, setCompanyOptions] = useState<string[]>([]);
    const [departmentOptions, setDepartmentOptions] = useState<string[]>([]);
    const [positionOptions, setPositionOptions] = useState<string[]>([]);

    const fieldRef = useRef<HTMLInputElement>(null);

    const router = useRouter();

    useEffect(() => {
        // TODO: call API
        setAllCompanies(MOCK_COMPANIES);
    }, []);

    useEffect(() => {
        setCompanyOptions(allCompanies.map(({ company }) => company));
    }, [allCompanies]);

    const selectedCompany = useMemo(
        () => allCompanies.find((c) => c.company === form.company),
        [allCompanies, form.company],
    );

    // 處理公司欄位更新
    useEffect(() => {
        if (selectedCompany) {
            setDepartmentOptions(selectedCompany.departments.map((d) => d.name));
            setPositionOptions(selectedCompany.positions || []);
        } else {
            setDepartmentOptions([]);
            setPositionOptions([]);
        }
        setForm((prev) => ({ ...prev, department: "", position: "" }));
    }, [selectedCompany]);

    // 處理部門欄位更新
    useEffect(() => {
        if (!selectedCompany) return;

        if (form.department) {
            const selectedDept = selectedCompany.departments.find((d) => d.name === form.department);
            const newPositions = selectedDept ? selectedDept.positions : [];
            setPositionOptions(newPositions);

            if (!newPositions.includes(form.position)) {
                setForm((prev) => ({ ...prev, position: "" }));
            }
        } else {
            setPositionOptions(selectedCompany.positions || []);
            setForm((prev) => ({ ...prev, position: "" }));
        }
    }, [form.department, selectedCompany]);

    const handleNextClick = (e: React.FormEvent) => {
        e.preventDefault();

        // TODO: 儲存value到store
        // TODO: 判斷欄位是否完整

        router.push("/experience/new/step2");
    };

    const handleDisabledFieldClick = () => {
        fieldRef.current?.focus();
    };

    return (
        <form className="flex h-full flex-col justify-between" onSubmit={handleNextClick}>
            <div className="grid grid-cols-2 gap-5">
                <SearchField
                    ref={fieldRef}
                    label="公司"
                    placeholder="搜尋公司"
                    value={form.company}
                    onValueChange={(value) => setForm((prev) => ({ ...prev, company: value }))}
                    options={companyOptions}
                    required={true}
                />
                <SearchField
                    label="部門/團隊"
                    placeholder={form.company ? "搜尋部門/團隊" : "請先選擇公司"}
                    value={form.department}
                    onValueChange={(value) => setForm((prev) => ({ ...prev, department: value }))}
                    options={departmentOptions}
                    disabled={!form.company}
                    onClick={!form.company ? handleDisabledFieldClick : undefined}
                />
                <SearchField
                    label="職務"
                    placeholder={form.company ? "搜尋職務" : "請先選擇公司"}
                    required={true}
                    value={form.position}
                    onValueChange={(value) => setForm((prev) => ({ ...prev, position: value }))}
                    options={positionOptions}
                    disabled={!form.company}
                    onClick={!form.company ? handleDisabledFieldClick : undefined}
                />
                <DateSelector
                    value={form.date}
                    onValueChange={(value) => setForm((prev) => ({ ...prev, date: value }))}
                />
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-1">
                    <input
                        id="isChecked"
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer"
                        checked={form.isChecked}
                        onChange={(e) => setForm((prev) => ({ ...prev, isChecked: e.target.checked }))}
                    />
                    <label htmlFor="isChecked" className="cursor-pointer text-gray-600">
                        我已完整完成所有面試流程
                    </label>
                </div>

                <div className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor="面試評價"
                            className={clsx({ "text-gray-600": form.isChecked, "text-gray-300": !form.isChecked })}
                        >
                            面試評價
                        </label>

                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <Button
                                    key={num}
                                    type="button"
                                    variant="accent"
                                    size="icon"
                                    className={clsx("rounded-full", {
                                        "border-teal-600 bg-teal-600": num == form.interview.rating,
                                    })}
                                    onClick={() =>
                                        setForm((prev) => ({
                                            ...prev,
                                            interview: { ...prev.interview, rating: num },
                                        }))
                                    }
                                    disabled={!form.isChecked}
                                >
                                    <span className="w-3">{num}</span>
                                    <StarIcon />
                                </Button>
                            ))}
                        </div>
                    </div>

                    <Selector
                        label="面試結果"
                        value={form.interview.result}
                        onValueChange={(value) =>
                            setForm((prev) => ({ ...prev, interview: { ...prev.interview, result: value } }))
                        }
                        options={MOCK_RESULTS}
                        disabled={!form.isChecked}
                    />
                    <Selector
                        label="面試等待時間"
                        value={form.interview.pendingTime}
                        onValueChange={(value) =>
                            setForm((prev) => ({
                                ...prev,
                                interview: { ...prev.interview, pendingTime: value },
                            }))
                        }
                        options={MOCK_DURATIONS}
                        disabled={!form.isChecked}
                    />
                </div>
            </div>

            <div className="self-end">
                <Button type="submit">下一步</Button>
            </div>
        </form>
    );
}
