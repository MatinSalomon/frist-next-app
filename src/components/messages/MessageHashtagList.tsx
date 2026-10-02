import ExploreApi from "@/src/services/explore/explore.service"
import UserCard, { UserCardLayout } from "../userCard/UserCard"
import InfiniteScroll from "react-infinite-scroll-component"
import { useState } from "react"
import { TrendingUserType, UserType } from "@/src/types/user.types"
import { PageType } from "@/src/types/pagination.type"
import { TrendingHashtag } from "@/src/types/hash.types"
import MesssageHashtag from "./MessageHashtag"

type MessageHashtagListProps = {
    initialPage: PageType<TrendingHashtag>
}

const MessageHashtagList = ({initialPage}: MessageHashtagListProps) => {
    const [page, setPage] = useState<PageType<TrendingHashtag>>(initialPage)
    const [hashtag, setHashtag] = useState<TrendingHashtag[]>(initialPage.content)
    const [hasMore, setHasMore ] = useState<boolean>(!initialPage.pagination.last)
    

    const fetchData = async () => {
        const pageNumber = page.pagination.page + 1
        const response = await ExploreApi.getTrendingHastags(pageNumber, 20)
        setPage(response)
        setHashtag([...hashtag, ...response.content])
        setHasMore(!response.pagination.last)

    }

    const refresh = async () => {
        const response = await ExploreApi.getTrendingHastags(0, 20)
        setPage(response)
        setHashtag(response.content)
        setHasMore(!response.pagination.last)
    }
    
    
    return ( 

         <InfiniteScroll
                dataLength={hashtag.length}
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
                {hashtag.map((hash, index) => (
                    <MesssageHashtag 
                        key={`explore-hash-${index}`}
                        hash={hash}/>
                    ))}
              </InfiniteScroll>
        
    )

}

export default MessageHashtagList