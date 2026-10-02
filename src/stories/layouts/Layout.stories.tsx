import UsersLayout from "@/src/app/(main)/layout"
import type {Meta, StoryObj} from "@storybook/nextjs-vite"

const meta = {
    title: "Layout/Users",
    component: UsersLayout,
    tags: ["autodocs"],
} satisfies Meta<typeof UsersLayout>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args:{
        children: <>CONTENIDO</>
    }
}