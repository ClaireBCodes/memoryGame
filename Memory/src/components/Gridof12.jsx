import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BootstrapTile } from "./BootstrapTile";

export function Gridof12() {
  const tiles1 = ["A", "B", "C", "D", "E", "F"];
  const tiles2 = ["a", "b", "c", "d", "e", "f"];
  const tilesAll = tiles1.concat(tiles2);

  return (
    <Container className="mt-4">
      <Row style={{ maxWidth: 720 }} className="d-flex justify-content-center ">
        {tilesAll.map((tile, index) => (
          <Col 
            key={index}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-4"
          >
            <BootstrapTile symbol={tile} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
