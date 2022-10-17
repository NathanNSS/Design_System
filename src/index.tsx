import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Text } from "./components/Text/Text";
import { Title } from "./components/Title/Title";

import {Envelope} from "phosphor-react"

export function Home() {
    return (
        <main>
            <Text asChild>
                <p>Olá Mundo :0</p>
            </Text>

            <Title asChild={true}>
                <h1>
                    Olá Mundo :)
                </h1>
            </Title>

            <Button>
                Click
            </Button>

            <Input.Root>
                <Input.Icon icon={<Envelope/>}/>
                <Input.InputDefault placeholder="Digite ai *-*" />
            </Input.Root>

        </main>
    )
}