import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import { NextPage } from 'next'

import { loadFirebaseAuth } from 'libs/firebase-auth'
import { loadFirebaseFunctions } from 'libs/firebase-functions'
import { loadFirebaseStorage } from 'libs/firebase-storage'

const IndexPage: NextPage = () => {
  // properties

  const [isLoading, setIsLoading] = useState(false)

  const [user, setUser] = useState<firebase.default.User | null | undefined>(undefined)

  // lifecycles

  useEffect(() => {
    setIsLoading(true)
    setTimeout(async () => {
      const auth = await loadFirebaseAuth()
      const functions = await loadFirebaseFunctions()
      const storage = await loadFirebaseStorage()
      if (process.env.NODE_ENV === 'development') {
        console.info(functions, storage)
      }
      setUser(auth.currentUser)
      setIsLoading(false)
    }, 5000)
  }, [])

  // rendering

  return (
    <Layout title="Home">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Hello {user ? user.displayName : 'user'} 👋</h1>
      )}
    </Layout>
  )
}

export default IndexPage
