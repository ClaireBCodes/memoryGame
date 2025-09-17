export function ScalableText({ text, emoji }) {
  const fontSize = text.length == 1 ? 80 : `${160 / text.length}`;

  const fontFamily = emoji
    ? '"Noto Color Emoji", sans-serif'
    : '"Winky Sans", sans-serif';

  return (
    <div
      style={{
        textAlign: "center",
        containerType: "size",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          fontFamily,
          fontSize: `${fontSize}cqmin`,
          lineHeight: "100cqmin",
          margin: 0,
        }}
      >
        {text}
      </div>
    </div>
  );
}
