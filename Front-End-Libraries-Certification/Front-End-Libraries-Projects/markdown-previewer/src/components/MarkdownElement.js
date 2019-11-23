import React from "react";
import marked from "marked";

export default function MarkdownElement({ text }) {
  marked.setOptions({
    breaks: true
  });

  let html = marked(text || "");

  return <div id="preview" dangerouslySetInnerHTML={{ __html: html }} />;
}
