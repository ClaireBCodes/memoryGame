import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BootstrapTile } from "./BootstrapTile";
import { GameLogicContext } from "../context/GameLogic";
import { map } from "lodash";

export function Gridof12() {
  const { tileState, shuffled } = React.useContext(GameLogicContext);

  return (
    <Container className="mt-4">
      <Row style={{ maxWidth: 720 }} className="d-flex justify-content-center ">
        {map(shuffled, (tileKey) => (
          <Col
            key={tileKey}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-4"
          >
            <BootstrapTile tile={tileState[tileKey]} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
