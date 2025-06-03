import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BootstrapTile } from "./BootstrapTile";

export function Gridof12() {
  

  return (
    <Container className="mt-4">
      <Row style={{ maxWidth: 720 }} className="d-flex justify-content-center ">
        {tilePositions.map((tile, index) => (
          <Col
            key={index}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-4"
          >
            <BootstrapTile symbol={tile} isFlipped={true} isMatched={false} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
