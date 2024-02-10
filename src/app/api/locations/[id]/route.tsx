import { NextResponse } from "next/server";
import connectDb from "@/app/utils/db";
import locations from "@/app/Models/locations";
import { NextApiRequest, NextApiResponse } from "next";

interface params {
  params: { id: string };
}

/**Delete a location by id */
export const DELETE = async (
  req: NextApiRequest,
  { params }: params,
  res: NextApiResponse
) => {
  const id = params.id;

  try {
    await connectDb();

    const result = await locations.deleteOne({
      _id: id,
    });

    return new NextResponse(
      JSON.stringify({ locationDeleted: true, result: result }),
      {
        status: 200,
      }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        locationDeleted: false,
        err: err,
      }),
      { status: 500 }
    );
  }
};

/**Get one specific location by id */
export const GET = async (
  req: NextApiRequest,
  { params }: params,
  res: NextApiResponse
) => {
  const id = params.id;

  console.log(id);

  try {
    await connectDb();

    const result = await locations.findOne({ _id: id });

    console.log(result);

    return new NextResponse(
      JSON.stringify({ locationFound: true, result: result }),
      {
        status: 200,
      }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        locationFound: false,
        err: err,
      }),
      { status: 500 }
    );
  }
};
