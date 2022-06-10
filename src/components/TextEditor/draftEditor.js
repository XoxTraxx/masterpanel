import style from "./style";
import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorComponent = () => {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

  const onEditorStateChange = (editorData) => {
    console.log("Editor State", editorData);
    setEditorState(editorData)
  };

  return (
    <Editor
      editorState={editorState}
      editorClassName="demo-editor"
      editorStyle={{ ...style.editorBox }}
      wrapperClassName="demo-wrapper"
      onEditorStateChange={(e)=>onEditorStateChange(e)}
    />
  );
};

export default EditorComponent;
