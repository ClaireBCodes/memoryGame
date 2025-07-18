
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
      <Container className="my-3 d-flex justify-content-center ">
        <button onClick={handleShow} className="bodyFont mx-3">
          Options
        </button>
        <button onClick={newGame} className="bodyFont mx-3">
          New Game
        </button>
      </Container>

      <Modal
        show={showOptions}
        onHide={handleClose}
        centered
        ClassName="options-border"
      >
        <Modal.Header className="options-background">
          <Modal.Title className="bodyFont">Game Options</Modal.Title>
        </Modal.Header>
        <Modal.Body className="options-background">
          <Container>
            <Row className="mb-3">
              <Col>
                <h5 className="bodyFont">How many cards on your board?</h5>
                <Dropdown>
                  <Dropdown.Toggle className="bodyFont w-auto text-wrap dropdown-theme">
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
                <h5 className="bodyFont">What would you like to match?</h5>
              </Col>
            </Row>

            <Row className="d-flex ">
              <Col xs="auto" className="d-flex">
                <Dropdown className="d-flex ">
                  <Dropdown.Toggle className="bodyFont w-auto text-wrap dropdown-theme">
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
              <Col xs="auto" className="d-flex">
                <h5 className="bodyFont"> with </h5>
              </Col>
              <Col xs="auto" className="d-flex">
                <Dropdown className="d-flex">
                  <Dropdown.Toggle className="bodyFont w-auto text-wrap dropdown-theme">
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
        <Modal.Footer className="options-background flex-column align-items-start">
          <h5 className="bodyFont mb-2">
            Start a new game to play your choices!
          </h5>
          <button className="bodyFont w-auto text-wrap" onClick={handleClose}>
            Save & close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
