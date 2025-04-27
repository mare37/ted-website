import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // important
import connectDb from "@/app/utils/db";
import locations from "@/app/Models/locations";

/*interface ParamsType {
  params: { id: string };
}*/


export const DELETE = async ({ params }: any) => {
  const id = params.id;

  try {
    await connectDb();

    const result = await locations.deleteOne({
      _id: new ObjectId(id),
    });

    return new NextResponse(
      JSON.stringify({ locationDeleted: true, result }),
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(
      JSON.stringify({ locationDeleted: false, error: err.message }),
      { status: 500 }
    );
  }
};

export const GET = async ({ params }: any) => {
  const id = params.id;

  try {
    await connectDb();

    const result = await locations.findOne({
      _id: new ObjectId(id),
    });

    return new NextResponse(
      JSON.stringify({ locationFound: true, result }),
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(
      JSON.stringify({ locationFound: false, error: err.message }),
      { status: 500 }
    );
  }
};
