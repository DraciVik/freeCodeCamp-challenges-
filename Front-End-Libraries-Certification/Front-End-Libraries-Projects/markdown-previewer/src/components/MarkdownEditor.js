import React from "react";

export default function MarkdownEditor(props) {
  return (
    <div className="box editor">
      <label for="editor">
        <p className="heading">Editor</p>
        <textarea
          value={props.text}
          type="text"
          id="editor"
          name="editor"
          onChange={props.onChange}
        />
      </label>
    </div>
  );
}
