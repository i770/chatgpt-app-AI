import React from 'react';

const YourBotArmy = ({ army, onRelease }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length > 0 ? (
        army.map((bot) => (
          <div key={bot.id} className="army-bot">
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt={bot.name} />
            <div className="bot-actions">
              {/* Discharge button to remove bot from the army */}
              <button className="discharge-btn" onClick={() => onRelease(bot)}>
                Discharge
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No bots enlisted yet!</p>
      )}
    </div>
  );
};

export default YourBotArmy;