import React, { useState, useContext, createContext } from "react";

// 1. Create the context
const GameOptionsContext = createContext();

// 2. Create the provider
export const GameOptionsProvider = ({ children }) => {
  const [boardSize, setBoardSize] = useState(12);
  const [matchStyle1, setMatchStyle1] = useState("upperCase");
  const [matchStyle2, setMatchStyle2] = useState("upperCase");

  return (
    <GameOptionsContext.Provider
      value={{
        boardSize,
        setBoardSize,
        matchStyle1,
        setMatchStyle1,
        matchStyle2,
        setMatchStyle2,
      }}
    >
      {children}
    </GameOptionsContext.Provider>
  );
};

// 3. Custom hook to access the options
export const useGameOptions = () => useContext(GameOptionsContext);
