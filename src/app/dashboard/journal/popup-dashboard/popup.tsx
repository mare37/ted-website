import "./popup.modules.css"
import { useGlobalContext } from "@/app/context/store";
import { useState } from "react";
import mongoose from "mongoose";


import { useRouter } from "next/navigation";

//import { ObjectId } from "mongoose";






 


interface Journal {
  title: string;
  content: string;
 
}





function PopUp ({title, content}: Journal) {
  const router = useRouter();

    const {popup,setPopup,journalId,setJournalId,journalTitle, setJournalTitle} = useGlobalContext();

    const [createStory,setCreateStory] = useState(false);

    const [isLoading,setIsLoading] = useState(false);

    const [error,setError] = useState(false);




    //------------------------------------------------------------------------

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

//-------------------------------------------------------------------------------






    async function deleteJournal  (id:string){  
      setIsLoading(true);
      console.log(id);

      
      
      
    
  
      const res = await fetch(`http://localhost:3000/api/journals`,  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify({ method:"DELETE",title:"",content:"",id:id }),
      });
  
      const data = await res.json();
      console.log(data);
      console.log(data.result.acknowledged);
      
     // setJournalId(true)
      //location.reload() 
      if(data.result.acknowledged === true){
        setIsLoading(false);
        setCreateStory(true)
        console.log(data);
      }
     
      
      
  
     
      //const data =  await res.json();
  
     // console.log(data);
  
      
  
      if(!res.ok){
         throw new Error("Error")
          
      }
  
     
  
  
  }

  
  




    return <div  className={popup? "popup" : "popup remove"}  >

         { createStory ?  <div  className="popup-create-story"   >

                            <p>Journal Deleted</p>

                            <div>
                              <button onClick={()=>{setPopup(false); location.reload() }}   >ok</button>


                            </div>

                            </div>
                            
                            
                            :
                            <div  className="popup-create-story"   >

                            <p>Delete {journalTitle}?</p>

                            <div>
                            <button onClick={()=>{  deleteJournal(journalId) }}    >Yes</button>

                            <button onClick={()=>{setPopup(false)}}   >No</button>


                            </div>


                            <div  className={isLoading ? "popup-create-story2-child" : "popup-create-story2-child removeloading"}           >

                              <p>Deleting...</p>

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