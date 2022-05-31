// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBICo34kcOEYAbHl3k0fhi74lR-sETPA3o",
  authDomain: "dictionary-2cbe9.firebaseapp.com",
  projectId: "dictionary-2cbe9",
  storageBucket: "dictionary-2cbe9.appspot.com",
  messagingSenderId: "44373906196",
  appId: "1:44373906196:web:51ee422c9f04cc1fd36801",
  measurementId: "G-V2VNRH55HQ",
};

// firebaseConfig 정보로 firebase 시작
initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { db };
