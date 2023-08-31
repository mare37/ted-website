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

    console.log(body);
    

   


    

      try{

        await connectDb();

       // const journals  = await Journals.find(); 

       //   console.log(journals);

       const result = await locations.create({
        town: body.town,
        county:body.county,
        content:body.content,
        numberOftrees:body.numberOftrees,
        numberOfIndividuals:body.numberOfIndividuals,
        imageName:"0"
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



export const PUT = async (req: Request,res: NextApiResponse) =>{


  const body = await req.json();

        console.log(body);
        
     

      try{

         await connectDb();

         const result = await locations.updateOne(
          { _id:body.id },
          {
            town: body.town,
            county:body.county,
            content:body.description,
            numberOftrees:body.numberOftrees,
            numberOfIndividuals:body.numberOfIndividuals,
            imageName:"0"
       });
 
       console.log(result);
       

     return new NextResponse(JSON.stringify({locationEdited:true,result:result}), {status:200});


     }catch(err){
       
         return new NextResponse(JSON.stringify({locationEdited:false, message:"Server Error.Unable to post journal"}), {status:500});
         
     }


}




