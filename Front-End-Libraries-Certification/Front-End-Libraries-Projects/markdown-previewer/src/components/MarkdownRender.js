import React from "react";
import marked from "marked";

export default function MarkdownRender({ text }) {
  // Allows return button to render line breaks
  marked.setOptions({
    breaks: true
  });

  let html = marked(text || "");

  return (
    <div className="box render">
      <p className="heading">Rendered Output</p>
      <div id="preview" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
