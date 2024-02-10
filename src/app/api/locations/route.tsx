import { NextResponse } from "next/server";
import connectDb from "@/app/utils/db";
import locations from "@/app/Models/locations";
import { NextApiRequest, NextApiResponse } from "next";

/*Get all locations*/
export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDb();

    const allLocations = await locations.find();

    return new NextResponse(JSON.stringify(allLocations), { status: 200 });
  } catch (err) {
    return new NextResponse("Database error", { status: 500 });
  }
};

/*Post a location */
export const POST = async (req: Request, res: any) => {
  const body = await req.json();

  console.log(body);

  try {
    await connectDb();

    const result = await locations.create({
      town: body.town,
      county: body.county,
      content: body.content,
      numberOftrees: body.numberOftrees,
      numberOfIndividuals: body.numberOfIndividuals,
      imageName: "0",
    });

    console.log(result);

    return new NextResponse(
      JSON.stringify({
        locationPosted: true,
        message: "Successfully posted",
        id: result._id.toString(),
      }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);

    return new NextResponse(
      JSON.stringify({
        locationPosted: false,
        message: "Server Error.Unable to post journal",
      }),
      { status: 500 }
    );
  }
};

/**Edit a specific location */
export const PUT = async (req: Request, res: NextApiResponse) => {
  const body = await req.json();

  console.log(body);

  try {
    await connectDb();

    const result = await locations.updateOne(
      { _id: body.id },
      {
        town: body.town,
        county: body.county,
        content: body.description,
        numberOftrees: body.numberOftrees,
        numberOfIndividuals: body.numberOfIndividuals,
        imageName: "0",
      }
    );

    console.log(result);

    return new NextResponse(
      JSON.stringify({ locationEdited: true, result: result }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        locationEdited: false,
        message: "Server Error.Unable to post journal",
      }),
      { status: 500 }
    );
  }
};
