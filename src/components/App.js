import React, {useState, useEffect} from "react";
import BotsPage from "./BotsPage";

function App() {
  const [botCollection, setBotCollection] = useState([]);
  const [checkBotCollection, setCheckBotCollection] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
        .then((r) => r.json())
        .then((data) => {
          setBotCollection(data);
        })
        .catch((err) => { 
            console.log(err.message);
        });
}, [checkBotCollection]);

  return (
    <div className="App">
      <BotsPage botCollection = {botCollection} 
      setBotCollection = {setBotCollection} 
      setCheckBotCollection = {setCheckBotCollection}
      />
    </div>
  );
}

export default App;
