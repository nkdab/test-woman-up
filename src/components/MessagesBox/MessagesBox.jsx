import "./MessagesBox.less";

/**
 * @typedef {Object} IMessage
 * @property {string} id - идентификатор сообщения.
 * @property {string} userName - имя пользователя.
 * @property {string} text - текст сообщения.
 */

/**
 * Компонент <MessagesBox /> отображающий сообщения чата
 * @param {Object} props
 * @param {IMessage[]} props.messages
 * @returns {JSX.Element}
 * @constructor
 * @constructor
 */
export function MessagesBox({messages}) {
    const elements =
        !!messages &&
        messages.map((item) => {
            return (
                <div key={item.id} className="messages-item">
                    {item.userName}: {item.text}
                </div>
            );
        });

  return (
    <div className="messages">
      {!!messages.length ? elements : "Здесь пока нет сообщений..."}
    </div>
  );
}
