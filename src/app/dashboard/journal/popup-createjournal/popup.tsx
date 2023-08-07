import "./popup.modules.css"
import { useGlobalContext } from "@/app/context/store";
import { useState } from "react";

import { useRouter } from "next/navigation";






 


interface Journal {
  title: string;
  content: string;
 
}





function PopUp ({title, content}: Journal) {
  const router = useRouter();

    const {popup,setPopup} = useGlobalContext();

    const [createStory,setCreateStory] = useState(false);

    const [isLoading,setIsLoading] = useState(false);

    const [error,setError] = useState(false);



    async function POST(title: string, content:string) {


     



      setIsLoading(true);

      console.log(title);
      console.log(content);
    
    
      const res = await fetch("http://localhost:3000/api/journals", {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
        
       },
       body: JSON.stringify({ method:"POST",title:title,content:content,id:"" }),
     })
    
        const response =  await res.json()
    
     console.log(response);
    

     if(response.journalPosted === true){
          setIsLoading(false);
          setCreateStory(response.journalPosted);
     }else{


        setIsLoading(false);
        setError(true)


     }
    
   
     
    }




    return <div  className={popup? "popup" : "popup remove"}  >

         { createStory ?  <div  className="popup-create-story"   >

                            <p>Journal Created Successfully</p>

                            <div>
                              <button onClick={()=>{setPopup(false); router.push('/dashboard/journal')}}   >ok</button>


                            </div>

                            </div>
                            
                            
                            :
                            <div  className="popup-create-story"   >

                            <p>Create Journal</p>

                            <div>
                            <button onClick={()=>{ POST(title,content) }}    >Yes</button>

                            <button onClick={()=>{setPopup(false)}}   >No</button>


                            </div>


                            <div  className={isLoading ? "popup-create-story2-child" : "popup-create-story2-child removeloading"}           >

                              <p>Loading...</p>

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