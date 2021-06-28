import {MessagesBox} from "../MessagesBox";
import {MessagesInput} from "../MessagesInput";
import {ErrorBox} from "../ErrorBox";
import {Loader} from "../Loader";

export function App() {
  const messages = [
    {id: "123", userName: "user", text: "sadafsdafsafdsa"},
    {id: "124", userName: "user1", text: "sadafsdafsafdsa"},
    {id: "125", userName: "user1", text: "sadafsdafsafdsa"},
    {id: "126", userName: "user2", text: "sadafsdafsafdsa"},
    {id: "127", userName: "user", text: "sadafsdafsafdsa"},
    {id: "128", userName: "user3", text: "sadafsdafsafdsa"},
    {id: "129", userName: "user3", text: "sadafsdafsafdsa"},
    {id: "120", userName: "user5", text: "sadafsdafsafdsa"},
    {id: "130", userName: "user6", text: "sadafsdafsafdsa"},
    {id: "131", userName: "user7", text: "sadafsdafsafdsa"},
  ];
  return (
    <div>
      <MessagesBox messages={messages}/>
      <MessagesInput/>
      <ErrorBox errorText="error"/>
      <Loader/>
    </div>
  );
}
