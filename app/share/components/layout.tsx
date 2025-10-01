import React from "react";

import StepBar from "./step-bar";

import SidePanel from "components/side-panel";

import { STEPS } from "constants/steps";

interface LayoutProps {
    step: number;
    children: React.ReactNode;
    buttons: React.ReactNode;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Layout(props: LayoutProps) {
    const currentStep = STEPS.find((s) => s.id == props.step);

    return (
        <div className="flex h-full">
            <SidePanel />
            <div className="flex flex-1 items-center justify-center">
                <div className="flex h-5/6 w-[704px] flex-col justify-between">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-5 text-center">
                            <h1 className="text-3xl font-medium text-gray-800">分享你的面試心得</h1>
                            <p className="whitespace-pre-line text-sm text-gray-400">
                                {currentStep.description}
                            </p>
                        </div>

                        <StepBar currentStep={props.step} />

                        <form
                            className="flex w-full flex-col items-center gap-5"
                            onSubmit={props.onSubmit && props.onSubmit}
                        >
                            {props.children}
                        </form>
                    </div>

                    <div className="flex w-full justify-end gap-2">{props.buttons}</div>
                </div>
            </div>
        </div>
    );
}
