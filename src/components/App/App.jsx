import {MessagesBox} from "../MessagesBox";
import {MessagesInput} from "../MessagesInput";
import {useEffect, useState} from "react";
import {query, sendMessage} from "../../services/firebase.service";

/**
 * Рендер приложения
 * @returns {JSX.Element}
 */
export function App() {
  const [messages, setMessages] = useState([
    {id: "0", userName: "", text: "here no messages yet..."},
  ]);

  useEffect(() => {
    const unsubscribe = query.onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(data);
    });

    return unsubscribe;
  }, []);

  const handleAddMessage = async (msg) => {
    await sendMessage(msg);
  };

  return (
    <div>
      <MessagesBox messages={messages}/>
      <MessagesInput onMessageAdd={handleAddMessage}/>
    </div>
  );
}
