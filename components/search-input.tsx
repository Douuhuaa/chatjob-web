"use client";

import { useState, useEffect } from "react";
import SearchIcon from "@/components/icons/search.svg";

interface Props {
    value: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export default function SearchInput({ value, onValueChange, placeholder, className }: Props) {
    const [displayValue, setDisplayValue] = useState(value);
    const [isComposing, setIsComposing] = useState(false);

    useEffect(() => {
        if (!isComposing) {
            setDisplayValue(value);
        }
    }, [value, isComposing]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayValue(e.target.value);
        if (!isComposing) {
            onValueChange(e.target.value);
        }
    };

    const handleCompositionStart = () => {
        setIsComposing(true);
    };

    const handleCompositionEnd = (e: React.CompositionEvent<HTMLInputElement>) => {
        setIsComposing(false);
        onValueChange(e.currentTarget.value);
    };

    return (
        <div className={`relative flex w-full items-center ${className}`}>
            <input
                type="text"
                value={displayValue}
                onChange={handleChange}
                onCompositionStart={handleCompositionStart}
                onCompositionEnd={handleCompositionEnd}
                placeholder={placeholder}
                className="w-full rounded-full border border-gray-400 bg-gray-50 p-3 pr-10 focus:border-teal-500 focus:outline-none"
            />

            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 peer-focus:text-teal-500">
                <SearchIcon className="h-6 w-6" />
            </span>
        </div>
    );
}
