import React from "react";
import "./Message.css"

const Message = ({ text, sender }) => {
  // Determine the message alignment and styling based on the sender
  const isUser = sender === "user";
  const messageClass = isUser ? "user-message" : "ai-message";

  return (
    <div className={`message ${messageClass}`}>
      <div className="message-content">
        {text}
      </div>
    </div>
  );
};

export default Message;