import React, { useState, useContext, createContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// 1. Create the context
const GameOptionsContext = createContext();

// 2. Create the provider
export const GameOptionsProvider = ({ children }) => {
  const [boardSize, setBoardSize] = useState(12);
  const [matchStyle1, setMatchStyle1] = useState("upperCase");
  const [matchStyle2, setMatchStyle2] = useState("lowerCase");

  const handleBoardSizeChange = (size) => {
    setBoardSize(size);
  };

  const handleMatchStyle1Change = (style) => {
    setMatchStyle1(style);
  };

  const handleMatchStyle2Change = (style) => {
    setMatchStyle2(style);
  };

  const newGame = () => {
    // triggers GameLogic to rebuild the starting board with the new settings
  }

  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Board Size:</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-boardsize" />
          <Navbar.Collapse id="navbar-boardsize">
            <Nav>
              <NavDropdown
                id="nav-dropdown-boardsize"
                title={`${boardSize} Cards`}
              >
                <NavDropdown.Item onClick={() => handleBoardSizeChange(8)}>
                  8 Cards
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleBoardSizeChange(12)}>
                  12 Cards
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleBoardSizeChange(16)}>
                  16 Cards
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleBoardSizeChange(20)}>
                  20 Cards
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home">Match Style:</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-matchstyle1" />
          <Navbar.Collapse id="navbar-matchstyle1">
            <Nav>
              <NavDropdown id="nav-dropdown-matchstyle1" title={matchStyle1}>
                <NavDropdown.Item
                  onClick={() => handleMatchStyle1Change("lowerCase")}
                >
                  a
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleMatchStyle1Change("upperCase")}
                >
                  A
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleMatchStyle1Change("word")}
                >
                  Apple
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleMatchStyle1Change("emoji")}
                >
                  🍎
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="navbar-matchstyle2">
            <Nav>
              <NavDropdown id="nav-matchstyle2" title={matchStyle2}>
                <NavDropdown.Item
                  onClick={() => handleMatchStyle2Change("lowerCase")}
                >
                  a
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleMatchStyle2Change("upperCase")}
                >
                  A
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleMatchStyle2Change("word")}
                >
                  Apple
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleMatchStyle2Change("emoji")}
                >
                  🍎
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <button onClick={newGame}>New Game</button>

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
    </>
  );
};

// 3. Custom hook to access the options
export const useGameOptions = () => useContext(GameOptionsContext);
