"use client";

import { useEffect, useRef, useState } from "react";
import "./page.modules.css";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
//import PopUp from "../popup/popup";
//import PopUp from "../popup/popup";
import PopUp from "../../popup/popup";
import { useGlobalContext } from "@/app/context/store";
import { postStory } from "@/app/utils/stories";

function CreateStory() {
  const [contentSaved, setContentSaved] = useState(false);
  const { popup, setPopup, setCreateStory, setError, setIsLoading } =
    useGlobalContext();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [file, setPhoto] = useState<File>();
  const [fileName, setPhotoName] = useState<String | null>("");

  window.onpopstate = (event) => {
    setPopup(false);
    console.log(
      `location: ${document.location}, state: ${JSON.stringify(event.state)}`
    );
  };

  useEffect(() => {
    setCreateStory(false);
    setError(false);
    setIsLoading(false);
  }, []);

  const savePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files;

    console.log(file);
    setPhoto(e.target.files[0]);

    const filename = file[0].name;

    setPhotoName(fileName);
  };

  const editorRef = useRef<TinyMCEEditor | null>(null);
  const log = () => {
    setContentSaved(true);
    if (editorRef.current) {
      let text = editorRef.current.getContent();
      setContent(text);

      if (title.length === 0 || content.length === 0) {
        console.log("One of the fields is empty");
      } else {
        setContentSaved(true);
        console.log(text);
      }
    }
  };

  console.log(contentSaved);

  return (
    <div className={popup ? "create-story cover-screen" : "create-story"}>
      <div className="create-story-title">
        <input
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div className="create-story-select">
        <p>
          Select story options <span>*</span>{" "}
        </p>

        <select
          onChange={(e) => {
            setTag(e.target.value);
          }}
        >
          <option className="first-option" value="">
            OPTIONS
          </option>
          <option value="EMPLOYEE STORY">EMPLOYEE STORY:</option>
          <option value="PARTNER STORY">PARTNER STORY:</option>
          <option value="VIDEO">VIDEO:</option>
          <option value="STORY">STORY:</option>
          <option value="NEWS UPDATE">NEWS UPDATE:</option>
        </select>
      </div>

      <form className="upload-picture">
        Upload Journal Picture
        <input type="file" onChange={savePhoto} />
      </form>

      <div>
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>Welcome Mr Ted!! Happy writing</p>"
          init={{
            height: 300,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />

        {!contentSaved ? (
          <button className="create-story-log-button" onClick={log}>
            Save Content
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="create-story-button">
        {contentSaved ? (
          <button
            onClick={() => {
              setPopup(true);
            }}
          >
            Create Story
          </button>
        ) : (
          ""
        )}
      </div>

      <PopUp
        title={title}
        tag={tag}
        content={content}
        successMessage={"Story Created Successfully "}
        loadingMessage={"Creating Story..."}
        actionMessage={"Create Story?"}
        errorMessage={"Error, something is wrong"}
        function={postStory}
        file={file}
      />
    </div>
  );
}

export default CreateStory;
