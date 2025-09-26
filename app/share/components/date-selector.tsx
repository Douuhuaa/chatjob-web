import React from "react";

import Button from "../../components/button";

import CalenderIcon from "./icons/calendar.svg";

interface DateSelectorProps {
    value: string;
    onValueChange: (value: string) => void;
}

export default function DateSelector(props: DateSelectorProps) {
    return (
        <div className="relative w-full">
            <label htmlFor="date-selector" className="text-gray-600">
                面試時間
            </label>
            <div className="relative">
                <input
                    id="date-selector"
                    name="date-selector"
                    placeholder="選擇年份、月份"
                    value={props.value}
                    onChange={(e) => props.onValueChange(e.target.value)}
                    className="peer w-full rounded-full border border-gray-400 bg-white p-3 pr-10 focus:border-teal-500 focus:outline-none"
                />

                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 peer-focus:text-teal-500">
                    <CalenderIcon className="h-6 w-6" />
                </span>
            </div>
            <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-400 bg-white p-5 shadow-lg">
                <div className="mb-5">年份選擇</div>
                <div className="flex flex-col gap-5">
                    <div className="flex justify-around text-gray-600">
                        <Button type="button" variant="tertiary" size="sm">
                            1月
                        </Button>
                        <Button type="button" variant="tertiary" size="sm">
                            2月
                        </Button>
                        <Button type="button" variant="tertiary" size="sm">
                            3月
                        </Button>
                        <Button type="button" variant="tertiary" size="sm">
                            4月
                        </Button>
                    </div>
                    <div className="flex justify-around text-gray-600">
                        <Button type="button" variant="tertiary" size="sm">
                            5月
                        </Button>
                        <Button type="button" variant="tertiary" size="sm">
                            6月
                        </Button>
                        <Button type="button" variant="tertiary" size="sm">
                            7月
                        </Button>
                        <Button type="button" variant="tertiary" size="sm">
                            8月
                        </Button>
                    </div>
                    <div className="flex justify-around text-gray-600">
                        <Button type="button" variant="tertiary" size="sm">
                            9月
                        </Button>
                        <Button type="button" variant="tertiary" size="sm">
                            10月
                        </Button>
                        <Button type="button" variant="tertiary" size="sm">
                            11月
                        </Button>
                        <Button type="button" variant="tertiary" size="sm">
                            12月
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
