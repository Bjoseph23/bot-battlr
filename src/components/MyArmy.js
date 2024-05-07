import React from "react";

function MyArmy({army, onRemoveBot}){
  
    
    return (
        <div className="selected">
          {army.map((bot) => (
            <div key={bot.id} className="card" >
              <img className="bot-image" src={bot.avatar_url} alt="This is a bot" />
              <h3>Name: {bot.name}</h3>
              <h4 >Bot Class: {bot.bot_class
              }</h4>
              <footer>
                <i id="icon" className="bx bxs-heart">
                  {bot.health}
                </i>
                <i id="icon" className="bx bx-dumbbell">
                  {bot.armor}
                </i>
                <i id="icon" className="bx bxs-shield-x">
                  {bot.damage}
                </i>
                <button
                className="ui mini red button"
                onClick={() => onRemoveBot(bot)}>
                  x
                </button>
              </footer>
            </div>
          ))}
        </div>
      );
    }

export default MyArmy