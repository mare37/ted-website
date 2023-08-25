'use client'

import { useRef ,useState} from "react";
import "./page.modules.css"
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import PopUp from "../popup-createjournal/popup";
import { useGlobalContext } from "@/app/context/store";
import { FILE } from "dns";




export async function POST() {
  const res = await fetch("http://localhost:3000/api/journals", {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
    
   },
   body: JSON.stringify({ time: new Date().toISOString() }),
 })
}






function CreateJournal() {

  
  const [contentSaved, setContentSaved] = useState(false);
  const {popup,setPopup} = useGlobalContext();
  const [title, setTittle] = useState("");
  const [content, setContent] = useState("");
  const [file, setPhoto] = useState<File>();
  const [fileName, setPhotoName] = useState<String | null>("");


  

  window.onpopstate = (event) => {
    setPopup(false)
    console.log(
      `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
    );
  };


  const savePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (!e.target.files) return;
    const file = e.target.files;
  
      console.log(file);
      setPhoto(e.target.files[0]);

      const filename = file[0].name
      
        setPhotoName(fileName);
   
  };






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
    

    //console.log(content);

    const onChange = (e:any)=>{
    //  console.log(e);
      
     // setContent(e)

    }
    

    return <div  className="create-journal"  >

        <div className="create-journal-title" >
            <input placeholder="Title"   onChange={(e)=>{setTittle(e.target.value)}}          />
        </div>

        <form className="upload-picture">
              Upload Journal Picture
              <input
                type="file"
                onChange={ savePhoto  }
              />
            </form>

        <div>
        <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue="<p>Welcome Mr Ted!! Happy writing</p>"
         onEditorChange={onChange}
         
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
                 file={file} />  
    
    </div>
}




  export default CreateJournal;


