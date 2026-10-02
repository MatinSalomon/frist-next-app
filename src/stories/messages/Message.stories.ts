import Message from "@/src/components/messages/Message"
import type {Meta, StoryObj} from "@storybook/nextjs-vite"

const meta = {
    title: "Messages/Message",
    component: Message,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Message>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args:{
        message: {message: "string", name: "hola", username: "martin"}
    }
}