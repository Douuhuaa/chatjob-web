"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import clsx from "clsx";

import SearchField from "@/components/search-field";
import CloseIcon from "@/components/icons/close.svg";
import SubmitIcon from "@/components/icons/submit.svg";

import { COMPANIES, type Company } from "@/mocks/companies";
import { SUGGEST_CHATS } from "@/constants/suggest-chats";

export default function NewChatForm() {
    const [companies, setCompanies] = useState<Company[] | null>(null);

    const [form, setForm] = useState({
        company: "",
        dept: "",
        jobTitle: "",
        chatInput: "",
        chatSelect: [] as string[],
    });

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const companyFieldRef = useRef<HTMLInputElement>(null);

    const companyOptions = useMemo(() => {
        if (!companies) {
            return null;
        }

        return companies.map((item) => item.name);
    }, [companies]);

    const selectedCompany = useMemo(() => {
        if (!companies) {
            return null;
        }

        return companies.find((item) => item.name === form.company);
    }, [companies, form.company]);

    const deptOptions = useMemo(() => {
        if (!selectedCompany) {
            return null;
        }

        return selectedCompany.departments.map((item) => item.name);
    }, [selectedCompany]);

    const jobOptions = useMemo(() => {
        if (!selectedCompany) {
            return null;
        }

        const selectedDept = selectedCompany.departments.find((item) => item.name === form.dept);

        if (selectedDept) {
            return selectedDept.positions;
        } else {
            return selectedCompany.positions;
        }
    }, [form.dept, selectedCompany]);

    const chatOptions = useMemo(() => {
        return SUGGEST_CHATS.filter((item) => !form.chatSelect.includes(item));
    }, [SUGGEST_CHATS, form.chatSelect]);

    const isSubmitDisabled = useMemo(() => {
        if (!form.company.trim() || !form.jobTitle.trim()) {
            return true;
        }

        if (!form.chatInput.trim() && !form.chatSelect.length) {
            return true;
        }

        return false;
    }, [form]);

    useEffect(() => {
        const exe = async () => {
            // TODO: 串 API
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setCompanies(COMPANIES);
        };

        exe();
    }, []);

    useEffect(() => {
        const textarea = textareaRef.current;

        if (textarea) {
            textarea.style.height = "auto";

            const scrollHeight = textarea.scrollHeight;
            const updatedHeight = Math.min(scrollHeight, 160);

            textarea.style.height = `${updatedHeight}px`;
            textarea.style.overflowY = scrollHeight > 160 ? "auto" : "hidden";
        }
    }, [form.chatInput]);

    const handleChatOptions = (question: string) => {
        const isSelected = form.chatSelect.includes(question);

        const nextChatSelect = isSelected
            ? form.chatSelect.filter((item) => item !== question)
            : [...form.chatSelect, question];

        setForm({
            ...form,
            chatSelect: nextChatSelect,
        });
    };

    const handleDisabledClick = () => {
        if (!companyFieldRef.current) {
            return;
        }

        companyFieldRef.current.focus();
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        // TODO: 新增chat -> 更新chat-list -> 直接導連到chat/[id]

        setForm({
            company: "",
            dept: "",
            jobTitle: "",
            chatInput: "",
            chatSelect: [],
        });
    };

    return (
        <div className="flex w-[704px] flex-col justify-between py-24">
            <div className="flex flex-col gap-8">
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
                            ref={companyFieldRef}
                            label="公司"
                            value={form.company}
                            onValueChange={(value) =>
                                setForm((prev) => ({ ...prev, company: value, dept: "", jobTitle: "" }))
                            }
                            placeholder="搜尋公司"
                            options={companyOptions}
                            required={true}
                            isLoading={!companies}
                        />
                        <SearchField
                            label="部門/團隊"
                            value={form.dept}
                            onValueChange={(value) => setForm((prev) => ({ ...prev, dept: value, jobTitle: "" }))}
                            placeholder={form.company ? "搜尋部門/團隊" : "請先選擇公司"}
                            options={deptOptions}
                            disabled={!form.company}
                            onClick={!form.company ? handleDisabledClick : undefined}
                        />
                        <SearchField
                            label="職務"
                            value={form.jobTitle}
                            onValueChange={(value) => setForm((prev) => ({ ...prev, jobTitle: value }))}
                            placeholder={form.company ? "搜尋職務" : "請先選擇公司"}
                            options={jobOptions}
                            required={true}
                            disabled={!form.company}
                            onClick={!form.company ? handleDisabledClick : undefined}
                        />
                    </div>

                    <div
                        className={clsx(
                            "relative flex w-full flex-col rounded-3xl border border-gray-400 bg-white p-3 focus-within:border-teal-500",
                            form.chatSelect.length > 0 && "gap-2",
                        )}
                    >
                        <div className="flex flex-wrap gap-1">
                            {form.chatSelect.length > 0 &&
                                form.chatSelect.map((item, index) => (
                                    <span
                                        key={index}
                                        className="flex items-center gap-1 rounded-full bg-teal-100 px-2 py-1 text-sm text-teal-600"
                                    >
                                        {item}

                                        <button
                                            type="button"
                                            onClick={() => handleChatOptions(item)}
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
                            value={form.chatInput}
                            onChange={(e) => setForm((prev) => ({ ...prev, chatInput: e.target.value }))}
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
                    {chatOptions.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleChatOptions(item)}
                            type="button"
                            className={clsx(
                                "w-40 flex-shrink-0 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm transition-colors",
                                "hover:border-teal-300 hover:bg-teal-50 hover:text-teal-400",
                                "active:border-teal-500 active:bg-teal-50 active:text-teal-500",
                            )}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
