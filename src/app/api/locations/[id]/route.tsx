import { NextResponse  } from "next/server";
import connectDb from "@/app/utils/db";
import locations from "@/app/Models/locations";
import {  NextApiRequest ,  NextApiResponse  } from "next";





interface ExtendedNextApiRequest extends NextApiRequest {
  params: {
    id: string;
  };
}

interface params{
  params: { id: string } 

}

export const DELETE = async (req: NextApiRequest,
           { params }: params ,res: NextApiResponse) =>{

  
              const id = params.id

              console.log(id);
              
  
               try{
  
                  await connectDb();
  
              const result = await   locations.deleteOne({
                  _id:id
                });
  
                console.log(result);
                
  
              return new NextResponse(JSON.stringify({result:result}), {status:200});
  
  
              }catch(err){
                
                  return new NextResponse(JSON.stringify({journalPosted:false, message:"Server Error.Unable to post journal"}), {status:500});
                  
              }
  
   
   }



   


  
  