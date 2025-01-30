import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection.jsx';
import YourBotArmy from './components/YourBotArmy.jsx';
import BotSpecs from './components/BotSpecs.jsx';
import './App.css';

const App = () => {
  const [army, setArmy] = useState([]);
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch bots from API
  useEffect(() => {
    fetch('https://bots-si0g.onrender.com/bots')
      .then((response) => response.json())
      .then((data) => {
        setBots(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to load bots');
        setLoading(false);
      });
  }, []);

  // Sorting function for bots
  const sortedBots = bots
    .filter((bot) => bot.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  // Enlist bot to the army
  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
      alert(`${bot.name} has been enlisted!`);

    }
    setSelectedBot(null); // Automatically return to collection after enlistment
  };

  // Release bot from army
  const releaseBot = (bot) => {
    if (window.confirm(`Are you sure you want to discharge ${bot.name}?`)) {


      setArmy(army.filter((b) => b.id !== bot.id)); // Remove bot from the army
    }
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      {loading && <p>Loading bots...</p>}
      {error && <p>{error}</p>}

  <div className="sort-bar">
    <input
      type="text"
      placeholder="Search for a bot"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
      <option value="asc">Sort by Name (A-Z)</option>
      <option value="desc">Sort by Name (Z-A)</option>
    </select>
  </div>

  <div className="content">
    {selectedBot ? (
      <BotSpecs bot={selectedBot} onEnlist={enlistBot} />
    ) : (
      <div className="collection-and-army">
        <BotCollection bots={sortedBots} setSelectedBot={setSelectedBot} />
        <YourBotArmy army={army} onRelease={releaseBot} />
      </div>
    )}
  </div>
</div>
  );
};

export default App;