import { NextResponse  } from "next/server";
import connectDb from "@/app/utils/db";
import Journals from "@/app/Models/Journals";
//import Journal from "@/app/dashboard/journal/page";
//import { DummyDocument } from "@/app/Models/Journals";
import { NextApiRequest ,  NextApiResponse  } from "next";

interface Journal {
    title: string;
    journal: string;
   
  }


  


export const GET = async (req: NextApiRequest, res: NextApiResponse) =>{

   

    try{

        await connectDb();

        const journals  = await Journals.find(); 

       //   console.log(journals);


          return new NextResponse( JSON.stringify(journals), {status:200});


    }catch(err){
       
        return new NextResponse("Database error", {status:500})
       // console.log(err);
        
    }


}






export const POST = async (req:Request, res:any) =>{

    

    const body = await req.json();

  //  console.log(body);
    

   

    try{

        await connectDb();

       // const journals  = await Journals.find(); 

       //   console.log(journals);

       const result = await Journals.create({
        title: body.title,
        journal:body.content
      });

      console.log(result);
      

           // return res.send().json("POSTED SUCCESSFULLY");
         // return new NextResponse("POSTED SUCCESSFULLY", {status:200});
           return new NextResponse(JSON.stringify({journalPosted:true, message:"Successfully posted"}), {status:200});


    }catch(err){
       
        return new NextResponse(JSON.stringify({journalPosted:false, message:"Server Error.Unable to post journal"}), {status:500});
       // console.log(err);
        
    }


}
















