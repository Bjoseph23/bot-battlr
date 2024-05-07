import React, {useEffect,useState} from 'react'

function BotSelection({handleAddBot }) {
    const [bots, setbots]= useState(null)
    const [error, setError] = useState(null); 
   
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
            <div key={bot.id}  className="card" onClick={() => handleAddBot(bot)}>
            <img className="bot-image"src={bot.avatar_url} alt="This is a bot" />
            <h3>Name: {bot.name}</h3>
            <h4>Bot Class: {bot.bot_class}</h4>
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
