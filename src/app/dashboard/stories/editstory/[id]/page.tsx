"use client";

import { useEffect, useRef, useState } from "react";
import "./page.modules.css";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
//import PopUp from "../popup/popup";
import PopUp from "@/app/dashboard/popup/popup";
import { useGlobalContext } from "@/app/context/store";
import { editStory } from "@/app/utils/stories";
import { usePost } from "@/app/Hooks/stories";
import { getOneStory } from "@/app/utils/stories";

import { useParams } from "next/navigation";

export async function getData(id: string) {
  console.log(id);

  const res = await fetch(`http://localhost:3000/api/stories/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });

  return res.json();
}

function EditStory() {
  const param = useParams();

  const [contentSaved, setContentSaved] = useState(false);
  const { popup, setPopup, setCreateStory, setError, setIsLoading, storyId } =
    useGlobalContext();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  /*window.onpopstate = (event) => {
    setPopup(false)
    console.log(
      `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
    );
  };*/

  useEffect(() => {
    setCreateStory(false);
    setError(false);
    setIsLoading(false);

    console.log(param.id);

    getOneStory(param.id).then((response) => {
      console.log(response);

      setTitle(response.story[0].title);
      setTag(response.story[0].tag);
      setContent(response.story[0].story);
    });
  }, []);

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
          value={title}
        />
      </div>

      <div className="create-story-select">
        <p>
          Select story options <span>*</span>{" "}
        </p>

        <select
          value={tag}
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

      <div>
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={content}
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
            Edit Story
          </button>
        ) : (
          ""
        )}
      </div>

      <PopUp
        id={param.id}
        title={title}
        tag={tag}
        content={content}
        successMessage={"Story Edited Successfully "}
        loadingMessage={"Editing Story..."}
        actionMessage={"Edit Story?"}
        errorMessage={"Error, something is wrong"}
        function={editStory}
      />
    </div>
  );
}

export default EditStory;
