import "./Sidebar.modules.css"
import Link from "next/link";
import { useGlobalContext } from "@/app/context/store";
import { useEffect, useState } from "react";
import useWindowWide from "@/app/Hooks/windowsize";
import { usePathname } from "next/navigation";

const links = [
    {
        id:1,
        href: "/dashboard",
        link: "Dashboard"
    },
    {
        id:2,
        href: "/dashboard/journal",
        link: "Journal"
    },
    {
        id:3,
        href: "/dashboard/stories",
        link: "Stories"
    },
    {
        id:4,
        href: "/settings",
        link: "Settings"
    },
]





function Sidebar(){

    const pathname  = usePathname();

    const {sidebar,setSidebar} = useGlobalContext();
    const width = useWindowWide();
    const [dashboard, Setdashboard] = useState(pathname === "/dashboard"? true:false);
    const [journals, SetJournal] = useState(pathname === "/dashboard/journal"? true:false);
    const [stories, SetStories] = useState(pathname === "/dashboard/stories"? true:false);
    const [settings, SetSettings] = useState(pathname === "/settings"? true:false);
  const  [ourLocations, SetOurLocations] = useState(pathname === "/dashboard/locations"? true:false);


   
    const handleMouse = () =>{

       // Setdashboard(false)

    }
  

  
  
    const handleClick = () =>{

       // setSidebar((prev: boolean)=>{  return false})

       if(width > 1024){
            setSidebar((prev: boolean)=>{  return false})
        } else{
            setSidebar((prev: boolean)=>{ console.log(prev); return false})   
        }


    }
    

    return <div className={sidebar ? "sidebar": "sidebar remove-sidebar"}   >

         <img  onClick={()=>{setSidebar((prev: boolean)=>{ console.log(prev);
         return false})    }}   src="./cancel.png"   />


        <div onMouseEnter={handleMouse}   >
                
                {/*links.map((link)=>{

                    return  <p  className="sidebar-link"  ><Link    onClick={handleClick}  href={link.href}>{link.link}</Link>   </p>  

                })*/}


                <p  className={dashboard? "sidebar-link active": "sidebar-link"}  ><Link    
                            onClick={handleClick}  href={"/dashboard"}>Dashboard</Link>   </p>

                <p  className={journals? "sidebar-link active": "sidebar-link"} 
                       ><Link    onClick={handleClick}  href={"/dashboard/journal"}>Journal</Link>   </p>

                <p  className={stories? "sidebar-link active": "sidebar-link"} 
                       ><Link    onClick={handleClick}  href={"/dashboard/stories"}>Stories</Link>   </p>

                <p  className={ourLocations? "sidebar-link active": "sidebar-link"} 
                       ><Link    onClick={handleClick}  href={"/dashboard/locations"}>Our Locations</Link>   </p>

                <p  className={settings? "sidebar-link active": "sidebar-link"} 
                       ><Link    onClick={handleClick}  href={"/settings"}>Settings</Link>   </p>

       



        </div>
         

    </div>
}


export default Sidebar