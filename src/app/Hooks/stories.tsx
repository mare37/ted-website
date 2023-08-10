
import { useGlobalContext } from "../context/store"
import { useState } from "react";





const usePost = () => {
    
    const {popup,setPopup, createStory, setCreateStory,isLoading, setIsLoading ,error,  setError   } = useGlobalContext();



       async function POST(title:string,tag:string,content:string) {

           
           setIsLoading(true);
       
           console.log(title);
           console.log(content);
         
         
           const res = await fetch("http://localhost:3000/api/stories", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
             
            },
            body: JSON.stringify({ title:title, tag:tag,content:content }),
          })
         
             const response =  await res.json()
         
          console.log(response);
         
       
          if(response.StoryPosted === true){
               setIsLoading(false);
               setCreateStory(response.StoryPosted);
          }else{
       
       
             setIsLoading(false);
             setError(true)
       
       
          }
         
        
          
         }



         const getData = async ()=>{
    
            setIsLoading(true);
        
            const res = await fetch("http://localhost:3000/api/stories", {cache :"no-store"});
        
           
            //const data =  await res.json();
        
           // console.log(data);
        
            
        
            if(!res.ok){
               throw new Error("Error")
                
            }
        
            return res.json();
        
        
        }


    
 
    
    return  {POST,popup,setPopup, createStory, setCreateStory,isLoading, setIsLoading ,error,  setError}
  }







  const useGetStories = () => {
    
    const [isLoading,setIsLoading] = useState<boolean | string>("");
    const [stories, setStories] = useState([]);


      


         const getData = async ()=>{
    
            setIsLoading(true);
        
            const res = await fetch("http://localhost:3000/api/stories", {cache :"no-store"});
        
           
            //const data =  await res.json();
        
           // console.log(data);
        
            
        
            if(!res.ok){
               throw new Error("Error")
                
            }
        
            return res.json();
        
        
        }


    
 
    
    return  {getData,isLoading,setIsLoading,stories, setStories   }
  }



  

  export {usePost, useGetStories}