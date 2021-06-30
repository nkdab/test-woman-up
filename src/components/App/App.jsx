import { MessagesBox } from "../MessagesBox";
import { MessagesInput } from "../MessagesInput";
import { useEffect, useState } from "react";
import { query, sendMessage } from "../../services/firebase.service";

/**
 * Рендер приложения
 * @returns {JSX.Element}
 */
export function App() {
  const [messages, setMessages] = useState([]);

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

  /**
   * Обработка события AddMessage
   * @param msg
   * @param {string} msg.userName
   * @param {string} msg.text
   * @returns {Promise<void>}
   */
  const handleAddMessage = async (msg) => {
    await sendMessage(msg);
  };

  return (
    <div>
      <MessagesBox messages={messages} />
      <MessagesInput onMessageAdd={handleAddMessage} />
    </div>
  );
}
