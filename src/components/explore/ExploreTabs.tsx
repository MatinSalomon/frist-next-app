"use client"
import { TrendingHashtag } from "@/src/types/hash.types"
import { TrendingUserType } from "@/src/types/user.types"
import { useEffect, useEffectEvent, useState } from "react"
import UserCard, { UserCardLayout } from "../userCard/UserCard"
import MesssageHashtag from "../messages/MessageHashtag"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import UserList from "../users/UserList"
import { PageType } from "@/src/types/pagination.type"
import MessageHashtagList from "../messages/MessageHashtagList"

enum TabView{
    HASHTAGS, USERS
}

type ExploreTabsProps = {
    hashstags: PageType<TrendingHashtag>,
    users: PageType<TrendingUserType>,
    initialTab?: string
}

function ExploreTabs({hashstags, users, initialTab}: ExploreTabsProps) {
  const searchParams = useSearchParams()
  const [tab, setTab] = useState<TabView>(initialTab ? TabView[initialTab as keyof typeof TabView] : TabView.HASHTAGS)

  useEffect(() => {
    const type = searchParams.get(`type`)
    setTab( type ? TabView[type as keyof typeof TabView] : tab)
  }, [searchParams, tab])

  return (
    <>
        <div className='flex justify-evenly mb-4'>
            <Link 
            href="/explore?type=HASHTAGS"
            className={`cursor-pointer ${tab == TabView.HASHTAGS ? "border-b-4 border-blue-400" : ""}`}
            onClick={() => setTab(TabView.HASHTAGS)}
            >
                Hashstags
            </Link>
            <Link
            href="/explore?type=USERS" 
            
            className={`cursor-pointer ${tab == TabView.USERS ? "border-b-4 border-blue-400" : ""}`}
            onClick={() => setTab(TabView.USERS)}
            >
                Users
            </Link>
        </div>
        <div>
          {tab == TabView.HASHTAGS && <MessageHashtagList initialPage={hashstags}/>}

          {tab == TabView.USERS && <UserList initialUserPage={users}/>}
        </div>
    </>
  )
}

export default ExploreTabs