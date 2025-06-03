import Card from "react-bootstrap/Card";

export function BootstrapTile({symbol, isFlipped, isMatched, onClick}) {

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
          border: "6px solid",  // custom green border
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

//AI suggested
  // return (
  //   <div
  //     onClick={onClick}
  //     style={{ position: "relative", width: "100%", paddingTop: "100%" }}
  //   >
  //     <div
  //       className={`tile-inner ${isFlipped || isMatched ? "flipped" : ""}`}
  //       style={{
  //         position: "absolute",
  //         top: 0,
  //         left: 0,
  //         width: "100%",
  //         height: "100%",
  //         border: "2px solid #198754",
  //         backgroundColor: isMatched ? "#d4edda" : "#f8f9fa",
  //         color: "#198754",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         transition: "transform 0.6s",
  //         transformStyle: "preserve-3d",
  //         transform: isFlipped || isMatched ? "rotateY(180deg)" : "none",
  //       }}
  //     >
  //       <div
  //         className="front"
  //         style={{ position: "absolute", backfaceVisibility: "hidden" }}
  //       >
  //         {/* Face down side (e.g. with background image) */}
  //       </div>
  //       <div
  //         className="back"
  //         style={{
  //           transform: "rotateY(180deg)",
  //           backfaceVisibility: "hidden",
  //           position: "absolute",
  //         }}
  //       >
  //         <span>{symbol}</span>
  //       </div>
  //     </div>
  //   </div>
  // );
}


