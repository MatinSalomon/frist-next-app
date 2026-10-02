import { UserType } from "@/src/types/user.types"
import { httpGetPublic } from "../common/http.service"
import { MessageType } from "@/src/types/messge.types"
import { PageType } from "@/src/types/pagination.type"

class MessgeAPI {
    getMessageFeed = async (page:number, size: number): Promise<PageType<MessageType>> => httpGetPublic(`/messages/feed`, new URLSearchParams({page: `${page}`, size: `${size}`}))
}

const messageApi =  new MessgeAPI();

export default messageApi
