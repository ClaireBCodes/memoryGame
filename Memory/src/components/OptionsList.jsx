import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useGameOptions } from "../context/GameOptions";

export function OptionsList() {
    //set default for each dropdown - default game condition
    //will display in the title field the current setting as saved in context
    //on change will set the game condition into context, and display the new setting in the title field
    const {
      boardSize,
      setBoardSize,
      matchStyle1,
      setMatchStyle1,
      matchStyle2,
      setMatchStyle2,
    } = useGameOptions();

    const handleBoardSizeChange = (size) => {
      setBoardSize(size);
    };

    const handleMatchStyle1Change = (style) => {
      setMatchStyle1(style);
    };

    const handleMatchStyle2Change = (style) => {
      setMatchStyle2(style);
    };

  return (
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
              <NavDropdown.Item onClick={() => handleMatchStyle1Change("word")}>
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
              <NavDropdown.Item onClick={() => handleMatchStyle2Change("word")}>
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
  );
}

function NavbarDarkExample() {
  
}