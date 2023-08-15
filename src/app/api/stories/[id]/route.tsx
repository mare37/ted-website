
import connectDb from "@/app/utils/db";
import { NextApiRequest,NextApiResponse } from "next";
import Stories from "@/app/Models/Stories";
import { NextResponse } from "next/server";




export const DELETE = async (req: NextApiRequest, res: NextApiResponse) =>{


    // const query = req.query
   
     console.log("ONE STORIES");
   
      
   
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






   //POST is used as GET here due to a bug in NEXT JS
export const POST = async (req:Request, res: NextApiResponse) =>{
    console.log("ONE STORY");

    const body = await req.json();

   // console.log(body);             
    

    console.log("ONE STORY");
 //   console.log(query);
    
   // const {journalId} = query;

  //  console.log(journalId);
    
    


   

    try{

        await connectDb();

       // const journals  = await Journals.find(); 

       //   console.log(journals);


       const Story = await   Stories.find({
        _id: body.id
      });

      console.log(Story);


          return new NextResponse( JSON.stringify(Story), {status:200});


    }catch(err){
       
        return new NextResponse("Database error", {status:500})
       // console.log(err);
        
    }


}





   