import { InterfaceInputRoot, Input } from "./Input";
import { Meta, StoryObj } from "@storybook/react"
import { Envelope } from 'phosphor-react'

export default {
    title: "Components/Input",
    component: Input.Root,
    args: {
        children: [
            <Input.Icon icon={<Envelope />} />,
            <Input.InputDefault placeholder="Digite ai *-*" />,
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<InterfaceInputRoot>

export const Default: StoryObj<InterfaceInputRoot> = {}
export const NoIcon: StoryObj<InterfaceInputRoot> = {
    args:{
        children: <Input.InputDefault placeholder="Sem icone"/>
    }
}
