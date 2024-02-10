import { NextResponse } from "next/server";
import Stories from "@/app/Models/Stories";
import connectDb from "@/app/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

/**Get all stories */
export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    //  await connectDb();

    const stories = await Stories.find();

    return new NextResponse(
      JSON.stringify({ storiesRetrieved: true, stories: stories }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ storiesRetrieved: false, err: err }),
      { status: 500 }
    );
  }
};

/**Post a story */
export const POST = async (req: Request, res: Response) => {
  const body = await req.json();

  try {
    await connectDb();

    const result = await Stories.create({
      title: body.title,
      tag: body.tag,
      story: body.content,
      imageName: "0",
    });

    console.log(result);

    return new NextResponse(
      JSON.stringify({
        StoryPosted: true,
        id: result._id.toString(),
        message: "Successfully posted",
      }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(JSON.stringify({ StoryPosted: false, err: err }), {
      status: 500,
    });
  }
};

/**Edit a specific story */
export const PUT = async (req: Request, res: Response) => {
  const body = await req.json();

  console.log(body);

  try {
    await connectDb();

    const result = await Stories.updateOne(
      { _id: body.id },
      {
        title: body.title,
        tag: body.tag,
        story: body.content,
      }
    );

    console.log(result);

    return new NextResponse(
      JSON.stringify({ StoryEdited: true, message: "Successfully Edited" }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        StoryEdited: false,
        err: err,
        message: "Server Error.Unable to post story",
      }),
      { status: 500 }
    );
  }
};
