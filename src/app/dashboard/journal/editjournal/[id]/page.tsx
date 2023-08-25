'use client'

import { useEffect, useRef ,useState} from "react";
import "./page.modules.css"
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import PopUp from "../../popup-editjournal/popup";
import { useGlobalContext } from "@/app/context/store";
import { useParams  } from 'next/navigation'





export async function getData(id:string) {
  console.log(id);
  
  const res = await fetch(`http://localhost:3000/api/journals/${id}`, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
    
   },
   body: JSON.stringify({ id: id }),
 })

 return res.json();
} 








function EditJournal() {
  const params = useParams();
  const [contentSaved, setContentSaved] = useState(false);
  const {popup,setPopup, journalId} = useGlobalContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 

  window.onpopstate = (event) => {
    setPopup(false)
    console.log(
      `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
    );
  };

  

  useEffect(()=>{

      console.log(params);
      
    getData(params.id).then((response)=>{
       console.log(response);
       setTitle(response[0].title)
       setContent(response[0].journal);
       
     })

   },[])
 

  

  

    const editorRef = useRef<TinyMCEEditor | null>(null);
    const log = () => {

   /*   if(title.length === 0 || content.length === 0){

        console.log("One of the fields is empty");
      
      }else{
  
      }*/

      
        if (editorRef.current) {
          let text = editorRef.current.getContent();
          setContent(text);


            if(title.length === 0 || content.length === 0){

                  console.log("One of the fields is empty");
                
                }else{
                  setContentSaved(true)
                  console.log(text);
                }




          
        }
        
  
     


    
     
    }


    console.log(contentSaved);
    

   
    

    return <div  className="create-journal"  >

        <div className="create-journal-title" >
            <input placeholder="Title" value={title}  onChange={(e)=>{setTitle(e.target.value)}}          />
        </div>
          
        <div>
        <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue={content}
        
         
         init={{
           height: 350,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
           
         }}
       />

       {!contentSaved?    <button  className="create-journal-log-button" onClick={log}>Save Content</button>: ""  }
      
       

        </div>

        <div  className="create-journal-button" >
      
         {contentSaved?   <button onClick={()=>{setPopup(true)}} >Create Journal</button>: ""   }
        </div>

      
        <PopUp title={title}
                content={content}
                id={params.id}
                 />  
    
    </div>
}




  export default EditJournal;


