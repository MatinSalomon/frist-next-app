import React from 'react'
import Link from 'next/link'
import { TrendingUserType } from '@/src/types/user.types'
import Image from 'next/image'
import UserdCard, { UserCardLayout } from '../userCard/UserCard'
import UserCard from '../userCard/UserCard'

type ExploreUsersProps = {
    users: TrendingUserType[]
}

function ExploreUser({users}: ExploreUsersProps) {
    if(!users || users.length < 1) return <></>

  return (
    <>
        <div className='bg-gray-200 rounded-lg px-8 py-4' style={{minWidth: 250}}>
            <h2 className='mb-2'>A Quien Seguir</h2>

            {users && users.slice(0, 4).map((user, index) => 
                <UserCard key={`trending-user-${index}`} user={user} layout={UserCardLayout.VERTICAL}/>  
            )}

            {users.length > 2 && 
            <Link href="/explore?type=USERS">
                <div className='text-center link-primary'>
                    Ver Mas
                </div>
            </Link>
            }
        </div>
    </>
  )
}

export default ExploreUser