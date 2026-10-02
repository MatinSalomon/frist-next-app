import { UserType } from "@/src/types/user.types"
import { httpGetPublic } from "../common/http.service"
import { MessageType } from "@/src/types/messge.types"
import { PageType } from "@/src/types/pagination.type"

class UserAPI {
    getUserData = async (username: string): Promise<UserType> => httpGetPublic(`/users/${username}`)
    getUserMessages = async (username: string): Promise<PageType<MessageType>> => httpGetPublic(`/users/${username}/messages`)
    getUserReplies = async (username: string): Promise<PageType<MessageType>> => httpGetPublic(`/users/${username}/messages/replies`)
}

const UserApi =  new UserAPI

export default UserApi
