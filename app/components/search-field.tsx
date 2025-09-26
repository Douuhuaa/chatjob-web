import { useState, useRef, useMemo, useCallback, useEffect } from "react";

import SearchIcon from "./icons/search.svg";
import AddIcon from "./icons/add.svg";

interface SearchFieldProps {
    label: string;
    placeholder: string;
    value: string;
    onValueChange: (value: string) => void;
    options: string[];
    required?: boolean;
}

export default function SearchField(props: SearchFieldProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isComposing, setIsComposing] = useState(false);

    const searchRef = useRef<HTMLDivElement>(null);

    const filteredOptions = useMemo(() => {
        if (!props.value) {
            return [];
        }

        return props.options.filter((item) =>
            item.toLowerCase().includes(props.value.toLowerCase()),
        );
    }, [props.options, props.value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onValueChange(e.target.value);

        if (isComposing) {
            setIsDropdownOpen(false);
        } else {
            setIsDropdownOpen(e.target.value.trim() !== "");
        }
    };

    const handleFilteredOptionClick = useCallback(
        (item: string) => {
            props.onValueChange(item);
            setIsDropdownOpen(false);
        },
        [props.onValueChange],
    );

    const handleAddButtonClick = useCallback(() => {
        props.onValueChange("");
        setIsDropdownOpen(false);
        // TODO:打開新增項目的dialog
    }, [props.onValueChange]);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);

                if (!props.options.includes(props.value)) {
                    props.onValueChange("");
                }
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [searchRef, props.options, props.value]);

    return (
        <div className="relative w-full" ref={searchRef}>
            <label htmlFor={props.label} className="text-gray-600">
                {props.label}
                {props.required && <sup className="text-teal-500">*</sup>}
            </label>

            <div className="relative">
                <input
                    type="text"
                    id={props.label}
                    name={props.label}
                    required={props.required}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={handleChange}
                    onCompositionStart={() => setIsComposing(true)}
                    onCompositionEnd={() => setIsComposing(false)}
                    autoComplete="off"
                    className="peer w-full rounded-full border border-gray-400 bg-white p-3 pr-10 focus:border-teal-500 focus:outline-none"
                />

                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 peer-focus:text-teal-500">
                    <SearchIcon className="h-6 w-6" />
                </span>
            </div>

            {!isComposing && isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-400 bg-white shadow-lg">
                    <div className="flex max-h-60 flex-col gap-1 overflow-auto p-2">
                        {filteredOptions.length > 0 &&
                            filteredOptions.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleFilteredOptionClick(item)}
                                    className="rounded-lg px-2 py-1.5 text-left text-gray-600 hover:bg-gray-100 active:bg-teal-100"
                                >
                                    {item}
                                </button>
                            ))}

                        <button
                            onClick={handleAddButtonClick}
                            className="flex items-center rounded-lg px-2 py-1.5 text-teal-500 hover:text-teal-600 active:text-teal-700"
                        >
                            <AddIcon className="h-4 w-4" />
                            <p>新增{props.label}</p>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
