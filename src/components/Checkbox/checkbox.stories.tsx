import { Meta, StoryObj } from "@storybook/react"
import { Text } from "../Text/Text";
import { Checkbox, InterfaceCheckbox } from "./Checkbox";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
    args: {
        text: "",
        textSize: "sm"
    },
    argTypes: {
        textSize: {
            options: ["sm", "md", "lg"],
            control: {
                type: "inline-radio"
            }
        }
    }
} as Meta<InterfaceCheckbox>

export const Default: StoryObj<InterfaceCheckbox> = {}

export const WithText: StoryObj<InterfaceCheckbox> = {
    args: {
        text: "Checkbox"
    }
}

export const WithDecorator: StoryObj<InterfaceCheckbox> = {
    argTypes: {
        textSize:{
            table:{
                disable:true
            }
        },
        text:{
            table:{
                disable:true
            }
        },
        
    },

    decorators: [
        (Story) => {
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text>Checkbox with decorator</Text>
                </div>
            )
        }
    ]
}
