import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";



export interface InterfaceInputRoot {
    children: ReactNode
}

export interface InterfaceInputIcon {
    icon: ReactNode;
}

export interface InterfaceInput extends InputHTMLAttributes<HTMLInputElement> { }

export function InputRoot(props: InterfaceInputRoot) {

    return (
        <div className="flex h-12 items-center gap-3 py-4 px-3 rounded bg-black-700 w-full  focus-within:ring-2 ring-cyan-500">
            {props.children}
        </div>
    )
}

export function InputIcon({icon}: InterfaceInputIcon) {

    return (
        <Slot className="w-6 h-6 text-gray-900 focus-within:text-cyan-500">
            {icon}
        </Slot>
    )
}

export function InputDefault(props: InterfaceInput) {

    return (
        <input className="flex-1 bg-transparent  text-white-800 text-xs outline-none placeholder:text-gray-900"
            {...props}
        />
    )
}

export const Input = {
    Root: InputRoot,
    InputDefault: InputDefault,
    Icon: InputIcon
}