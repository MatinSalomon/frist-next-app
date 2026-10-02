import React from 'react'
import PostsCounter from '../counters/PostsCounter'
import Link from 'next/link'
import { TrendingHashtag } from '@/src/types/hash.types'
import { off } from 'process'
import MesssageHashtag from '../messages/MessageHashtag'

type ExploreTredingProps = {
    hashes: TrendingHashtag[]
}

function ExploreTrending({hashes}: ExploreTredingProps) {
    if(!hashes || hashes.length < 1) return <></>

  return (
    <>
        <div className='bg-gray-200 rounded-lg px-8 py-4' style={{minWidth: 250}}>
            <h2 className='mb-2'>Trending</h2>

            {hashes && hashes.slice(0, 2).map((hash, index) => 
                <div key={index} className='mb-4'>
                    <MesssageHashtag hash={hash }/>
                </div>
            )}
            {hashes.length > 2 && 
            <Link href="/explore?type=HASHTAGS">
                <div className='text-center link-primary'>
                    Ver Mas
                </div>
            </Link>
            }
        </div>
    </>
  )
}

export default ExploreTrending