export async function postLocation(
  town: string,
  county: string,
  description: string,
  numberOftrees: string,
  numberOfIndividuals: string
) {
  try {
    const res = await fetch("http://localhost:3000/api/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        town: town,
        county: county,
        content: description,
        numberOftrees: numberOftrees,
        numberOfIndividuals: numberOfIndividuals,
      }),
    });

    const response = await res.json();

    console.log(response);

    if (response.locationPosted === true) {
      return { locationPosted: true, response };
    } else {
      return { locationPosted: false, response };
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}

export const getLocations = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/locations", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    // setIsLoading(false);
    // setError(true)
    console.log(error);

    throw new Error("Error");
  }
};

export const getOneLocation = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/locations/${id}`, {
      cache: "no-store",
    });
    return res.json();

    if (!res.ok) {
      //  setIsLoading(false);
      //   setError(true)
      throw new Error("Error");
    }
  } catch (error) {
    // setIsLoading(false);
    // setError(true)
    console.log(error);
  }
};

export async function deleteLocation(id: string) {
  console.log(id);

  try {
    const res = await fetch(`http://localhost:3000/api/locations/${id}`, {
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
      console.log(data);
      return true;
    } else {
      return false;
    }
  } catch (err) {
    throw new Error("Error");
  }
}

export async function editLocation(
  town: string,
  county: string,
  description: string,
  numberOftrees: string,
  numberOfIndividuals: string,
  id: string
) {
  const res = await fetch("http://localhost:3000/api/locations", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      town: town,
      county: county,
      description: description,
      numberOftrees: numberOftrees,
      numberOfIndividuals: numberOfIndividuals,
      id: id,
    }),
  });

  const response = await res.json();

  console.log(response);

  if (response.locationEdited === true) {
    return true;
  } else {
    return false;
  }
}
