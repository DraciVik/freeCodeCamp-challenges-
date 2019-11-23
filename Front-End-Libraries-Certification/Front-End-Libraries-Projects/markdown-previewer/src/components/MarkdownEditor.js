import React from "react";

export default function MarkdownEditor(props) {
  return (
    <label for="editor">
      Editor
      <textarea
        value={props.text}
        type="text"
        id="editor"
        name="editor"
        onChange={props.onChange}
      />
    </label>
  );
}
