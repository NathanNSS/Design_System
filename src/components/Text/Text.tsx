import { ReactNode} from 'react'
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx"

export interface InterfaceText {
    children: ReactNode;
    size?: "sm" | "md" | "lg";
    asChild?:boolean;
}

export function Text({ children, asChild ,size = 'md'}: InterfaceText) {
    const Comp = asChild ? Slot : "span"
    return (
        <Comp className={
            clsx("font-sans text-white-800",
                {
                    "text-xs": size === "sm",
                    "text-sm": size === "md",
                    "text-md": size === "lg",
                }
            )}
        >
            {children}
        </Comp>
    )
}