import { NextResponse  } from "next/server";
import connectDb from "@/app/utils/db";
import Journals from "@/app/Models/Journals";
//import Journal from "@/app/dashboard/journal/page";
//import { DummyDocument } from "@/app/Models/Journals";
import { NextApiRequest ,  NextApiResponse  } from "next";
import { ObjectId } from "mongoose";




//POST is used as GET here due to a bug in NEXT JS
export const POST = async (req:Request, res: NextApiResponse) =>{


    const body = await req.json();

    console.log(body);
    

    console.log("ONE JOURNALS");
 //   console.log(query);
    
   // const {journalId} = query;

  //  console.log(journalId);
    
    


   

    try{

        await connectDb();

       // const journals  = await Journals.find(); 

       //   console.log(journals);


       const journal = await   Journals.find({
        _id: body.id
      });

      console.log(journal);


          return new NextResponse( JSON.stringify(journal), {status:200});


    }catch(err){
       
        return new NextResponse("Database error", {status:500})
       // console.log(err);
        
    }


}
