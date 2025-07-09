
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { defaultBoard, niceText } from "../tools/boardUtils";
import { Button, Modal, Dropdown, Container, Row, Col } from "react-bootstrap";

export function OptionsList({ newBoard }) {
  //set default for each dropdown - default game condition
  //will display in the title field the current setting as saved in context
  //on change will set the game condition into context, and display the new setting in the title field
  const [boardSize, setBoardSize] = useState(defaultBoard.boardSize);
  const [matchStyle1, setMatchStyle1] = useState(defaultBoard.matchStyle1);
  const [matchStyle2, setMatchStyle2] = useState(defaultBoard.matchStyle2);

  // modal controls
  const [showOptions, setShowOptions] = useState(false);
  const handleClose = () => setShowOptions(false);
  const handleShow = () => setShowOptions(true);

  const newGame = () => {
    newBoard({ boardSize, matchStyle1, matchStyle2 });
  };

  return (
    <>
      <Container className="my-3 d-flex justify-content-evenly">
        <button onClick={handleShow} className="bodyFont">
          Options
        </button>
        <button onClick={newGame} className="bodyFont">
          New Game
        </button>
      </Container>

      <Modal show={showOptions} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="bodyFont">Game Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="mb-3 ">
              <Col>
                <h5 className="bodyFont">How many cards on your board?</h5>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" className="bodyFont ">
                    {boardSize} Cards
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {[8, 12, 16, 20].map((size) => (
                      <Dropdown.Item
                        key={size}
                        onClick={() => setBoardSize(size)}
                      >
                        {size} Cards
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <h5 className="bodyFont">
                  What type of match would you like to make?
                </h5>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" className="bodyFont">
                    {niceText(matchStyle1)}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {["lowerCase", "upperCase", "word", "emoji"].map(
                      (style) => (
                        <Dropdown.Item
                          key={style}
                          onClick={() => setMatchStyle1(style)}
                        >
                          {niceText(style)}
                        </Dropdown.Item>
                      )
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>

            <Row>
              <Col>
                <h5 className="bodyFont"> with </h5>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" className="bodyFont">
                    {niceText(matchStyle2)}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {["lowerCase", "upperCase", "word", "emoji"].map(
                      (style) => (
                        <Dropdown.Item
                          key={style}
                          onClick={() => setMatchStyle2(style)}
                        >
                          {niceText(style)}
                        </Dropdown.Item>
                      )
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
