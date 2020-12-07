export const initializeAppIfNeeded = async () => {
  const firebaseApp = await import('firebase/app')

  try {
    const config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BACKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    }
    firebaseApp.default.initializeApp(config)
  } catch (error) {
    if (error.code && error.code === 'app/duplicate-app') {
      console.log('Firebase app already exists')
    } else {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Firebase initialization error', error.stack)
      }
    }
  }

  return firebaseApp.default.app()
}
