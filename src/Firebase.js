// Import the functions you need from the SDKs you need




import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {doc, collection, addDoc,getDocs,setDoc } from "firebase/firestore";
import { getDownloadURL,getStorage, ref, uploadBytes } from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const Config = {
    apiKey: "AIzaSyBhf0S022xrtkg3XCMVYNO2sZdVfvUkcuA",
  authDomain: "ytclone-292ed.firebaseapp.com",
  projectId: "ytclone-292ed",
  storageBucket: "ytclone-292ed.appspot.com",
  messagingSenderId: "906425047540",
  appId: "1:906425047540:web:107b3f804a441a5b9dc1a1",
  measurementId: "G-R3EBCMB6QN"
};


const app = initializeApp(Config);
const db = getFirestore(app);
/*
try {
    const docRef = await addDoc(collection(db, "users"), {
        first: "pk",
        last: "kumars",
        born: 1987
      });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }*/
  
  /*const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().last}`);
  });
  await setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });
    */
 
  
const storage = getStorage(app);
const storageRef = ref(storage, 'some-child');




const logo = document.getElementById('testupload');



// 'file' comes from the Blob or File API

export  {storage,ref,getDownloadURL,storageRef,uploadBytes}
