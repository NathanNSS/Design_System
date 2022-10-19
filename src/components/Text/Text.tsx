import { ReactNode} from 'react'
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx"

export interface InterfaceText {
    children: ReactNode;
    size?: "sm" | "md" | "lg";
    asChild?:boolean;
    className?:string;
}

export function Text({ children, asChild, className, size = 'md'}: InterfaceText) {
    const Comp = asChild ? Slot : "span"
    return (
        <Comp className={
            clsx("text-white-800 font-sans",
                {
                    "text-xs": size === "sm",
                    "text-sm": size === "md",
                    "text-md": size === "lg",
                },
                className,
            )}
        >
            {children}
        </Comp>
    )
}