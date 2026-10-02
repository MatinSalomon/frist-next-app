import ExploreApi from "@/src/services/explore/explore.service"
import UserCard, { UserCardLayout } from "../userCard/UserCard"
import InfiniteScroll from "react-infinite-scroll-component"
import { useState } from "react"
import { TrendingUserType, UserType } from "@/src/types/user.types"
import { PageType } from "@/src/types/pagination.type"

type UserListProps = {
    initialUserPage: PageType<TrendingUserType>
}

const UserList = ({initialUserPage}: UserListProps) => {
    const [page, setPage] = useState<PageType<TrendingUserType>>(initialUserPage)
    const [users, setUsers] = useState<TrendingUserType[]>(initialUserPage.content)
    const [hasMore, setHasMore ] = useState<boolean>(!initialUserPage.pagination.last)


    const fetchData = async () => {
        const pageNumber = page.pagination.page + 1
        const response = await ExploreApi.getFollowRecommendations(pageNumber, 5)
        setPage(response)
        setUsers([...users, ...response.content])
        setHasMore(!response.pagination.last)
    }

    const refresh = async () => {
        const response = await ExploreApi.getFollowRecommendations(0, 5)
        setPage(response)
        setUsers(response.content)
        setHasMore(!response.pagination.last)
    }

    
    return ( 

         <InfiniteScroll
                dataLength={users.length}
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
                {users.map((user, index) => (
                    <UserCard
                        key={`explore-user-${index}`}
                        user={user}
                        layout={UserCardLayout.VERTICAL}
                    />
                ))}
              </InfiniteScroll>
        
    )

}

export default UserList