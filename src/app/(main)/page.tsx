import React from 'react'
import Message from '@/src/components/messages/Message'
import messageApi from '@/src/services/messages/messages.service'
import MessagFeed from '@/src/components/messages/MessageFeed'
import MessageFeed from '@/src/components/messages/MessageFeed'

async function  IndexPage() {
  const messagesResponse = await messageApi.getMessageFeed(0, 10)

  return (
    <div>
        <main className='flex flex-col bg-gray-100 p-8'>
            <section className='flex flex-col mb-8'>
                <MessageFeed initialMessages={messagesResponse}/>
            </section>
        </main>
    </div>
  )
}

export default IndexPage