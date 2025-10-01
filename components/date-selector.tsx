"use client";

import { useState, useRef, useMemo, useEffect } from "react";

import Button from "@/components/button";

import ArrowLeftIcon from "@/components/icons/arrow-left.svg";
import ArrowRightIcon from "@/components/icons/arrow-right.svg";
import CalenderIcon from "@/components/icons/calendar.svg";

interface DateValue {
    year: number | null;
    month: number | null;
}

interface DateSelectorProps {
    value: DateValue;
    onValueChange: (value: DateValue) => void;
}

export default function DateSelector(props: DateSelectorProps) {
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 5;
    const selectedYear = props.value.year ?? currentYear;

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showYears, setShowYears] = useState(false);

    const selectorRef = useRef<HTMLDivElement>(null);

    const formattedDate = useMemo(() => {
        if (props.value.year == null || props.value.month == null) {
            return "";
        }

        return `${props.value.year}年${props.value.month}月`;
    }, [props.value.year, props.value.month]);

    const handleYearNavigation = (offset: number) => {
        props.onValueChange({
            year: selectedYear + offset,
            month: props.value.month,
        });
    };

    const handleYearSelect = (year: number) => {
        props.onValueChange({
            year,
            month: props.value.month,
        });

        setShowYears(false);
    };

    const handleMonthSelect = (month: number) => {
        props.onValueChange({ year: selectedYear, month });
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
            <label htmlFor="date-selector" className="text-gray-600">
                <span>面試時間</span>
                <sup className="text-teal-500">*</sup>
            </label>
            <div className="relative">
                <input
                    id="date-selector"
                    name="date-selector"
                    value={formattedDate}
                    // required
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    // readOnly 會不能觸發 required，因此設置 onKeyDown, onInput 不讓使用者輸入
                    onKeyDown={(e) => e.preventDefault()}
                    onInput={(e) => e.preventDefault()}
                    autoComplete="off"
                    placeholder="選擇年份、月份"
                    className="peer w-full cursor-pointer rounded-full border border-gray-400 bg-white p-3 pr-10 caret-transparent focus:border-teal-500 focus:outline-none"
                />

                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 peer-focus:text-teal-500">
                    <CalenderIcon className="h-6 w-6" />
                </span>
            </div>

            {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-400 bg-white p-5 shadow-lg">
                    <div className="mb-5 flex items-center justify-between">
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => handleYearNavigation(-1)}
                            className={showYears || selectedYear <= minYear ? "invisible" : ""}
                        >
                            <ArrowLeftIcon className="h-6 w-6" />
                        </Button>

                        <Button type="button" variant="ghost" onClick={() => setShowYears(!showYears)}>
                            {showYears ? `${minYear}-${currentYear}` : `${selectedYear}`}
                        </Button>

                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => handleYearNavigation(1)}
                            className={showYears || selectedYear >= currentYear ? "invisible" : ""}
                        >
                            <ArrowRightIcon className="h-6 w-6" />
                        </Button>
                    </div>

                    {showYears ? (
                        <div className="grid grid-cols-3 gap-3 text-gray-600">
                            {Array.from({ length: 6 }, (_, i) => {
                                return (
                                    <Button
                                        key={minYear + i}
                                        type="button"
                                        variant="tertiary"
                                        size="sm"
                                        onClick={() => handleYearSelect(minYear + i)}
                                        autoFocus={selectedYear == minYear + i}
                                    >
                                        {minYear + i}
                                    </Button>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="grid grid-cols-4 gap-3 text-gray-600">
                            {Array.from({ length: 12 }, (_, i) => (
                                <Button
                                    key={i + 1}
                                    type="button"
                                    variant="tertiary"
                                    size="sm"
                                    onClick={() => handleMonthSelect(i + 1)}
                                    // TODO: 當 handleYearNavigation 執行時，autoFocus會失效
                                    autoFocus={props.value.month == i + 1}
                                >
                                    {i + 1}月
                                </Button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
