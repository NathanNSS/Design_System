import * as CheckboxUi from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { Text } from "../Text/Text";

export interface InterfaceCheckbox {
    text?: string;
    textSize?:  "sm" | "md" | "lg";
    className?: string;
}

export function Checkbox({ text, className, textSize = 'sm'}: InterfaceCheckbox) {
    return (
        <div className="flex items-center  justify-start gap-2">
            <CheckboxUi.Root className="flex items-center justify-center w-6 h-6 p-[2] bg-black-700 rounded" id="checkbox" aria-labelledby="checkbox-arial">
                <CheckboxUi.Indicator asChild>
                    <Check weight="bold" className="w-5 h-5 text-cyan-600" />
                </CheckboxUi.Indicator>
            </CheckboxUi.Root>
            {text ?
                <Text size={textSize} asChild className={`cursor-pointer ${className ? className : ""}`}>
                    <label htmlFor="checkbox" id="checkbox-arial">{text}</label>
                </Text>
            : ""}
        </div>
    )
}