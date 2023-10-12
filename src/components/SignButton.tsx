'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

function SignButton() {
    const { data:session} = useSession()

    if(session && session.user){
        return(
            <div>
                <p>{session.user.name}</p>
                <button onClick={()=>signOut()} className='text-red-500'>
                    Signout
                </button>
            </div>
        )
    }
  return (
    <div>
      <button onClick={()=>signIn()} className='text-red-500'>Sign In</button>
    </div>
  )
}

export default SignButton
