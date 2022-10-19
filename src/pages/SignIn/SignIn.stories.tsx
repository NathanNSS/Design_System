import {Meta, StoryObj} from "@storybook/react"
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";

import { SignIn } from "./index";

export default {
    title:"Pages/SignIn",
    component:SignIn,
    args:{},
    argTypes:{},
    parameters:{
        msw:{
            handlers:[
                rest.post("/session", (req, res, ctx) => {
                    return res(ctx.json({
                        message:"Bem-Vindo *-*"
                    }))
                })
            ]
        }
    }
} as Meta

export const Default:StoryObj = {
    play: async ({canvasElement}) =>{
        const canvas = within(canvasElement);

        userEvent.type(canvas.getByTestId("email"), "nathannss14@gmail.com")
        userEvent.type(canvas.getByTestId("password"), "coxinha123")

        userEvent.click(canvas.getByTestId("btn-login"))

        await waitFor(()=>{
            return expect(canvas.getByText("Login Realizado!")).toBeInTheDocument()
        })
    }
}
