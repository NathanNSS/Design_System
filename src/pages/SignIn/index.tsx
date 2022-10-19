import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";

import Logo from "../../assets/Logo";

import { Button } from "../../components/Button/Button";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Input } from "../../components/Input/Input";
import { Text } from "../../components/Text/Text";
import { Title } from "../../components/Title/Title";


export function SignIn() {
    const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false)

    async function Login(event: FormEvent) {
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData)

        try {
            await fetch("/session", {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password
                })
            })
                .then((data) => {
                    if(data.status === 200) setIsLoggingIn((oldValue) => !oldValue)
            })
            
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <main className="w-screen h-screen bg-black-900 flex flex-col items-center pt-28">
            <div className="flex flex-col items-center">
                <Logo />
                <Title asChild className="mt-4" size="lg">
                    <h1>Ignite Lab</h1>
                </Title>
                <Text className="text-[#7C7C8A] mt-1" size="md">Faça Login e comece a usar!</Text>
            </div>

            <form onSubmit={Login}
                className="flex flex-col w-96 items-stretch mt-10 gap-3"
            >
                {isLoggingIn && <Text>Login Realizado!</Text>}
                <label htmlFor="email" className="flex flex-col gap-3">
                    <Text>Endereço de e-mail</Text>
                    <Input.Root>
                        <Input.Icon icon={<Envelope />} />
                        <Input.InputDefault type="email" required name="email" data-testid="email" placeholder="example@email.com" />
                    </Input.Root>
                </label>

                <label htmlFor="password" className="flex flex-col gap-3 mt-5">
                    <Text>Sua senha</Text>
                    <Input.Root>
                        <Input.Icon icon={<Lock />} />
                        <Input.InputDefault type="password" required name="password" autoComplete="current-password" data-testid="password" placeholder="*************" />
                    </Input.Root>
                </label>

                <Checkbox text="Lembre de mim por 30 dias" textSize="sm" className="text-gray-500 my-3" />

                <Button className="mt-3" data-testid="btn-login">
                    Entrar na Plataforma
                </Button>
            </form>

            <footer className="flex flex-col gap-3 text-center mt-12">
                <Text className="text-[#7C7C8A] underline hover:text-gray-500" size="sm">
                    <a href="#">Esqueceu sua senha?</a>
                </Text>
                <Text className="text-[#7C7C8A] underline hover:text-gray-500" size="sm">
                    <a href="#">Não possui conta? Crie uma agora!</a>
                </Text>
            </footer>
        </main>
    )
}