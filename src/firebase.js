import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCSKI_-ywJLph30WVLnagixIcof4UtPGpg',
	authDomain: 'aamdhane-testing2.firebaseapp.com',
	projectId: 'aamdhane-testing2',
	storageBucket: 'aamdhane-testing2.appspot.com',
	messagingSenderId: '588020223985',
	appId: '1:588020223985:web:5a36be0a865edfe688be50',
	measurementId: 'G-4SJ77Y0K30',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app