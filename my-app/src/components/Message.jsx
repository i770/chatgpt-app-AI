import React from "react";
import './Message.css'; // Optional: For styling

const Message = ({ text, isUser }) => {
  return (
    <div className={`message ${isUser ? "user" : "bot"}`}>
      {text}
    </div>
  );
};

export default Message;