import UserTabs from '@/src/components/users/UserTabs'
import Link from 'next/link'
import Image from 'next/image'
import UserApi from '@/src/services/users/users.service'


const UserPage = async ({params}: {params: {username: string}}) => {
  const { username } = await params

  const userPromise =  UserApi.getUserData(username)
  const userMessagesPromise =  UserApi.getUserMessages(username)
  const userRepliesPromise =  UserApi.getUserReplies(username)

  const [user, userMessages, userReplies] = await Promise.all([userPromise, userMessagesPromise, userRepliesPromise])

    return (

      <main className='flex flex-col bg-gray-100 p-8' >
        <section className='flex flex-col mb-8'>
          <div className='rounded-full text-center mb-4'>
            <Image
              className='rounded-full'
              src={user.photoUrl}
              alt="Profile picture"
              width={64}
              height={64}
              priority
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
              placeholder="blur"
            />
          </div>
          <h2>{user.name}</h2>
          <div className='text-md mb-4 text-gray-600 cursor-pointer'>
            @<Link href={`/users/${user.username}`}>{user.username}</Link>
          </div>
          <div className='mb-4'>{user.bio}</div>
          <div className='flex justify-between'>
            <div> <span className='font-semibold'>{user.followersCount}</span> Seguidores</div>
            <div> <span className='font-semibold'>{user.followersCount}</span> Siguiendo</div>
          </div>
        </section>


        <UserTabs
          messages={userMessages.content}
          replies={userReplies.content}
        />
        {/* <div className='flex justify-evenly mb-4'>
          <div className='cursor-pointer border-b-4 border-blue-400'>Mensajes</div>
          <div className='cursor-pointer'>Respuestas</div>
        </div>
        <div>
          {user.messages.map((message, index) => (
            <Messages 
            key={index}
            message={message}
            />

          ))}
        </div> */}
      </main>
      

  )
}

export default UserPage