import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BootstrapTile } from "./BootstrapTile";
import { GameLogicContext } from "../context/GameLogic";

export function Gridof12() {
  const { tileState } = React.useContext(GameLogicContext);
  console.log("tilestate", tileState)

  //would like this just to handeaqdle the display of the tiles
  //will have 12, 16 and 20 as the options
  //if screen narrow, will display longer axis vertically

  //will call gameLogic with the size of the board and the match option
  // gameLogic will return the list of tiles to display 

  return (
    <Container className="mt-4">
      <Row style={{ maxWidth: 720 }} className="d-flex justify-content-center ">
        {tileState.map((tile, index) => (
          <Col
            key={index}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-4"
          >
            <BootstrapTile tile={tile} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
