"use client";

import "./page.modules.css";
import Link from "next/link";
import { useEffect, useState } from "react";

import Sidebar from "@/app/portal_components/Sidebar/Sidebar";
import StoriesTableItem from "../components/StoriesTableItem/StoriesTableItem";
import { useGlobalContext } from "@/app/context/store";
import { useGetStories } from "@/app/Hooks/stories";
import { usePost } from "@/app/Hooks/stories";
import { deleteStory } from "@/app/utils/stories";
import { ObjectId } from "mongoose";
//import PopUp from "./popup/popup";
import PopUp from "../popup/popup";

interface Story {
  _id: ObjectId;
  title: string;
  tag: string;
  story: string;
}

function Stories() {
  const { sidebar, setSidebar, setPopup } = useGlobalContext();

  const { getData, isLoading, setIsLoading, stories, setStories } =
    useGetStories();

  const [storyId, setStoryId] = useState("");
  const [storyTitle, setStoryName] = useState("");

  let counter = 1;

  const getDataInfo = async () => {
    let data = await getData();
    console.log(data);

    data = data.stories.reverse();
    setStories(data);
    setIsLoading(false);

    console.log(data);
  };

  useEffect(() => {
    getDataInfo();
  }, []);

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
          <h2>Stories</h2>

          <button className="create-new-story">
            {" "}
            <Link href={"/dashboard/stories/createstory"}>
              Create New Story
            </Link>
          </button>

          <div className="table-container">
            <div className="table-heading">
              <span className="table-heading-title">Title</span>
              <span className="table-heading-tag">Tag</span>
              <span className="table-heading-buttons">Delete or Edit</span>
            </div>

            {stories.map((item: Story, key: any) => {
              return (
                <div key={key} className="table-item">
                  <span className="table-item-title">{item.title}</span>
                  <span className="table-item-tag">{item.tag}</span>
                  <span className="table-item-buttons">
                    {" "}
                    <button className="tableItem-edit">
                      {" "}
                      <Link
                        href={`/dashboard/stories/editstory/${item._id.toString()}`}
                      >
                        Edit
                      </Link>{" "}
                    </button>{" "}
                    <button
                      onClick={() => {
                        setPopup(true);
                        setStoryId(item._id.toString());
                        setStoryName(item.title);
                      }}
                      className="tableItem-delete"
                    >
                      Delete
                    </button>{" "}
                  </span>
                </div>
              );

              /*<div key={key} className="table-item"> 
                  <span className="table-item-no">{counter++}</span>
                  <span className="table-item-title">{item.title}</span>
                  <span className="table-item-buttons">
                    <button className="tableItem-edit">
                      {" "}
                      <Link
                        href={`/dashboard/stories/editstory/${item._id.toString()}`}
                      >
                        Edit
                      </Link>{" "}
                    </button>
                    <button
                      className="tableItem-delete"
                      onClick={() => {
                        setPopup(true);
                        setStoryId(item._id.toString());
                        setStoryName(item.title);
                      }}
                    >
                      Delete
                    </button>{" "}
                  </span>
                </div>
              );

               <StoriesTableItem 
                            key ={key}
                            id ={item._id}
                            tag ={item.tag}
                            title={item.title}
                            story ={item.story}  
                    />*/
            })}
          </div>
        </div>
      </div>

      <PopUp
        title={storyTitle}
        id={storyId}
        successMessage={"Story Deleted Successfully "}
        loadingMessage={"Deleting Story..."}
        actionMessage={"Delete Story?"}
        errorMessage={"Error, something is wrong"}
        function={deleteStory}
      />
    </div>
  );
}

export default Stories;
