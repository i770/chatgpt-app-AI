import React, { useEffect, useRef } from "react";

const ChatWindow = ({ messages }) => {
  const chatContainerRef = useRef(null);

  // Automatically scroll to the bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const styles = {
    chatContainer: {
      flex: 1, // Takes up remaining space
      padding: "15px",
      overflowY: "auto", // Makes the chat window scrollable
      backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "10px", // Adds space between messages
    },
    userMessage: {
      alignSelf: "flex-end", // Aligns user messages to the right
      backgroundColor: "#8B4513", // SaddleBrown background for user messages
      color: "white", // White text
      borderRadius: "15px 15px 0 15px", // Rounded corners for user messages
      padding: "10px 15px",
      maxWidth: "70%",
      wordWrap: "break-word",
    },
    catMessage: {
      alignSelf: "flex-start", // Aligns AI messages to the left
      backgroundColor: "#DEB887", // Burlywood background for AI messages
      color: "black", // Black text
      borderRadius: "15px 15px 15px 0", // Rounded corners for AI messages
      padding: "10px 15px",
      maxWidth: "70%",
      wordWrap: "break-word",
    },
  };

  return (
    <div style={styles.chatContainer} ref={chatContainerRef} className="chat-window">
      {messages.map((message, index) => (
        <div
          key={index}
          style={message.sender === "user" ? styles.userMessage : styles.catMessage}
          className={`message ${message.sender}`}
        >
          <strong>{message.sender === "user" ? "You: " : "CatGPT: "}</strong>
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;