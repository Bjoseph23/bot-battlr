import './App.css';
import 'boxicons/css/boxicons.min.css'
import BotSelection from './components/BotSelection';
import MyArmy from './components/MyArmy'
import React,{useState} from 'react';
import SortBar from './components/SortBar';

function App() {
  const [army, setArmy] = useState([]);
  const [bots, setBots] = useState(null);
  const [filteredBots, setFilteredBots] = useState( );

  const handleFilter = (selectedCategory) => {
    if (bots) { 
      if (selectedCategory === 'All') {
        setFilteredBots(bots);
      } else {
        const filtered = bots.filter((bot) => bot.category === selectedCategory);
        setFilteredBots(filtered);
      }
    } else {
      console.warn('Bots data is not yet loaded.'); // Optional: Handle loading state
    }
  };

  function handleAddBot(botToAdd) {
    const botInArmy = army.find((bot) => bot.id === botToAdd.id);
    if (!botInArmy) {
      setArmy((army) => [...army, botToAdd]);
    }
  }

  function handleRemoveBot(botToRemove) {
    setArmy((army) => army.filter((bot) => bot.id !== botToRemove.id));
  }

  return (
    <div className="App">
      <MyArmy army={army} onRemoveBot={handleRemoveBot} />
      <SortBar onFilter={handleFilter} />
      <BotSelection botlist={filteredBots} handleAddBot={handleAddBot} />
    </div>
  );
}

export default App;