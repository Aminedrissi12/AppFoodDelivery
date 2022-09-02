import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCA5DzTl2Swo61fpIogSFRwHzjhBZFdSbc',
  authDomain: 'find-coachse.firebaseapp.com',
  databaseURL: 'https://find-coachse-default-rtdb.firebaseio.com',
  projectId: 'find-coachse',
  storageBucket: 'find-coachse.appspot.com',
  messagingSenderId: '945575679426',
  appId: '1:945575679426:web:47f56fc5d2a345fb44725b',
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export { storage }
