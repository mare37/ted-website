
import { NextResponse } from "next/server";
import Stories from "@/app/Models/Stories";
import connectDb from "@/app/utils/db";
import { NextApiRequest,NextApiResponse } from "next";



export const GET = async (req: NextApiRequest, res: NextApiResponse) =>{


  // const query = req.query
 
   console.log("ALL STORIES");
 
    
 
     try{
 
         await connectDb();
 
         const journals  = await Stories.find(); 
 
        //   console.log(journals);
 
 
           return new NextResponse( JSON.stringify(journals), {status:200});
 
 
     }catch(err){
        
         return new NextResponse("Database error", {status:500})
        // console.log(err);
         
     }
 
 
 }


export const POST = async (req:Request,res:Response)=>{

  const body = await req.json();

  console.log(body);


    try{
      await connectDb();

      const result = await Stories.create({
        title: body.title,
        tag:body.tag,
        story:body.content
      });

      console.log(result);
      
    

    return new NextResponse(JSON.stringify({StoryPosted:true, message:"Successfully posted"}), {status:200});


    }catch(err){

      return new NextResponse(JSON.stringify({StoryPosted:false, message:err}), {status:500});


    }


    

    




}