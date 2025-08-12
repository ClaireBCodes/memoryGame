import { useState, useEffect, useRef } from "react";

const makeViewBox = (bbox) => {
  return `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`;
};

export function ScalableText({ text, emoji }) {
  const ref = useRef(null);
  const [bbox, setBbox] = useState(null);

  useEffect(() => {
    if (ref.current) {
      setBbox(ref.current.getBBox());
    }
  }, [text]);

  // update so that font = true uses font-family: "Noto Color Emoji", sans-serif;
  const fontFamily = emoji
    ? '"Noto Color Emoji", sans-serif'
    : '"Winky Sans", sans-serif';

  return (
    <svg
      ref={ref}
      width="100%"
      height="100%"
      viewBox={bbox ? makeViewBox(bbox) : null}
      style={{
        visibility: bbox ? "visible" : "hidden",
      }}
    >
      <text
        style={{
          fontFamily,
          textAlign: "center",
        }}
      >
        {text}
      </text>
    </svg>
  );
}



