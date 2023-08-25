import { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import formidable from "formidable"
import { buffer } from "stream/consumers"
import path from "path"
import { join } from "path"
import Journals from "@/app/Models/Journals"
import Stories from "@/app/Models/Stories"

import { writeFile } from "fs/promises"


export const config = {
    api: {
      bodyParser: false,
    },
  }



  





  export const POST = async (req:Request) =>{

  //  

    try {
     
      const data = await req.formData()
      console.log(data);

      const file:File | null = data.get("file") as unknown as File

      let id : string = data.get("id") as unknown as string

      const fileName : string = data.get("fileName") as unknown as string

      let identity : string = data.get("identity") as unknown as string


      


      console.log(id);
      console.log(fileName);
      
      

      if(!file){
        return new NextResponse(JSON.stringify({message:"No file"}), {status:500});
      }

      const bytes = await file.arrayBuffer()
      const buffer  = Buffer.from(bytes)

      const path = join(process.cwd(),'public', file.name)
      console.log(path);
      await writeFile(path,buffer)

      console.log(identity);
      

      if(identity === "JournalUpload"){

        const result = await Journals.updateOne(
            { _id: id  },
            {
                imageName:fileName
           
             },{strict:false});
    
             console.log(result);
             
             return new NextResponse(JSON.stringify({photoUploaded:true, message:"Successfully uploaded Journal photo"}), {status:200});


      }

      if(identity === "StoriesUpload"){


        const result = await Stories.updateOne(
            { _id: id  },
            {
                imageName:fileName
           
             },{strict:false});
    
             console.log(result);
             
             return new NextResponse(JSON.stringify({photoUploaded:true, message:"Successfully uploaded Journal photo"}), {status:200});


      }

      } catch (e) {
        console.log(e)
        return new Response("fail")
      }

   
    

   


   





  }