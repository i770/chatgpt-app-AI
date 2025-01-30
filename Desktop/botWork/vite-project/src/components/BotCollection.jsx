import React from 'react';

const BotCollection = ({ bots, setSelectedBot }) => {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <div
          key={bot.id}
          className="bot-card"
          onClick={() => setSelectedBot(bot)} // Set selected bot to show details
        >
          <h3>{bot.name}</h3>
          <img src={bot.avatar_url} alt={bot.name} />
        </div>
      ))}
    </div>
  );
};

export default BotCollection;