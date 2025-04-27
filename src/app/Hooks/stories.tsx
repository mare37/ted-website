import { useGlobalContext } from "../context/store";
import { useState } from "react";

const usePost = () => {
  const {
    popup,
    setPopup,
    createStory,
    setCreateStory,
    isLoading,
    setIsLoading,
    error,
    setError,
  } = useGlobalContext();

  async function POST(title: string, tag: string, content: string) {
    setIsLoading(true);

    console.log(title);
    console.log(content);

    try {
      const res = await fetch("http://localhost:3000/api/stories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          method: "POST",
          title: title,
          tag: tag,
          content: content,
        }),
      });

      const response = await res.json();

      console.log(response);

      if (response.StoryPosted === true) {
        setIsLoading(false);
        setCreateStory(response.StoryPosted);

        return response;
      } else {
        setIsLoading(false);
        setError(true);
        return { StoryPosted: false, message: "Failed to post" };
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  async function deleteStory(id: string) {
    setIsLoading(true);
    console.log(id);

    const res = await fetch(`http://localhost:3000/api/stories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ method: "DELETE", id: id }),
    });

    const data = await res.json();
    console.log(data);

    // setJournalId(true)
    //location.reload()
    if (data.result.acknowledged === true) {
      setIsLoading(false);
      setCreateStory(true);
      console.log(data);
      return true;
    }

    //const data =  await res.json();

    // console.log(data);

    if (!res.ok) {
      throw new Error("Error");
    }
  }

  async function getOneStoryData(id: string) {
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

  async function EditStory(
    title: string,
    tag: string,
    content: string,
    id: string
  ) {
    setIsLoading(true);

    console.log(title);
    console.log(content);
    console.log(id);

    //POST is used as PUT here due to a bug in NEXT JS
    const res = await fetch("http://localhost:3000/api/stories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        method: "PUT",
        title: title,
        tag: tag,
        content: content,
        id: id,
      }),
    });

    const response = await res.json();

    console.log(response);

    if (response.StoryEdited === true) {
      setIsLoading(false);
      setCreateStory(response.StoryEdited);
    } else {
      setIsLoading(false);
      setError(true);
    }

    return response;
  }

  return {
    POST,
    EditStory,
    deleteStory,
    getOneStoryData,
    popup,
    setPopup,
    createStory,
    setCreateStory,
    isLoading,
    setIsLoading,
    error,
    setError,
  };
};

const useGetStories = () => {
  const [isLoading, setIsLoading] = useState<boolean | string>("");
  const [stories, setStories] = useState([]);

  const getData = async () => {
    setIsLoading(true);

    const res = await fetch("http://localhost:3000/api/stories", {
      cache: "no-store",
    });

    //const data =  await res.json();

    // console.log(data);

    if (!res.ok) {
      throw new Error("Error");
    }

    return res.json();
  };

  return { getData, isLoading, setIsLoading, stories, setStories };
};

export { usePost, useGetStories };
