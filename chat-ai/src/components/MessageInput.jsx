import React, { useState } from "react";

const MessageInput = ({ sendMessage }) => {
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim()) {
      sendMessage(inputText);
      setInputText("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const styles = {
    inputContainer: {
      display: "flex",
      padding: "10px",
      backgroundColor: "#fff",
      borderTop: "1px solid #ddd",
      gap: "10px", // Adds space between input and button
    },
    input: {
      flex: 1,
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "16px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.inputContainer}>
      <input
        type="text"
        placeholder="Type a message..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeyPress}
        style={styles.input}
      />
      <button onClick={handleSend} style={styles.button}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;