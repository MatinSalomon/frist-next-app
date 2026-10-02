import ExploreTrending from "@/src/components/explore/ExploreTrending"
import type {Meta, StoryObj} from "@storybook/nextjs-vite"

const meta = {
    title: "ExploreTrending/explore",
    component: ExploreTrending,
    tags: ["autodocs"],
    parameters: {
        layout: "centered"
    },
} satisfies Meta<typeof ExploreTrending>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args:{
        hashes : [
            {hash: "Tatooine", count: 2},
            {hash: "Fuerza", count: 5},
        ]
    }
}

export const MoreThan2: Story = {
    args:{
        hashes : [
            {hash: "Tatooine", count: 2},
            {hash: "Fuerza", count: 5},
            {hash: "Jedi", count: 10},
        ]
    }
}

export const Emptry: Story = {
    args:{
        hashes : []
    }
}