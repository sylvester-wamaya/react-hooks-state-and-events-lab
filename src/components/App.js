import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [darkeMode, setDarkMode]=useState(false);

  function setMode(){
    setDarkMode((darkeMode)=>!darkeMode);
  }
  const appClass = darkeMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={setMode} >{darkeMode ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
