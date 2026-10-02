"use client"

import { MessageType } from "@/src/types/messge.types"
import { PageType } from "@/src/types/pagination.type"
import { useState } from "react"
import Message from "./Message"
import InfiniteScroll from "react-infinite-scroll-component"
import messageApi from "@/src/services/messages/messages.service"

type MessagFeedProps = {
    initialMessages: PageType<MessageType>
}

const MessageFeed = ({initialMessages}: MessagFeedProps) => {

    const [messageResponse, setMessageResponse ] = useState<PageType<MessageType>>(initialMessages)
    const [messages, setMessages ] = useState<MessageType[]>(initialMessages.content)
    const [hasMore, setHasMore ] = useState<boolean>(!initialMessages.pagination.last)


    const fetchData = async () => {
        const page = messageResponse.pagination.page + 1
        const response = await messageApi.getMessageFeed(page, 10)
        setMessageResponse(response)
        setMessages([...messages, ...response.content])
        setHasMore(!response.pagination.last)
    }

    const refresh = async () => {
        const response = await messageApi.getMessageFeed(0, 10)
        setMessageResponse(response)
        setMessages(response.content)
        setHasMore(!response.pagination.last)
    }



    return ( 
             <InfiniteScroll
                dataLength={messages.length}
                next={fetchData}
                hasMore={hasMore}
                loader={<p>Loading...</p>}
                endMessage={<p style={{ textAlign: 'center' }}>All items loaded.</p>}
                refreshFunction={refresh}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                }
              >
                {messages.map((message, index) => (
                  <Message
                  key={index}
                  message={message}
                  />

                ))}
              </InfiniteScroll>
    )

}

export default MessageFeed