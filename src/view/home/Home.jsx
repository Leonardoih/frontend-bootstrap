import React from 'react'
import firebaseApp from '../../firebase/firebaseconfig'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(firebaseApp)

const Home = () => {
  return (
    <div>Home

      <button onClick={()=> signOut(auth)}>Sing Out</button>
    </div>
  )
}

export default Home