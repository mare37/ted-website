import "./popup.modules.css";
import { usePathname, useParams } from "next/navigation";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { usePost } from "@/app/Hooks/stories";
import { determinePath } from "./determinepath";
import Upload from "@/app/utils/upload";

interface Journal {
  title: string;
  tag: string;
  content: string;
  successMessage: string;
  loadingMessage: string;
  actionMessage: string;
  errorMessage: string;
}

function PopUp(props: any) {
  const router = useRouter();
  const pathname = usePathname();
  const { popup, setPopup } = usePost();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [createLocation, setCreateLocation] = useState(false);

  // console.log(pathname);

  const { id } = useParams();

  const getCurrentPathWithoutLastPart = () => {
    return location.pathname.slice(0, location.pathname.lastIndexOf("/"));
  };

  const handlePath = () => {
    if (id !== undefined) {
      const path = getCurrentPathWithoutLastPart();
      determinePath(path, router);
    } else {
      determinePath(pathname, router);
    }
  };

  const handleFunction = async () => {
    console.log(props.function);

    if (props.function.name === "postLocation") {
      console.log(props.town);
      console.log(props.numberOfIndividuals);

      setIsLoading(true);
      const response = await props.function(
        props.town,
        props.county,
        props.description,
        props.numberOftrees,
        props.numberOfIndividuals
      );

      if (response.locationPosted) {
        setIsLoading(false);
        setCreateLocation(true);
      } else {
        setIsLoading(false);
        setError(true);
      }

      console.log(response);

      Upload(props.file, response.response.id, "locationUpload");

      /*   const formData = new FormData();
          const file = props.file

          if (!file) return;
          console.log(file);
          
          formData.append("file", file);
          formData.append("id", response.response.id);
         formData.append("fileName", file.name);
         formData.append("identity", "locationUpload");

          const res1 = await fetch("http://localhost:3000/api/upload", {
            method: 'POST',
          
            body: formData 
          })
    
          
          const response1 =  await res1.json() 
        
        console.log(response1);*/
    }

    if (props.function.name === "deleteLocation") {
      console.log(props.id);
      setIsLoading(true);

      const response = await props.function(props.id);

      if (response) {
        setCreateLocation(true);
      } else {
        setIsLoading(false);
        setError(true);
      }
    }

    if (props.function.name === "editLocation") {
      console.log("Yes Edit");

      console.log(props.description);

      setIsLoading(true);
      const response = await props.function(
        props.town,
        props.county,
        props.description,
        props.numberOftrees,
        props.numberOfIndividuals,
        props.id
      );

      console.log(response);
      if (response) {
        setCreateLocation(true);
      } else {
        setIsLoading(false);
        setError(true);
      }
    }

    if (props.function.name === "deleteJournal") {
      console.log(props.id);
      setIsLoading(true);

      const response = await props.function(props.id);

      console.log(response);

      if (response) {
        setIsLoading(false);
        setCreateLocation(true);
      } else {
        setIsLoading(false);
        setError(true);
      }
    }

    if (props.function.name === "editJournal") {
      console.log(props.id);
      setIsLoading(true);

      const response = await props.function(
        props.title,
        props.content,
        props.id
      );

      console.log(response);

      if (response) {
        setIsLoading(false);
        setCreateLocation(true);
      } else {
        setIsLoading(false);
        setError(true);
      }
    }

    if (props.function.name === "postJournal") {
      console.log(props.id);
      setIsLoading(true);

      const response = await props.function(
        props.title,
        props.content,
        props.file
      );

      console.log(response);

      if (response.photoUploaded || response.journalPosted) {
        setIsLoading(false);
        setCreateLocation(true);
      } else {
        setIsLoading(false);
        setError(true);
      }
    }

    if (props.function.name === "deleteStory") {
      console.log(props.id);
      setIsLoading(true);

      const response = await props.function(props.id);

      console.log(response);

      if (response) {
        setIsLoading(false);
        setCreateLocation(true);
      } else {
        setIsLoading(false);
        setError(true);
      }
    }

    if (props.function.name === "postStory") {
      console.log(props.id);
      setIsLoading(true);

      const response = await props.function(
        props.title,
        props.tag,
        props.content
      );

      console.log(response);

      if (response) {
        setIsLoading(false);
        setCreateLocation(true);
      } else {
        setIsLoading(false);
        setError(true);
      }
    }

    if (props.function.name === "editStory") {
      console.log("Yes Edit");
      setIsLoading(true);
      const response = await props.function(
        props.title,
        props.tag,
        props.content,
        props.id
      );

      if (response) {
        setIsLoading(false);
        setCreateLocation(true);
      } else {
        setIsLoading(false);
        setError(true);
      }
    }
  };

  return (
    <div className={popup ? "popup" : "popup remove"}>
      {createLocation ? (
        <div className="popup-create-story">
          <p>{props.successMessage}</p>

          <div>
            <button
              onClick={() => {
                setPopup(false);
                setCreateLocation(false);
                handlePath();
              }}
            >
              ok
            </button>
          </div>
        </div>
      ) : (
        <div className="popup-create-story">
          <p>{props.actionMessage}</p>

          <div>
            <button onClick={handleFunction}>Yes</button>

            <button
              onClick={() => {
                setPopup(false);
              }}
            >
              No
            </button>
          </div>

          <div
            className={
              isLoading
                ? "popup-create-story2-child"
                : "popup-create-story2-child removeloading"
            }
          >
            <p>{props.loadingMessage}</p>
          </div>

          <div
            className={
              error
                ? "popup-create-story2-child-ERROR"
                : "popup-create-story2-child-ERROR remove"
            }
          >
            <p>{props.errorMessage}</p>

            <button
              onClick={() => {
                setPopup(false);
                setError(false);
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUp;
