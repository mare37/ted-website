'use client'

import { useRef ,useState} from "react";
import "./page.modules.css"
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';


function CreateJournal() {

  const [contentSaved, setContentSaved] = useState(false);

  

    const editorRef = useRef<TinyMCEEditor | null>(null);
    const log = () => {
      setContentSaved(true)
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
     
    }


    console.log(contentSaved);
    


    return <div  className="create-journal"  >

        <div className="create-journal-title" >
            <input placeholder="Title" />
        </div>

        <div>
        <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue="<p>Welcome Mr Ted!! Happy writing</p>"
         
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
         {contentSaved?   <button  >Create Journal</button>: ""   }
        </div>

    
    </div>
}




  export default CreateJournal;


