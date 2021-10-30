import firebase from 'firebase/compat/app';
import "firebase/compat/database";

//API Keys
const config = {
    apiKey: "AIzaSyCYpQ9BzXF4aIPLVKbNFIz4CZltxv-A8vE",
    authDomain: "firevue-chat-39892.firebaseapp.com",
    projectId: "firevue-chat-39892",
    storageBucket: "firevue-chat-39892.appspot.com",
    messagingSenderId: "37638280817",
    appId: "1:37638280817:web:f92f28427b1f576ba0edd0"
}

const db = firebase.initializeApp(config);
export default db;