import Message from "@/src/components/messages/Message"
import UserTabs from "@/src/components/users/UserTabs"
import type {Meta, StoryObj} from "@storybook/nextjs-vite"

const meta = {
    title: "Users/UsersTbs",
    component: UserTabs,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
} satisfies Meta<typeof UserTabs>

export default meta

type Story = StoryObj<typeof meta>


const messages = [
                    {
                    name: "han solo",
                    username: "hsolo",
                    message: "primer mensaje",
                    repliesCount: 13
                    },
                    {
                    name: "padme",
                    username: "pad3",
                    message: "segundo mensaje",
                    repliesCount: 13
                    }
                ]

const replies = [
                    {
                        name: "padme",
                        username: "pad3",
                        message: "segundo mensaje",
                        repliesCount: 13
                    }
                ]

export const MessageTab: Story = {
    args:{
        messages: messages,
        replies: replies
    }
}