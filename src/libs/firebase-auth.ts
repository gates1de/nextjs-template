import { initializeAppIfNeeded } from 'libs/firebase-app'

export const loadFirebaseAuth = async () => {
  await import('firebase/auth')

  const firebaseApp = await initializeAppIfNeeded()
  firebaseApp.auth().languageCode = 'ja_JP'
  return firebaseApp.auth()
}
