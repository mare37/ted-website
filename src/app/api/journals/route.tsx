import { NextResponse } from "next/server";
import connectDb from "@/app/utils/db";
import Journals from "@/app/Models/Journals";
import { NextApiRequest, NextApiResponse } from "next";

/**Get all journals */
export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDb();

    const journals = await Journals.find();

    return new NextResponse(
      JSON.stringify({ journalsRetrieved: true, journals: journals }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ journalsRetrieved: true, err: err })
    );
  }
};

/**Post a journal */
export const POST = async (req: Request, res: any) => {
  console.log("We are posting");

  const body = await req.json();

  console.log(body);

  try {
    // await connectDb();

    const result = await Journals.create({
      title: body.title,
      journal: body.content,
      imageName: "0",
    });

    return new NextResponse(
      JSON.stringify({
        journalPosted: true,
        message: "Successfully posted",
        id: result._id.toString(),
      }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        journalPosted: false,
        err: err,
      }),
      { status: 500 }
    );
  }
};

/**Edit a journal */
export const PUT = async (req: Request, res: any) => {
  const body = await req.json();

  console.log(body);

  try {
    //await connectDb();

    const result = await Journals.updateOne(
      { _id: body.id },

      {
        title: body.title,
        journal: body.content,
        imageName: "0",
      }
    );

    console.log(result);

    return new NextResponse(
      JSON.stringify({
        journalEdited: true,
        message: "Successfully Updated",
      }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);

    return new NextResponse(
      JSON.stringify({
        journalEdited: false,
        err: err,
      }),
      { status: 500 }
    );
  }
};
