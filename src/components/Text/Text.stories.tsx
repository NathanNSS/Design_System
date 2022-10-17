import {Meta, StoryObj} from "@storybook/react"
import { InterfaceText, Text } from "./Text";

export default {
    title:"Components/Text",
    component:Text,
    args:{
        children:"Hello Word :) olá Mundo :)",
        size:"md"
    },
    argTypes:{
        size:{
            options:["sm", "md", "lg"],
            control:{
                type:"inline-radio"
            }
        }
    }
} as Meta<InterfaceText>

export const Default:StoryObj<InterfaceText> = {}

export const Small:StoryObj<InterfaceText> = {
    args:{
        size:"sm"
    }
}

export const Large:StoryObj<InterfaceText> = {
    args:{
        size:"lg"
    }
}

export const CustomComponent:StoryObj<InterfaceText> = {
    args:{
        asChild:true,
        children:(<h1>Olá Mundo text</h1>)
    },
    argTypes:{
        children:{
            table:{
                disable:true
            }
        },
        asChild:{
            table:{
                disable:true
            }
        },
    }
}