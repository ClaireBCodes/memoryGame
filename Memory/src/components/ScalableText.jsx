import { useState, useEffect, useRef } from "react";

const makeViewBox = (bbox) => {
  return `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`;
};

export function ScalableText({ text }) {
  const ref = useRef(null);
  const [bbox, setBbox] = useState(null);

  useEffect(() => {
    if (ref.current) {
      setBbox(ref.current.getBBox());
    }
  }, [text]);

  return (
    <svg 
      ref={ref}
      width="100%"
      height="100%"
      viewBox={bbox ? makeViewBox(bbox) : ""}
      style={{
        visibility: bbox ? "visible" : "hidden",
      }}
    >
      <text>{text}</text>
    </svg>
  );
}
