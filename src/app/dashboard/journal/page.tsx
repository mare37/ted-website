"use client";

import Link from "next/link";
import "./page.modules.css";
import { ObjectId } from "mongoose";
//import PopUp from "./popup-dashboard/popup";

//import PopUp from "./popup/popup";
import PopUp from "../popup/popup";
import { deleteJournal } from "@/app/utils/journal";
import Sidebar from "@/app/portal_components/Sidebar/Sidebar";
import JournalsTableItem from "../components/JournalsTableItem/JournalsTableItem";
import { useGlobalContext } from "@/app/context/store";
import { useEffect, useState } from "react";
import JournalItem from "@/app/journal/JournalItem/JournalItem";

interface Journal {
  _id: ObjectId;
  title: string;
  journal: string;
}

function Journal() {
  const { sidebar, setSidebar, setPopup, popup } = useGlobalContext();

  const [journals, setJournals] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean | string>("");

  const [journalId, setJournalId] = useState("");
  const [journalName, setJournalName] = useState("");

  let counter = 1;

  const getData = async () => {
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/journals", {
        cache: "no-store",
      });
      return res.json();

      if (!res.ok) {
        setIsLoading(false);
        setError(true);
        throw new Error("Error");
      }
    } catch (error) {
      setIsLoading(false);
      setError(true);
      console.log(error);

      throw new Error("Error");
    }

    //const data =  await res.json();

    // console.log(data);
  };

  const getDataInfo = async () => {
    let data = await getData();
    //console.log(data.journals);

    data = data.journals.reverse();
    console.log(data);

    setJournals(data);
    setIsLoading(false);

    console.log(data);
  };

  useEffect(() => {
    getDataInfo();
  }, []);

  useEffect(() => {
    getDataInfo();
  }, [popup]);

  let journalsData;

  if (isLoading === true) {
    journalsData = <p>Loading...</p>;
  }

  if (isLoading === false) {
    if (journals.length === 0 && error === true) {
      journalsData = <p>Connection Error</p>;
    } else if (journals.length > 0) {
      journalsData = journals.map((item: Journal, key: number) => {
        return (
          <div key={key} className="table-item">
            <span className="table-item-no">{counter++}</span>
            <span className="table-item-title">{item.title}</span>
            <span className="table-item-buttons">
              <button className="tableItem-edit">
                {" "}
                <Link
                  href={`/dashboard/journal/editjournal/${item._id.toString()}`}
                >
                  Edit
                </Link>{" "}
              </button>
              <button
                className="tableItem-delete"
                onClick={() => {
                  setPopup(true);
                  setJournalId(item._id.toString());
                  setJournalName(item.title);
                }}
              >
                Delete
              </button>{" "}
            </span>
          </div>
        );

        /*<JournalsTableItem 
                   no={counter++}
                   key={key}
                   id={item._id}
                   title={item.title}
                   journal={item.journal}
               /> */
      });
    } else {
      journalsData = <p>No Journals</p>;
    }
  }

  return (
    <div className="dashboard">
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
          <h2>Journals</h2>

          <button className="create-new-journal">
            {" "}
            <Link href={"/dashboard/journal/createjournal"}>
              {" "}
              Create New Journal
            </Link>{" "}
          </button>

          <div className="table-container">
            <div className="table-heading">
              <span className="table-heading-no">No.</span>
              <span className="table-heading-title">Title</span>
              <span className="table-heading-buttons">Delete or Edit</span>
            </div>

            {journalsData}
          </div>
        </div>
      </div>

      <PopUp
        id={journalId}
        title={journalName}
        successMessage={"Journal Deleted Successfully "}
        loadingMessage={"Deleting Journal..."}
        actionMessage={"Delete Journal?"}
        errorMessage={"Error, something is wrong"}
        function={deleteJournal}
      />
    </div>
  );
}

export default Journal;
