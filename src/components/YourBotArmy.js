import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botBasket, removeBot, dischargeBot}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botBasket.map((bot) => {
            return (
              <BotCard key={`${bot.name}${bot.id}`} bot={bot} handleBots={removeBot} dischargeBot={dischargeBot} />
            )
          })}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
