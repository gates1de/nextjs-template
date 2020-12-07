import { initializeAppIfNeeded } from 'libs/firebase-app'

export const loadFirebaseFunctions = async () => {
  await import('firebase/functions')

  const firebaseApp = await initializeAppIfNeeded()
  return firebaseApp.functions(process.env.FIREBASE_FUNCTIONS_REGION)
}
