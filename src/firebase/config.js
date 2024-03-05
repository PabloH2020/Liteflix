
import { initializeApp } from "firebase/app";
import {getDownloadURL, getStorage,ref, uploadBytes} from 'firebase/storage'
import { v4 } from "uuid";


const firebaseConfig = {
  apiKey: "AIzaSyDi8SU_J-iASNEjHPzAy270hkKJ3sLWVwI",
  authDomain: "liteboxstorage.firebaseapp.com",
  projectId: "liteboxstorage",
  storageBucket: "liteboxstorage.appspot.com",
  messagingSenderId: "172467869531",
  appId: "1:172467869531:web:b8ece0a0a462816f406c7e"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file){
    const storageRef = ref(storage,v4())
     await uploadBytes(storageRef,file)
     const url = await getDownloadURL(storageRef)
     return url;
    }


