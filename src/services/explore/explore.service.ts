import { UserType } from "@/src/types/user.types"
import { httpGet, httpGetPublic } from "../common/http.service"
import { PageType } from "@/src/types/pagination.type"
import { TrendingHashtag } from "@/src/types/hash.types"

class ExporeAPI {
    getTrendingHastags = async (page:number, size: number): Promise<PageType<TrendingHashtag>> => 
        httpGetPublic(`/explore/trending`, new URLSearchParams({page: `${page}`, size: `${size}`}))

     getFollowRecommendations = async (page:number, size: number): Promise<PageType<UserType>> => 
        httpGetPublic(`/explore/follow-recommendations`, new URLSearchParams({page: `${page}`, size: `${size}`}))
}

const ExploreApi =  new ExporeAPI();

export default ExploreApi
