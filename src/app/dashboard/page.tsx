"use client";

import { useState } from "react";
import "./page.modules.css";
import Sidebar from "../portal_components/Sidebar/Sidebar";
import Mainbar from "../portal_components/Mainbar/Mainbar";
import { useGlobalContext } from "../context/store";
import { useEffect } from "react";
import { useGetStories } from "../Hooks/stories";
import { getJournals } from "../utils/journal";
import { getStories } from "../utils/stories";

function Dashboard() {
  const { sidebar, setSidebar, setPopup } = useGlobalContext();
  const { getData } = useGetStories();
  const [journals, setJournals] = useState([]);
  const [stories, setStories] = useState([]);
  const [journalsloading, setJournalsLoading] = useState(false);
  const [storiesloading, setStoriesLoading] = useState(false);

  useEffect(() => {
    setPopup(false);
    setJournalsLoading(true);
    setStoriesLoading(true);

    getJournals().then((response) => {
      console.log(response);

      setJournals(response.journals);
      console.log(response);
      setJournalsLoading(false);
    });

    getStories().then((response) => {
      setStories(response.stories);
      console.log(response);
      setStoriesLoading(false);
    });
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />

      <Mainbar
        journalsLoading={journalsloading}
        storiesLoading={storiesloading}
        journals={journals}
        stories={stories}
      />
    </div>
  );
}

export default Dashboard;
