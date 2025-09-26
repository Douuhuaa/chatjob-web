import React from "react";
import clsx from "clsx";

interface SelectorProps {
    label: string;
    value: string;
    onValueChange: (value: string) => void;
    options: string[];
    placeholderText?: string;
}

export default function Selector(props: SelectorProps) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={`general-selector-${props.label}`} className="text-gray-600">
                {props.label}
            </label>
            <select
                id={`general-selector-${props.label}`}
                value={props.value}
                onChange={(e) => props.onValueChange(e.target.value)}
                className={clsx(
                    "rounded-lg border p-2 focus:border-teal-500 focus:outline-none",
                    { "text-gray-400": !props.value }, // 當 value 為空時，文字顯示為灰色
                )}
            >
                <option value="">{props.placeholderText || "請選擇"}</option>
                {props.options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
