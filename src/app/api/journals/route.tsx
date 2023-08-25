import { NextResponse  } from "next/server";
import connectDb from "@/app/utils/db";
import Journals from "@/app/Models/Journals";
import {  NextApiRequest ,  NextApiResponse  } from "next";











  


export const GET = async (req: NextApiRequest, res: NextApiResponse) =>{


 // const query = req.query

  console.log("ALL JOURNALS");

   

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

   



   







    if(body.method === "POST"){

    
      

    

      try{

        await connectDb();

       // const journals  = await Journals.find(); 

       //   console.log(journals);

       const result = await Journals.create({
        title: body.title,
        journal:body.content,
        imageName:""
      });

      console.log(result);
      

           // return res.send().json("POSTED SUCCESSFULLY");
         // return new NextResponse("POSTED SUCCESSFULLY", {status:200});
           return new NextResponse(JSON.stringify({journalPosted:true, message:"Successfully posted", id:result._id.toString()}), {status:200});


    }catch(err){
       
        return new NextResponse(JSON.stringify({journalPosted:false, message:"Server Error.Unable to post journal"}), {status:500});
       // console.log(err);
        
    }




    }




    if(body.method === "DELETE"){

      console.log(body);   


      try{

        await connectDb();

       // const journals  = await Journals.find(); 

       //   console.log(journals);

    const result = await   Journals.deleteOne({
        _id: body.id
      });

      console.log(result);
      

    return new NextResponse(JSON.stringify({result:result}), {status:200});
      

           // return res.send().json("POSTED SUCCESSFULLY");
         // return new NextResponse("POSTED SUCCESSFULLY", {status:200});
           


    }catch(err){
       
        return new NextResponse(JSON.stringify({journalPosted:false, message:"Server Error.Unable to post journal"}), {status:500});
       // console.log(err);
        
    }


    }



    if(body.method === "PUT"){

      console.log("PUT TIME");

      try{


        await connectDb();

        // const journals  = await Journals.find(); 
 
        //   console.log(journals);
 
        const result = await Journals.updateOne(
          { _id:body.id },
          {
         title: body.title,
         journal:body.content
       });
 
       console.log(result);
       
       return new NextResponse(JSON.stringify({journalEdited:true, message:"Successfully Edited"}), {status:200});


      }catch(err){
        return new NextResponse(JSON.stringify({journalPosted:false, message:"Server Error.Unable to post journal"}), {status:500});

      }
      

     

    }
    

   

  


} 


































