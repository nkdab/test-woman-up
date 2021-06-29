import {MessagesBox} from "../MessagesBox";
import {MessagesInput} from "../MessagesInput";
import {Loader} from "../Loader";
import {useState} from "react";
import {sendMessage} from "../../services/firebase.service";

/**
 * Рендер приложения
 * @returns {JSX.Element}
 */
export function App() {
  const [messages, setMessages] = useState([
    {id: "0", userName: "", text: "here no messages yet..."},
  ]);

  const handleAddMessage = async (msg) => {
    await sendMessage(msg);
    setMessages([...messages, msg]);
  };

  return (
    <div>
      <MessagesBox messages={messages}/>
      <MessagesInput onMessageAdd={handleAddMessage}/>
      <Loader/>
    </div>
  );
}
