import clsx from "clsx";
import CheckIcon from "components/icons/check.svg";

import { STEPS } from "constants/steps";

interface StepBarProps {
    currentStep: number;
}

export default function StepBar(props: StepBarProps) {
    return (
        <div className="flex px-10">
            {STEPS.map((step, index) => {
                const isLastStep = index >= STEPS.length - 1;
                const isCompletedStep = step.id <= props.currentStep;

                return (
                    <div
                        key={step.id}
                        className={clsx("flex items-center", {
                            "flex-1": !isLastStep,
                        })}
                    >
                        <div
                            className={clsx("flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full", {
                                "bg-teal-400 text-gray-50": isCompletedStep,
                                "bg-gray-100 text-gray-300": !isCompletedStep,
                            })}
                        >
                            {isLastStep ? <CheckIcon className="h-5 w-5" /> : step.id}
                        </div>

                        <div
                            className={clsx("px-2 text-sm font-semibold", {
                                "text-teal-400": isCompletedStep,
                                "text-gray-200": !isCompletedStep,
                            })}
                        >
                            {step.title}
                        </div>

                        {!isLastStep && (
                            <div
                                className={clsx("mr-2 flex-auto border-t-2 border-dotted", {
                                    "text-teal-400": isCompletedStep,
                                    "text-gray-200": !isCompletedStep,
                                })}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
