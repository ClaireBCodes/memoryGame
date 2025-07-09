import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { defaultBoard, niceText } from "../tools/boardUtils";

export function OptionsList({ newBoard }) {
  //set default for each dropdown - default game condition
  //will display in the title field the current setting as saved in context
  //on change will set the game condition into context, and display the new setting in the title field
  const [boardSize, setBoardSize] = useState(defaultBoard.boardSize);
  const [matchStyle1, setMatchStyle1] = useState(defaultBoard.matchStyle1);
  const [matchStyle2, setMatchStyle2] = useState(defaultBoard.matchStyle2);

  const newGame = () => {
    newBoard({ boardSize, matchStyle1, matchStyle2 });
  };

  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home" className="bodyFont">
            Board Size:
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-boardsize" />
          <Navbar.Collapse id="navbar-boardsize">
            <Nav>
              <NavDropdown
                id="nav-dropdown-boardsize"
                title={`${boardSize} Cards`}
                className="me-4 "
              >
                <NavDropdown.Item onClick={() => setBoardSize(8)}>
                  8 Cards
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setBoardSize(12)}>
                  12 Cards
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setBoardSize(16)}>
                  16 Cards
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setBoardSize(20)}>
                  20 Cards
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home" className="bodyFont">
            Match Style:
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-matchstyle1" />
          <Navbar.Collapse id="navbar-matchstyle1">
            <Nav>
              <NavDropdown
                id="nav-dropdown-matchstyle1"
                title={niceText(matchStyle1)}
              >
                <NavDropdown.Item onClick={() => setMatchStyle1("lowerCase")}>
                  a : lower case
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setMatchStyle1("upperCase")}>
                  A : upper case
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setMatchStyle1("word")}>
                  apple : word
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setMatchStyle1("emoji")}>
                  🍎 : image
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="navbar-matchstyle2">
            <Nav>
              <NavDropdown id="nav-matchstyle2" title={niceText(matchStyle2)}>
                <NavDropdown.Item onClick={() => setMatchStyle2("lowerCase")}>
                  a : lower case
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setMatchStyle2("upperCase")}>
                  A : upper case
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setMatchStyle2("word")}>
                  apple : word
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setMatchStyle2("emoji")}>
                  🍎 : image
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <button onClick={newGame} className="bodyFont">New Game</button>
    </>
  );
}
