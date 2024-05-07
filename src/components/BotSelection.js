import React, {useEffect,useState} from 'react'

function BotSelection({handleAddBot }) {
    const [bots, setbots]= useState(null)
    const [error, setError] = useState(null); 
    const handleDeleteBot = (botToDelete) => {
      fetch(`http://localhost:3000/bots/${botToDelete.id}`, {
        method: 'DELETE',})
        .then((response) => {
          const updatedBots = bots.filter((bot) => bot.id !== botToDelete.id);
          setbots(updatedBots); 
        })
        .catch((error) => { console.error('Error deleting bot:', error);
        });
    };
   
    useEffect(()=>{
        fetch("http://localhost:3000/bots")
        .then((response) => response.json())
        .then((data) => { setbots(data)})
        .catch((error) => {
            setError(error); })// Handle errors
    }, []);
    
    
    if (!bots) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>; // Display error message

    return (
        <div className="list">
          {bots.map((bot) => (
            <div key={bot.id}  className="card" >
            <img className="bot-image"src={bot.avatar_url} alt="This is a bot" />
            <h3>Name: {bot.name}</h3>
            <h4>Bot Class: {bot.bot_class}</h4>
            <button className="ui mini  button" onClick={() => handleAddBot(bot)}> Enlist Bot </button>
            <button
              className="ui mini red button" // Add a custom class for styling
              onClick={() => handleDeleteBot(bot)}
            >
              Delete Forever
            </button> 
            <footer>
                <i id="icon" className='bx bxs-heart'> {bot.health}  </i>
                <i id="icon" className='bx bx-dumbbell'> {bot.armor}   </i>
                <i id="icon"  className='bx bxs-shield-x'> {bot.damage} </i> 
            </footer>
          </div>
          ))}
          <div>
          
          </div>
        </div>
        
      );
    }
export default BotSelection
