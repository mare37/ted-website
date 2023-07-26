'use client'

import Link from "next/link";
import "./page.modules.css"

import Sidebar from "@/app/portal_components/Sidebar/Sidebar";
import JournalsTableItem from "../components/JournalsTableItem/JournalsTableItem";
import { useGlobalContext } from "@/app/context/store";

function Journal (){

    const {sidebar, setSidebar} = useGlobalContext();

    return <div  className="dashboard"  >

        <Sidebar/>

        <div         className={sidebar ? "mainbar after": "mainbar"}  >
        <div className="mainbar-nav"  >  <img className="mainbar-nav-humburger" onClick={()=>{setSidebar((prev: boolean)=>{ console.log(prev);
         return !prev})    }}   src="../humburger-icon.png"   />    <div>   <img     src="../men-digging.jpg"   />  <p>Welcome Ted</p>   </div>            </div>


         <div className="mainbar-body"  >
            <h2>Journals</h2>

            <button className="create-new-journal" >   <Link href={"/dashboard/journal/createjournal"}> Create New Journal</Link>    </button>


            <div className="table-container"   >
                <div  className="table-heading" >  
                    <span className="table-heading-no">No.</span>
                    <span className="table-heading-title" >Title</span>
                    <span className="table-heading-buttons">Delete or Edit</span>
                </div>

                <JournalsTableItem/>
                <JournalsTableItem/>
                <JournalsTableItem/>
              
                <div className="table-item"  >
         <span className="table-item-no">1</span>
                    <span className="table-item-title" >Lorem ipsum dolor</span>
                    <span className="table-item-buttons"> <button className="tableItem-edit"  >Edit</button> <button className="tableItem-delete">Delete</button>  </span>
    </div>

            


            </div>

          

           

          

          

         

         </div>
    
    
    
    </div>




    </div>
}


export default Journal;