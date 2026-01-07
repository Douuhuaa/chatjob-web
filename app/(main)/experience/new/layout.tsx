"use client";

import React from "react";
import { usePathname } from "next/navigation";

import StepBar from "./_components/step-bar";

import { STEPS } from "@/constants/steps";

interface LayoutProps {
    children: React.ReactNode;
}

export default function ExperienceNewLayout(props: LayoutProps) {
    const pathname = usePathname();
    const currentStep = STEPS.find((s) => s.path === pathname);
    const step = currentStep ? currentStep.id : 1;

    return (
        <div className="flex w-[704px] flex-col justify-between py-24">
            <div className="mb-10 flex flex-col gap-5 text-center">
                <h1 className="text-3xl font-medium text-gray-800">分享你的面試心得</h1>
                <p className="whitespace-pre-line text-sm text-gray-400">{currentStep?.description}</p>

                <StepBar currentStep={step} />
            </div>

            <div className="flex-1">{props.children}</div>
        </div>
    );
}
