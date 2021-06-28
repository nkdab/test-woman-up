import './MessagesBox.less';

export function MessagesBox({messages}) {
  const elements = messages.map(item => {
    return <div key={item.id}> {item.userName}: {item.text} </div>
  })
  return (
    <div className="container">
      <div className="messages">
        {messages ? elements : 'Here no messages yet...'}
      </div>
    </div>
  )
}