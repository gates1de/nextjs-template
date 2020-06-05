import { initializeAppIfNeeded } from 'libs/firebase-app'

export const loadFirebaseStorage = async () => {
  await import('firebase/storage')

  const firebaseApp = await initializeAppIfNeeded()
  return firebaseApp.storage()
}
