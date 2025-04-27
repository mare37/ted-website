import { NextResponse } from "next/server";
import connectDb from "@/app/utils/db";
import Journals from "@/app/Models/Journals";


interface params {
  params: { id: string };
}

/**Get one specific journal by id */
export const GET = async (

  { params }: params,
 
) => {
  try {
    await connectDb();

    const journal = await Journals.find({
      _id: params.id,
    });

    console.log(journal);

    return new NextResponse(
      JSON.stringify({ journalRetrieved: true, journal: journal }),
      {
        status: 200,
      }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ journalRetrieved: false, err: err }),
      { status: 500 }
    );
  }
};

/**Delete a specific journal by id */
export const DELETE = async (

  { params }: params,

) => {
  try {
    await connectDb();

    const result = await Journals.deleteOne({
      _id: params.id,
    });

    console.log(result);

    return new NextResponse(
      JSON.stringify({ journalDeleted: true, result: result }),
      {
        status: 200,
      }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        journalDeleted: false,
        message: "Server Error.Unable to post journal",
      }),
      { status: 500 }
    );
  }
};
