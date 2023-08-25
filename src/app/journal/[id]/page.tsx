'use client'
import { useParams  } from 'next/navigation'
import Hero2 from "@/app/get-involved/Hero/Hero";
import { getOneJournal } from '@/app/utils/journal';

import { useEffect, useState } from 'react';

import "./page.modules.css"

function JournalPost(){

    const params = useParams();
    const [title, setTitle] = useState("");
    const [imageName, setImageName] = useState("")
    const [content, setContent] = useState("")


    useEffect(()=>{

        console.log(params);
        
        getOneJournal(params.id).then((response)=>{
         console.log(response);
         setTitle(response[0].title)
         setImageName(response[0].imageName)
         setContent(response[0].journal);
         
       })
  
     },[])






    return <div className="journal-post"     >

        <div  className="journal-post-heading">
          
            <section  className="journal-post-heading-text"  >
            <div>{title}</div>

                <p>By Teddy Ochieng'</p>

            </section>

            <section>
                <img  src= {`../${imageName}` || `../computer3.jpg`  }   />
            </section>


        </div>

        <div    className="journal-post-body"    >
            <p>
           {content}


            </p>



            
        </div>

      

    </div>
}


export default  JournalPost;