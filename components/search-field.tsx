import { useState, forwardRef, useMemo } from "react";
import clsx from "clsx";

import SearchIcon from "./icons/search.svg";
import AddIcon from "./icons/add.svg";

interface Props {
    label: string;
    value: string;
    onValueChange: (value: string) => void;
    placeholder: string;
    options: string[];
    required?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

const SearchField = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isComposing, setIsComposing] = useState(false);

    const filteredOptions = useMemo(() => {
        if (!props.value) {
            return props.options;
        }
        return props.options.filter((option) => option.toLowerCase().includes(props.value.toLowerCase()));
    }, [props.options, props.value]);

    const handleOptionClick = (item: string) => {
        props.onValueChange(item);
        setIsDropdownOpen(false);
    };

    const handleAddClick = () => {
        setIsDropdownOpen(false);

        // TODO:打開新增項目的dialog
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onValueChange(e.target.value);

        if (!isComposing) {
            setIsDropdownOpen(true);
        }
    };

    const handleFocus = () => {
        if (!props.disabled) {
            setIsDropdownOpen(true);
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            if (props.value && !props.options.includes(props.value)) {
                props.onValueChange("");
            }
            setIsDropdownOpen(false);
        }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (props.disabled) {
            e.preventDefault();
        }
    };

    return (
        <div
            className="relative w-full"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseDown={handleMouseDown}
            onClick={() => props.onClick?.()}
        >
            <label htmlFor={props.label} className="text-gray-600">
                {props.label}
                {props.required && <sup className="text-teal-500">*</sup>}
            </label>

            <div className="relative">
                <input
                    type="text"
                    id={props.label}
                    name={props.label}
                    value={props.value}
                    ref={ref}
                    onChange={handleChange}
                    onCompositionStart={() => setIsComposing(true)}
                    onCompositionEnd={() => setIsComposing(false)}
                    autoComplete="off"
                    placeholder={props.placeholder}
                    readOnly={props.disabled}
                    // required={props.required}
                    className={clsx(
                        "peer w-full rounded-full border border-gray-400 bg-white p-3 pr-10 focus:border-teal-500 focus:outline-none",
                    )}
                />

                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 peer-focus:text-teal-500">
                    <SearchIcon className="h-6 w-6" />
                </span>
            </div>

            {!isComposing && isDropdownOpen && !props.disabled && (
                <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-400 bg-white shadow-lg">
                    <div className="flex max-h-60 flex-col gap-1 overflow-auto p-2">
                        {filteredOptions.map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => handleOptionClick(item)}
                                className="rounded-lg px-2 py-1.5 text-left text-gray-600 hover:bg-gray-100 active:bg-teal-100"
                            >
                                {item}
                            </button>
                        ))}

                        <button
                            type="button"
                            onClick={handleAddClick}
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
});

SearchField.displayName = "SearchField";

export default SearchField;
