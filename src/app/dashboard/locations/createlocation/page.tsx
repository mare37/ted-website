"use client";

import { useRef, useState } from "react";
import "./page.modules.css";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import PopUp from "../../popup/popup";
import { useGlobalContext } from "@/app/context/store";
import { FILE } from "dns";
import { postLocation } from "@/app/utils/locations";

function CreateLocation() {
  const [contentSaved, setContentSaved] = useState(false);
  const { popup, setPopup } = useGlobalContext();
  const [town, setTown] = useState("");
  const [county, setCounty] = useState("");
  const [description, setDescription] = useState("");
  const [trees, setTrees] = useState("");
  const [individuals, setIndividuls] = useState("");
  const [file, setPhoto] = useState<File>();
  const [fileName, setPhotoName] = useState<String | null>("");

  window.onpopstate = (event) => {
    setPopup(false);
    console.log(
      `location: ${document.location}, state: ${JSON.stringify(event.state)}`
    );
  };

  const savePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files;

    console.log(file);
    setPhoto(e.target.files[0]);

    const filename = file[0].name;

    setPhotoName(fileName);
  };

  /*   const log = () => {

   
            if(title.length === 0 || content.length === 0){

                  console.log("One of the fields is empty");
                
                }else{
                 
                }


     
    }*/

  if (description.length === 200) {
  }

  return (
    <div className="create-location">
      <div className="create-location-title">
        <input
          placeholder="Town"
          onChange={(e) => {
            setTown(e.target.value);
          }}
        />
        <input
          placeholder="County"
          onChange={(e) => {
            setCounty(e.target.value);
          }}
        />
      </div>

      <form className="upload-picture">
        Upload Location Picture
        <input type="file" onChange={savePhoto} />
      </form>

      <textarea
        className="create-location-description"
        maxLength={260}
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <div>
        <input
          placeholder="Trees planted?"
          onChange={(e) => {
            setTrees(e.target.value);
          }}
        />
        <input
          placeholder="Individuals employed?"
          onChange={(e) => {
            setIndividuls(e.target.value);
          }}
        />
      </div>

      <div></div>

      <div className="create-location-button">
        <button
          onClick={() => {
            setPopup(true);
          }}
        >
          Create Location
        </button>
      </div>

      <PopUp
        town={town}
        county={county}
        description={description}
        successMessage={"Location Created Successfully "}
        loadingMessage={"Creating Location..."}
        actionMessage={"Create Location?"}
        errorMessage={"Error, something is wrong"}
        numberOftrees={trees}
        numberOfIndividuals={individuals}
        function={postLocation}
        file={file}
      />
    </div>
  );
}

export default CreateLocation;
