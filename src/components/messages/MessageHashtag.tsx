import Link from "next/link"
import PostsCounter from "../counters/PostsCounter"
import { TrendingHashtag } from "@/src/types/hash.types"

type MessageHashtagProps = {
    hash: TrendingHashtag
}

const MesssageHashtag = ({hash}: MessageHashtagProps) => {
    return ( 
        <>
            <Link href={`/mensajes?query=${hash.hash}&type=hash`}>
                <h4 className='font-semibold cursor-pointer'>{hash.hash}</h4>
            </Link>
            <div><PostsCounter count={hash.count}/></div>
        </>
    )

}

export default MesssageHashtag