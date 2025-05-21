import Card from "react-bootstrap/Card";

export function BootstrapTile({symbol, isFlipped, isMatched, onClick}) {

  // return (
  //   <Card className="border-success text-center" style={{ width: "8rem", height:"8rem" }} bg="light">
  //     <Card.Body className="d-flex flex-column justify-content-center align-items-center">
  //       <Card.Title className="text-success">{image}</Card.Title>
  //     </Card.Body>
  //   </Card>
  // );

    return (
    <div style={{ position: "relative", width: "100%", paddingTop: "100%" }}>
      <Card
        bg="light"
        className="border-success text-center"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "2px solid #198754", // custom green border
          backgroundColor: "#f8f9fa", // Bootstrap light bg
          color: "#198754", // Bootstrap success green
        }}
      >
        <Card.Body className="d-flex justify-content-center align-items-center p-0">
          <Card.Title className="w-100 m-0">{symbol}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}


