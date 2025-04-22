import "./App.css";
import React from "react";
import { useState } from "react";
import ShiritoriBoard from "./components/ShiritoriBoard";
import InputForm from "./components/InputForm";

function App() {
  const [shiritori, setShiritori] = useState([]);
  const [name, setName] = useState(localStorage.getItem("userName") || "");

  const handleAddWord = (newWord) => {
    if (shiritori.length > 0) {
      let lastWord = shiritori[shiritori.length - 1]; // 配列の最後の単語を取得
      if (lastWord.slice(-1) !== newWord[0]) {
        alert("Illegal move! Start with the last letter of the previous word");
        return;
      }
    }

    setShiritori([...shiritori, newWord]); // 配列に新しい単語を追加
  };

  const handleSetName = (newName) => {
    setName(newName);
    localStorage.setItem("userName", newName);
  };

  return (
    <div className="App">
      <ShiritoriBoard shiritori={shiritori} name={name} />
      <InputForm
        onAddWord={handleAddWord}
        onSetName={handleSetName}
        name={name}
      />
    </div>
  );
}

export default App;
