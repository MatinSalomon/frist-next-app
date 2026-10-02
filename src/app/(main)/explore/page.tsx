import ExploreTabs from "@/src/components/explore/ExploreTabs";
import ExploreApi from "@/src/services/explore/explore.service";


const ExplorePage = async ({searchParams} : {searchParams?: {[key: string]: string | undefined}}) => {
    const hashesPromise = ExploreApi.getTrendingHastags(0, 20)
    const usersPromise = ExploreApi.getFollowRecommendations(0, 5)

    const [hashes, users] = await Promise.all([hashesPromise, usersPromise])
  
  return (
    <div>
        <main className='flex flex-col bg-gray-100 p-8'>
            <section className='flex flex-col mb-8'>
                <ExploreTabs        
                    hashstags={hashes} 
                    users={users}
                    initialTab={searchParams?.type}
                />
            </section>
        </main>
    </div>
  )
}

export default ExplorePage