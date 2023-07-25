'use client'

import "./page.modules.css"

import Sidebar from "@/app/portal_components/Sidebar/Sidebar";
import StoriesTableItem from "../components/StoriesTableItem/StoriesTableItem";
import { useGlobalContext } from "@/app/context/store";

function Stories (){


    const {sidebar, setSidebar} = useGlobalContext();

    return <div className="dashboard"   >

        <Sidebar/>

        <div         className={sidebar ? "mainbar after": "mainbar"}  >
        <div className="mainbar-nav"  >  <img className="mainbar-nav-humburger" onClick={()=>{setSidebar((prev: boolean)=>{ console.log(prev);
         return !prev})    }}   src="../humburger-icon.png"   />    <div>   <img     src="../men-digging.jpg"   />  <p>Welcome Ted</p>   </div>            </div>


         <div className="mainbar-body"  >
            <h2>Stories</h2>

            <button className="create-new-story"  >Create New Story</button>


            <div className="table-container"   >
                <div  className="table-heading" >  
                    <span className="table-heading-title">Title</span>
                    <span className="table-heading-tag" >Tag</span>
                    <span className="table-heading-buttons">Delete or Edit</span>
                </div>

                <StoriesTableItem/>
                <StoriesTableItem/>
                <StoriesTableItem/>

               
              
               

            


            </div>

          

           

          

          

         

         </div>
    
    
    
    </div>


    </div>
}


export default Stories;