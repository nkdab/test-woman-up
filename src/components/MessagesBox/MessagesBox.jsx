import "./MessagesBox.less";

export function MessagesBox({messages}) {
  const elements = messages.map((item) => {
    return (
      <div key={item.id} className="messages-item">
        {item.userName}: {item.text}
      </div>
    );
  });

  return <div className="messages">{elements}</div>;
}
