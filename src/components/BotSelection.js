import React, {useEffect,useState} from 'react'

function BotSelection() {
    const [bots, setbots]= useState(null)
    const [error, setError] = useState(null); // Store any errors

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
          BotSelection
          {bots.map((bot) => (
            <div key={bot.id}  className="card">
            <img src={bot.avatar_url} alt="This is a bot" />
            <h3>Name: {bot.name}</h3>
            <h4>Bot Class: {bot.bot_class}</h4>
          </div>
          ))}
        </div>
      );
    }
export default BotSelection
