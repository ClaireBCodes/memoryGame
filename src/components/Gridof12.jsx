import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BootstrapTile } from "./BootstrapTile";
import GameLogicContext from "../context/GameLogicContext";
import { map } from "lodash";

export function Gridof12() {
  const { tileState, shuffled } = React.useContext(GameLogicContext);

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Row style={{ maxWidth: 780 }} className="d-flex w-100">
        {map(shuffled, (tileKey) => (
          <Col
            key={tileKey}
            xs={4}
            md={3}
            className="d-flex justify-content-center mb-4"
          >
            <BootstrapTile tile={tileState[tileKey]} key={tileKey} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
