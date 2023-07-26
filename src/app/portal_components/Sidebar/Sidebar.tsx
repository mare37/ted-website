import "./Sidebar.modules.css"
import Link from "next/link";
import { useGlobalContext } from "@/app/context/store";
import { useEffect } from "react";
import useWindowWide from "@/app/Hooks/windowsize";

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

    const {sidebar,setSidebar} = useGlobalContext();
    const width = useWindowWide();
  
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


        <div>
                
                {links.map((link)=>{

                    return  <p><Link    onClick={handleClick}  href={link.href}>{link.link}</Link>   </p>  

                })}


       



        </div>
         

    </div>
}


export default Sidebar