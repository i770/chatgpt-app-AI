import React, { useState } from 'react';

function BotFilter({ onFilter }) {
  const [selectedClass, setSelectedClass] = useState('');

  const handleChange = (event) => {
    setSelectedClass(event.target.value);
    onFilter(event.target.value);
  };

  return (
    <div className="bot-filter">
      <label htmlFor="bot-class">Filter by Class: </label>
      <select id="bot-class" value={selectedClass} onChange={handleChange}>
        <option value="">All Classes</option>
        <option value="Support">Support</option>
        <option value="Medic">Medic</option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
        <option value="Captain">Captain</option>
        <option value="Witch">Witch</option>
      </select>
    </div>
  );
}

export default BotFilter;
