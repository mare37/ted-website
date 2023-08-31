import "./popup.modules.css"
import { useGlobalContext } from "@/app/context/store";
import { useState } from "react";

import { useRouter } from "next/navigation";
import Upload from "@/app/utils/upload";

import  {usePost} from "@/app/Hooks/stories";


interface Journal {
  title: string;
  tag:string
  content: string;
  successMessage:string,
  loadingMessage:string,
  actionMessage:string,
  errorMessage:string
 
}


function PopUp (props: any) {
  const router = useRouter();

    const {popup,setPopup, setCreateStory,  createStory,isLoading,error,  setError} = usePost()

    const [deleted, setDeleted] = useState(false)


    const  handleFunction = async ()=>{
      
      console.log(props.function);
    
      if(props.function.name === "POST"){
        const response = await props.function(props.title,props.tag,props.content)

        
          const formData = new FormData();
          const file = props.file

          if (!file) return;
          Upload(file, response.id,"StoriesUpload")
      
      }

      if(props.function.name === "deleteStory"){
        console.log(props.id);
        
       const  res = await props.function(props.id)

       setDeleted(res)

       console.log(res);
       
       
      }


      if(props.function.name === "EditStory"){
        console.log("Yes Edit");
        props.function(props.title,props.tag, props.content, props.id)
        
      }

    }


   



    return <div  className={popup? "popup" : "popup remove"}  >

         { createStory ?  <div  className="popup-create-story"   >

                            <p>{props.successMessage}</p>

                            <div>
                              <button onClick={()=>{setPopup(false); setCreateStory(false); router.push("/dashboard/stories")}}   >ok</button>


                            </div>

                            </div>
                            
                            
                            :
                            <div  className="popup-create-story"   >

                            <p>{props.actionMessage} {props.title}</p>

                            <div>
                            <button onClick={handleFunction}    >Yes</button>

                            <button onClick={()=>{setPopup(false)}}   >No</button>


                            </div>


                            <div  className={isLoading ? "popup-create-story2-child" : "popup-create-story2-child removeloading"}           >

                              <p>{props.loadingMessage}</p>

                            </div>

                            <div  className={error ? "popup-create-story2-child-ERROR" : "popup-create-story2-child-ERROR remove"}           >

                                <p>{props.errorMessage}</p>

                                <button onClick={()=>{setPopup(false); setError(false)}}   >OK</button>

                             </div>


                            

                            </div>



                            

                          
         }




       


    </div>
}


export  default PopUp