import { MessageType } from "../types/messge.types"
import { PageType } from "../types/pagination.type"
import { UserType } from "../types/user.types"


export const getUserData = async (username: string): Promise<UserType> => {
  const res = await fetch(`${API_PUBLIC_URL}/users/${username}`)

  if (!res.ok){
    throw new Error("Failed in user fetch")
  }

  return res.json()
}

export const getUserMessages = async (username: string): Promise<PageType<MessageType>> => {
  const res = await fetch(`${API_PUBLIC_URL}/users/${username}/messages`,)

  if (!res.ok){
    throw new Error("Failed to retrived messages")
  }

  return res.json()
}

export const getUserReplies = async (username: string): Promise<PageType<MessageType>> => {
  const res = await fetch(`${API_PUBLIC_URL}/users/${username}/messages/replies`)

  if (!res.ok){
    throw new Error("Failed to retrived replies")
  }

  return res.json()
}
