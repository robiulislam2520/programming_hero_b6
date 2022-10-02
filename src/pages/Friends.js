import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Friend from '../components/Friend'

const Friends = () => {
  const friends = useLoaderData()
  return (
    <div>
        <h1>Here is some friends.</h1>
        {
          friends.map(friend => <Friend key={friend.id} friend={friend}/>)
        }
    </div>
  )
}

export default Friends