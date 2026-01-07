"use client";

import clsx from "clsx";
import { useState, useRef, useMemo, useEffect } from "react";

import SubmitIcon from "/components/icons/submit.svg";

import { useParams } from "next/navigation";
import { CHATS, type Chat } from "@/mocks/chats";

const MAX_HEIGHT = 160;

export default function ChatPage() {
    const params = useParams();
    const recordId = params.id;

    const [selectedChat, setSelectedChat] = useState<Chat | null>();
    const [value, setValue] = useState("");
    const [textareaHeight, setTextareaHeight] = useState(0);

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        // TODO: call API
        const chat = CHATS.find((c) => c.id === recordId);

        setSelectedChat(chat);
    }, [recordId]);

    const isSubmitDisabled = useMemo(() => {
        return value.trim() == "";
    }, [value]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // TODO: call API
        // TODO: 儲存對話紀錄並生成回答

        setValue("");
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            const updatedHeight = Math.min(textareaRef.current.scrollHeight, MAX_HEIGHT);
            textareaRef.current.style.height = `${updatedHeight}px`;
            setTextareaHeight(updatedHeight);
        }
    }, [value]);

    if (!selectedChat) {
        return null;
    }

    return (
        <div className="relative flex h-full flex-1 flex-col">
            <div className="mb-20 overflow-y-auto">
                <div className="py-10" style={{ paddingBottom: `${textareaHeight + 48}px` }}>
                    <div className="mx-auto w-[704px]">
                        <div className="flex flex-col gap-10 whitespace-pre-line text-gray-600">
                            {selectedChat.record.messages.map((item, index) => (
                                <div key={index} className="flex flex-col gap-10">
                                    <div className="ml-auto flex w-fit max-w-[480px] flex-col gap-2 rounded-3xl bg-gray-100 px-4 py-2">
                                        {item.options.map((item, index) => {
                                            return (
                                                <span
                                                    key={index}
                                                    className="w-fit rounded-full bg-teal-100 px-2 py-1 text-sm text-teal-600"
                                                >
                                                    {item}
                                                </span>
                                            );
                                        })}

                                        {item.content && <div>{item.content}</div>}
                                    </div>

                                    <div className="flex flex-col gap-3 text-gray-600">
                                        <div>{item.response}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 w-full pb-6">
                <div className="relative mx-auto flex w-[704px] flex-col rounded-3xl border border-gray-400 bg-white p-3 focus-within:border-teal-500">
                    <textarea
                        ref={textareaRef}
                        placeholder="詢問任何面試相關問題"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full resize-none bg-transparent pr-10 focus:outline-none"
                        rows={1}
                    />

                    <button
                        type="submit"
                        disabled={isSubmitDisabled}
                        onClick={handleSubmit}
                        className="absolute bottom-2 right-3 disabled:pointer-events-none"
                    >
                        <SubmitIcon
                            className={clsx("h-8 w-8 rounded-full p-1", {
                                "pointer-events-none bg-gray-100 text-gray-200": isSubmitDisabled,
                                "cursor-pointer bg-teal-950 text-gray-50 hover:bg-teal-400 active:bg-teal-500":
                                    !isSubmitDisabled,
                            })}
                        />
                    </button>
                </div>

                <p className="pt-2 text-center text-sm text-gray-400">ChatJOB 可能會出錯。請查核重要資訊。</p>
            </div>
        </div>
    );
}
