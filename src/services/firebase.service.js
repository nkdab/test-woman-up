import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import { MESSAGES_LIMIT } from "../constants";

const firebaseConfig = {
  apiKey: "AIzaSyDWAHFZztWqu0ZaGyrwIBMgwIf42y3j4R4",
  authDomain: "womanup-chat-ff467.firebaseapp.com",
  projectId: "womanup-chat-ff467",
  storageBucket: "womanup-chat-ff467.appspot.com",
  messagingSenderId: "801163050580",
  appId: "1:801163050580:web:21f0b1d2e4f3b89ec9f7c1",
  measurementId: "G-G4XBMCBBYL",
};

if (typeof firebase === "undefined")
  throw new Error("hosting/init-error: Firebase SDK not detected.");
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const query = db
  .collection("messages")
  .orderBy("timestamp", "desc")
  .limit(MESSAGES_LIMIT);

/**
 * Отправляет сообщение в Firebase Firestore
 * @param message
 * @param {string} message.userName
 * @param {string} message.text
 * @returns {Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>>}
 */
export async function sendMessage(message) {
  try {
    return await db.collection("messages").add({
      ...message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (e) {
    console.error("Ошибка записи в базу данных", e);
  }
}

/**
 * Подписка на обновления Firestore
 * @param {function} callback - функция, в которую передаются данные
 * @return {function} unsubscribe - функция отписки от обновлений
 */
export const subscription = (callback) => {
  return query.onSnapshot((querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    callback(data);
  });
};
