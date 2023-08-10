import "./popup.modules.css"
import { useGlobalContext } from "@/app/context/store";
import { useState } from "react";

import { useRouter } from "next/navigation";


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

    const {popup,setPopup, createStory,isLoading,error,  setError} = usePost()


    const handleFunction = ()=>{
      
      console.log(props.function);
    
      if(props.function.name === "POST"){
        props.function(props.title,props.tag,props.content)
       
      }

    }


   



    return <div  className={popup? "popup" : "popup remove"}  >

         { createStory ?  <div  className="popup-create-story"   >

                            <p>{props.successMessage}</p>

                            <div>
                              <button onClick={()=>{setPopup(false); router.push('/dashboard/stories')}}   >ok</button>


                            </div>

                            </div>
                            
                            
                            :
                            <div  className="popup-create-story"   >

                            <p>{props.actionMessage}</p>

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