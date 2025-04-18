import React from "react";

const ShiritoriBoard = ({ shiritori, name }) => {
  return (
    <div>
      <h2>Shiritori Board</h2>
      <p>{name}</p>
      <ul className="shiritori">
        {shiritori && shiritori.length > 0 ? (
          shiritori.map((word, index) => (
            <li key={index}>{word}</li>
          ))
        ) : (
          <p>No words yet!</p>
        )}
      </ul>
    </div>
  );
};

export default ShiritoriBoard;