import "./popup.modules.css"
import { useGlobalContext } from "@/app/context/store";
import { useState } from "react";



function PopUp (){


    const {popup,setPopup} = useGlobalContext();

    const [createStory,setCreateStory] = useState(false);




    return <div  className={popup? "popup" : "popup remove"}  >

         { createStory ?  <div  className="popup-create-story"   >

                            <p>Journal Created Successfully</p>

                            <div>
                              <button>ok</button>


                            </div>

                            </div>
                            
                            
                            :

                            <div  className="popup-create-story"   >

                            <p>Create Journal</p>

                            <div>
                            <button onClick={()=>{setCreateStory(true)}}    >Yes</button>

                            <button onClick={()=>{setPopup(false)}}   >No</button>


                            </div>



                            </div>
         }




       


    </div>
}


export  default PopUp