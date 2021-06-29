import {MessagesBox} from "../MessagesBox";
import {MessagesInput} from "../MessagesInput";
import {ErrorBox} from "../ErrorBox";
import {Loader} from "../Loader";
import {useState} from "react";

export function App() {
  const [messages, setMessages] = useState([
    {id: "0", userName: "", text: "here no messages yet..."},
  ]);

  const handleAddMessage = (msg) => setMessages([...messages, msg]);

  return (
    <div>
      <MessagesBox messages={messages}/>
      <MessagesInput onMessageAdd={handleAddMessage}/>
      <ErrorBox errorText="error"/>
      <Loader/>
    </div>
  );
}
