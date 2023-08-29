'use client'
import Sidebar from "@/app/portal_components/Sidebar/Sidebar"
import { useGlobalContext } from "@/app/context/store"
import Link from "next/link"
import "./page.modules.css"






function Locations (){


    const {sidebar, setSidebar} = useGlobalContext()



    return <div>

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
                
                 

               
              
             

            


            </div>

          

           

          

          

         

         </div>      





        </div>


    </div>
}



export default Locations