import {Meta, StoryObj} from "@storybook/react"
import { InterfaceTitle, Title } from "./Title";

export default {
    title:"Components/Title",
    component:Title,
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
} as Meta<InterfaceTitle>

export const Default:StoryObj<InterfaceTitle> = {}

export const Small:StoryObj<InterfaceTitle> = {
    args:{
        size:"sm"
    }
}

export const Large:StoryObj<InterfaceTitle> = {
    args:{
        size:"lg"
    }
}

export const CustomComponent:StoryObj<InterfaceTitle> = {
    args:{
        asChild:true,
        children:(<h1>Olá Mundo title</h1>)
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