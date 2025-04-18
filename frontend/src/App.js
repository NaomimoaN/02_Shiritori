import './App.css';
import React from "react";
import {useState, useEffect} from "react";
import ShiritoriBoard from "./components/ShiritoriBoard";
import InputForm from "./components/InputForm";

function App() {

  const [shiritori, setShiritori] = useState([]);
  const [name, setName] = useState("");

  const handleAddWord = (word, name) => {
    setShiritori([...shiritori, word]);
    setName(name);
  };
  
  return (
    <div className="App">
      <ShiritoriBoard shiritori={shiritori} name={name}/>
      <InputForm onAddWord={handleAddWord} />
    </div>
  );
}

export default App;
