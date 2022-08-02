import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyBzK3b4Uu4UsPImwpa4Uki3l-GnYhItClU",
	authDomain: "smart-parking-system-a112a.firebaseapp.com",
	databaseURL:
		"https://smart-parking-system-a112a-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "smart-parking-system-a112a",
	storageBucket: "smart-parking-system-a112a.appspot.com",
	messagingSenderId: "357998881115",
	appId: "1:357998881115:web:ade0903a294ed849c3d27e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)
