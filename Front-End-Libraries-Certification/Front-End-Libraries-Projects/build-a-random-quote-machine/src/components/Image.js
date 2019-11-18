import React from "react";

export default function Image({ image, character }) {
  return <img src={image} alt={`Simpsons character: ${character}`} />;
}
