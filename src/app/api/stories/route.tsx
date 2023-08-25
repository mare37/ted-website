
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
 
           console.log(journals);
 
 
           return new NextResponse( JSON.stringify(journals), {status:200});
 
 
     }catch(err){
        
         return new NextResponse("Database error", {status:500})
        // console.log(err);
         
     }
 
 
 }


export const POST = async (req:Request,res:Response)=>{

  const body = await req.json();

  console.log(body);


   


    if(body.method === "POST"){




       try{
      await connectDb();

      const result = await Stories.create({
        title: body.title,
        tag:body.tag,
        story:body.content
      });

      console.log(result);
      
    

    return new NextResponse(JSON.stringify({StoryPosted:true,id:result._id.toString(), message:"Successfully posted"}), {status:200});


    }catch(err){

      return new NextResponse(JSON.stringify({StoryPosted:false, message:err}), {status:500});


    }



    }



    if(body.method === "DELETE"){

      console.log(body);   


      try{

        await connectDb();

       // const journals  = await Journals.find(); 

       //   console.log(journals);

    const result = await   Stories.deleteOne({
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

      console.log(body.id);

      try{


        await connectDb();

        // const journals  = await Journals.find(); 
 
        //   console.log(journals);
 
        const result = await Stories.updateOne(
          { _id:body.id },
          {
         title: body.title,
         tag:body.tag,
         story:body.content
       });
 
       console.log(result);
       
       return new NextResponse(JSON.stringify({StoryEdited:true, message:"Successfully Edited"}), {status:200});


      }catch(err){
        return new NextResponse(JSON.stringify({StoryEdited:false,err:err, message:"Server Error.Unable to post story"}), {status:500});

      }
      

     

    }


    

    




}




