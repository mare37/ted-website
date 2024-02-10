import connectDb from "@/app/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import Stories from "@/app/Models/Stories";
import { NextResponse } from "next/server";

interface params {
  params: { id: string };
}

/**Get Story by id */
export const GET = async (
  req: Request,
  { params }: params,
  res: NextApiResponse
) => {
  try {
    //await connectDb();

    const story = await Stories.find({
      _id: params.id,
    });

    return new NextResponse(
      JSON.stringify({ storyRetrieved: true, story: story }),
      {
        status: 200,
      }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ storyRetrieved: true, err: err }),
      { status: 500 }
    );
  }
};

/**Delete story by id */
export const DELETE = async (
  req: NextApiRequest,
  { params }: params,
  res: NextApiResponse
) => {
  console.log("ONE STORIES");

  try {
    // await connectDb();

    const result = await Stories.deleteOne({
      _id: params.id,
    });

    console.log(result);

    return new NextResponse(
      JSON.stringify({ storyDeleted: true, result: result }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        storyDeleted: false,
        err: err,
      }),
      { status: 500 }
    );
  }
};
