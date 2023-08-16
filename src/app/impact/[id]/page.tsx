'use client'

import { useState,useEffect } from "react";
import { getOneStoryData } from "@/app/utils/stories";
import { useParams } from "next/navigation";
import Hero2 from "@/app/get-involved/Hero/Hero";

import "./page.modules.css"

function Story(){

    const param = useParams()
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")

    useEffect(()=>{
       
    
        console.log(param.id);
        
        getOneStoryData(param.id).then((response)=>{
          console.log(response);
    
          setTitle(response[0].title)
          setContent(response[0].story)
          
        })
    
        
    
    
      },[])
    

    return <div className="story-post"     >


        <section className="story-hero" >
            <img  src=""  />
            <p>{title} </p>
            
        </section>

        <div  className="story-post-heading">

            <section>
                <img  src="../journal-pic2.jpg"        />
            </section>


        </div>

        <div    className="story-post-body"    >
            <p>
             {content}


            </p>



            
        </div>

      

    </div>
}


export default  Story;