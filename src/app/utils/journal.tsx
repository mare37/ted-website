interface Journal {
  title: string;
  content: string;
  file?: File;
}

export const getJournals = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/journals", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export async function getOneJournal(id: string) {
  const res = await fetch(`http://localhost:3000/api/journals/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

export async function deleteJournal(id: string) {
  console.log(id);

  try {
    const res = await fetch(`http://localhost:3000/api/journals/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    console.log(data.result.acknowledged);

    // setJournalId(true)
    //location.reload()
    if (data.result.acknowledged === true) {
      return data;

      // console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function postJournal(title: string, content: string, file: any) {
  console.log("Title  " + title + "content  " + content);

  try {
    const formData = new FormData();

    //  if (!file) return;
    //  formData.append("file", file);
    //    formData.append("fileName", fileName);
    console.log(file);

    console.log(title);
    console.log(content);

    const res = await fetch("http://localhost:3000/api/journals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ method: "POST", title: title, content: content }),
    });

    const response = await res.json();
    console.log(response);

    if (response.journalPosted === true) {
      console.log(response.id);

      if (!file) return response;
      console.log(file);

      formData.append("file", file);
      formData.append("id", response.id);
      formData.append("fileName", file.name);
      formData.append("identity", "JournalUpload");

      const res1 = await fetch("http://localhost:3000/api/upload", {
        method: "POST",

        body: formData,
      });

      const response1 = await res1.json();

      console.log(response1);

      if (response1.photoUploaded === true) {
      } else {
      }

      return response1;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function editJournal(title: string, content: string, id: string) {
  console.log(title);
  console.log(content);
  console.log(id);

  //POST is used as PUT here due to a bug in NEXT JS
  const res = await fetch("http://localhost:3000/api/journals", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      method: "PUT",
      title: title,
      content: content,
      id: id,
    }),
  });

  const response = await res.json();

  console.log(response);

  if (response.journalEdited === true) {
  } else {
  }

  return response;
}
