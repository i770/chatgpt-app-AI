import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import { fetchCatResponse } from "./components/api";
import footprintImage from "./images/footprint.png"; // Import the footprint image

const App = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (userMessage) => {
    if (!userMessage.trim()) return;

    // Add the user's message to the chat
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);

    try {
      // Fetch the cat's response from the API
      const catResponse = await fetchCatResponse(userMessage);
      setMessages((prev) => [...prev, { sender: "cat", text: catResponse }]);
    } catch (error) {
      console.error("Error fetching cat response:", error);
      // Add an error message to the chat if the API fails
      setMessages((prev) => [...prev, { sender: "cat", text: "Meow... Something went wrong!" }]);
    }
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.header}>🐱 Cat GPT</h1>
      <div style={styles.footprintBackground}>
        <ChatWindow messages={messages} />
      </div>
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
};

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100vh", // Full viewport height
    maxWidth: "600px", // Limit the width for better readability
    margin: "0 auto", // Center the app
    backgroundColor: "#f5f5dc", // Light beige background
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#8B4513", // SaddleBrown header
    color: "white",
    margin: "0",
    padding: "15px",
    textAlign: "center",
    fontSize: "24px",
  },
  footprintBackground: {
    flex: 1,
    padding: "15px",
    backgroundColor: "#d2b48c", // Light brown background for empty spaces
    backgroundImage: `url(${footprintImage})`, // Add footprint image
    backgroundRepeat: "repeat", // Repeat the footprint image
    backgroundSize: "50px", // Adjust the size of the footprint image
    overflowY: "auto", // Make the chat window scrollable
  },
};

export default App;