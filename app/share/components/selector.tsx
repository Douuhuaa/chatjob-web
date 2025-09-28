"use client";

import { useState, useRef, useEffect } from "react";

import ArrowDownIcon from "@/components/icons/arrow-down.svg";

interface SelectorProps {
    label: string;
    value: string;
    onValueChange: (value: string) => void;
    options: string[];
}

export default function Selector(props: SelectorProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const selectorRef = useRef<HTMLDivElement>(null);

    const handleOptionClick = (value: string) => {
        props.onValueChange(value);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [selectorRef]);

    return (
        <div className="relative w-full" ref={selectorRef}>
            <label htmlFor={props.label} className="text-gray-600">
                {props.label}
            </label>

            <div className="relative">
                <input
                    type="text"
                    id={props.label}
                    name={props.label}
                    placeholder="選擇"
                    value={props.value}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    // readOnly 會不能觸發 required，因此設置 onKeyDown, onInput 不讓使用者輸入
                    onKeyDown={(e) => e.preventDefault()}
                    onInput={(e) => e.preventDefault()}
                    autoComplete="off"
                    className="peer w-full cursor-pointer rounded-full border border-gray-400 bg-white p-3 pr-10 caret-transparent focus:border-teal-500 focus:outline-none"
                />

                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 peer-focus:text-teal-500">
                    <ArrowDownIcon className="h-6 w-6" />
                </span>
            </div>

            {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-400 bg-white shadow-lg">
                    <div className="flex max-h-60 flex-col gap-1 overflow-auto p-2">
                        {props.options.map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => handleOptionClick(item)}
                                className="rounded-lg px-2 py-1.5 text-left text-gray-600 hover:bg-gray-100 active:bg-teal-100"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
