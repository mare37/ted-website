'use client'

import { useEffect, useRef ,useState} from "react";
import "./page.modules.css"
import PopUp from "../../popup/popup";
import { useGlobalContext } from "@/app/context/store";
import { FILE } from "dns";
import { postLocation } from "@/app/utils/locations";
import { editLocation } from "@/app/utils/locations";

import { getOneLocation } from "@/app/utils/locations";
import { useParams } from "next/navigation";











function EditLocation() {

  
  const [contentSaved, setContentSaved] = useState(false);
  const {popup,setPopup} = useGlobalContext();
  const [town, setTown] = useState("");
  const [county, setCounty] = useState("");
  const [description, setDescription] = useState("");
  const [trees, setTrees] = useState("");
  const [individuals, setIndividuls] = useState("");
  const [file, setPhoto] = useState<File>();
  const [fileName, setPhotoName] = useState<String | null>("");


  const params = useParams()
  
  

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




console.log(description);


   

 /*   const log = () => {

   
            if(title.length === 0 || content.length === 0){

                  console.log("One of the fields is empty");
                
                }else{
                 
                }


     
    }*/


   useEffect(()=>{
     
     getOneLocation(params.id).then((response)=>{

      setTown(response.result.town)
      setCounty(response.result.county)
      setDescription(response.result.content)
      setTrees(response.result.numberOftrees)
      setIndividuls(response.result.numberOfIndividuals)

   
      
     })
    
   },[])


    
    

   

    
    

    return <div  className="create-location"  >

        <div className="create-location-title" >
            <input value={town}   placeholder="Town"   onChange={(e)=>{setTown(e.target.value)}}          />
            <input value={county} placeholder="County"   onChange={(e)=>{setCounty(e.target.value)}}          />
        </div>

        <form className="upload-picture">
              Upload Location Picture
              <input
                type="file"
                onChange={ savePhoto  }
              />
            </form>


            <textarea value={description} className="create-location-description" maxLength={500} placeholder="Description"  onChange={(e)=>{setDescription(e.target.value)}}   />

            <div>
            <input  value={trees}  placeholder="Trees planted?"   onChange={(e)=>{setTrees(e.target.value)}} /> 
            <input value={individuals} placeholder="Individuals employed?"  onChange={(e)=>{setIndividuls(e.target.value)}} />

            </div>
           

        <div>
       

      
      
       

        </div>

        <div  className="create-location-button" >
      
         <button onClick={()=>{setPopup(true)}} >Edit Location</button>
        </div>

      
        <PopUp 
           id={params.id}
           town={town}
           county={county}
           description={description}
           successMessage={"Location Edited Successfully "}
           loadingMessage={"Editing Location..."}
           actionMessage={"Edit Location?"}
           errorMessage={"Error, something is wrong"}
           numberOftrees={trees}
           numberOfIndividuals={individuals}
           function={editLocation}
           file={file}
                
                 />  
    
    </div>
}




  export default EditLocation;


