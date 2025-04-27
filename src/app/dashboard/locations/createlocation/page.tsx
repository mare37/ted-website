"use client";

/*import {  useState } from "react";
import "./page.modules.css";

import PopUp from "../../popup/popup";
import { useGlobalContext } from "@/app/context/store";

import { postLocation } from "@/app/utils/locations";

function CreateLocation() {
 
  const { setPopup } = useGlobalContext();
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

    

    setPhotoName(fileName);
  };

 

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

export default CreateLocation;*/

const CreateLocation = ()=>{



  return (<div>create location</div>)
}

export default CreateLocation
