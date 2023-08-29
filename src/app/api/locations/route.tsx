import { NextResponse  } from "next/server";
import connectDb from "@/app/utils/db";
import locations from "@/app/Models/locations";
import {  NextApiRequest ,  NextApiResponse  } from "next";






export const GET = async (req: NextApiRequest, res: NextApiResponse) =>{


  // const query = req.query
 
   console.log("ALL JOURNALS");
 
    
 
     try{
 
         await connectDb();
 
         const allLocations  = await  locations.find(); 
 
        //   console.log(journals);
 
 
           return new NextResponse( JSON.stringify(allLocations), {status:200});
 
 
     }catch(err){
        
         return new NextResponse("Database error", {status:500})
        // console.log(err);
         
     }
 
 
 }







export const POST = async (req:Request, res:any) =>{


    console.log("POSTING LOCATION");
    

    

    const body = await req.json();

   


    

      try{

        await connectDb();

       // const journals  = await Journals.find(); 

       //   console.log(journals);

       const result = await locations.create({
        location: body.location,
        content:body.content,
        numberOftrees:body.numberOftrees,
        numberOfIndividuals:body.numberOfIndividuals,
        imageName:body.imageName
      });

      console.log(result);
      

           // return res.send().json("POSTED SUCCESSFULLY");
         // return new NextResponse("POSTED SUCCESSFULLY", {status:200});
           return new NextResponse(JSON.stringify({locationPosted:true, message:"Successfully posted", id:result._id.toString()}), {status:200});


    }catch(err){

      console.log(err);
      
       
        return new NextResponse(JSON.stringify({locationPosted:false, message:"Server Error.Unable to post journal"}), {status:500});
       // console.log(err);
        
    }




    

}





