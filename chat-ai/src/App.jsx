import{useState} from "react";
import ChatWindow from ".components/ChatWindow";
import MessageInput from "./components/MessageInput";
import { fetchCatResponse } from "./api"; // Import API function



const App = () => {
  const [messages, setMessages] = useState ([]);

  const sendMessage = (userMessage) => {
    if(!userMessage.trim()) return;

    setMessages((prev) => [...prev, {sender: "user", text: userMessage}]);

    fetchCatResponse(userMessage)
    .then((catResponse) => {
      setMessages((prev) => [...prev, {sender: "cat", text: "Meow... I can't respond right now!"}]);
    });
  };

  return(
    <div>
      <h1>🐱 Cat GPT</h1>
      <ChatWindow  messages={messages}/>
      <MessageInput sendMessage={sendMessage}/>
    </div>
  )
}