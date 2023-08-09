import "./popup.modules.css"
import { useGlobalContext } from "@/app/context/store";
import { useState } from "react";

import { useRouter } from "next/navigation";






 


interface Journal {
  title: string;
  content: string;
  id:string
 
}





function PopUp ({title, content,id}: Journal) {
  const router = useRouter();

    const {popup,setPopup} = useGlobalContext();

    const [createStory,setCreateStory] = useState(false);

    const [isLoading,setIsLoading] = useState(false);

    const [error,setError] = useState(false);



    async function Edit(title: string, content:string, id:string) {


     



      setIsLoading(true);

      console.log(title);
      console.log(content);
      console.log(id);
      
    
      //POST is used as PUT here due to a bug in NEXT JS
      const res = await fetch("http://localhost:3000/api/journals", {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
        
       },
       body: JSON.stringify({ method:"PUT",title:title,content:content,id:id }),
     })
    
        const response =  await res.json()
    
     console.log(response);
    

     if(response.journalEdited === true){
          setIsLoading(false);
          setCreateStory(response.journalEdited);
     }else{


        setIsLoading(false);
        setError(true)


     }
    
      return response
     
    }




    return <div  className={popup? "popup" : "popup remove"}  >

         { createStory ?  <div  className="popup-create-story"   >

                            <p>Journal Edited Successfully</p>

                            <div>
                              <button onClick={()=>{setPopup(false); router.push('/dashboard/journal')}}   >ok</button>


                            </div>

                            </div>
                            
                            
                            :
                            <div  className="popup-create-story"   >

                            <p>Edit Journal?</p>

                            <div>
                            <button onClick={()=>{ Edit(title,content,id) }}    >Yes</button>

                            <button onClick={()=>{setPopup(false)}}   >No</button>


                            </div>


                            <div  className={isLoading ? "popup-create-story2-child" : "popup-create-story2-child removeloading"}           >

                              <p>Editing...</p>

                            </div>

                            <div  className={error ? "popup-create-story2-child-ERROR" : "popup-create-story2-child-ERROR remove"}           >

                                <p>Error , try using another title..</p>

                                <button onClick={()=>{setPopup(false); setError(false)}}   >OK</button>

                             </div>


                            

                            </div>



                            

                          
         }




       


    </div>
}


export  default PopUp