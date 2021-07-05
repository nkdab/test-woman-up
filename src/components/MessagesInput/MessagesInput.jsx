import "./MessagesInput.less";
import { useState } from "react";
import { DEFAULT_USER_NAME } from "../../constants";

/**
 * Компонент <MessagesInput /> отображающий сообщения чата
 * @param {Object} props
 * @param {function} props.onMessageAdd
 * @returns {JSX.Element}
 * @constructor
 */
export function MessagesInput({ onMessageAdd }) {
  const [userName, setUserName] = useState(DEFAULT_USER_NAME);
  const [chatMessage, setChatMessage] = useState("");

  /**
   * Сброс имени пользователя по умолчанию, при фокусе на окне ввода
   */
  const handleUserNameFocus = () => {
    if (userName !== DEFAULT_USER_NAME) {
      return;
    }
    setUserName("");
  };

  /**
   * Обработчик изменений в поле ввода имени пользователя
   * @param {React.FormEvent} e - событие onChange
   */
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  /**
   * Обработчик изменений в поле ввода текста сообщения
   * @param {React.FormEvent} e - событие onChnge
   */
  const handleMessageChange = (e) => {
    setChatMessage(e.target.value);
  };

  /**
   * Подготавливает и отправляет новое сообщение чата
   * @param {React.FormEvent} e - Событие отправки формы
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = { userName: userName, text: chatMessage };
    onMessageAdd(newMessage);
  };

  return (
    <div className="messages-input">
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">
          Ваше имя:
          <input
            id="userName"
            type="text"
            name="userName"
            value={userName}
            onFocus={handleUserNameFocus}
            onChange={handleUserNameChange}
          />
        </label>

        <label htmlFor="msgText">
          Сообщение:
          <input
            id="msgText"
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
