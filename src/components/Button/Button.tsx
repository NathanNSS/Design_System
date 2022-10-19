
import React,{ ButtonHTMLAttributes, ReactNode} from 'react'
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx"

export interface InterfaceButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?:boolean;
    className?:string;
}

export function Button({ children, asChild, className, ...props }: InterfaceButton) {
    const Comp = asChild ? Slot : "button"
    return (
        <Comp className={
            clsx("py-3 px-4  bg-cyan-500 rounded font-semibold text-black-1000 text-sm w-full transition-colors hover:bg-cyan-600 focus:ring-2 ring-white-800", className)
        }
        {...props}
        >
            {children}
        </Comp>
    )
}