'use client'

import { useRef ,useState} from "react";
import "./page.modules.css"
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import PopUp from "../popup/popup";
import { useGlobalContext } from "@/app/context/store";


function CreateStory() {

  const [contentSaved, setContentSaved] = useState(false);
  const {popup,setPopup} = useGlobalContext();

  

    const editorRef = useRef<TinyMCEEditor | null>(null);
    const log = () => {
      setContentSaved(true)
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
     
    }


    console.log(contentSaved);
    


    return <div  className={popup? "create-story cover-screen": "create-story"}  >

        <div className="create-story-title" >
            <input placeholder="Title" />
        </div>

        <div className="create-story-select"   >
            <p>Select story options <span>*</span>  </p>

         <select>
         <option     className="first-option" value="">OPTIONS</option>
         <option value="employee story">EMPLOYEE STORY:</option>
         <option value="partner story">PARTNER STORY:</option>
         <option value="video">VIDEO:</option>
         <option value="story">STORY:</option>
         <option value="news update">NEWS UPDATE:</option>
         </select>


        </div>

        <div>
        <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue="<p>Welcome Mr Ted!! Happy writing</p>"
         
         init={{
           height: 300,
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

       {!contentSaved?    <button  className="create-story-log-button" onClick={log}>Save Content</button>: ""  }
      
       

        </div>



        <div  className="create-story-button" >
         {contentSaved?   <button onClick={()=>{setPopup(true)}} >Create Journal</button>: ""   }
        </div>

        <PopUp/>
    </div>
}




  export default CreateStory;


