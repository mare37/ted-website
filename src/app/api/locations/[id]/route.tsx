import { NextResponse  } from "next/server";
import connectDb from "@/app/utils/db";
import locations from "@/app/Models/locations";
import {  NextApiRequest ,  NextApiResponse  } from "next";




interface ExtendedNextApiRequest extends NextApiRequest {
  params: {
    id: string;
  };
}

interface id{
  params:string

}

export const DELETE = async (req: NextApiRequest, res: NextApiResponse) =>{

  /*const id = req.params.id
  if(id !== "undefined"){

    console.log(id);
  }*/

  const {id} =   req.query;

  console.log(id);
  

 
  


  
 
  
  
   // const  id   = req.query.id
   
    
    

    
   
    
  
  
               try{
  
                  await connectDb();
  
                // const journals  = await Journals.find(); 
  
                //   console.log(journals);
  
              const result = await   locations.deleteOne({
                  
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
  
  