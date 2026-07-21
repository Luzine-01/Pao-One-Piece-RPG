
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, doc, collection, getDoc, getDocs, onSnapshot, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

  const FB_CONFIG = {
    apiKey: "AIzaSyBJF3ic2GM_9HADwQGpvX_m__lqw31SzZE",
    authDomain: "oprpg-bf152.firebaseapp.com",
    projectId: "oprpg-bf152",
    storageBucket: "oprpg-bf152.firebasestorage.app",
    messagingSenderId: "286251090743",
    appId: "1:286251090743:web:a8366f7c058d4c4a2790b2"
  };

const fbApp = initializeApp(FB_CONFIG, 'oprpg');
const db    = getFirestore(fbApp);
const DOC   = 'opdb';
