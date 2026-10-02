import { MessageType } from '@/src/types/messge.types'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import UserCard, { UserCardLayout } from '../userCard/UserCard'


type messageProps = {
    message: MessageType
}

function Message({message}: messageProps) {
  return(
    <UserCard user={message.user} layout={UserCardLayout.HORIZONTAL}>
      <p>{message.message}</p>
    </UserCard> 
  )
}

export default Message