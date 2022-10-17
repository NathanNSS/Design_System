import { ReactNode } from 'react'
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx"

export interface InterfaceTitle {
    children: ReactNode;
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

export function Title({ children, asChild, size = 'md' }: InterfaceTitle) {
    const Comp = asChild ? Slot : "h2"
    return (
        <Comp className={
            clsx("font-sans font-bold text-white-800",
                {
                    "text-lg": size === "sm",
                    "text-xl": size === "md",
                    "text-2xl": size === "lg",
                }
            )}
        >
            {children}
        </Comp>
    )
}