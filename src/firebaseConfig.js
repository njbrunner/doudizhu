import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyB38JJ0ZIO7_VvBZ0lx8AaJo2-I3KJCw78',
  authDomain: 'doudizhu-77b89.firebaseapp.com',
  databaseURL: 'https://doudizhu-77b89-default-rtdb.firebaseio.com',
  projectId: 'doudizhu-77b89',
  storageBucket: 'doudizhu-77b89.appspot.com',
  messagingSenderId: '143956536146',
  appId: '1:143956536146:web:911da873a2a68ef307288b',
  measurementId: 'G-HXP4GW5371'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const database = getDatabase(app)

export { app, auth, database }
