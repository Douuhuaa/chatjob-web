"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Dialog({ isOpen, onClose, children }: DialogProps) {
    const dialogRef = useRef<HTMLDivElement>(null);

    // Close dialog on "Escape" key press
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    // Focus on the dialog when it opens
    useEffect(() => {
        if (isOpen && dialogRef.current) {
            dialogRef.current.focus();
        }
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div
            ref={dialogRef}
            className="fixed inset-0 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            tabIndex={-1} // Make the div focusable
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-gray-800/60" onClick={onClose} />

            {/* Dialog Content */}
            <div className="relative z-10 w-full max-w-lg">
                {children}
            </div>
        </div>,
        document.body
    );
}
