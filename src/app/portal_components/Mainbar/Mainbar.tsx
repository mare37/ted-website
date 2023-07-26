

import { useState , useEffect} from "react"
import { useGlobalContext } from "@/app/context/store";

import "./Mainbar.modules.css"

function Mainbar(){
   // const [width, setWidth] = useState(0)
   
   
    const {sidebar, setSidebar} = useGlobalContext();



    return <div         className={sidebar === true ? "mainbar after": "mainbar"}   >
        <div className="mainbar-nav"  >  <img className="mainbar-nav-humburger" onClick={()=>{setSidebar((prev: boolean)=>{ console.log(prev);
         return true})    }}   src="./humburger-icon.png"   />    <div>   <img     src="men-digging.jpg"   />  <p>Welcome Ted</p>   </div>            </div>


         <div className="mainbar-body"  >
            <h2>Dashboard</h2>

            <div className="mainbar-item-container"  >
            <div  className="mainbar-item"  >

                <section>
                    <h3>Journals</h3>
                    <p>15</p>
                </section>

                <img   src="./humburger-icon.png"   /> 

            </div>

            <div  className="mainbar-item"  >

                <section>
                    <h3>Stories</h3>
                    <p>15</p>
                </section>

                <img   src="./humburger-icon.png"   /> 
            </div>

            <div  className="mainbar-item"  >

            <section>
                <h3>Visitors</h3>
                <p>100</p>
            </section>

            <img   src="./humburger-icon.png"   /> 
            </div>


            </div>

            <h3  className="mainbar-latestjournals-heading"  >Latest Journals</h3>


            <div className="latest-journals"  >

                <div className="mainbar-journalItem">
                    <section>
                        <img   src="./journal-pic2.jpg" />
                    </section>

                    <section  className="mainbar-journalItem-text" >
                        <h3>Nostalgia Laravel 6</h3>
                        <p>Read more</p>
                        
                    </section>


                </div>



                <div className="mainbar-journalItem">
                    <section>
                        <img   src="./journal-pic2.jpg" />
                    </section>

                    <section  className="mainbar-journalItem-text" >
                        <h3>Weapon Yang Bikin Crot</h3>
                        <p>Read more</p>
                        
                    </section>


                </div>







            </div>

            <h3  className="mainbar-latestjournals-heading"  >Latest Stories</h3>

            <div className="latest-journals"  >

                <div className="mainbar-journalItem">
                    <section>
                        <img   src="./new-and-updates.jpg" />
                    </section>

                    <section  className="mainbar-journalItem-text" >
                        <h3>Nostalgia Laravel 6</h3>
                        <p>Read more</p>
                        
                    </section>


                </div>



                <div className="mainbar-journalItem">
                    <section>
                        <img   src="./new-and-updates.jpg" />
                    </section>

                    <section  className="mainbar-journalItem-text" >
                        <h3>Nostalgia Laravel 6</h3>
                        <p>Read more</p>
                        
                    </section>


                </div>







            </div>


          

         

         </div>
    
    
    
    </div>
}


export default Mainbar;