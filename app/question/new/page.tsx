"use client";

import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import clsx from "clsx";

import SearchField from "@/components/search-field";

import CloseIcon from "@/components/icons/close.svg";
import SubmitIcon from "@/components/icons/submit.svg";

import { MOCK_COMPANIES, MOCK_QUESTIONS, type Company } from "@/constants/mock-company-options";

const MAX_HEIGHT = 160;

export default function QuestionNewPage() {
    const [form, setForm] = useState({
        company: "",
        department: "",
        position: "",
        questionInput: "",
        questionSelect: [] as string[],
    });
    const [allCompanies, setAllCompanies] = useState<Company[]>([]);
    const [allQuestions, setAllQuestions] = useState<string[]>([]);

    const [companyOptions, setCompanyOptions] = useState<string[]>([]);
    const [departmentOptions, setDepartmentOptions] = useState<string[]>([]);
    const [positionOptions, setPositionOptions] = useState<string[]>([]);

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const fieldRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // TODO: call API
        setAllCompanies(MOCK_COMPANIES);
        setAllQuestions(MOCK_QUESTIONS);
    }, []);

    useEffect(() => {
        setCompanyOptions(allCompanies.map(({ company }) => company));
    }, [allCompanies]);

    const questionOptions = useMemo(
        () => allQuestions.filter((q) => !form.questionSelect.includes(q)),
        [allQuestions, form.questionSelect],
    );

    const isSubmitDisabled = useMemo(
        () =>
            !form.company.trim() || !form.position.trim() || !(form.questionInput.trim() || form.questionSelect.length),
        [form],
    );

    const handleDisabledFieldClick = () => {
        fieldRef.current?.focus();
    };

    const toggleQuestionSelect = useCallback((question: string) => {
        setForm((prev) => {
            const isSelected = prev.questionSelect.includes(question);
            const newQuestionSelect = isSelected
                ? prev.questionSelect.filter((q) => q !== question)
                : [...prev.questionSelect, question];

            return {
                ...prev,
                questionSelect: newQuestionSelect,
            };
        });
    }, []);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        // TODO: call API
        // TODO: 新增提問紀錄並且直接導連到該提問詳情

        setForm({
            company: "",
            department: "",
            position: "",
            questionInput: "",
            questionSelect: [],
        });
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            const updatedHeight = Math.min(textareaRef.current.scrollHeight, MAX_HEIGHT);
            textareaRef.current.style.height = `${updatedHeight}px`;
        }
    }, [form.questionInput]);

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

    return (
        <div className="flex w-[704px] flex-col justify-between py-24">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5 text-center">
                    <h1 className="text-3xl font-medium text-gray-800">輸入你的面試相關問題</h1>
                    <p className="text-sm text-gray-400">
                        選公司、選職務，輸入問題或點選熱門問題
                        <br />
                        ChatJOB 秒整理面試心得，立即回覆你！
                    </p>
                </div>

                <form className="flex flex-col gap-5" onSubmit={submit}>
                    <div className="flex gap-5">
                        <SearchField
                            ref={fieldRef}
                            label="公司"
                            value={form.company}
                            onValueChange={(value) => setForm((prev) => ({ ...prev, company: value }))}
                            placeholder="搜尋公司"
                            options={companyOptions}
                            required={true}
                        />
                        <SearchField
                            label="部門/團隊"
                            value={form.department}
                            onValueChange={(value) => setForm((prev) => ({ ...prev, department: value }))}
                            placeholder={form.company ? "搜尋部門/團隊" : "請先選擇公司"}
                            options={departmentOptions}
                            disabled={!form.company}
                            onClick={!form.company ? handleDisabledFieldClick : undefined}
                        />
                        <SearchField
                            label="職務"
                            value={form.position}
                            onValueChange={(value) => setForm((prev) => ({ ...prev, position: value }))}
                            placeholder={form.company ? "搜尋職務" : "請先選擇公司"}
                            options={positionOptions}
                            required={true}
                            disabled={!form.company}
                            onClick={!form.company ? handleDisabledFieldClick : undefined}
                        />
                    </div>

                    <div
                        className={clsx(
                            "relative flex w-full flex-col rounded-3xl border border-gray-400 bg-white p-3 focus-within:border-teal-500",
                            form.questionSelect.length > 0 && "gap-2",
                        )}
                    >
                        <div className="flex flex-wrap gap-1">
                            {form.questionSelect.length > 0 &&
                                form.questionSelect.map((question, index) => (
                                    <span
                                        key={index}
                                        className="flex items-center gap-1 rounded-full bg-teal-100 px-2 py-1 text-sm text-teal-600"
                                    >
                                        {question}

                                        <button
                                            type="button"
                                            onClick={() => toggleQuestionSelect(question)}
                                            className="text-teal-300 hover:text-teal-600"
                                        >
                                            <CloseIcon className="h-5 w-5" />
                                        </button>
                                    </span>
                                ))}
                        </div>

                        <textarea
                            ref={textareaRef}
                            placeholder="輸入問題"
                            value={form.questionInput}
                            onChange={(e) => setForm((prev) => ({ ...prev, questionInput: e.target.value }))}
                            className="w-full resize-none bg-transparent pr-10 focus:outline-none"
                            rows={1}
                        />

                        <button type="submit" disabled={isSubmitDisabled} className="absolute bottom-2 right-3">
                            <SubmitIcon
                                className={clsx("h-8 w-8 rounded-full p-1", {
                                    "pointer-events-none bg-gray-100 text-gray-200": isSubmitDisabled,
                                    "cursor-pointer bg-teal-950 text-gray-50 hover:bg-teal-400 active:bg-teal-500":
                                        !isSubmitDisabled,
                                })}
                            />
                        </button>
                    </div>
                </form>
            </div>

            <div className="flex flex-col gap-1">
                <p className="text-gray-600">常問問題</p>

                <div className="flex w-full flex-nowrap gap-3 overflow-x-auto text-gray-500">
                    {questionOptions.map((question, index) => (
                        <button
                            key={index}
                            onClick={() => toggleQuestionSelect(question)}
                            type="button"
                            className={clsx(
                                "w-40 flex-shrink-0 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm transition-colors",
                                "hover:border-teal-300 hover:bg-teal-50 hover:text-teal-400",
                                "active:border-teal-500 active:bg-teal-50 active:text-teal-500",
                            )}
                        >
                            {question}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
