'use client'

import { useState,useEffect } from "react";
import { getOneStory } from "@/app/utils/stories";
import { useParams } from "next/navigation";
import Hero2 from "@/app/get-involved/Hero/Hero";

import "./page.modules.css"

function Story(){

    const param = useParams()
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
    const [imageName, setImageName] = useState("")

    useEffect(()=>{
       
    
        console.log(param.id);
        
        getOneStory(param.id).then((response)=>{
          console.log(response);
          setImageName(response[0].imageName)
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
                <img  src={`../${imageName}` }      />
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