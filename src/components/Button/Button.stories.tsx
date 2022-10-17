import { InterfaceButton, Button } from "./Button";
import {Meta, StoryObj} from "@storybook/react"

export default {
    title:"Components/Button",
    component:Button,
    args:{
        children:"Button"
    },
    argTypes:{}
} as Meta<InterfaceButton>

export const Default:StoryObj<InterfaceButton> = {}
