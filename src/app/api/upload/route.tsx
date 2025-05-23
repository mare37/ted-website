import { NextResponse } from "next/server";

import { join } from "path";
import Journals from "@/app/Models/Journals";
import Stories from "@/app/Models/Stories";
import locations from "@/app/Models/locations";

import { writeFile } from "fs/promises";



export const POST = async (req: Request) => {
  //

  try {
    const data = await req.formData();
    console.log(data);

    const file: File | null = data.get("file") as unknown as File;

    let id: string = data.get("id") as unknown as string;

    const fileName: string = data.get("fileName") as unknown as string;

    let identity: string = data.get("identity") as unknown as string;

    console.log(id);
    console.log(fileName);

    if (!file) {
      return new NextResponse(JSON.stringify({ message: "No file" }), {
        status: 500,
      });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join(process.cwd(), "public", file.name);
    console.log(path);
    await writeFile(path, buffer);

    console.log(identity);

    if (identity === "JournalUpload") {
      const result = await Journals.updateOne(
        { _id: id },
        {
          imageName: fileName,
        },
        { strict: false }
      );

      console.log(result);

      return new NextResponse(
        JSON.stringify({
          photoUploaded: true,
          message: "Successfully uploaded Journal photo",
        }),
        { status: 200 }
      );
    }

    if (identity === "StoriesUpload") {
      const result = await Stories.updateOne(
        { _id: id },
        {
          imageName: fileName,
        },
        { strict: false }
      );

      console.log(result);

      return new NextResponse(
        JSON.stringify({
          photoUploaded: true,
          message: "Successfully uploaded Story photo",
        }),
        { status: 200 }
      );
    }

    if (identity === "locationUpload") {
      console.log(identity);

      const result = await locations.updateOne(
        { _id: id },
        {
          imageName: fileName,
        },
        { strict: false }
      );

      console.log(result);

      return new NextResponse(
        JSON.stringify({
          photoUploaded: true,
          message: "Successfully uploaded Location photo",
        }),
        { status: 200 }
      );
    }
  } catch (e) {
    console.log(e);
    return new Response("fail");
  }
};
