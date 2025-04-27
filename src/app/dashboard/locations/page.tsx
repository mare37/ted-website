"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/app/portal_components/Sidebar/Sidebar";
import { useGlobalContext } from "@/app/context/store";
import Link from "next/link";

import "./page.modules.css";
import { useRouter } from "next/navigation";
import { getLocations } from "@/app/utils/locations";
import { ObjectId } from "mongoose";
import { deleteLocation } from "@/app/utils/locations";
import PopUp from "../popup/popup";

/*const locationTableItem = <div className="table-item"  >
         <span className="table-item-no">{no}</span>
                    <span   onClick={()=>{router.push(`/journal/${id}`)}}     className="table-item-title" >{title}</span>
                    <span className="table-item-buttons"> 
                    <button className="tableItem-edit"  onClick={()=>{setJournalId(id.toString())}}  >   <Link href={`/dashboard/journal/editjournal/${id.toString()}`}>Edit</Link>    </button>
                    
                    <button className="tableItem-delete"  onClick={()=>{ setPopup(true); setJournalId(id.toString()); setJournalTitle(title)  }} >Delete</button>  </span>
    </div>*/

interface location {
  _id: ObjectId;
  town: string;
  county: string;
  content: string;
  numberOftrees: string;
  numberOfIndividuals: string;
  imageName: string;
}

function Locations() {
  let counter = 1;
  const router = useRouter();

  const { sidebar, setSidebar, setPopup } = useGlobalContext();
  const [locations, setLocations] = useState([]);
  const [locationId, setLocationId] = useState("");
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    getLocations().then((response) => {
      console.log(response);
      setLocations(response.reverse());
    });
  }, []);

  //<Link href={`/dashboard/journal/editjournal/${id.toString()}`}>Edit</Link>

  return (
    <div>
      <Sidebar />

      <div className={sidebar ? "mainbar after" : "mainbar"}>
        <div className="mainbar-nav">
          {" "}
          <img
            className="mainbar-nav-humburger"
            onClick={() => {
              setSidebar((prev: boolean) => {
                console.log(prev);
                return !prev;
              });
            }}
            src="../humburger-icon.png"
          />{" "}
          <div>
            {" "}
            <img src="../men-digging.jpg" /> <p>Welcome Ted</p>{" "}
          </div>{" "}
        </div>

        <div className="mainbar-body">
          <h2>Locations</h2>

          <button className="create-new-location">
            {" "}
            <Link href={"/dashboard/locations/createlocation"}>
              {" "}
              Create New Location
            </Link>{" "}
          </button>

          <div className="table-container">
            <div className="table-heading">
              <span className="table-heading-no">No.</span>
              <span className="table-heading-title">Location</span>
              <span className="table-heading-buttons">Edit or Delete</span>
            </div>

            {locations.map((item: location, key) => {
              return (
                <div key={key} className="table-item">
                  <span className="table-item-no">{counter++}</span>
                  <span className="table-item-title">{`${item.town}, ${item.county}`}</span>
                  <span className="table-item-buttons">
                    <button className="tableItem-edit">
                      {" "}
                      <Link
                        href={`/dashboard/locations/editlocation/${item._id.toString()}`}
                      >
                        Edit
                      </Link>{" "}
                    </button>
                    <button
                      className="tableItem-delete"
                      onClick={() => {
                        setPopup(true);
                        setLocationId(item._id.toString());
                        setLocationName(`${item.town}, ${item.county}`);
                      }}
                    >
                      Delete
                    </button>{" "}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <PopUp
        id={locationId}
        location={locationName}
        successMessage={"Location Deleted Successfully "}
        loadingMessage={"Deleting Location..."}
        actionMessage={"Delete Location?"}
        errorMessage={"Error, something is wrong"}
        function={deleteLocation}
      />
    </div>
  );
}

export default Locations;
