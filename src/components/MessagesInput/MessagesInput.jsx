import "./MessagesInput.less";
import {useState} from "react";
import uid from "../../services/generateId";

export function MessagesInput({onMessageAdd}) {
  const defaultUserName = "anonymous";
  const [userName, setUserName] = useState(defaultUserName);
  const [chatMessage, setChatMessage] = useState("");

  const handleUserNameFocus = () => {
    if (userName !== defaultUserName) {
      return;
    }
    setUserName("");
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setChatMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {id: uid(), userName: userName, text: chatMessage};
    onMessageAdd(newMessage);
  };

  return (
    <div className="messages-input">
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">
          Ваше имя:{" "}
          <input
            type="text"
            name="userName"
            value={userName}
            onFocus={handleUserNameFocus}
            onChange={handleUserNameChange}
          />
        </label>

        <label htmlFor="msgText">
          Сообщение:{" "}
          <input
            type="text"
            name="msgText"
            value={chatMessage}
            onChange={handleMessageChange}
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
