export const getStories = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/stories", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export async function getOneStory(id: string) {
  console.log(id);

  const res = await fetch(`http://localhost:3000/api/stories/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export async function deleteStory(id: string) {
  console.log(id);

  try {
    const res = await fetch(`http://localhost:3000/api/stories/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    console.log(data.result.acknowledged);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postStory(title: string, tag: string, content: string) {
  console.log(title);
  console.log(content);

  try {
    const res = await fetch("http://localhost:3000/api/stories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, tag: tag, content: content }),
    });

    const response = await res.json();

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function editStory(
  title: string,
  tag: string,
  content: string,
  id: string
) {
  console.log(title);
  console.log(content);
  console.log(id);

  const res = await fetch("http://localhost:3000/api/stories", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, tag: tag, content: content, id: id }),
  });

  const response = await res.json();

  console.log(response);

  return response;
}
