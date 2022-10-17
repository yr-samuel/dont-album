import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { firebase } from "./env";

const firebaseConfig = {
	apiKey: firebase.API_KEY,
	authDomain: firebase.AUTH_DOMAIN,
	projectId: firebase.PROJECT_ID,
	storageBucket: firebase.STORAGE_BUCKET,
	messagingSenderId: firebase.SENDER_ID,
	appId: firebase.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://dont-album.appspot.com");
const database = getFirestore(app);

export default database;
