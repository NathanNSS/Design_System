
import React,{ ReactNode} from 'react'
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx"

export interface InterfaceButton {
    children: ReactNode;
    asChild?:boolean;
}

export function Button({ children, asChild }: InterfaceButton) {
    const Comp = asChild ? Slot : "button"
    return (
        <Comp className={
            clsx("py-4 px-3  bg-cyan-500 rounded font-semibold text-black-1000 text-sm w-full transition-colors hover:bg-cyan-600 focus:ring-2 ring-white-800")}
        >
            {children}
        </Comp>
    )
}